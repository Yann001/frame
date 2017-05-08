<template>
  <div class="registry">
    <div class="form">
      <form>
        <div class="form-control">
          <label>用户名：</label>
          <input type="text" class="" v-model="username">
        </div>
        <div class="form-control">
          <label>密码：</label>
          <input type="password" class="" v-model="password">
        </div>
        <div class="form-control">
          <label>确认密码：</label>
          <input type="password" class="">
        </div>
        <div class="form-control">
          <label>性别：</label>
          <label for="man">男</label>
          <input type="radio" id="man" name="sex" value="0" v-model="sex">
          <label for="woman">女</label>
          <input type="radio" id="woman" name="sex" value="1" v-model="sex">
        </div>
        <div class="form-control">
          <label>出生日期：</label>
          <input type="date" class="" v-model="birthday">
        </div>
        <div class="form-control">
          <label>电话：</label>
          <input type="text" class="" v-model="tel">
        </div>
        <div class="form-control">
          <label>邮箱：</label>
          <input type="text" class="" v-model="email">
        </div>
        <button type="button" class="btn btn-default" @click="registry">注册</button>
        <button type="button" class="btn btn-default" @click="login">登录</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        password: '',
        sex: 0,
        birthday: '',
        tel: '',
        email: ''
      }
    },
    methods: {
      registry () {
        let params = {
          username: this.username,
          password: this.password,
          sex: this.sex,
          birthday: this.birthday,
          tel: this.tel,
          email: this.email
        }
        this.$http.post('/api2/registry/createAccount', params)
        .then((res) => {
          console.log(res)
          if (res.status === 200) {
            console.log('恭喜你注册成功！')
          } else {
            console.log('注册失败，请检查网络')
          }
        })
        .catch((reject) => {
          console.log(reject)
        })
      },
      login () {
        window.location.href = './#/login'
      }
    }
  }
</script>

<style>
  .registry {
    width: 100%;
    position: relative;
  }
  .registry .form {
    width: 210px;
    position: absolute;
    left: 50%;
    margin-left: -105px;
    text-align: left;
  }
  .registry .form .form-control {
    margin: 5px;
  }
  .registry .form .form-control label:nth-child(1) {
    display: block;
    margin-bottom: 5px;
  }
  .registry .form .form-control input:not([type='radio']) {
    width: 200px;
    height: 25px;
    border-radius: 2px;
    box-shadow: none;
    border: 1px solid #2f7d24;
  }
  .registry .form .btn {
    height: 30px;
    width: 30%;
    display: inline-block;
    margin-left: 10%;
    border: 1px solid #bbb;
    border-radius: 2px
  }
</style>
