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
                  <div class="input-group input-group-outline my-3">
                    <label class="form-label">Agent Id</label>
                    <input type="tel" @focus="submitted = false" class="form-control" @keypress="isNumber($event)" v-model="agentId" :class="{ 'is-invalid': submitted && !agentId }" >
                    <div v-show="submitted && !agentId" class="invalid-feedback">AgentId is required</div>
                  </div>
                  <div class="input-group input-group-outline mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" @focus="submitted = false" class="form-control" v-model="password" :class="{ 'is-invalid': submitted && !password }" >
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
export default {
  name: 'HomeView',
  data () {
        return {
            agentId: '',
            password: '',
            submitted: false
        }
    },
  methods: {
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    focusInput: function() {
      var inputs = document.querySelectorAll('input');

        for (var i = 0; i < inputs.length; i++) {
          inputs[i].addEventListener('focus', function() {
            this.parentElement.classList.add('is-focused');
          }, false);

          inputs[i].onkeyup = function() {
            if (this.value != "") {
              this.parentElement.classList.add('is-filled');
            } else {
              this.parentElement.classList.remove('is-filled');
            }
          };

          inputs[i].addEventListener('focusout', function() {
            if (this.value != "") {
              this.parentElement.classList.add('is-filled');
            }
            this.parentElement.classList.remove('is-focused');
          }, false);
        }
    },
    handleLogin() {
      this.submitted = true;
      
      // const { dispatch } = this.$store;
      // console.log(dispatch);
      // console.log(this.password);
      if (this.agentId && this.password) {
        this.$router.push('/profile');
      }
    }
  },
   mounted(){
    this.focusInput();
  }
}
</script>
<style scoped>
img {
  width: 100%;
}

</style>
