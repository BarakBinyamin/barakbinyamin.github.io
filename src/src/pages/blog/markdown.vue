<template>
    <VueShowdown v-bind="$props" id="markdown" class="blog-content" :extensions="['addStickers']"/>
  </template>
  
  <script>
    import { VueShowdown } from 'vue-showdown'
    import Prism from 'prismjs'
    import 'prismjs/themes/prism-tomorrow.css'
    import 'prismjs/components/prism-bash'
    import 'prismjs/components/prism-javascript'
    import 'prismjs/components/prism-json'
    import 'prismjs/components/prism-liquid'
    import 'prismjs/components/prism-markdown'
    import 'prismjs/components/prism-markup-templating'
    import 'prismjs/components/prism-php'
    import 'prismjs/components/prism-scss'
    import 'prismjs/components/prism-python'
    // import 'prismjs/plugins/toolbar/prism-toolbar.css'
    // import 'prismjs/plugins/toolbar/prism-toolbar'
    // import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js'

    export default {
      components: {
        VueShowdown
      },
  
      props: {
        ...VueShowdown.props,
        emoji: {
          default: false,
          type: Boolean
        },
        html: {
          default: false,
          type: Boolean
        }
      },
      mounted() {
        this.$nextTick(async () => {
          await new Promise((res)=>setTimeout(res,2000))
          Prism.highlightAll()
        })
      }
    }
  </script>