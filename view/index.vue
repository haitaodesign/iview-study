<template>
  <div>首页
      {{ $store.state.count}}
      <!-- active-class 跳转高亮 -->

      <router-link to="/about" active-class="classname">跳转到about</router-link>
        <button @click="handleclick">+1</button>
        {{list}}
        <button @click="handleAction">action +1</button>
  </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    computed:{
        list(){
            // return this.$store.state.list.filter(item => item < 10);
            return this.$store.getters.filternumber;
        }
    },
    methods:{
        handleclick(){
            this.$store.commit('increment'); // 在写一个减法
        },
        handleAction(){
            this.$store.dispatch('increment');  // 通过dispatch 触发action
        }
    }
  
}
</script>
