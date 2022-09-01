<template>
  <div class="page-header align-items-start min-vh-100" style="background:black">
    <div class="container my-auto">
      <div class="row">
        <div class="col-lg-4 col-md-8 col-12 mx-auto">
          <div class="card z-index-0 fadeIn3 fadeInBottom">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div class="bg-gradient-primary shadow-primary border-radius-lg  pe-1">
                <img src="../assets/logo.png" />
              </div>
            </div>
            <div class="card-body">
              <form role="form" class="text-start" @submit.prevent="handleLogin">
                <div class="error" v-if="showInvalidMessage">Username / password worng</div>
                <div class="input-group input-group-outline my-3">
                  <label class="form-label">Agent Id</label>
                  <input type="tel" @focus="submitted = false" class="form-control" @keypress="isNumber($event)"
                    v-model="agentId" :class="{ 'is-invalid': submitted && !agentId }">
                  <div v-show="submitted && !agentId" class="invalid-feedback">AgentId is required</div>
                </div>
                <div class="input-group input-group-outline mb-3">
                  <label class="form-label">Password</label>
                  <input type="password" @focus="submitted = false" class="form-control" v-model="password"
                    :class="{ 'is-invalid': submitted && !password }">
                  <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
                </div>
                <!-- <div class="form-check form-switch d-flex align-items-center mb-3">
                    <input class="form-check-input" type="checkbox" id="rememberMe" checked>
                    <label class="form-check-label mb-0 ms-3" for="rememberMe">Remember me</label>
                  </div> -->
                <div class="text-center">
                  <button class="btn bg-gradient-primary w-100 my-4 mb-2">Login</button>
                </div>
                <!-- <p class="mt-4 text-sm text-center">
                    Don't have an account?
                    <a href="../pages/sign-up.html" class="text-primary text-gradient font-weight-bold">Sign up</a>
                  </p> -->
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {

  name: 'HomeView',
  data() {
    return {
      agentId: '',
      password: '',
      submitted: false,
      showInvalidMessage: false,
      token : localStorage.getItem("token")

    }
  },
  methods: {
    isNumber: function (evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    focusInput: function () {
      var inputs = document.querySelectorAll('input');

      for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('focus', function () {
          this.parentElement.classList.add('is-focused');
        }, false);

        inputs[i].onkeyup = function () {
          if (this.value != "") {
            this.parentElement.classList.add('is-filled');
          } else {
            this.parentElement.classList.remove('is-filled');
          }
        };

        inputs[i].addEventListener('focusout', function () {
          if (this.value != "") {
            this.parentElement.classList.add('is-filled');
          }
          this.parentElement.classList.remove('is-focused');
        }, false);
      }
    },
    async handleLogin() {
      this.submitted = true;
      const _URL = process.env.VUE_APP_END_POINT;
      const data = JSON.stringify({ agentcode: `${this.agentId}`, password: `${this.password}` })

      var config = {
        method: 'post',
        url: _URL +'api/auth',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };
      const vm = this;     
      //without this axios router not working
      await axios(config)
        .then(function (response) {         
          if(response.data.code == 200 && response.data.data.user != 'undefined'){            
            vm.$store.state.auth.isLogedIn = true
            vm.$store.state.auth.token = response.data.data.token.userToken
            localStorage.setItem("token",response.data.data.token.userToken);
            vm.$router.push('/profile');            
          }else{vm.showInvalidMessage = true}
        })
       .catch(function (error) {
       console.log(error);
       });

      // if (this.agentId && this.password) {
      //   let result = await axios.get(`${_URL}tbl_UserProfile?tb_UP_BPcode=${this.agentId}&tb_UP_password=${this.password}`)
      //    //console.warn(result);
      //   if(result.data.length > 0){
      //     this.$router.push('/profile');
      //   }else{this.showInvalidMessage = true}
      // }
    }
  },
  mounted() {
    if(this.token){
      this.$router.push({name:"profile"})
    }
    this.focusInput();
  }
}
</script>
<style scoped>
img {
  width: 100%;
}
</style>
