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
      <div class="col-6">
        <div class="card card-default">
          
          <div class="card-body">
            <!-- <ul v-if="errors">
              <li v-for="error in errors" v-bind:key="error">{{ msg }}</li>
            </ul> -->
            <form autocomplete="off" @submit.prevent="changePassword" method="post">
              <div class="form-group">
                  <label for="email">Current Password</label>
                  <input type="password" id="password" class="form-control" placeholder="" v-model="password_old" required>
              </div>
              <div class="form-group">
                  <label for="email">Password</label>
                  <input type="password" id="password" class="form-control" placeholder="" v-model="password" required>
              </div>
              <div class="form-group">
                  <label for="email">Confirm Password</label>
                  <input type="password" id="password_confirmation" class="form-control" placeholder="" v-model="password_confirmation" required>
              </div>
              <button type="submit" class="btn btn-primary" disabled>Update</button>
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

export default {
  components: {
    MenuWidget,
    NavBarwidget
  },
    methods: {
      changePassword(){
        console.warn('enter');
      },
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
  }
},
  mounted(){
    this.removenav();
  }
}
</script>