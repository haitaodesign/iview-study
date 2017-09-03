<template>
<div>
  <div>hello {{ name }}</div>
  <v-title title="vue组件化"></v-title>
  <v-button @click="handleClick" >点击按钮</v-button>
  <p>
      <img src="./images/webpackimg.jpg" style="width:200px;" alt="">
  </p>
</div>
</template>
<script>
import vTitle from './title.vue';
import vButton from './button.vue';

export default {
    components:{
        vTitle,
        vButton
    },
  data(){
      return{
          name:'vue.js'
      }
  },
  methods:{
      handleClick(e){
          console.log(e);
      }
  }
}
</script>
<style scoped>
    div{
        color: #f60;
        font-size: 24px;
    }
</style>


