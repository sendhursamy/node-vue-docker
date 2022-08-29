<template>
  <MenuWidget @close-event="toggleNav"></MenuWidget>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    <NavBarwidget @close-event="toggleNav"></NavBarwidget>
    <div class="container-fluid px-2 px-md-4">

      <div class="card card-body mx-3 mx-md-4">
        <div class="row">

          <div class="col-12 col-xl-4">
            <div class="card card-plain h-100">
              <div class="card-header pb-0 p-3">
                <div class="row">
                  <div class="col-md-12 d-flex align-items-center">
                    <h6 class="mb-0">payment Information</h6>
                  </div>
                  <!-- <div class="col-md-4 text-end">
                      <a href="javascript:;">
                        <i class="fas fa-user-edit text-secondary text-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Profile"></i>
                      </a>
                    </div> -->
                </div>
              </div>
              <div class="card-body p-3">
                <!-- <p class="text-sm">
                    Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                  </p> -->
                <!-- <hr class="horizontal gray-light my-4"> -->
                <ul class="list-group">
                    
                  <li class="list-group-item border-0 ps-0 pt-0 text-sm"><strong class="text-dark">Your payment:</strong>
                    <span v-if="paymentLink.trim()!=''" @click="pay(paymentLink)"> Click me</span>
                    <div class="no-link" v-else >No payment link is available now</div>
                    </li>
                  
                </ul>
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
    return {
      profiileDetails: [],
      token : localStorage.getItem("token"),
      paymentLink :''
    }
  },
  components: {
    MenuWidget,
    NavBarwidget
  },
  methods: {
    pay(paymentLink){      
      window.location.href = paymentLink;
      //console.log(paymentLink)     
      
    },
    toggleNav() {
      let body = document.getElementsByTagName('body')[0];
      let className = 'g-sidenav-pinned';
      const iconSidenav = document.getElementById('iconSidenav');
      const sidenav = document.getElementById('sidenav-main');
      if (body.classList.contains(className)) {
        body.classList.remove(className);
        setTimeout(function () {
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
    removenav() {
      let body = document.getElementsByTagName('body')[0];
      let className = 'g-sidenav-pinned';
      // const iconSidenav = document.getElementById('iconSidenav');
      const sidenav = document.getElementById('sidenav-main');
      if (body.classList.contains(className)) {
        body.classList.remove(className);
        setTimeout(function () {
          sidenav.classList.remove('bg-white');
        }, 100);
        sidenav.classList.remove('bg-transparent');

      }
    },
    async getPaymentLinks(token){
     
     const _URL = process.env.VUE_APP_END_POINT;
    
      var config = {
        method: 'post',
        url: _URL +'getpaymentlink?api_token='+token,
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const vm = this;
      //without this axios router not working
      await axios(config)
        .then(function (response) {  
          if(response.data.code == 200 && response.data.paymentLink != ""){
            vm.paymentLink=response.data.paymentLink;
            console.log(vm.paymentLink+"joe")
          }else{
            console.warn('No payament link to you')
          }       
          //console.log(response.data.code);
        })
       .catch(function (error) {
       console.log(error);
       });
      
    }
  },
  /*created(){
    
    
    console.log(this.paymentLink);
  },*/
  mounted() {
    this.getPaymentLinks(this.token);
    if(!this.token){
      this.$router.push({name:"home"})
    }          
    this.removenav();
   
  }
}
</script>
<style>
.no-link{
  padding-top: 10px;
  color: chocolate;
  font-size: 14px;
  font-weight: 700;
}
    </style>
