

<script>
import OverLayer from './overlayer'
export default {
  name: 'SwPopup',
  props: {
    type: String,
    position:{
      type:String,
      default:'bottom'
    },
    value:{
      type:Boolean,
      default:false
    },
    popupStyle:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  model: {
    prop: 'value',
  },
  data(){
    return {

    }
  },
  computed:{
    curPosition(){
      return `position_${this.position}`
    }
  },
  created(){
  },
  mounted() {
    
  },
  watch:{
  },
  methods:{
    getDefault(){
      var hasSlot = this.$slots.default?true:false;
      return (<div vShow={this.value} class={`sw_popup ${this.curPosition} ${hasSlot?'':'default'}`} style={this.popupStyle}>{this.$slots.default}</div>)
    },
    close() { 
      this.$emit('input',false);
    }
  },
  render() { 
    var con = this.getDefault()
    return (
      <div> 
        {<OverLayer vModel={this.value} vOn:click_native={()=>{this.close()}}/>}
        <transition name={`${this.curPosition}`} >  
          {con}
        </transition> 
      </div>
    )

  }
}
</script>

<style scoped>

</style>