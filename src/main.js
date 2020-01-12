import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 动态设置REM基准值（html标签字体大小）
import 'amfe-flexible'

// 注册Vant组件
import './utils/register-vant'

// 加载全局样式
// 注意：该样式要放到第三方样式之后,因为CSS有层叠行
import './styles/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
  // 将store挂载到根实例
}).$mount('#app')
