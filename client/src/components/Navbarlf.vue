<template>
    
		    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="home">Amigo.Com </a>{{showlogin}}
      <button class="navbar-toggler navbar-toggler-right " type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
       
        <i class="navbar-toggler-icon"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
            <li class="nav-item" v-if="showlogin==1">
          <router-link class="nav-link btn btn-primary" to="/login">Login</router-link>
            </li>
             <li class="nav-item" v-if="showregister==1">
                 <router-link class="nav-link btn btn-primary" to="/register">Register</router-link>
              </li>
              <li></li>
        </ul>
      </div>
    </div>
    <router-view/>
  </nav>
</template>
<script>
export default {
    name:"NavBarlf",
    props:[     
        'showlogin','showregister'
    ],
   data(){
    return{
        
        
    }
    
  },
 mounted(){
    
}
}
</script>

