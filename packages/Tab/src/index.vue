<script>
export default {
  name:'SwTab',
  props: {
      title:String,
      name:String,
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
  },
  methods: {
    bindRelation() { 
        this.parent.children.push(this);
    },

  },
  render() {
    return (
      <div vShow={this.isActive}>
        {this.$slots.default}
      </div>
    )
  },
};
</script>
