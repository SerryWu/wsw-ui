<template>
  <div id="app">
    <router-view></router-view>



  </div>
</template>

<script>
import "../packages/Tabs/src/index.scss"
export default {
  name: 'App',
  data() { 
    return {
      active:1
    }
  },
  methods:{
    changeActive(index) { 
      console.log(index)
      this.active = index;
    },
    routeTo(name) { 
      this.$router.push({name})
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  width:100%;
}
body,html {
  padding: 0;
  margin: 0;
}

section {
  height: 40px;
  line-height: 40px;
  background-color: #ddd;
  color:#333;
  padding: 0 30px;
  text-align: left;
  margin-top: 10px;
}





</style>
