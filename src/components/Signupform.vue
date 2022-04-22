<template>
    <div class=" my-auto px-7 w-auto lg:w-80 md:w-64">
           <h1 class="font-bold text-2xl mb-10">Create Account</h1>
            <div class="flex flex-col lg:flex-row">
                <div class="">
                <label
            for="Fname"
         
            class="block text-black text-md font-bold mb-1"
            >First Name</label
          >
          <input
            type="text"
               v-model="first_name"
            placeholder="Enter First Name"
            class="shadow appearance-none border rounded xl:w-56 lg:w-52 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          />
        </div>
        <div class="lg:px-4">
            <label
        for="Lname"
        class="block text-black text-md font-bold mb-1"
        >Last Name</label
      >
      <input
        type="text"
        placeholder="Enter Last Name"
           v-model="last_name"
        class="shadow appearance-none border rounded xl:w-56 lg:w-52 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
    </div>
            </div>
         
            <div class="flex flex-col lg:flex-row">
              <div class="">
              <label
          for="Email"
          class="block text-black text-md font-bold mb-1"
          >Email</label
        >
        <input
          type="email"
             v-model="email"
          placeholder="Enter Email"
          class="shadow appearance-none border rounded xl:w-56 lg:w-52 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
      </div>
      <div class="lg:px-4">
          <label
      for="mobile"
      class="block text-black text-md font-bold mb-1"
      >Mobile Number</label
    >
    <input
    type="tel" name="mobile"  v-model="phone" id="mobile" placeholder="Enter your mobile number" pattern="[0-9]{4}-{0-9]{7}"
      class="shadow appearance-none border rounded xl:w-56 lg:w-52 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
    />
  </div>
          </div>
       
          <div class="flex flex-col lg:flex-row">
            <div class="">
            <label
        for="password"
        class="block text-black text-md font-bold mb-1"
        >Password</label
      >
      <input
      type="password" name="password" id="password" placeholder="Enter password"  v-model="password"
        class="shadow appearance-none border rounded xl:w-56 lg:w-52 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <p class="mb-4 text-xs text-gray-600">Use 8 or more characters with a mix of letters, numbers & symbols</p>
    </div>
    <div class="lg:px-4">
        <label
    for="confirmPassword"
    class="block text-black text-md font-bold mb-1"
    >Confirm Password</label
  >
  <input
  type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password"    v-model="Cpassword"
    class="shadow appearance-none border rounded xl:w-56 lg:w-52 mx-auto  p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
  />
</div>
        </div>
     
        <div class="flex flex-col lg:flex-row items-center">
          <div class="">
          <label
      for="Department"
      class="block text-black text-md font-bold mb-1"
      >Department</label
    >
    <select name="Department" id="Department"  v-model="department" placeholder="Select" class="shadow border rounded xl:w-64 lg:w-52 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4">
    <option selected disabled >Select</option>
    <option value="development">Development</option>
  </select>
          </div>
  <div v-if="$route.name === 'User'" >
    <!-- <router-link to="/create" > -->
    <button v-on:click="signUpUser"
    class="text-white bg-black p-2 lg:w-32 xl:w-40 rounded-full lg:mt-6 lg:ml-12"
  >
    Signup
  </button>
  <!-- </router-link> -->
</div>
 <div v-if="$route.name === 'Demand Manager'" >
    <!-- <router-link to="/evaluate" > -->
    <button
    class="text-white bg-black p-2 lg:w-32 xl:w-40 rounded-full lg:mt-6 lg:ml-12"
  >
    Signup
  </button>
  <!-- </router-link> -->
</div>
 <div v-if="$route.name === 'Solution Designer'" >
    <!-- <router-link to="/map" > -->
    <button
    class="text-white bg-black p-2 lg:w-32 xl:w-40 rounded-full lg:mt-6 lg:ml-12"
  >
    Signup
  </button>
  <!-- </router-link> -->
</div>
<div v-if="$route.name === 'Manager'" >
    <!-- <router-link to="/manager" > -->
    <button
    class="text-white bg-black p-2 lg:w-32 xl:w-40 rounded-full lg:mt-6 lg:ml-12"
  >
    Signup
  </button>
  <!-- </router-link> -->
</div>
      </div>
   
        
        </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return{
      FormData:{
      first_name:'',
      last_name:'',
      email:'',
      phone:'',
      password:'',
      department:'',
    },
    }
  },
  methods:{
    async signUpUser()
    {
      let result = await axios.post("http://127.0.0.1:8000/signup/user/", JSON.stringify({
        first_name:this.first_name,
        last_name:this.last_name,
        email:this.email,
        phone:this.phone,
        password:this.password,
        department:this.department
      }));
      console.warn(result);
      if(result.status==201){
        alert("Signup Done!")
      }
      // .then(response => localStorage.setItem("request-info",JSON.stringify(response.data)) )
      // .catch(error => console.log(error))
    }
      
    }
}
</script>

