<template>
  <div class="sw_loading" >
    <div class="sw_loading_wrapper" :class="vertical?'vertical':''">
      <svg v-if="type==1" :viewbox="`0 0 ${size} ${size}`" class="sw_circular" :style="loadingSize">
        <circle :stroke="color" :stroke-width="strokeWidth" :cx="size/2" :cy="size/2" :r="size/2-strokeWidth" fill="none" class="sw_path"></circle>
      </svg>
      <svg v-if="type==2" :viewbox="`0 0 ${size} ${size}`" class="sw_circular" :style="loadingSize">
      <circle  :stroke-width="strokeWidth" :cx="size/2" :cy="size/2" :r="size/2-strokeWidth" :fill="color" class="sw_path1" >
        </circle>
        <circle   :stroke-width="strokeWidth" :cx="size/2" :cy="size/2" :r="size/2-strokeWidth" :fill="color" class="sw_path2"></circle>
      </svg>
      <slot></slot>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'swLoading',
  props: {
    size: {
      type:[Number,String],
      default:50
    },
    strokeWidth:{
      type:Number,
      default:3 
    },
    color:{
      type:String,
      default:"#39a9ed" 
    },
    type:{
      type:[String,Number],
      default:1 
    },
    vertical:{
      type:Boolean,
      default:false
    }
  },
  computed:{
    loadingSize(){
      return {
        width:this.size+'px',
        height:this.size+'px'
      }
    }
  },
  created(){
    
  }
}
</script>

