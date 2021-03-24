
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

if (module.hot) {
  module.hot.accept(error => {
    if (error) {
      console.log("error")
    }
  })
}




const app = createApp(App);
app.use(ElementPlus)
app.use(router)
app.mount('#root')