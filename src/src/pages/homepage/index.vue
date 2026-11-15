<template>
  <div>
    <div class="welcome-container-container">
      <div class="welcome-container">
        <div class="main-avatar-image-container">
          <img class="main-avatar-image" :src="image.path" v-show="image.loaded" v-loadedifcomplete="image"
          @load="image.loaded = true" >
        </div>
        <div class="socials" >
          <!-- faceebook -->
          <a class="link icon" target="_blank" href="https://www.facebook.com/barak.binyamin.7/">
            <svg fill="#848484"                     height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310" xml:space="preserve" stroke="#848484"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_834_"> <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996 V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545 C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703 c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"></path> </g> </g></svg>
          </a>
            <!-- instagram -->
          <!-- <a class="link icon" target="_blank" href="https://www.instagram.com/barak_binyamin?igsh=Y2VocDh4bGJxbDk0&utm_source=qr">
            <svg viewBox="0 0 24 24"                height="34px" width="34px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#848484"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#848484"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#848484"></path> </g></svg>
          </a> -->
          <!-- spotify  -->
                <a class="link icon" target="_blank" href="https://open.spotify.com/user/hc0hfyr2jp6g5g4lflj5s7hty?si=4e84a79cc945406a">
            <svg viewBox="0 0 24 24"                 height="36px" width="36px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1.99701 11.9405C1.99701 17.4167 6.52082 21.9405 11.997 21.9405C17.4732 21.9405 21.997 17.4167 21.997 11.9405C21.997 6.46429 17.4732 2 11.997 2C6.52082 2 1.99701 6.46429 1.99701 11.9405ZM15.6875 16.5833C13.3661 15.1548 10.3899 14.7976 6.93749 15.5714C6.10415 15.6905 5.9851 14.5 6.69939 14.381C10.5089 13.4881 13.7232 13.9048 16.3422 15.5119C16.997 15.9286 16.3422 16.9405 15.6875 16.5833ZM16.6994 13.9048C14.0208 12.2381 9.91368 11.7619 6.75891 12.7143C5.74701 13.0119 5.38987 11.4643 6.34225 11.2262C9.9732 10.1548 14.4375 10.6905 17.5327 12.5952C18.3661 13.131 17.5327 14.4405 16.6994 13.9048ZM6.28272 9.67857C5.27082 10.0357 4.61606 8.30952 5.74701 7.89286C9.25891 6.82143 15.2113 7 18.9018 9.20238C19.9137 9.73809 18.9613 11.4048 17.8899 10.8095C14.6756 8.90476 9.31844 8.72619 6.28272 9.67857Z" stroke="#848484" stroke-linejoin="round"></path> </g></svg>
          </a>
            <!-- github -->
            <a class="link icon" target="_blank" href="https://github.com/BarakBinyamin">
                <svg viewBox="0 0 20 20" version="1.1"  height="30px" width="50px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#848484"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>          
            </a>
          <!-- linkedin  -->
          <a class="link icon" target="_blank" href="https://www.linkedin.com/in/barak-binyamin/">
            <svg viewBox="0 0 24 24"                 height="30px" width="30px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="#848484"></path> <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="#848484"></path> <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill="#848484"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#848484"></path> </g></svg>
          </a>
          <!-- email -->
          <!-- <a class="link icon" href="mailto:barak.binyamin585@gmail.com">
            <svg viewBox="0 0 1024 1024"             height="36px" width="36px" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#848484"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 599.6L107.9 311.1v19.7L512 619.3l404.1-288.6V311L512 599.6z" fill="#848484"></path><path d="M63.9 187v650h896.2V187H63.9z m852.2 598.5L672.2 611.3l-13.8 9.8L899.1 793H125.5l240.6-171.8-13.8-9.8-244.4 174.5V231h808.2v554.5z" fill="#848484"></path><path d="M512.9 536.7m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#848484"></path></g></svg>
          </a> -->
        </div>

          <!-- <div class="welcome">Hey there 👋, I'm Barak, just another dude in Boston. When I'm not at work, you can usually find me rock climbing, dancing west coast swing, or stiching together side projects in a coffee shop.
          Thanks for checking out my website, I enjoy meeting new people so don't hesitate to <a class="link" href="/contact">reach out</a>!  
          <br><br><a class="subscribe-button" @click="openModal">Subscribe</a> to my <a class="link" href="/blog">blog</a> posts for high quality banter, check out <a class="link" href="/table">the table</a> for misc ideas, and don't forget to stop by the store for merch, tech stuff, and custom spice packs
        </div> -->
        <div class="welcome">Hey there 👋, I'm Barak. When I'm not at work, you can usually find me hanging with friends, rock climbing, dancing west coast swing, or stiching together side projects in a coffee shop.
          Thanks for checking out my website! I enjoy meeting new people and catching up with old friends, so <a class="link" target="_blank" href="https://www.linkedin.com/in/barak-binyamin/">hit me up anytime</a>!  
          <!-- <br><br>Follow my <a class="link" href="/blog">blog</a> posts for high quality banter, check out <a class="link" href="/table">the table</a> for misc table talk ideas, and don't forget to stop by the <a class="link" href="/store">store</a> -->
          <br><br>Send me a message on <a class="link" target="_blank" href="https://www.linkedin.com/in/barak-binyamin/">linkedIn</a> if you're interested in getting your own website setup.
          <!-- <br><br>Here are some links to rojects I'm working on, feel free to reach out if you want to contribute! -->
          <br><br>Are you a programmer? Try and see if you can break out of the <a class="link" target="_blank" href="https://barakbinyamin.github.io/v86/">machine</a>

        </div>
      </div>
    </div>
    <!-- <div id="title" class="title">
      Updates
    </div>
    <div id="community" class="title">
      Community
    </div>
    <div class="horizontal-center">
      <ul v-for="community in communities" class="community-container" >
        <div class="community-title">{{community.community}}</div>
        <li v-for="link in community.links" class="community-links">
          <a class="community-link" :href="link.link" blank="">{{link.name}}</a> - {{ link.description }}
        </li>
      </ul> -->
      <!-- <div id="map" class="subtitle">
        Map
      </div> 
    <SubscribeModal ref="subscribeModal" />
    </div>
    -->
  </div>
    <!-- <markdown :markdownContent="post" :meta="meta"/> -->

    <!-- Some of my favorite ads -->
    <!-- Latest Updates -->
    <!-- Fun ted talk  -->
    <!-- Map of awesome stuff -->
    <!-- <iframe src="https://www.google.com/maps/d/embed?mid=1UeB3suwmTbnygJ60kzsYi1EFSGrhg0c&ehbc=2E312F" width="100%" height="480"></iframe> -->
     
