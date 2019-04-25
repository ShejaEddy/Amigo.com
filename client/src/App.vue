<template>
  <div id="app">
  
    <router-view/>
  </div>
</template>

<script>


export default {
   name: "App" ,

    components:{
    
},
mounted(){
  window.onpopstate = event =>{
    if(window.localStorage.getItem("usertoken")!==null && this.$route.path == "/login"){
        this.$router.push("/")
    }
       
  }
}
}
</script>
<style>

</style>


