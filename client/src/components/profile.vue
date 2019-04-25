<template v-if="auth=='loggedin'">

    <div class="container">
        <Navbar/>
        <div class="jumbotron  mt-10">
            <div class="col-sm-8 mx-auto">
                <h1 class="text-center">
                    PROFILE
                </h1> 
              
                <table class="table col-md-6 mx-auto">
               
                    <tbody>
                        
                        <tr>
                            <td>First Name</td>
                            <td v-if="modifyFname==false">{{fname}}</td>
                            <td><input type="text" name="fname" v-if="modifyFname==true" v-model="newfname"></td>
                            <td> <button class="btn btn-primary" v-if="modifyFname==false" @click="editFname">edit</button></td>
                            <td> <button class="btn btn-danger" v-if="modifyFname==true" @click="saveFname">save</button></td>
                        </tr>
                         <tr>
                            <td >Last Name</td>
                            <td v-if="modifyLname==false">{{lname}}</td>
                              
                            <td><input type="text" name="lname" v-if="modifyLname==true" v-model="newlname" ></td>
                             <td> <button class="btn btn-primary" v-if="modifyLname==false" @click="editLname">edit</button></td>
                             <td> <button class="btn btn-danger" v-if="modifyLname==true" @click="saveLname">save</button></td>
                        </tr>
                         <tr>
                            <td>UserName</td>
                            <td v-if="modifyEmail==false">{{email}}</td>
                            <td><input type="text" name="email" v-if="modifyEmail==true" v-model="newemail" ></td>
                             <td> <button class="btn btn-primary" v-if="modifyEmail==false" @click="editEmail">edit</button></td>
                            <td> <button class="btn btn-danger" v-if="modifyEmail==true" @click="saveEmail">save</button></td>
                        </tr>
                         <tr>
                            <td >Created</td>
                            <td>{{date}}</td>
                        </tr>
                       
                      
                    </tbody>
                </table> 
                
            </div>
        </div>
    </div>
</template>

<script>
import EventBus from './EventBus'
import axios from 'axios'
import Navbar from './Navbar'
EventBus.$on('logged-in', test=>{
    console.log(test)
})
import jwtDecode from 'jwt-decode'
import router from '../router'
export default {
    name: "profile",
    data(){
        
         return{
            fname:'',
            lname: '',
            email: '',
            newfname:'',
            newlname: '',
            newemail: '',
            modifyEmail:false,
             modifyLname:false,
              modifyFname:false,
            
            date: '',
            auth:'',
            
           
        }
     
    },
  mounted(){
    
       
         if(window.localStorage.getItem("usertoken")!==null){
             this.auth="loggedin"
         const token = localStorage.usertoken
         const decoded = jwtDecode(token)
         const id = decoded._id
               axios.get('http://localhost:2000/users/profile/'+id)
       .then((res)=>{
           if(res){
               
            this.fname =res.data.FirstName,
           this.lname=res.data.LastName  ,
           this.email=res.data.Email  ,
           this.date = res.data.Date
           }else{
               console.log('no data return')
           }
          
       })
       
    }else {
         this.$router.push("/login")
        
    }

     }
   ,
   methods:{
       editEmail(){
           this.modifyEmail = true
       },
       saveEmail(){
           this.modifyEmail = false
       },
        editLname(){
           this.modifyLname = true
       },
       saveLname(){
           this.modifyLname = false
       },
        editFname(){
           this.modifyFname = true
       },
       saveFname(){
           const token = localStorage.usertoken
         const decoded = jwtDecode(token)
         const id = decoded._id
            axios.post('http://localhost:2000/users/profile/'+id,{
                newfname:this.newfname
            })
            
          .then(
               router.push("/")
          )
            .catch(err=>{
                console.log(err)
            })
           
       },
       
      
   },
   components:{
       Navbar
   }
    
    

}
</script>

<style scoped>

</style>
