export default {
    name:'OverLayer',
    props:{
      value:{
        type:Boolean,
        default:false
      },
    },
    model:{
      prop: 'value',
    },
    data() {
        return {
            
        }
    },
    mounted() {
  
    },
    methods: {
        
    },
    render() {
      return (
        <transition name="sw_overLayer" > 
          <div vShow={this.value} class="sw_overLayer"></div>
        </transition> 
      )
    },
  };