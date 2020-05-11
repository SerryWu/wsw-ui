<template>
  <div id="list">
    <ul>
      <li @click="routeTo('TabDemo')"><span>tabs组件demo</span> <span>></span> </li>
      <li @click="routeTo('SwiperDemo')"><span>swiper组件demo</span><span>></span> </li>
      <li @click="routeTo('LoadingDemo')"><span>Loading组件demo</span><span>></span></li>
      <li @click="routeTo('PopupDemo')"><span>PopupDemo组件demo</span><span>></span></li>
      <li @click="routeTo('ToastDemo')"><span>ToastDemo组件demo</span><span>></span></li>
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
#list ul { 

}
#list li { 
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
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
