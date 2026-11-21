import { createApp } from 'vue'
import App           from './App.vue'
import clickOutside  from "./directives/click-outside.js"
import router        from './pages'
import Lenis         from 'lenis'
import { VueShowdownPlugin, showdown} from 'vue-showdown'
import "./assets/blog.css"
import { extensions } from 'showdown'

const app = createApp(App)
app.use(router         )
app.use(clickOutside   )

// Initialize Lenis - Nice Scrolling
const lenis = new Lenis({scrollSpeed:99});
function raf(time) {lenis.raf(time);requestAnimationFrame(raf);}
requestAnimationFrame(raf);

var demo = function(converter) {
  return [
      {
          type    : 'output', 
          regex   : '<code class=(.*) \/>', 
          replace : '<code data-prismjs-copy class=$1>'
      }
  ];
}
showdown.extension('addStickers', () => {
  return [
  {
    type    : 'output', 
    regex   : /\<code (.*)\>/g, 
    replace : "<code $1>" //data-prismjs-copy='✂'
  }
]})
app.use(VueShowdownPlugin, {
    options: {
      emoji: false,
      flavor: 'github'
    }
})

// prevents install pwa prompt
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
})

app.mount('#app')
