<template>
  <div>介绍页
      <button @click="handleClick">跳转到user</button>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
  </div>
</template>
<script>
export default {
  data(){
      return {}
  },
  methods:{
      handleClick(){
          this.$router.push('user/123');
          // 编程式导航
      }
  }
}
</script>
