<!--  -->
<template>
 <div id="demo">
    <section>
        定义size
    </section> 
    <div class="loadingList">
        <sw-loading size="30"></sw-loading>
        <sw-loading size="40"></sw-loading>
        <sw-loading size="50"></sw-loading>  
    </div>
    <section>
        定义颜色
    </section> 
    <div class="loadingList">
        <sw-loading size="30" color="red"></sw-loading>
    </div>
    <section>
        不同类型
    </section> 
    <div class="loadingList">
        <sw-loading size="60" type="2"></sw-loading>
    </div>
    <section>
        文字
    </section> 
    <div class="loadingList">
        <sw-loading size="40" >加载中...</sw-loading>
        <sw-loading size="40" vertical>加载中...</sw-loading>
    </div>
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

 

 methods: {}
}

</script>
<style >
.loadingList { 
    display: flex;
    text-align: left;
    padding: 0 30px;
}

.spinner {
  width: 60px;
  height: 60px;
 
  position: relative;
  margin: 100px auto;
}
 
#demo .sw_loading {
    margin-right: 0px;
}
</style>