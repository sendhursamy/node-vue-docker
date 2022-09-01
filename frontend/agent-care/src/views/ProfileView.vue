<template>
  <MenuWidget @close-event="toggleNav"></MenuWidget>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    <NavBarwidget @close-event="toggleNav"></NavBarwidget>
    <div class="container-fluid px-2 px-md-4">

      <div class="card card-body mx-3 mx-md-4">
        <div class="row">

          <div class="col-12 col-xl-12">
            <div class="card card-plain h-100">
              <div class="card-header pb-0 p-3">
                <div class="row">
                  <div class="col-md-12 align-items-center">
                    <h6 class="mb-0 f-left">Profile Information</h6>
                    <span class="mb-0 f-right changepassword" @click="this.$router.push('/changepassword')"><span><button class="btn btn-primary changepasswordbtn">Change Password</button></span></span>
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
                    
                  <li class="list-group-item border-0 ps-0 pt-0 text-sm"><strong class="text-dark">BP Number:</strong>
                    &nbsp; {{profiileDetails[0]?.UserID}} </li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Name:</strong> &nbsp;
                    {{profiileDetails[0]?.name}}</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">House no:</strong> &nbsp;
                    {{profiileDetails[0]?.houseno}}</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Street1	:</strong> &nbsp;
                    {{profiileDetails[0]?.street1}}</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Street2:</strong> &nbsp;
                    {{profiileDetails[0]?.street2}}</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Street3:</strong> &nbsp;
                  {{profiileDetails[0]?.street3}}</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">email:</strong> &nbsp;
                  {{profiileDetails[0]?.emailid}}</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">City:</strong> &nbsp;
                  {{profiileDetails[0]?.city}}</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">District:</strong> &nbsp;
                  {{profiileDetails[0]?.district}}</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Postal code:</strong> &nbsp;
                  {{profiileDetails[0]?.postalcode}}</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Region name:</strong> &nbsp;
                  {{profiileDetails[0]?.regionname}}</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Mobile Phone:</strong> &nbsp;
                  {{profiileDetails[0]?.mobile}}</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Telephone number2:</strong> &nbsp;
                  {{profiileDetails[0]?.mobile}}</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Cust group:</strong> &nbsp;
                  {{profiileDetails[0]?.usergroup}}</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">CustomerStatus:</strong> &nbsp;
                  {{profiileDetails[0]?.userstatus}}</li>                  										
                  <!-- <li class="list-group-item border-0 ps-0 pb-0">
                      <strong class="text-dark text-sm">Social:</strong> &nbsp;
                      <a class="btn btn-facebook btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                        <i class="fab fa-facebook fa-lg"></i>
                      </a>
                      <a class="btn btn-twitter btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                        <i class="fab fa-twitter fa-lg"></i>
                      </a>
                      <a class="btn btn-instagram btn-simple mb-0 ps-1 pe-2 py-0" href="javascript:;">
                        <i class="fab fa-instagram fa-lg"></i>
                      </a>
                    </li> -->
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
    async getProfileDetails(token){
     
      const _URL = process.env.VUE_APP_END_POINT;
      var config = {
        method: 'get',
        url: _URL +'api/profile?api_token='+token,
        headers: {
          'Content-Type': 'application/json'
        }
      };
      
      const vm = this;     
      //without this axios router not working
      await axios(config)
        .then(function (response) {                
          if(response.status == 200){                
              vm.profiileDetails.push({...response.data.data});              
          }else{vm.showInvalidMessage = true}          
        })
       .catch(function (error) {
       console.log(error);       
       });
    }
  },
  created(){
    this.getProfileDetails(this.token);
  },
  mounted() {
    if(!this.token){
      this.$router.push({name:"home"})
    }
          
    this.removenav();
  }
}
</script>
<style>
.f-left{
  float: left;
}
.f-right{
  float: right;
  font-size: 0.755rem;
}
.f-right i{ 

}
.changepasswordbtn{
  padding: 4px;
  font-size: 11px;
}
</style>