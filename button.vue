<template>
    <button @click="handleClick" :style="styles">
        <slot></slot>
    </button>
</template>
<script>
export default {
  props:{
      color:{
          type: String,
          default:'#00cc66'
      }
  },
  computed:{
      styles () {
          return {
              background: this.color
          }
      }
  },
  methods:{
      handleClick(e){
          this.$emit('click',e);
      }
  }
}
</script>
<style scoped>
    h1 a{
        color: #3399ff;
        font-size: 24px;
    }
</style>


