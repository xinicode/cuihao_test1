<template>
  <div id="root">

    <div class="container">
      <div class="siderbar">
        <router-link to="/aaaa"> Home</router-link>
        <router-link to="/contact">Contact </router-link>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, ref } from 'vue'
import screenfull, { Screenfull } from 'screenfull'

export default defineComponent({
  setup() {
   
  },
  data() {
    return {
    
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    },
    handleReload() {
      console.log('a')
    }
  }
})
</script>
<style lang="css" scoped>
.container {
  display: flex;
}
.siderbar {
  width: 150px;
  border-right: 1px solid #000;
  height: auto;
  color: #333;
}
.content {
  flex: 1;
}
</style>
