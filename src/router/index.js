import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/login',
  name: 'login',
  // @符号是src的别名，这是VueCLI中特殊提供的
  component: () => import('@/views/login')
}]

const router = new VueRouter({
  routes
})

export default router
