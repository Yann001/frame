<template>
  <div class="http-test">
    <h1>{{ msg }}</h1>
    <div class="http-get">
      <fieldset>
        <legend>GET请求</legend>
        <div class="requset">
          <label for="query-params">查询参数</label>
          <input type="text" class="" id="query-params" v-model="getQueryParams">
          <button @click="sendGet">GET</button>
        </div>
        <div class="response">
          <label for="result">返回结果</label>
          <textarea name="" id="result" cols="30" rows="5" class="result" v-model="getResult"></textarea>
        </div>
      </fieldset>
    </div>
    <div class="http-post"></div>
  </div>
</template>

<script>
  export default {
    name: 'http-test',
    data () {
      return {
        msg: 'Hello Http!',
        getResult: '',
        getQueryParams: ''
      }
    },
    methods: {
      sendGet: function () {
        this.$http({
          method: 'get',
          params: this.getQueryParams,
          url: 'api/test/getData'
        })
        .then((res) => {
          console.log(res)
        }, (error) => {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped>
  h1 {
    text-align: center;
  }
  .http-test .http-get .requset {
    display: flex;
    flex-direction: row;
    margin: 10px 0;
  }
  .http-test .http-get .response {
    display: flex;
    flex-direction: column;
  }
</style>
