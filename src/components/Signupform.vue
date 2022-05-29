<template>
  <div class="my-auto px-2 ">
    <h1 class="font-bold text-2xl mb-1 pt-6 lg:pt-0">Create Account</h1>
    <div v-if="error" class="text-red-900 h-12 flex items-center  w-11/12 text-center border-2 border-red-600 mb-2 bg-red-100">
      <p class="ml-4">{{error}}</p>
    </div>
    <form @submit.prevent="signUpUser()">
    <div class="mt-5 flex flex-col md:flex-row">
      <div class="mb-4">
        <label for="Fname" class="block text-black text-md font-bold mb-1"
          >First Name</label
        >
        <input
          type="text"
          v-on:keypress="isLetter($event)"
          v-model="state.FormData.first_name"
          placeholder="Enter First Name"
          class="capitalize shadow appearance-none border rounded  xl:w-64 p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <p
          class="text-red-600 font-bold capitalize"
          v-for="(error, index) of v$.FormData.first_name.$errors"
          :key="index"
        >
        <small>{{ error.$message }}</small>
        </p>
      </div>
      <div class="md:px-4 mb-4">
        <label for="Lname" class="block text-black text-md font-bold mb-1"
          >Last Name</label
        >
        <input
          type="text"
          placeholder="Enter Last Name"
          v-on:keypress="isLetter($event)"
          v-model="state.FormData.last_name"
          class="capitalize shadow appearance-none border rounded  xl:w-64  p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <p
          class="text-red-600 font-bold capitalize"
          v-for="(error, index) of v$.FormData.last_name.$errors"
          :key="index"
        >
        <small>{{ error.$message }}</small>
        </p>
      </div>
    </div>

    <div class="flex flex-col md:flex-row">
      <div class="mb-4">
        <label for="Email" class="block text-black text-md font-bold mb-1"
          >Email</label
        >
        <input
          type="email"
          v-model="state.FormData.email"
          placeholder="Enter Email"
          class="shadow appearance-none border rounded  xl:w-64  p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-1"
        />
        <p
          class="text-red-600 font-bold capitalize"
          v-for="(error, index) of v$.FormData.email.$errors"
          :key="index"
        >
        <small>{{ error.$message }}</small>
        </p>
      </div>
      <div class="md:px-4 mb-4">
        <label for="mobile" class="block text-black text-md font-bold mb-1"
          >Mobile Number</label
        >
        <input
          type="tel"
          name="mobile"
          v-model="state.FormData.phone"
          id="mobile"
          placeholder="Enter your mobile number"
          pattern="[0-9]{4}[0-9]{7}"
          class="shadow appearance-none border rounded  xl:w-64  p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <p
          class="text-red-600 font-bold capitalize"
          v-for="(error, index) of v$.FormData.phone.$errors"
          :key="index"
        >
        <small>{{ error.$message }}</small>
        </p>
      </div>
    </div>

    <div class="flex flex-col md:flex-row">
      <div class="mb-4">
        <label for="password" class="block text-black text-md font-bold mb-1"
          >Password</label
        >
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          v-model="state.FormData.password.password"
          class="shadow appearance-none border rounded  xl:w-64  p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <p class="mb-1 text-xs text-gray-600">
          Use 8 or more characters with a mix of <br> letters, numbers & symbols
        </p>
        <p
          class="text-red-600 font-bold capitalize"
          v-for="(error, index) of v$.FormData.password.password.$errors"
          :key="index"
        >
        <small>{{ error.$message }}</small>
        </p>
      </div>
      <div class="md:px-4 mb-4">
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
          v-model="state.FormData.password.ConfirmPassword"
          class="shadow appearance-none border rounded  xl:w-64  p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
        />
        <p
          class="text-red-600 font-bold capitalize"
          v-for="(error, index) of v$.FormData.password.ConfirmPassword.$errors"
          :key="index"
        >
        <small>{{ error.$message }}</small>
        </p>
      </div>
      
    </div>

    <div class="flex flex-col  md:flex-row">
      <div class="mb-8">
        <label for="Department" class="block text-black text-md font-bold mb-1"
          >Department</label
        >
        <select
          name="Department"
          id="Department"
          v-model="state.FormData.department"
          placeholder="Select"
          class="shadow border rounded  xl:w-64  p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option selected disabled>Select</option>
          <option  v-for="dep in department" :key="dep">{{ dep }}</option>
        </select>
        <p
          class="text-red-600 font-bold capitalize"
          v-for="(error, index) of v$.FormData.department.$errors"
          :key="index"
        >
        <small>{{ error.$message }}</small>
        </p>
      </div>
      <div>
        <button
          class="text-white bg-black p-2 w-40 rounded-full my-6 ml-12 2xl:ml-20"
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
import useValidate from '@vuelidate/core'
import { required, minLength, sameAs } from '@vuelidate/validators'
import { reactive, computed } from 'vue'

