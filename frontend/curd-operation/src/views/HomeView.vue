<template>
  <div class="container-xl">
    <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-8"><h2>user Details</h2></div>
                    <div class="col-sm-4">
                        <div class="search-box">
                            <i class="material-icons">&#xE8B6;</i>
                            <input type="text" class="form-control" placeholder="Search&hellip;">
                        </div>
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name <i class="fa fa-sort"></i></th>
                        <th>Mobile No</th>
                        <th>Emailid <i class="fa fa-sort"></i></th>
                        <th>user status</th>                       
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                            
                    <tr v-for='user in users' :key='user'>
                        <td>{{user.tb_UserID}}</td>
                        <td>{{user.tb_name}}</td>
                        <td>{{user.tb_mobile}}</td>
                        <td>{{user.tb_emailid}}</td>
                        <td>{{user.tb_userstatus}}</td>
                        <td>
                            <a href="#" class="view" title="Vie<li v-for='structure in users' :key='structure'>
        <strong>{{structure}}</strong>
      </li>        w" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                            <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                            <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                        </td>
                    </tr>   
                </tbody>
            </table>
            
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
      users:[],      
      showInvalidMessage: false
    }
  },
  methods: {
    async getUser(){
     
     const _URL = process.env.VUE_APP_END_POINT;
     var config = {
       method: 'get',
       url: _URL +'api/getuser',
       headers: {
         'Content-Type': 'application/json'
       }
     };
     
     const vm = this;     
     //without this axios router not working
     await axios(config)
       .then(function (response) {            
        console.log(response.data.data);
         if(response.data.code == 200){                
             vm.users.push(...response.data.data);             
         }else{vm.showInvalidMessage = true}
       })
      .catch(function (error) {
      console.log(error);       
      });
   }
    
  },
  created() {
    this.getUser();
  }
}
</script>

