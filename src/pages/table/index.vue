<template>
    <div class="page-title"> 💡 The Table 💡 </div>
    <div>
        <div class="title">Half baked ideas that would be fun to discuss</div>
        <div class="items">
            <div v-for="item in topics" class="item">{{item}}</div>
        </div>
        <!-- Location by Place -->
            <!-- Albany -->
        <!-- Items     -->
        <!-- Dev Tools -->
        <!-- Movies    -->
        <!-- Nice to haves -->
            <!-- Cheaper High quality food -->
            <!-- Cheaper high quality prepared food -->
            <!-- Knowledge and ease of participation in local politics -->
            <!-- Knowledge navigate different cities and do taxes, and manage wealth -->
    </div>

    <!-- delay all animations by 1s,  start fill animation which is 3s or less, delay each-dot by (temp-total-time/(completeIndex+1))*(index+1)-->

    <div class="page-title"> 💡 Some Projects 💡 </div>
    <div class="items">
        <div v-for="item in projects" class="project">
            <div class="project-name">{{ item.name }}</div>
            <div class="project-description">{{ item.description }}</div>
            <div class="project-progress" :style="{  '--percent':  ((1/(item.checkpoints.length+2))*100)+'%'}">
                <div v-for="(dot,index) in item.checkpoints.slice(0,item.completeIndex)" :key="index" class="project-checkpoint">
                    <div class="project-dot-complete" :style="{'--delay':  (((animationTime*1000*(((item.completeIndex)/item.checkpoints.length))) / (item.completeIndex)) * (index+1)) + 'ms'}"><div class="project-dot-check">✓</div></div>
                    <div class="project-dot-name">{{ dot }}</div>
                </div>
                <div v-for="(dot,index) in item.checkpoints.slice(item.completeIndex,item.checkpoints.length)" :key="index" class="project-checkpoint">
                    <div class="project-dot-incomplete"></div>
                    <div class="project-dot-name">{{ dot }}</div>
                </div>
            </div>
            <div class="project-progress-fill-container" :style="{'--total-time':(animationTime*(((item.completeIndex)/item.checkpoints.length)))+'s'}"><div class="project-progress-fill" :style="{ '--my-width': `${(item.completeIndex/(item.checkpoints.length+1))*100}%`}"></div></div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return {
            // delayItAll    : 1, //second
            animationTime : 3, //seconds
            topics : [
                "Socialized food", "Simple Engineering" , "Midnight Cafe", 
                "Proactive Nostalgia", "Socialized Insurance", "Local politics"   
            ],
            projects : [
                {
                    name          : "foo",
                    description   : "",
                    checkpoints   : ["brainstormed", "prototype", "mvp",'pi','ki','ka','koo'],
                    completeIndex : 5,
                    link          : "https://github.io/BarakBinyamin",
                    dateStarted   : ""   
                }
            ]
        }
    }
}
</script>
<style scoped>
.title{
    font-size: 16px;
    padding: 18px 10px 10px 10px;
    text-align: center;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: .3px;
}
.items{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    letter-spacing: .3px;
    padding: 10px;
    text-align: center;
}
.item{
    padding: 5px;
    text-transform: capitalize;
}


.project{

}
.project-name{
    padding: 10px;
}
.project-description{

}
.project-progress{
    background           : lightgrey;
    border-radius        : 5px 5px 5px 5px;
    height               : 5px;
    width                : 80%;
    position             : relative;   
    justify-self         : center;
    display              : flex;       /* Enable flexbox */
    justify-content      : space-between; /* Distribute space evenly */
    justify-items        : center; /* Align items vertically */
    padding              : 0% var(--percent) 0% var(--percent) ;
}
.project-progress-fill-container{
    display: grid;
    width: 80%;
    justify-self: center;
    height: 5px;
    margin: -5px;
}
.project-progress-fill{
    position: absolute;
    animation-duration   : var(--total-time);
    border-radius        : 5px 5px 5px 5px;
    height               : 5px;
    position             : relative;
    display              : grid;
    top: 0;
    left: 0;
    z-index              : 1;
    background-color     : rgba(0, 128, 0,.8);
    float                : left;
    animation-name       : progress-animation;
    animation-timing-function: linear;
    animation-fill-mode      : forwards;
}
.project-checkpoint{
    /* position             : absolute; */
    display              : grid;
    background           : transparent;
    align-items          : center;
    justify-items        : center;
    align-content        : center;
    justify-content      : center;
    height               : 25px;
    z-index              : 2;
    width                : 25px;
    margin-top           : -10px;
}
.project-dot-complete{
    position     : absolute;
    border-radius: 100%;
    background   : grey;
    height       : 20px;
    width        : 20px;
    display      : block;
    color        : transparent;
    animation-delay   : var(--delay);
    animation         : complete-dot 1s var(--delay),
                        check        1s var(--delay);
    animation-fill-mode: forwards;
}
.project-dot-check{
    position: absolute;
    top:  -1px;
    left: 2.5px;
    text-align: center;
    font-weight: 300;
    font-size  : 19px;
}
.project-dot-incomplete{
    position     : absolute;
    border-radius: 100%;
    background   : grey;
    height       : 20px;
    width        : 20px;
    display      : block;
}
.project-dot-name{
    display: block;
    margin-top: 40px;
}
.project-dot-complete:nth-child(n) {
  animation-delay: calc(n * 0.1s); /* Staggered delay */
}
@keyframes progress-animation{
  from {
    width: 0;
  }
  to {
    width: var(--my-width);
  }
}
@keyframes check{
    0%{
       color: transparent;
    }
    50%{
        color: transparent;
    }
    100%{
        color        : white;
        background   : rgb(0, 128, 255);
    }
}
@keyframes complete-dot{
    0%{
       transform: scale(1);
       color: transparent;
    }
    50%{
        transform: scale(3);
    }
    100%{
        transform: scale(1);
    }
}

</style>