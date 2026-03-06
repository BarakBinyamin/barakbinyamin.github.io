import { createMemoryHistory, createRouter } from 'vue-router'

import home from './pages/home.vue'
import notfound from './pages/notfound.vue'

const DEFAULT_TITLE = 'Barak Binyamin'

const routes = [
  { path: '/', component: home},
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: notfound,
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE
    })
})

export default router;
