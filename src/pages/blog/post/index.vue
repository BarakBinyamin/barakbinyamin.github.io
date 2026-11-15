<template>
    <!-- Smalls -->
    <div class="blog-container">
        <router-link to="/blog" class="back">← Search</router-link>
        <div class="post-metadata">
          <div lang="de" class="post-title">{{ blog.title }}</div>
          <div lang="de" class="post-subtitle">{{ blog.subtitle }}</div>
          <div class="post-info"> 
            <img class="post-author-avatar" src="/site-images/avatar2.png"/>
            <div class="post-sub-info">
                <div class="post-author-name"> {{ blog.author }} </div>
                <div class="post-date">{{ format(blog.date)}}</div> ·
                <div class="post-length">{{ blog.length }}</div>
            </div>
          </div>
        </div>
        <!-- <div id="markdown" class="blog-content" v-html='render(blog.content)'></div> -->
        <!-- <VueShowdown id="markdown" class="blog-content" 
          :markdown="blog.content"
          flavor="github"
          :options="{ emoji: true, tasklists:true, tablesHeaderId: true, openLinksInNewWindow: true, extensions: [] }"
        /> -->
        <foo id="markdown" class="blog-content" 
          :markdown="blog.content"
          flavor="github"
          :options="{ emoji: true, tasklists:true, tablesHeaderId: true, openLinksInNewWindow: true}"/>
    </div>
  </template>
  
  <script>
  // import Prism    from "prismjs"
  // import "prismjs/themes/prism-tomorrow.css"
  import moment from 'moment'
  import API from '../../../assets/blogapi.js'
  // import showdown from "showdown"
  import foo from "../markdown.vue" 

  export default{
     components: {foo},
     props: ['id'],
     data(){
        return {
           blog : {}
        }
     },
     async created(){
        let result = await API.getBlog(this.id)
        this.blog = result
    },
     methods : {
      format(date){
        return moment(date).format("MMM Do, yyyy")
      },
      /*render(content){
  
        const markdown    = content //await (await fetch(this.markdownurl)).text()
        // Fix checkbox inline css using regex extension https://github.com/showdownjs/showdown/issues/593 
        var taskListEnablerExtension = function() {
          return [{
              type: 'output',
              regex: /<input type="checkbox"?/g,
              replace: '<input type="checkbox" style="margin: 0px 0.35em 0.25em; vertical-align: middle;"'
          }]
        }
        const options     = {tasklists:true, tablesHeaderId: true, openLinksInNewWindow: true, extensions: []}
        const converter   = (new showdown.Converter(options))
        converter.setFlavor('github')
  
        // Wait for vue to process into the v-html
        // await new Promise(resolve=>setTimeout(resolve,50))
        // Highlight any code
         Prism.highlightAll()
        
        // Add Copy Code Buttons
        const doc = document.createElement('div')
        // Add a template check to the html display:none to copy from
        const checkedTemplate = `<svg style="display:none" id="checkedTemplate" class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>`
        doc.innerHTML = checkedTemplate;
        document.body.insertBefore(doc, document.body.childNodes[0])
        // When clipboard is clicked, copy the parents divs inner text, then replace the clipboard svg with a copy of the check
        const clipboard = `<div class="copy"
         onclick="navigator.clipboard.writeText(this.parentNode.innerText);this.childNodes[0].replaceWith(document.getElementById('checkedTemplate').cloneNode(true));this.childNodes[0].style.display='';"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Copy"> <path id="Vector" d="M9 9V6.2002C9 5.08009 9 4.51962 9.21799 4.0918C9.40973 3.71547 9.71547 3.40973 10.0918 3.21799C10.5196 3 11.0801 3 12.2002 3H17.8002C18.9203 3 19.4801 3 19.9079 3.21799C20.2842 3.40973 20.5905 3.71547 20.7822 4.0918C21.0002 4.51962 21.0002 5.07967 21.0002 6.19978V11.7998C21.0002 12.9199 21.0002 13.48 20.7822 13.9078C20.5905 14.2841 20.2839 14.5905 19.9076 14.7822C19.4802 15 18.921 15 17.8031 15H15M9 9H6.2002C5.08009 9 4.51962 9 4.0918 9.21799C3.71547 9.40973 3.40973 9.71547 3.21799 10.0918C3 10.5196 3 11.0801 3 12.2002V17.8002C3 18.9203 3 19.4801 3.21799 19.9079C3.40973 20.2842 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H11.8036C12.9215 21 13.4805 21 13.9079 20.7822C14.2842 20.5905 14.5905 20.2839 14.7822 19.9076C15 19.4802 15 18.921 15 17.8031V15M9 9H11.8002C12.9203 9 13.4801 9 13.9079 9.21799C14.2842 9.40973 14.5905 9.71547 14.7822 10.0918C15 10.5192 15 11.079 15 12.1969L15 15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
         </div>`
        // Add clipboard to every <code> div
        const markdownElement = document.getElementById('markdown')
        let codeTags = markdownElement.querySelectorAll("code")
        for (let i=0; i<codeTags.length; i++){ 
          let parent    = codeTags[i].parentNode
          const div     = document.createElement('div')
          div.innerHTML = clipboard.trim()
          parent.insertBefore(div.firstChild,codeTags[i])
        }
  
        return converter.makeHtml(markdown)
      } */
     }
  }
  </script>
  
  <style scoped>
  .back{
    font-size: 13px;
    font-weight: 400;
    width:100%;
    padding: 30px 0px 15px 0px;
    
  }
  .preview-list{
    display: grid;
    width: 100%;
    justify-items: center;
    grid-gap: 15px;
    padding : 10px;
  }
  .preview-tile{
    max-height: 300px;
    max-width: 600px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, .2);
  }
  .preview-tile:hover{
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .4);
    transition: box-shadow .2s;
    opacity: 1;
  }
  .post-metadata{
    width: 100%;
    overflow: hidden;
    width: 100%;
    display: grid;
    justify-items : center;
  }
  .preview{
    max-height: 500px;
    overflow: hidden;
    border: 1px solid red;
    margin: 0;
  }
  .preview-cover{
    top: 0px;
    display: grid;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-position: 100px;;
    background: -webkit-linear-gradient(top, rgba(255,255,255,0), rgba(255,255,255,0), rgba(255,255,255, 1));
    background: -moz-linear-gradient(top, rgba(255,255,255,0), rgba(255,255,255,0), rgba(255,255,255, 1));
    /* background : linear-gradient(top, rgba(255,255,255,0), rgba(255,255,255,1 ) ); */
  }
  .continue-reading{
    position: absolute;
    text-align: center;
    font-weight: 400;
    font-size: 13px;
    height: min-content;
    background-color: white;
    bottom: 0px;
    align-self: bottom;
    justify-self: center;
    color: rgb(0, 0, 0, 0.4);
    font-family: 'Inter', sans-serif;
  
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
  
</style>