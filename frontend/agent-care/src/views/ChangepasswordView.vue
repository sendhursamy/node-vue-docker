<template>
  <MenuWidget @close-event="toggleNav"></MenuWidget>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
  <NavBarwidget @close-event="toggleNav"></NavBarwidget>
     <div class="container-fluid py-4">
      <div class="card h-100">
            <div class="card-header pb-0 p-3">
              <div class="row">
                <div class="col-6 d-flex align-items-center">
                  <h6 class="mb-0">Change Password</h6>
                </div>                
              </div>
            </div>
            <div class="card-body p-3 pb-0">
              <div class="row justify-content-center">
      <div class="col-12 col-lg-6">
        <div class="card card-default">
            <div class="error" v-if="itsInvalid && showInvalidText.trim()!=''">{{showInvalidText}}</div>
          <div class="card-body">
              
              <form role="form" class="text-start" @submit.prevent="changePassword">
                
                <div class="input-group input-group-outline my-3">
                  <label class="form-label">Current Password</label>
                  <input type="password" @focus="submitted = false" class="form-control"
                    v-model="password_old" :class="{ 'is-invalid': submitted && !password_old }">
                  <div v-show="submitted && !password_old" class="invalid-feedback">password old is required</div>
                </div>
                <div class="input-group input-group-outline mb-3">
                  <label class="form-label">New Password</label>
                  <input type="password" @focus="submitted = false" class="form-control"
                    v-model="password" :class="{ 'is-invalid': submitted && !password }">
                  <div v-show="submitted && !password" class="invalid-feedback">password is required</div> 
                </div>
                <div class="input-group input-group-outline mb-3">
                  <label class="form-label">Confirm Password</label>
                  <input type="password" @focus="submitted = false" class="form-control"
                    v-model="password_confirm" :class="{ 'is-invalid': submitted && !password_confirm }">
                  <div v-show="submitted && !password_confirm" class="invalid-feedback">confirm Password is required</div> 
                </div>
                <div class="text-center">
                  <button type="submit" class="btn bg-gradient-primary w-100 my-4 mb-2">Update</button>
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
     </div>
  </main>
</template>

<script>

import MenuWidget from '@/components/MenuView.vue'
import NavBarwidget from '@/components/NavBarView.vue'
import axios from 'axios'
export default {
  data() {
    return{
      password_old: '',
      password: '',
      password_confirm: '',
      submitted: false,
      itsInvalid: false,
      showInvalidText:'',
      token : localStorage.getItem("token")
    }
  },
  components: {
    MenuWidget,
    NavBarwidget
  },
    methods: {
      
    toggleNav() {
     let body = document.getElementsByTagName('body')[0];
    let className = 'g-sidenav-pinned';
    const iconSidenav = document.getElementById('iconSidenav');
    const sidenav = document.getElementById('sidenav-main');
     if (body.classList.contains(className)) {
    body.classList.remove(className);
    setTimeout(function() {
      sidenav.classList.remove('bg-white');
    }, 100);
    sidenav.classList.remove('bg-transparent');

  } else {
    body.classList.add(className);
    sidenav.classList.add('bg-white');
    sidenav.classList.remove('bg-transparent');
    iconSidenav.classList.remove('d-none');
  }
    },
     removenav(){
    let body = document.getElementsByTagName('body')[0];
    let className = 'g-sidenav-pinned';
   // const iconSidenav = document.getElementById('iconSidenav');
    const sidenav = document.getElementById('sidenav-main');
     if (body.classList.contains(className)) {
    body.classList.remove(className);
    setTimeout(function() {
      sidenav.classList.remove('bg-white');
    }, 100);
    sidenav.classList.remove('bg-transparent');

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
    async changePassword() {
       this.submitted = true;
       if(this.password !='' && this.password_confirm !='' && this.password_old !=''){
       if(this.password == this.password_confirm){
          const _URL = process.env.VUE_APP_END_POINT;
          const data = JSON.stringify({ oldPassword: `${this.password_old}`, newPassword: `${this.password}`, confirmPassword: `${this.password_confirm}` })

          var config = {
          method: 'post',
          url: _URL +'changepassword?api_token='+this.token,
          headers: {
          'Content-Type': 'application/json'
          },
          data: data
          };
          const vm = this;
          await axios(config).then(function (response) {         
            if(response.data.code == 200){ 
                localStorage.removeItem("token")
                vm.$router.push('/')        
            }else{
              vm.itsInvalid = true,
              vm.showInvalidText=response.data.message
              }
          })
          .catch(function (error) {
            console.log(error);
          });
          
       }else{
         this.itsInvalid = true,
         this.showInvalidText="Your password and confirmation password do not match."
       }
       }
        
     }
},
  mounted(){
    if(!this.token){
      this.$router.push({name:"home"})
    }
    this.removenav();
    this.focusInput();
  }
}
</script>
<style>
.error{
text-align: center;
color: red;
}
</style>