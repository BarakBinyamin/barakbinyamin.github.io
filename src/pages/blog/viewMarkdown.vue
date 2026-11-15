<template>
  <div class="post-metadata">
    <div lang="de" class="post-title">{{ meta?.title }}</div>
    <div lang="de" class="post-subtitle">{{ meta?.subtitle }}</div>
    <div class="post-info"> 
      <img class="post-author-avatar" src="/site-images/avatar2.png"/>
      <div class="post-sub-info">
        <div class="post-author-name">Barak Binyamin</div> ·
        <div class="post-date">{{ date }}</div> ·
        <div class="post-length">5 min read</div>
      </div>
    </div>
    <div class="post-bar">
      <!-- share -->
      <!-- comment -->
      <!-- like limited once per machine per post per day-->
    </div>
  </div>
  <div class="markdown-container">
    <div id="markdown" v-html='markdownHTML'></div>
  </div>
</template>

<script>
import Prism    from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import showdown from "showdown"
import moment   from 'moment'


export default{
  props: ['markdownContent', 'meta'],
  data(){
    return {
      markdownHTML : "",
      date         : ""
    }
  },
  watch:{
    markdownContent : async function(){
      this.load()
      if (this.meta?.date){
        // node> date.now()
        this.date = moment(this.meta?.date).format("MMM Do, yyyy")
      }
    } 
  },
  methods: {
    async load(){
      const markdown    = this.markdownContent//await (await fetch(this.markdownurl)).text()
      // Fix checkbox inline css using regex extension https://github.com/showdownjs/showdown/issues/593 
      var taskListEnablerExtension = function() {
        return [{
            type: 'output',
            regex: /<input type="checkbox"?/g,
            replace: '<input type="checkbox" style="margin: 0px 0.35em 0.25em; vertical-align: middle;"'
        }]
      }
      const options     = {tasklists:true, tablesHeaderId: true, openLinksInNewWindow: true, extensions: []}
      const converter   = await (new showdown.Converter(options))
      await converter.setFlavor('github')

      this.markdownHTML = await converter.makeHtml(markdown)

      // Wait for vue to process into the v-html
      await new Promise(resolve=>setTimeout(resolve,50))
      // Highlight any code
      await Prism.highlightAll()

      // Add Copy Code Buttons
      const doc = document.createElement('div')
      //// Add a template check to the html display:none to copy from
      const checkedTemplate = `<svg style="display:none" id="checkedTemplate" class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>`
      doc.innerHTML = checkedTemplate;
      document.body.insertBefore(doc, document.body.childNodes[0])
      //// When clipboard is clicked, copy the parents divs inner text, then replace the clipboard svg with a copy of the check
      const clipboard = `<div class="copy"
      onclick="navigator.clipboard.writeText(this.parentNode.innerText);this.childNodes[0].replaceWith(document.getElementById('checkedTemplate').cloneNode(true));this.childNodes[0].style.display='';"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Copy"> <path id="Vector" d="M9 9V6.2002C9 5.08009 9 4.51962 9.21799 4.0918C9.40973 3.71547 9.71547 3.40973 10.0918 3.21799C10.5196 3 11.0801 3 12.2002 3H17.8002C18.9203 3 19.4801 3 19.9079 3.21799C20.2842 3.40973 20.5905 3.71547 20.7822 4.0918C21.0002 4.51962 21.0002 5.07967 21.0002 6.19978V11.7998C21.0002 12.9199 21.0002 13.48 20.7822 13.9078C20.5905 14.2841 20.2839 14.5905 19.9076 14.7822C19.4802 15 18.921 15 17.8031 15H15M9 9H6.2002C5.08009 9 4.51962 9 4.0918 9.21799C3.71547 9.40973 3.40973 9.71547 3.21799 10.0918C3 10.5196 3 11.0801 3 12.2002V17.8002C3 18.9203 3 19.4801 3.21799 19.9079C3.40973 20.2842 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H11.8036C12.9215 21 13.4805 21 13.9079 20.7822C14.2842 20.5905 14.5905 20.2839 14.7822 19.9076C15 19.4802 15 18.921 15 17.8031V15M9 9H11.8002C12.9203 9 13.4801 9 13.9079 9.21799C14.2842 9.40973 14.5905 9.71547 14.7822 10.0918C15 10.5192 15 11.079 15 12.1969L15 15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
      </div>`
      //// Add clipboard to every <code> div
      const markdownElement = document.getElementById('markdown')
      let codeTags = markdownElement.querySelectorAll("code")
      for (let i=0; i<codeTags.length; i++){ 
        let parent    = codeTags[i].parentNode
        const div     = document.createElement('div')
        div.innerHTML = clipboard.trim()
        parent.insertBefore(div.firstChild,codeTags[i])
      }
    }
  }
}
</script>


