<template>
  <div class="http-test">
    <h1>{{ msg }}</h1>
    <div class="http-get"></div>
    <div class="http-post"></div>
  </div>
</template>

<script>
  export default {
    name: 'http-test',
    data () {
      return {
        msg: 'Hello Http!'
      }
    }
  }
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
