<!--  -->
<template>
  <transition name="sw_toast">
    <div class="sw_toast_wrapper" :class="{'sw_icon':loading}" v-show="show"  :style="toastStyle"> 
      <sw-loading v-show="loading" size="40" color="#fff" class="loading"></sw-loading>
      <span v-text="text"></span>
    </div>
  </transition>  
</template>

<script>
import Loading from '../../Loading'
export default {
  name:'swToast',
  components:{
    'sw-loading':Loading
  },
  props:{
    text:{
      type:String,
      default:"轻提示"
    },
    duration:{
      type:Number,
      default:1500
    },
    animate:{
      type:Number,
      default:200
    },
    loading:{
      default:false,
      type:Boolean
    }
  },
 data () {
  return {
    show:false
  }
 },
 computed: {
   toastStyle() { 
     return {
       "transition-property":'opacity',
       "transition-duration":this.animate/1000+'s'
     }
   }
 },
 mounted(){

 },
 methods: {
   open() { 
     clearTimeout(this.timer)
     this.show = true;
     this.timer = setTimeout(()=>{
       this.close();
     },this.duration)
   },
   close() { 
     this.show= false
   }
 }
}

</script>
<style>
</style>