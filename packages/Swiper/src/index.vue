<script>
import { TouchMixin } from '../../mixins/touch.js';
import Button from "../../Button/src/index.vue";
export default {
  name:'SwSwiper',
  provide() {
    return {
      'parent':this,
    }
  },
  mixins:[TouchMixin],
  props:{ 
    duration:{
      type:Number,
      default:0.3
    },
    vertical:{
      type:Boolean,
      default:false
    },
    active:{
      type:[Number,String],
      default:0
    },
    loop:{
      type:Boolean,
      default:false
    },
    indicator:{
      type:Boolean,
      default:true
    },
    autoplay:{
      type:[String,Number],
      default:0
    }
  },
  model: {
    prop: 'active',
  },
  data() {
    return {
      children:[],
      curIndex:0,
      offset:0,
      containerWidth:0,
      animate:false,
      canMove:true,
      first:'',
      itemHeight:'',
      last:''
    };
  },
  computed:{ 
    delta() {
        return this.vertical ? this.deltaY : this.deltaX;
    },
    autoDuration() {
      if(typeof this.autoplay === 'string') {
        return parseInt(this.autoplay)*1000
      } else {
        return this.autoplay
      }
    },
    containerStyle() { 
      return {
        height:this.itemHeight?this.itemHeight+'px':'auto'
      }
    },
    trackStyle(){
      return { 
        transform:this.getTransNumber(this.offset),
        transitionDuration:this.animate?this.duration+'s':'0s',
      }
    },
    touchable(){
      return !this.animate 
    },
    curOffset(){
      return -this.curIndex*this.containerWidth
    },
    notNext() { 
      return this.curIndex === this.children.length - 1 && this.delta<0
    },
    notPrev() { 
      return this.curIndex === 0 && this.delta>0
    },
    isboundary(){
      return !this.notNext || !this.cnotPrev
    },
    len(){
      return this.children.length
    },
    target(){
      return (this.len)*this.containerWidth;
    }
  },
  mounted() {
    this.bindTouchEvent(this.$refs.track);
    this.getSwipeLen();
    this.play();
  },
  activated() {

  },
  methods: {
    getSwipeLen() { 
      var {offsetWidth} = this.$refs.track
      this.containerWidth = this.vertical?this.itemHeight:offsetWidth
    },
    closeAutoTimer(){
      this.autoTimer && clearTimeout(this.autoTimer)
    },
    play(){
      if(this.autoplay && this.len>1) {
        this.closeAutoTimer();
        this.autoTimer = setTimeout(()=>{
          this.curIndex++;
          if(this.curIndex === this.len) {
            this.children[0].$el.style.transform = this.getTransNumber(this.target);
            this.isChange = true;
          }
          this.goTo()
        },this.autoDuration)
      }
    },
    clear() {
      clearTimeout(this.timer);
    },
    getTransNumber(num) { 
      return `translate${this.vertical?'Y':'X'}(${num}px)`
    },
    onTouchStart(event) {
      if (!this.touchable) return;
      this.touchStartTime = Date.now();
      this.closeAutoTimer();
      this.clear();
      this.touchStart(event);
    },
    onTouchMove(event) {
      this.touchMove(event);
      this.getMoveStatus();
      this.changePosition();
      this.goTo(false)
      event.preventDefault()
    },
    changePosition(){
      if(this.loop) { 
        if(this.notPrev) { 
          this.children[this.len-1].$el.style.transform = this.getTransNumber(-this.target);
        }
        if(this.notNext) { 
          this.children[0].$el.style.transform = this.getTransNumber(this.target);
        }        
      }
    },
    getMoveStatus() { 
      if(!this.loop) { 
        this.canMove = (this.notNext || this.notPrev)?false:true;
      }
    },
    goTo(staus=true){
      if(!this.canMove) return
      if(!staus && typeof staus === "boolean"){
        this.offset = this.curOffset+this.delta;
        return 
      }
      this.beforeIndex = this.curIndex;
      const duration = Date.now() - this.touchStartTime;
      const speed = this.delta / duration;
      const shouldSwipe = Math.abs(speed) > 0.25 || Math.abs(this.delta)>=this.containerWidth/2;
      if(shouldSwipe) { 
        this.delta>0?this.curIndex--:this.curIndex++;
      } 
      if(typeof staus === 'number') { 
        this.curIndex = staus;
      }
      this.offset = this.curOffset;
      if(this.curIndex<0 || this.curIndex>=this.children.length) { 
        this.isChange = true;
        this.curIndex = this.curIndex<0?this.children.length-1:0
      }
      this.animate = true;
      this.clear();
      this.timer = setTimeout(()=>{
        this.animate = false;
        if(this.beforeIndex !== this.curIndex) { 
          this.$emit('change',this.curIndex)
        }
        var len = this.children.length-1;
        if(this.isChange || (this.beforeIndex == this.curIndex)) {   
          this.children[len].$el.style.transform = ''
          this.children[0].$el.style.transform = ''
          this.offset = this.curOffset;
          this.isChange = false;
        }
        this.play()
      },this.duration*1000)
    },
    onTouchEnd(){ 
      this.goTo();
      this.play();
    },
    getIndicator() {
      return (
        <ul class={`sw_indicator ${this.vertical?'vertical':''}`} >
          {this.children.map((el,index)=>{
            return <li 
              class={`sw_dot ${this.curIndex === index?'active':''}`}
              onClick={()=>{this.goTo(index)}}
            ></li>
          })}
        </ul>
      )
    }
  },
  watch:{
  },
  render() {
    return (
      <div>
        <div class="sw_container" style={this.containerStyle}>
          <div 
            class={`sw_swiper_area ${this.touchable?'':'disable'} ${this.vertical?'vertical':''}`} 
            ref="track" 
            style={this.trackStyle}
          >
            {this.$slots.default}
          </div> 
          {this.getIndicator()}
        </div>
      </div>
    )

  },
};
</script>

