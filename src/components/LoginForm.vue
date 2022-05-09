<template>
  <div class="mx-4 sm:mr-10 md:mx-auto lg:mx-4 lg:w-96 xl:mr-16 my-auto">
    <h1 class="font-bold text-center text-xl sm:text-3xl lg:text-3xl mb-6 mr-6">
      Login
    </h1>

    <div v-if="error" class="text-red-900 h-12 flex items-center  w-11/12 text-center border-2 border-red-600 mb-2 bg-red-100">
      <p class="ml-4">{{error}}</p>
    </div>
    <form @submit.prevent="handleSubmit">
    <div>
      <label for="Email" class="block text-black text-md font-bold mb-1"
        >Email</label
      >
      <input
        type="text"
        v-model="email"
        placeholder="Enter Email"
        class="shadow appearance-none border rounded w-11/12 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
    </div>
    <div class="">
      <label for="Password" class="block text-black text-md font-bold mb-1"
        >Password</label
      >
      <input
        type="password"
        v-model="password"
        placeholder="Enter Password"
        class="shadow appearance-none border rounded w-11/12 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <a href="#" class="text-sm font-medium">Forget Password?</a>
    </div>

    <button class="text-white bg-black p-2 w-11/12 rounded-md mt-6">
      Login
    </button>
    <br>
    <button class="text-center mt-12"
      >New User? <router-link to="/signupAs"><span class="font-bold">Signup</span></router-link>
    </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return{
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async handleSubmit(){
      try {
        const response = await axios.post('http://127.0.0.1:8000/login/', {
          email: this.email,
          password: this.password
        });
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('status', response.data.status)
        const unwrapped = JSON.parse(JSON.stringify(response.data.profile));
        localStorage.setItem('name',unwrapped.user.first_name + ' ' + unwrapped.user.last_name)
        if(response.data.status == 'user'){
          this.$router.push('/create')
        }
        if(response.data.status == 'Demand Manager'){
          this.$router.push('/evaluate')
        }
        if(response.data.status == 'Solution Designer'){
          this.$router.push('/mapRequest')
        }
        if(response.data.status == 'Manager'){
          this.$router.push('/manager')
        }
      }
        catch(e) {
          if (e) {
              this.error = "Invalid Email or Password"
          }
          if (this.email == '' || this.password == ''){
            this.error = "Fields cannot be empty."
          }
        }
    }
  }
}
</script>