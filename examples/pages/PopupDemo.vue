<!--  -->
<template>
 <div>
    <x-button @click.native="active=!active">下方弹出</x-button>
     <sw-popup v-model="active" :popupStyle="{height:'30%'}"></sw-popup>

     <x-button @click.native="active2=!active2">上方弹出</x-button>
     <sw-popup position="top" v-model="active2" :popupStyle="{height:'30%'}"></sw-popup>

        <x-button @click.native="active3=!active3">左方弹出</x-button>
     <sw-popup position="left" v-model="active3" :popupStyle="{width:'50%'}"></sw-popup>

     <x-button @click.native="active4=!active4">右方弹出</x-button>
     <sw-popup position="right" v-model="active4" :popupStyle="{width:'50%'}"></sw-popup>

     <x-button @click.native="active5=!active5">中心弹出</x-button>
     <sw-popup position="center" v-model="active5" :popupStyle="{width:'30%',height:'20%'}"></sw-popup>
 </div>
</template>

<script>

export default {
 data () {
    return {
        active:false,
        active2:false,
        active3:false,
        active4:false,
        active5:false
    };
 },

 components: {},

 computed: {},

 

 methods: {}
}

</script>
<style >

</style>