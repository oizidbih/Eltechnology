<template>
  <div class="w-full md:w-96 my-auto md:px-7">
    <h1 class="font-bold text-2xl mb-5">Create Account</h1>
    <div v-if="error" class="text-red-900 h-12 flex items-center  w-11/12 text-center border-2 border-red-600 mb-2 bg-red-100">
      <p class="ml-4">{{error}}</p>
    </div>
    <form @submit.prevent="signUpUser(); passwordValidation();">
    <div class="flex flex-col md:flex-row">
      <div class="">
        <label for="Fname" class="block text-black text-md font-bold mb-1"
          >First Name</label
        >
        <input
          type="text"
          v-on:keypress="isLetter($event)"
          v-model="FormData.first_name"
          placeholder="Enter First Name"
          class="capitalize shadow appearance-none border rounded w-56 xl:w-64 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
      </div>
      <div class="md:px-4">
        <label for="Lname" class="block text-black text-md font-bold mb-1"
          >Last Name</label
        >
        <input
          type="text"
          placeholder="Enter Last Name"
          v-on:keypress="isLetter($event)"
          v-model="FormData.last_name"
          class="capitalize shadow appearance-none border rounded w-56 xl:w-64 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
      </div>
    </div>

    <div class="flex flex-col md:flex-row">
      <div class="">
        <label for="Email" class="block text-black text-md font-bold mb-1"
          >Email</label
        >
        <input
          type="email"
          v-model="FormData.email"
          placeholder="Enter Email"
          class="shadow appearance-none border rounded w-56 xl:w-64 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-1"
        />
        <!-- <span v-if="!v$.email.$required" class="text-red-600">
        {{ v$.email.$errors[0].$message }}
      </span> -->
      </div>
      <div class="md:px-4">
        <label for="mobile" class="block text-black text-md font-bold mb-1"
          >Mobile Number</label
        >
        <input
          type="tel"
          name="mobile"
          v-model="FormData.phone"
          id="mobile"
          placeholder="Enter your mobile number"
          pattern="[0-9]{4}[0-9]{7}"
          class="shadow appearance-none border rounded w-56 xl:w-64 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
      </div>
    </div>

    <div class="flex flex-col md:flex-row">
      <div class="">
        <label for="password" class="block text-black text-md font-bold mb-1"
          >Password</label
        >
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          v-model="FormData.password"
          class="shadow appearance-none border rounded w-56 xl:w-64 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <p class="mb-1 text-xs text-gray-600">
          Use 8 or more characters with a mix of letters, numbers & symbols
        </p>
         <!-- <span v-if="passwordError" class="text-red-600 mb-1 text-xs">
        <p>{{ passwordError }}</p>
      </span>  -->
      </div>
      <div class="md:px-4">
        <label
          for="confirmPassword"
          class="block text-black text-md font-bold mb-1"
          >Confirm Password</label
        >
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          v-model="FormData.Cpassword"
          class="shadow appearance-none border rounded w-56 xl:w-64 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
        />
        <!-- <span v-if="FormData.confirmPassword !== FormData.password " class="text-red-600">
        <p>Passwords must match.</p>
      </span>  -->
      </div>
      
    </div>

    <div class="flex flex-col  md:flex-row">
      <div class="">
        <label for="Department" class="block text-black text-md font-bold mb-1"
          >Department</label
        >
        <select
          name="Department"
          id="Department"
          v-model="FormData.department"
          placeholder="Select"
          class="shadow border rounded w-56 xl:w-64 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        >
          <option selected disabled>Select</option>
          <option  v-for="dep in department" :key="dep">{{ dep }}</option>
        </select>
      </div>
      <div>
        <button
          class="text-white bg-black p-2 w-40 rounded-full mt-6 ml-24"
        >
          Signup
        </button>
      </div>
    </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      FormData: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        department: "",
      },
      error: '',
      passwordError: '',
      department: ['Finance','Procurement','Public Relations','Information Technology','Technical Affairs','Water Affairs','Water Projects','Electricity Affairs','Planning and Quality','Customer Service','Human Resources','General Services','Conservation','District Cooling','President Office'],
    }
  },
  
  methods: {
    async signUpUser() {
      

       try{
      if(this.$route.name=='User'){
      let result = await axios.post(
        "http://127.0.0.1:8000/signup/user/", JSON.stringify(
        {
          first_name: this.FormData.first_name,
          last_name: this.FormData.last_name,
          email: this.FormData.email,
          phone: this.FormData.phone,
          password: this.FormData.password,
          department: this.FormData.department,
          
        })
      )
      console.warn(result);
      if (result.status == 201) {
        this.$router.push("/create")
        localStorage.setItem("user-info",result.data)
        localStorage.setItem("status",result.status)
      }
      }

      if(this.$route.name=='Demand Manager'){
      let result1 = await axios.post(
        "http://127.0.0.1:8000/signup/Demand Manager/", JSON.stringify(
        {
          first_name: this.FormData.first_name,
          last_name: this.FormData.last_name,
          email: this.FormData.email,
          phone: this.FormData.phone,
          password: this.FormData.password,
          department: this.FormData.department,
          
        })
      )
      console.warn(result1);
      if (result1.status == 201) {
        localStorage.setItem("user-info",result1.data)
        // localStorage.setItem("status",this.$route.name)
        this.$router.push("/evaluate")
      }
      }

      if(this.$route.name=='Solution Designer'){
      let result2 = await axios.post(
        "http://127.0.0.1:8000/signup/Solution Designer/", JSON.stringify(
        {
          first_name: this.FormData.first_name,
          last_name: this.FormData.last_name,
          email: this.FormData.email,
          phone: this.FormData.phone,
          password: this.FormData.password,
          department: this.FormData.department,
          
        })
      )
      console.warn(result2);
      if (result2.status == 201) {
        this.$router.push("/mapRequest")
        localStorage.setItem("user-info",result2.data)
      }
      }

      if(this.$route.name=='Manager'){
      let result3 = await axios.post(
        "http://127.0.0.1:8000/signup/Manager/", JSON.stringify(
        {
          first_name: this.FormData.first_name,
          last_name: this.FormData.last_name,
          email: this.FormData.email,
          phone: this.FormData.phone,
          password: this.FormData.password,
          department: this.FormData.department,
          
        })
      )
      console.warn(result3);
      if (result3.status == 201) {
        this.$router.push("/manager")
        localStorage.setItem("user-info",result3.data)
      }
      }
      
       }
    catch(e){
      this.passwordError = 'Password must be greater than 8 characters.'
      if(e){
        this.error = "Fields cannot be empty."
      }
    }
    },
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode); 
      if(/^[A-Za-z]+$/.test(char)) return true; 
      else e.preventDefault(); 
    },
    
  },
  mounted () {
    let user= localStorage.getItem('user-info');
    if (user){
      if(this.$route.name=="User"){
        this.$router.push("/create");
      }
      if(this.$route.name=="Demand Manager"){
        this.$router.push("/evaluate");
      }
      if(this.$route.name=="Solution Designer"){
        this.$router.push("/map");
      }
      if(this.$route.name=="Manager"){
        this.$router.push("/manager");
      }
    }
  }
};
</script>
