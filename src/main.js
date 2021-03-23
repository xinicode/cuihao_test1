
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'

if (module.hot) {
  module.hot.accept(error => {
    if (error) {
      console.log("error")
    }
  })
}




const app = createApp(App);
app.use(router)
app.mount('#root')