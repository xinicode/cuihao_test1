<template>
  <div>test vue
    <h1>
      h12333
    </h1>
    <img src="./assets/a.png" alt="1111" />
  </div>
  <button @click="setup">111t</button>
  <aaa />
</template>

<script>
import HelloWorld from './modules/view/a.vue';
export default {
  components:{
    aaa:HelloWorld
  },
  setup(){
    const testF = () =>{
      console.log("ddddd")
    }
    return {
      testF
    }
  }
};
</script>
<style lang="sass" scoped>
div {
  color:red;
  h1 {
    color:green;
  }
}
</style>