</template>

<script>
import SubscribeModal from '../../components/subscribe-modal.vue';
import API from '../../assets/blogapi.js'

export default{
  components : { SubscribeModal },
  methods    : {
    openModal(){
      this.$refs.subscribeModal.openModal()
    },
    directives: {
      loadedifcomplete: function(el, binding) {
        if (el.complete) {
          binding.value.loaded = true;
        }
      }
    }
  },
  async created(){
    console.log('')
    await new Promise(res=>setTimeout(res,300))
    this.image={
        loaded : false,
        path   : "/site-images/avatar4.png"
    }
    // const res  = await fetch("/posts/a1/proactive-nastalgia.md")
    // const text = await res.text()
    // const yamlMatch = text.match(/^---\n([\s\S]*?)\n---\n/)
    // const yamlData  = yamlMatch[1]
    // const meta      = jsyaml.load(yamlData)
    // const content   = text.replace(/^---\n([\s\S]*?)\n---\n/,"")
    // this.meta = meta
    // this.post = content
    // let results = await API.searchBlog(" ")
    // console.log('here')
    // console.log(results)
    // this.meta = results['hits'][0]
    // this.post = results['hits'][0].content
  },
  data(){
    return {
      image: false,
      meta: "",
      post: "",
      communities : [ 
        {
          community : "Event Finders",
          links : [ 
            {
              name        : "TheBostonCalendar.com",
              link        : "https://www.thebostoncalendar.com/?tags%5B%5D=FREE",
              description : "Free events in boston"
            },
            {
              name        : "XgenBoston.com",
              link        : "https://www.xgenboston.com/",
              description : "Many of the west coast swing events around the boston area"
            },
          ]
        },
        // {
        //   community : "Upcoming events",
        //   links : [ 
        //     {
        //       name        : "TheBostonCalendar.com",
        //       link        : "https://www.thebostoncalendar.com/?tags%5B%5D=FREE",
        //       description : "Find cool events in boston that are free"
        //     },
        //     {
        //       name        : "XgenBoston.com",
        //       link        : "https://www.xgenboston.com/",
        //       description : "Find many of the west coast swing events around the boston area"
        //     },
        //   ]
        // }
      ]
    }
  }
}
</script>

