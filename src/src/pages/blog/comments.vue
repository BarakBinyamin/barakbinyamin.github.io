<template>
    <div  class="comment-container">
        <div class="comment"  v-for="comment in comments">
            <div class="name">{{ comment?.name    }}</div>
            <div class="timestamp">{{ moment(comment?.timestamp).format('MMMM Do YYYY, h:mm a') }}</div>
            <div class="text">{{ comment?.text  }}</div>
        </div>
        <form class="add-comment">
            <input name="name" class="add-name" type="text" placeholder="name"/>
            <textarea name="text" class="add-text" placeholder="comments"></textarea>
            <button type="submit" class="button" @click="postComment">Post comment</button>
        </form> 
    </div> 
</template>

<script>
import moment from 'moment'
import { getDatabase, ref as firbaseRef, onValue, set } from "firebase/database"
import {v4 as uuidv4} from 'uuid'

export default{
    data(){
        return {
            comments: [],
            moment: moment,
            path: "",
            database: ""
        }
    },
    async beforeMount(){
        // get comments & sort them by datetime
        this.path      = window.location.pathname.split('/').slice(-1)[0].replace(/[.]/,'-')
        const db = getDatabase()
        const starCountRef = firbaseRef(db, 'posts/' + this.path )
        onValue(starCountRef, (snapshot) => {
            const temp    = Object.values(snapshot.val())
            this.comments = temp.sort((a,b)=>
                this.moment(a.timestamp).unix() - this.moment(b.timestamp).unix()
            )
        })

    },
    methods: {
        async postComment(event) {
            event.preventDefault()
            const name = event.target.parentElement.name.value
            const text = event.target.parentElement.text.value
            event.target.parentElement.text.value = ""
            event.target.parentElement.name.value = ""
            const database = this.$DATABASE.value
            const path     = window.location.pathname.split('/').slice(-1)[0].replace(/[.]/,'-')
            const uuid = uuidv4()
            const db = getDatabase();
            set(firbaseRef(db, `posts/${path}/${uuid}`), {
                "name" : name,
                "text" : text,
                "timestamp": Date()
            })
        }
    }
}

</script>

<style scoped>
button{
    border     : none;
    display    : grid;
    height     : 25px;
    background : var(--second-bg-color);
    padding    : 5px;
    width      : 150px;
    overflow   : hidden;
    align-self : center;
    align-content: center;
    text-align     : center;
    justify-content: center;
    align-items    : center;
    border-radius  : 5px;
    cursor         : pointer;
    color          : inherit;
    font-family    : inherit;
    font-size      : 16px;

}
.button:hover{
    opacity: .8;
}
.comment-container{
    display   : grid;
    overflow-x: hidden;
    grid-gap  : 10px;
}
.name{
    color     : var(--third-font-color);
    opacity   : .5;
    font-size: 16px;
}
.timestamp{
    font-size: 12px;
    color: var(--second-font-color);
}
.comment{
    border  : 1px solid var(--main-border-color);
    padding : 8px;
    overflow: hidden;
}
.text{
    color: var(--third-font-color);
}

.add-comment{
    display: grid;
    border  : 1px solid var(--main-border-color);
    padding : 5px;
    overflow-x: hidden;
    grid-gap: 10px;
    width: 75%;
    font-family: inherit;
}
.add-name, .add-text{
    background-color: var(--second-bg-color);
    color: var(--main-font-color);
    padding  : 8px;
    border   : none;
    font-family: inherit;
    resize     : vertical;
    border-color: none;
    font-size: 16px;
}
.add-name{
    border-color: none;
    padding: 5px;
    height: 30px;
}

.add-name:focus, .add-text:focus{
    text-decoration: none;
    outline: none;
}

.add-text{
    border: none;
    height: 110px; 
}
</style>