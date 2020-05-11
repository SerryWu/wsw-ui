<script>
export default {
  name:'SwSwiperItem',
  props: {
      title:String,
      myIndex:Number,
      disabled: Boolean,
  },
  data() {
    return {

    };
  },
  inject: ['parent'],
  computed:{
    show() { 
      return this.parent.curIndex
    },
    index() { 
      return this.parent.children.indexOf(this);
    },
    isActive() { 
      return this.index === this.parent.curIndex
    }
  },
  mounted() {
      this.bindRelation();
      this.bindHeight();
  },
  methods: {
    bindRelation() { 
        this.parent.children.push(this);
    },
    bindHeight() { 
      if(!this.parent.itemHeight) { 
        this.parent.itemHeight = this.$el.offsetHeight;
      }
    },
    con() {
    }
  },
  render() {
    return (
      <div class="sw-swipe-item" onClick={this.con}>
        {this.$slots.default}
      </div>
    )
  },
};
</script>
