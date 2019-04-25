<template>	
<div class="register">
	
	<Navbarlf :showlogin="showlogin" :showregister="showregister"></Navbarlf>
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-form-title pic">
					<span class="login100-form-title-1">
						register
					</span>
				<p v-if="success">register successfully</p>
				</div>

				<form class="login100-form " v-on:submit.prevent="register()">
					<div class="wrap-input100  " data-validate="First Name is required">
						<span class="label-input100">First Name</span>
						<input class="input100" type="text" name="fname" v-model="fname" placeholder="Enter First Name">
						<span class="focus-input100"></span>
					</div>
					
					<div class="wrap-input100  " data-validate="Last Name is required">
						<span class="label-input100">Last Name</span>
						<input class="input100" type="text" name="lname" v-model="lname" placeholder="Enter Last Name">
						<span class="focus-input100"></span>
						
					</div>
					
					<div class="wrap-input100  " data-validate="Username is required">
						<span class="label-input100">Username</span>
						<input class="input100" type="text" name="email" v-model="email" placeholder="Enter username">
						<span class="focus-input100"></span>
					</div>

					<div class="wrap-input100  " data-validate = "Password is required">
						<span class="label-input100">Password</span>
						<input class="input100" type="password" name="pwd" v-model="pwd" placeholder="Enter password">
						<span class="focus-input100"></span>
					</div>
					<div class="error">
						
						<ul class="error" v-if="errs">
							<li class="error" 
							v-for="(err) in errs"
							v-bind="err"
							v-bind:key="err.id"
							>
							{{errs}}
							</li>
						</ul>
					</div>

					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Register
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
	</div>
	

</template>
<script>
import axios from 'axios'
import router from '../router'
import EventBus from './EventBus'
import Navbarlf from './Navbarlf'
export default {
	name: "register",
	data(){
		return{
			fname:'',
			lname:'',
			email:'',
			pwd:'',
			errs:'',
			success:'',
			showlogin:1,
			showregister:0,
			//message:'hey gggggggggggg'
		}
	},
	components:{
		Navbarlf
	},
	methods:{
		register(){
			axios.post('http://localhost:2000/users/register',{
				fname: this.fname,
				lname: this.lname,
				email: this.email,
				pwd: this.pwd
			})			
			.catch(err=>{
				this.errs = err.message 
				console.log(err)
			})
			.then(res=>{
				
				router.push({name:'login'})
			
			})
		}
		 
	}
	
}
</script>
<style scoped>

.pic{
	background-image: url(../assets/images/bg-01.jpg);
}
</style>




