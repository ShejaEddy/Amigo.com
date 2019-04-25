<template>
   
       <nav class="navbar navbar-expand-lg navbar-dark bg-lightgrey fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">Amigo.Com </a>
      <button class="navbar-toggler navbar-toggler-right " type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
       
        <i class="navbar-toggler-icon"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
             <li class="nav-item">
               <router-link class="nav-link" to="/">Home</router-link>
                
          </li>
          <li v-if="auth=='loggedin'" class="nav-item"> 
            
                  <router-link class="nav-link" to="/profile/:id">Profile</router-link>
                  </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#documentation">Documentation</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#team">Team</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
           <li v-if="auth==''" class="nav-item">
           <router-link class="nav-link btn btn-primary" to="/login">Login</router-link>
            </li>|||||
             <li v-if="auth==''" class="nav-item">
                 <router-link class="nav-link btn btn-primary" to="/register">Register</router-link>
              </li>
                <li v-if="auth=='loggedin'" class="nav-item">
                  <a href="login" class="nav-link btn btn-primary" @click="logout()">Logout</a>
                  </li>
        </ul>
      </div>
    </div>
  </nav>
   
           
           
              
               
     </template>
<script>
import EventBus from './EventBus'
EventBus.$on('logged-in', test=>{
    console.log(test)
})
export default {
    data(){
        return{
            auth:'',
            user:''
        }
    },
    methods:{
        logout(){
            localStorage.removeItem('usertoken')
            this.$router.push("/login")
        }
    },
    mounted(){
        EventBus.$on('logged-in', status=>{
            this.auth= status
         });
         if(window.localStorage.getItem("usertoken")!==null){
             this.auth="loggedin"
        this.$router.push((to,from,next)=>{
            next({
                path: from.fullpath,
                replace: true
            })
        })
    }
   
    }
    
}
</script>
<style scoped>

</style>
