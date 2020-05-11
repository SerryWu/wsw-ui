<template>
  <div id="list">
    <ul>
      <li @click="routeTo('TabDemo')">tab标签demo</li>
      <li @click="routeTo('SwiperDemo')">swiper组件demo</li>
      <li @click="routeTo('LoadingDemo')">Loading组件demo</li>
      <li @click="routeTo('PopupDemo')">PopupDemo组件demo</li>
      <li @click="routeTo('ToastDemo')">ToastDemo组件demo</li>
    </ul>
    
  </div>
</template>

<script>

export default {
  name: 'List',
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
ul {
  margin:0;
  padding: 0;
}
  li { 
    height: 40px;
    line-height: 40px;
    list-style: none;
    border-bottom: 1px solid #ddd;
  }
</style>
