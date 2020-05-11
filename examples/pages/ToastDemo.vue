<!--  -->
<template>
 <div>
    <section>
        基础用法
    </section> 
    <x-button @click.native="toast">打开提示</x-button>
    <x-button @click.native="toast2">打开长文本提示</x-button>
    <x-button @click.native="toast3">打开loading提示</x-button>
 </div>
</template>

<script>

export default {
 data () {
    return {
        active:false
    };
 },
created() { 
    console.log(this)
},
 components: {},

 computed: {},
 methods: {
     toast() { 
         this.$toast('你好')
     },
     toast2(){
         this.$toast('我是一段很长很长的文字我是一段很长很长的文字我是一段很长很长的文字我是一段很长很长的文字')
     },
    toast3(){
         this.$toast.loading('加载中...')
     }
 }
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
 

</style>