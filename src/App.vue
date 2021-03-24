<template>
  <div id="root">
    <div :class="['wrapper', isCollapse ? 'hideSidebar' : '']">
      <el-container>
        <el-aside :width="isCollapse ? '64px' : '210px'">
          <sidebar />
        </el-aside>
        <el-container>
          <el-header height="50px">
            <topbar @reload="handleReload" />
          </el-header>
          <el-main>
            <breadcrumb />
            <div v-if="isRouterAlive">
              <app-main />
            </div>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </div>

    <div class="container">
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
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
export default defineComponent({
  data() {
    return {
      isCollapse: true,
      isRouterAlive: true,
      data: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
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
