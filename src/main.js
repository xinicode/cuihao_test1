
import { createApp } from 'vue';
import App from './App.vue';


if (module.hot) {
  module.hot.accept(error => {
    if (error) {
      console.log("error")
    }
  })
}




const app = createApp(App);
app.mount('#root')