<style>
.post-metadata{
  margin: 20px;
  width: 100%;
  overflow: hidden;
  width: 100%;
  display: grid;
  justify-items : center;
}


.markdown-container{
  display  : grid;
  position: relative;
  justify-items: center;
  width: 100%;
}

#markdown{
  display: grid;
  font-size: 1.1em;
  width: 80%;
  max-width: 680px;
  overflow-x : hidden;
  justify-self: center;
  font-family: source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif;
  font-weight: 400;
  color : #242424;
  line-height: 32px;
}

#markdown{
  padding: 5px !important;
  overflow-wrap: break-word;
}

#markdown h1,#markdown h2, #markdown h3, #markdown h4{
  margin-top: .5em;
  margin-bottom: .5em;
}

#markdown p{
  margin-top: .5em;
  margin-bottom: .5em;
}

/* Fix sizes */
.post-title {
  display: block;
  font-size: 28px;
  font-weight : 600;
  color       : #242525;
  width: 100%;
  max-width: 680px;
  margin: 4px;
  /* word-break: break-word; */
  overflow-x: hidden;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto; 
  /* word-wrap: break-word; */
  padding-right: 56px;
}
.post-subtitle{
  display: block;
  font-size: 22px;
  font-weight : 400;
  color: #6B6A6A;
  width: 100%;
  max-width: 680px;
  align-self: left;
  margin: 4px;
  /* word-break: break-word; */
  overflow-x: hidden;
  padding-right: 44px;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto; 
  /* word-wrap: break-word; */

}

.post-info{
  display: grid;
  grid-template-columns: 50px auto;
  justify-content: left;
  width: 100%;
  max-width: 680px;
  margin-top: 10px;
}
.post-sub-info{
  display: grid;
  width: 100%;
  grid-template-columns: max-content max-content max-content max-content;
  justify-content: left;
  align-items: center;
  align-content: center;
  padding-left: 10px;
  margin-top: -5px;
  grid-column-gap: 8px;
}
.post-author-avatar{
  background: #333;
  width: 100%;
  height: 50px;
  border-radius: 100%;
  background-size: auto;
}
.post-author-name{
  font-size: 15px;
  color: #242525;
  font-weight: 300;
}
.post-date{
  font-size: 13px;
  color: #6B6A6A;
}
.post-length{
  color    : #6B6A6A;
  font-size: 13px;
}
#markdown h1{
  font-size: 28px;
}
#markdown h2{
  font-size: 25px;
}
#markdown h3{
  font-size: 23px;
}
#markdown h4{
  font-size: 21;
}
#markdown p{
  font-size: 18px;
}

#markdown img{
  margin-top   : 10px;
  margin-bottom: 10px;
  object-fit   : contain;
  width        : 100%;
}

pre{
  position: relative;
  border-radius: 5px;
  overflow-x: scroll;
  margin: 20px 20px 20px 20px !important;
  padding: 1em !important;
  font-size: .5em !important;
  width: 100%;
  max-width: 500px;
  justify-self: center;
}

@media (any-pointer: coarse)  {
  pre{
    position: relative;
    border-radius: 5px;
    overflow-x: scroll;
    margin: 10px 10px 10px 10px !important;
    padding: 1em !important;
    font-size: .5em !important;
  }
}

pre .language-html{
  width : 100%;
  margin:0;
  position: relative;
}
code{
  height: min-content !important;
  padding: 0px !important;
  margin: 0px !important;
  font-size: 10px;
}
/* copy div is next to code div */
.copy{
  position: sticky;
  top: 0px;
  left: calc(100% - 35px);
  display: block;
  width: 35px;
  height: 35px;
  background-color: rgba(60,60,60);
  border-radius: 5px;
  opacity: .8;
  border: 1px rgba(60,60,60,0) solid;
}

.copy:hover{
  display: block;
  opacity: .6;
  border: 1px white solid;
}

.added{
  background: green;
  float:right;
}

.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #7ac142;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark {
  z-index:5;
  position:absolute;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #fff;
  stroke-miterlimit: 10;
  box-shadow: inset 0px 0px 0px #7ac142;
  animation: fill .2s ease-in-out .2s forwards, scale .15s ease-in-out .45s both;
  opacity: .8;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.15s cubic-bezier(0.65, 0, 0.45, 1) 0.4s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}
@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #7ac142;
  }
}

li,ul,li::marker{
  margin: 0px !important;
  margin: 0px !important;
  padding: 0px !important;
  margin: 0px !important;
  list-style-position: outside;
}

li{
  margin-left: 25px !important;
}

</style>