<style scoped>
@keyframes example {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes blur {
  0% {
    filter: grayscale(80%) blur(.2rem);
  }
  25% {
    filter: blur(.1rem) sepia(40%) grayscale(30%);
  }
  50% {
    filter: blur(0) grayscale(30%) sepia(10%);
  }
  100% {
    filter: grayscale(0%);
  }
}
.main-avatar-image-container{
    display         : block;
    width           : 260px;
    height           :260px;
    border-radius   : 25px;
    justify-self    : center;
    align-self      : center;
    overflow        : hidden;
    position: relative;
    /* border: 3px solid white;  */
    animation-delay: 4s;
    animation: example 1s ease;
    animation: blur 1s steps(5, end);
    /* background-color: blue; */
  }
  .main-avatar-image{
    display         : block;
    width           : 260px;
    height           : 260px;
    border-radius   : 25px;
    justify-self    : center;
    align-self      : center;
    padding         : 10px;
    overflow        : hidden;
    margin-bottom   : 12px;
    position: relative;
    /* border: 3px solid white;  */
    animation-delay: 4s;
    animation: example 1s ease;
    animation: blur 1s steps(5, end);
    /* background-color: blue; */
  }
  .welcome-container-container{
    display: grid;
    width: 100%;
    justify-content: center;
  }
  .welcome-container{
    height : max-content;
    display: grid;
    padding: 10px;
    grid-template: [column-name1] 50px [column-name2] 200px [column-name3] calc(100% - 250px);
    align-content: center;
    max-width: 800px;
  }

  .welcome{
    width: 100%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    text-align: left;
    /* background-color: #f3f3f3; */
    border-radius: 5px;
    align-content: center;
    color: #333333;
    letter-spacing: 0em;
    font-family: 'Inter', sans-serif;
  }
  
  .socials{
    margin:0;
    width : 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, 30px);
    grid-gap: 20px;
    align-items: center;
    align-content: center;
    justify-content: center;
    justify-items: center;
    padding: 11px 0px 1px 0px;
    /* background-color: blue; */
  }

  .title{
    margin : 30px;
    border-bottom: 1px solid lightgrey;
  }
  .subtitle{
    margin : 10px;
  }

  
  /* .community-block{
    width: 80%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    text-align: left;
    background-color: #f3f3f3;
    border-radius: 5px;
    align-content: center;
    color: #333333;
    letter-spacing: 0em;
    font-family: 'Inter', sans-serif;
  } */


  .community-container{
    width : calc(100% - 30px - 30px);
  }
  .community-title{
    font-size  : 19px;
    padding    : 0px 0px 10px 0px;
    /* padding-left:-15px; */
  }
  .community-links{
    font-size : 16px;
  }
  .community-link{
    color : purple;
  }
.subscribe-button {
  border: none;
  cursor: pointer;
  transition: color .8s;
  color: purple;
}

@media (max-width: 800px) {
  .welcome-container{
    height : max-content;
    display: grid;
    padding: 10px;
    grid-template: [line-name] 50px  [line-name2] 200px 
                   [line-name3] 100%;
    align-content: center;
    max-width: 800px;
  }
}


  </style>