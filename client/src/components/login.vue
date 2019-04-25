<template>
<div class="login">	
<Navbarlf :showregister="showregister" :showlogin="showlogin"></Navbarlf>
	
<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-form-title pic" style="">
					<span class="login100-form-title-1">
						Sign In
					</span>
				</div>

				<form class="login100-form validate-form" v-on:submit.prevent="login()">
					<div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
						<span class="label-input100">Username</span>
						<input class="input100 validate-form" type="text" name="email" v-model="email" placeholder="Enter username">
						<span class="focus-input100"></span>
					</div>
<p>{{id}}</p>
					<div class="wrap-input100 validate-input m-b-18" data-validate = "Password is required">
						<span class="label-input100">Password</span>
						<input class="input100" type="password" name="pwd" v-model="pwd" placeholder="Enter password">
						<span class="focus-input100"></span>
					</div>

					<div class="flex-sb-m w-full p-b-30">
						<div class="contact100-form-checkbox">
							<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
							<label class="label-checkbox100" for="ckb1">
								Remember me
							</label>
						</div>

						<div>
							<a href="#" class="txt1">
								Forgot Password?
							</a>
						</div>
					</div>

					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Login
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
import jwtDecode from 'jwt-decode'
export default {
	name: "login",
	components:{
		Navbarlf
	},

	data(){
		return{
			id:'',
			email:'',
			pwd:'',
			showlogin:0,
			showregister:1
		}
	},
	methods:{
		login(){
			axios.post('http://localhost:2000/users/login',{
				email: this.email ,
				pwd: this.pwd
			})
			.then(res=>{
				localStorage.setItem('usertoken',res.data)
				this.email = ''
				this.pwd = ''
				const token=localStorage.getItem('usertoken')
				const decoded = jwtDecode(token)			
					this.id = decoded._id			
					
				
				router.push({path:`profile/`+this.id})
			})
			.catch(err=>{
				console.log(err)
			})
			this.emitMethod()
		},
		emitMethod(){
			EventBus.$emit('logged-in','loggedin')
		}
	}
	
	}
</script>
<style scoped>

.pic{
	background-image: url(../assets/images/bg-01.jpg);
}
</style>




