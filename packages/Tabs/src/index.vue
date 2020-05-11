<script>
import Title from './Title'
import Line from './Line'
import scrollLeftTo from './util'
export default {
  name:'SwTabs',
  provide() {
    return {
      'parent':this,
    }
  },
  props:{ 
    duration:{
      type:Number,
      default:0.2
    },
    swipeThreshold:{
      type:Number,
      default:4
    },
    active:{
      type:Number,
      default:0
    }
  },
  model: {
    prop: 'active',
  },
  data() {
    return {
      children:[],
      lineStyle:{},
      curIndex:0,
    };
  },
  computed:{ 
    scrollable() {
      return this.children.length > this.swipeThreshold;
    },
  },
  mounted() {
    this.setCurIndex(this.active);
  },
  activated() {
      this.setCurIndex(this.active);
      this.setScroll(true);
  },
  methods: {
    setCurIndex(index=this.active) {
      this.curIndex = index;
      this.$emit('input',this.curIndex);
    },
    sendClick(key){
      if(this.children[key].disabled){
        this.$emit('disableClick',key,this.children[key]);
      } else { 
        this.setCurIndex(key);
        this.$emit('click',this.curIndex, this.children[this.curIndex]);
      }
      
    },
    setScroll(immediate) { 
      this.$nextTick(()=>{ 
        var {nav,titles=null} = this.$refs;
        if(!titles) return
        var titleEl = titles[this.curIndex].$el;
        const to = titleEl.offsetLeft - (nav.offsetWidth - titleEl.offsetWidth) / 2;
        scrollLeftTo(nav, to,immediate?0:this.duration);
      })
    },
    setLine() { 
      this.$nextTick(()=>{ 
        var {titles=null} = this.$refs;
        if(!titles) { 
          return 
        }
        var offsetWidth = titles[this.curIndex].$el.offsetWidth;
        var width = offsetWidth*0.8;
        var left = this.curIndex*offsetWidth+(offsetWidth-width)/2;
        this.lineStyle = {
          width:`${width}px`,
          transform: `translateX(${left}px)`
        }
      })
    }
  },
  watch:{
    children() { 
      this.setLine();
    },
    curIndex(){
      this.setLine();  
      this.setScroll();
    },
    active(){
      this.setCurIndex(this.active);
      
    }
  },
  render() {
    let nav = this.children.map((item,key)=>
      <Title 
        ref='titles'
        refInFor
        title={item.title}
        disabled={item.disabled}
        myIndex={key}
        isActive={this.curIndex === key}
        scrollable={this.scrollable}
        vOn:click_native={()=>{this.sendClick(key)}}
      />
    )
    return (
      <div>
      <div class="sw_nav" ref="nav">
        {nav}
        {
          <Line lineStyle={this.lineStyle}/>
        }
      </div>
      <div class="wrapper">
        {this.$slots.default}
      </div>
      </div>
    )

  },
};
</script>

