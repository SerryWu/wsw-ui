<template>
  <div id="app">
    <section>
        基础用法
    </section>
    <sw-button v-for="(item,key) in 3" @click.native="changeActive(key)" :key="key">
      {{item}}
    </sw-button>
    <sw-tabs v-model="active">
        <sw-tab  v-for="(item,key) in targetNum" :key="key" v-text="key+1" :title="`标签${key+1}`"></sw-tab>
    </sw-tabs>
    <section>
        多标签滚动
    </section>
    <sw-tabs v-model="active2">
        <sw-tab title="标签1">1</sw-tab>
        <sw-tab title="标签2">2</sw-tab>
        <sw-tab title="标签3">3</sw-tab>
        <sw-tab title="标签4">4</sw-tab>
        <sw-tab title="标签5">
        <x-button>sdsd</x-button>
        </sw-tab>
        <sw-tab title="标签6">
        <x-button>666</x-button>
        </sw-tab>
    </sw-tabs>
    <section>
        点击事件
    </section>
    <sw-tabs v-model="active3" @click="getClick">
        <sw-tab title="标签1">1</sw-tab>
        <sw-tab title="标签2">2</sw-tab>
        <sw-tab title="标签3">3</sw-tab>
        <sw-tab title="标签4">4</sw-tab>
        <sw-tab title="标签5">
        <x-button>sdsd</x-button>
        </sw-tab>
        <sw-tab title="标签6">
        <x-button>666</x-button>
        </sw-tab>
    </sw-tabs>
    <section>
        禁用标签
    </section>
    <sw-tabs v-model="active4" @click="getClick" @disableClick="disableClick">
        <sw-tab title="标签1">1</sw-tab>
        <sw-tab title="标签2">2</sw-tab>
        <sw-tab title="标签3" disabled>3</sw-tab>
        <sw-tab title="标签4">4</sw-tab>
    </sw-tabs>         
  </div>
</template>

<script>

export default {
  name: 'TabDemo',
  data() { 
    return {
        targetNum:3,
        active:0,
        active2:0,
        active3:0,
        active4:0
    }
  },
  methods:{
    changeActive(index) { 
      console.log(index)
      this.active = index;
    },
    getClick(index,curChild){
        alert(index);
        console.log(curChild)
    },
    disableClick(index,curChild){
        alert(`禁止点击${index}`);
        console.log(curChild)        
    }
  }
}
</script>

<style>

</style>
