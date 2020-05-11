<!--  -->
<template>
 <div>
    <section>
        基础用法
    </section>
    <sw-swiper>
        <sw-swiper-item>1</sw-swiper-item>
        <sw-swiper-item>2</sw-swiper-item>
        <sw-swiper-item>3</sw-swiper-item>
        <sw-swiper-item>4</sw-swiper-item>
    </sw-swiper> 
    <section>
        loop循环
    </section>
    <sw-swiper :loop="true">
        <sw-swiper-item>1</sw-swiper-item>
        <sw-swiper-item>2</sw-swiper-item>
        <sw-swiper-item>3</sw-swiper-item>
    </sw-swiper> 
    <section>
        竖向滚动
    </section> 
    <sw-swiper :vertical="true">
        <sw-swiper-item>1</sw-swiper-item>
        <sw-swiper-item>2</sw-swiper-item>
        <sw-swiper-item>3</sw-swiper-item>
    </sw-swiper> 
    <section>
        竖向滚动
    </section> 
    <sw-swiper :vertical="true">
        <sw-swiper-item>1</sw-swiper-item>
        <sw-swiper-item>2</sw-swiper-item>
        <sw-swiper-item>3</sw-swiper-item>
    </sw-swiper> 
    <section>
        监听切换事件
    </section>  
    <sw-swiper  @change="change">
        <sw-swiper-item>1</sw-swiper-item>
        <sw-swiper-item>2</sw-swiper-item>
        <sw-swiper-item>3</sw-swiper-item>
    </sw-swiper>    
    <section>
        自动播放
    </section>  
    <sw-swiper  :autoplay="2000">
        <sw-swiper-item>1</sw-swiper-item>
        <sw-swiper-item>2</sw-swiper-item>
        <sw-swiper-item>3</sw-swiper-item>
    </sw-swiper>              
 </div>
</template>

<script>

export default {
 data () {
 return {
 };
 },

 components: {},

 computed: {},



 methods: {
     change(index){
         alert(index)
         
     }
 }
}

</script>
<style>
.sw-swipe-item {
    line-height: 150px;
    background-color: #39a9ed;
    color:#fff;
    font-size: 40px;
}
</style>