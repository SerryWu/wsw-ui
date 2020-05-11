<template>
  <div class="sw_button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'swButton',
  props: {
    type: String,
  },

  created(){
    console.log(this.$slots.default)
  }
}
</script>

<style>
  .sw_button {
      display: inline-block;
      padding: 3px 6px;
      background: #409EFF;
      color: #fff;
      padding: 5px 10px;
      border-radius: 2px;
  }
</style>