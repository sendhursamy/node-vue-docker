  <template>
  <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3  bg-gradient-primary shadow-primary" id="sidenav-main">
    <div class="sidenav-header">
      <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"  @click="$emit('closeEvent')"></i>
       <img src="../assets/logo.png" class="navbar-brand-img h-100" alt="main_logo">
    </div>
    <hr class="horizontal light mt-0 mb-2">
    <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-white " @click="this.$router.push('/profile')">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">dashboard</i>
            </div>
            <span class="nav-link-text ms-1">Profile</span>
          </a>
        </li>
         <li class="nav-item">
          <a class="nav-link text-white " @click="this.$router.push('/bills')">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">receipt_long</i>
            </div>
            <span class="nav-link-text ms-1">My Bills</span>
          </a>
        </li>
         <li class="nav-item">
          <a class="nav-link text-white " @click="logOut" >
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">logout</i>
            </div>
            <span class="nav-link-text ms-1">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
  </template>

  <style scoped>
img {
    width: 100%;
    max-height: 100% !important;
}
  </style>

  <script scoped>
    document.querySelector("body").classList.add("g-sidenav-show");
    document.querySelector("body").classList.add("bg-gray-200");
    export default {
      methods: {
        logOut(){          
          localStorage.removeItem("token")
          this.$router.push('/')
        }
      }
    }
  </script>