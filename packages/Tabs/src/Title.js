export default {
    name:'SwTitle',
    props:{
        scrollable:Boolean,
        myIndex:Number,
        title:String,
        disabled:Boolean
    },
    data() {
      return {
        children:[],
      };
    },
    computed:{
        getClass() { 
            var className = '';
            if(this.scrollable) { 
                className = className + ' scrollable'
            }
            if(this.disabled) { 
                className = className + ' disabled'
            }
            return className
        }
    },
    mounted() {
  
    },
  
    methods: {

    },
    render() {
      return (
        <div class={this.getClass}>
          {this.title}
        </div>
      )
    },
  };