export default {
  data() {
    return {    
      department: ['Finance','Procurement','Public Relations','Information Technology','Technical Affairs','Water Affairs','Water Projects','Electricity Affairs','Planning and Quality','Customer Service','Human Resources','General Services','Conservation','District Cooling','President Office'],
      error: ''
    }
  },
  setup() {
    const state = reactive({
      FormData: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password:{
          password: '',
          ConfirmPassword: ''
        },
        department: "",
      },
    })

    const rules = computed(() => {
      return{
      FormData: {
        first_name: { required },
        last_name: { required },
        email: { required },
        phone: { required },
        password:{
          password: { required , minLength: minLength(8) },
          ConfirmPassword: { required, sameAs: sameAs(state.FormData.password.password) }
        },
        department: { required },
      },
    }
    })
    const v$ = useValidate(rules, state)

    return {
      state,
      v$
    }
  },
  methods: {
    async signUpUser() {
    
      this.v$.$validate()
      
      try{
      if(this.v$.$error == false){
      if(this.$route.name=='User'){
      let result = await axios.post(
        "http://127.0.0.1:8000/signup/user/", JSON.stringify(
        {
          first_name: this.state.FormData.first_name,
          last_name: this.state.FormData.last_name,
          email: this.state.FormData.email,
          phone: this.state.FormData.phone,
          password: this.state.FormData.password.password,
          department: this.state.FormData.department,
        })
      )
      console.warn(result);
      if (result.status == 201) {
        this.$router.push("/")
        // localStorage.setItem("user-info",result.data)
        // localStorage.setItem("status",result.status)
      }
      }

      if(this.$route.name=='Demand Manager'){
      let result1 = await axios.post(
        "http://127.0.0.1:8000/signup/Demand Manager/", JSON.stringify(
        {
          first_name: this.state.FormData.first_name,
          last_name: this.state.FormData.last_name,
          email: this.state.FormData.email,
          phone: this.state.FormData.phone,
          password: this.state.FormData.password.password,
          department: this.state.FormData.department,
          
        })
      )
      console.warn(result1);
      if (result1.status == 201) {
        // localStorage.setItem("user-info",result1.data)
        // localStorage.setItem("status",this.$route.name)
        this.$router.push("/")
      }
      }

      if(this.$route.name=='Solution Designer'){
      let result2 = await axios.post(
        "http://127.0.0.1:8000/signup/Solution Designer/", JSON.stringify(
        {
         first_name: this.state.FormData.first_name,
          last_name: this.state.FormData.last_name,
          email: this.state.FormData.email,
          phone: this.state.FormData.phone,
          password: this.state.FormData.password.password,
          department: this.state.FormData.department,
          
        })
      )
      console.warn(result2);
      if (result2.status == 201) {
        this.$router.push("/")
        // localStorage.setItem("user-info",result2.data)
      }
      }

      if(this.$route.name=='Manager'){
      let result3 = await axios.post(
        "http://127.0.0.1:8000/signup/Manager/", JSON.stringify(
        {
           first_name: this.state.FormData.first_name,
          last_name: this.state.FormData.last_name,
          email: this.state.FormData.email,
          phone: this.state.FormData.phone,
          password: this.state.FormData.password.password,
          department: this.state.FormData.department,
          
        })
      )
      console.warn(result3);
      if (result3.status == 201) {
        this.$router.push("/")
        // localStorage.setItem("user-info",result3.data)
      }
      }
      }
      }
      catch(e){
        this.error = "Email is already taken."
      }
      
    },
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode); 
      if(/^[A-Za-z]+$/.test(char)) return true; 
      else e.preventDefault(); 
    }
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
