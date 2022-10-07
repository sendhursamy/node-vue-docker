<template>
  <MenuWidget @close-event="toggleNav"></MenuWidget>
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    <NavBarwidget @close-event="toggleNav"></NavBarwidget>
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-sm-12 col-md-6 card h-100">
          <div class="card-header pb-0 p-3">
            <div class="row">
              <div class="col-6 d-flex align-items-center">
                <h6 class="mb-0">Invoices</h6>
              </div>
              <div class="col-md-6 text-end">
                <button class="btn btn-outline-primary btn-sm mb-0">View All</button>
              </div>
            </div>
          </div>
          <div class="card-body p-3 pb-0">
            <div class="spinner-border" role="status" v-if="isLoading"></div>
            <ul class="list-group" v-else-if="bills.length > 0">
              <BillViewListTile v-for="bill, index in bills" :key="index" :heading="bill.date"
                :download-link="bill.href" />
            </ul>
            <div v-else>No bills available</div>
          </div>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
  </main>
</template>

<script>

import MenuWidget from '@/components/MenuView.vue'
import NavBarwidget from '@/components/NavBarView.vue'
import BillViewListTile from '@/components/BillViewListTile';

import getMonthFromString from '@/utils/getMonthFromString'
import { process } from 'ipaddr.js';

export default {
  data() {
    return {
      bills: [],
      isLoading: false
    }
  },
  components: {
    MenuWidget,
    NavBarwidget,
    BillViewListTile
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
    async getBills() {
      this.isLoading = true
      if (localStorage.getItem("token") == null) {
        this.isLoading = false
        window.location.replace("/")
      }

      const endpoint = process.env.VUE_APP_END_POINT + "api/getbill?api_token=" + localStorage.getItem("token")
      console.log(endpoint);
      const bills = await fetch(endpoint)
        .then(res => res.json())
        .then(data => data)
        .catch(err => {
          console.log(err);
          return []
        })

      this.bills = bills.map(bill => ({
        href: process.env.VUE_APP_END_POINT + "api/download/" + bill.filename + "?api_token=" + localStorage.getItem("token"),
        date: getMonthFromString(bill.date)
      }))
      this.isLoading = false
    }
  },
  mounted() {
    this.removenav();
    this.getBills()
  }
}
</script>