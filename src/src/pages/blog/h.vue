<template>
   <div class="blog">
      <div class="article">
         <router-link to="/" class="back"> ← To Project Explorer (Backspace)</router-link>
         <div class="title"  >{{  blog?.title  }}</div>
         <div class="description" >{{blog?.description   }}</div>
         <!-- <div class="tags" >
            {{blog?.description}}
         </div> -->
         <div class="created">Created {{  blog?.created   }}</div>
         <div class="updated">Last Updated {{  blog?.updated   }}</div>
         <br>
         <markdown :markdownContent="blog.content"/>
      </div>
   </div>
   <div class="space"></div>
 </template>
 
 <script>
import markdown from './viewMarkdown.vue'
 
 export default{
    components: {markdown},
    props: ['id'],
    data(){
       return{
          eventListener : "",
          blog: "",
       }
    },
    beforeMount(){
      this.addListener()
      // Filter database for matching blog id
      this.blog = this.$fuse.value.search(
         {$and:[{id : this.id}]}
      ).filter(item => item.item.id===this.id)?.[0]?.item
    },
    methods: {
      handleEvent(event){
         if (event.key==="Backspace"){
            window.removeEventListener("keyup", this.handleEvent)
            this.$router.push("/")
         }
      },
      addListener(){
         window.addEventListener("keyup", this.handleEvent)
      }
    }
 }
 </script>
 
 <style scoped>
 .blog{
   width: 100%;
   display: grid;
   justify-content: center;
   
 }
 .back{
   color: var(--main-font-color);
   text-decoration: underline;
 }
 .back:hover{
   opacity: .8;
 }

 .article{
   -webkit-user-select: text;
   -ms-user-select: text;
   user-select: text; 
   overflow: hidden;
   padding: 10px;
   overflow-x: hidden;
   max-width: 900px;
   align-self: center;
   padding-right: auto;
   padding-left: auto;
 }
 .title{
    font-size: 3em;
    padding: 0px;
    margin: 0px;
 }
 .description{
   font-size: 1.5em;
   padding: 3px;
 }

 .created, .updated{
   color: var(--second-font-color);
   font-size: .8em;
   display: inline-block;
   padding: 5px;
 }
 .space{
   height: 100px;
 }
 </style>