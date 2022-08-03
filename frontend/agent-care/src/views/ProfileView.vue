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
                    <h6 class="mb-0">Profile Information</h6>
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
                    &nbsp; Vignesh</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Name:</strong> &nbsp;
                    9944587424</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">House no:</strong> &nbsp;
                    vignesh.raju@thehindu.co.in</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Street1	:</strong> &nbsp;
                    Chennai</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Street2:</strong> &nbsp;
                    Agent</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Street3:</strong> &nbsp;
                  Agent</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Street4:</strong> &nbsp;
                  Agent</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">City:</strong> &nbsp;
                  Agent</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">District:</strong> &nbsp;
                  Agent</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Postal code:</strong> &nbsp;
                  Agent</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Region name:</strong> &nbsp;
                  Agent</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Mobile Phone:</strong> &nbsp;
                  Agent</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Telephone number2:</strong> &nbsp;
                  Agent</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Email_id:</strong> &nbsp;
                  Agent</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">Cust group:</strong> &nbsp;
                  Agent</li>
                  <li class="list-group-item border-0 ps-0 text-sm"><strong class="text-dark">CustomerStatus:</strong> &nbsp;
                  Agent</li>                  										
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

export default {
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
    }
  },
  mounted() {
    console.log("*******");
    console.log(this.$store.state.auth.isLogedIn);
    
    this.removenav();
  }
}
</script>
