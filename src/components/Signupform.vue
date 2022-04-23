<template>
  <div class="my-auto px-7 w-auto lg:w-80 md:w-64">
    <h1 class="font-bold text-2xl mb-10">Create Account</h1>
    <form @submit.prevent="signUpUser">
    <div class="flex flex-col lg:flex-row">
      <div class="">
        <label for="Fname" class="block text-black text-md font-bold mb-1"
          >First Name</label
        >
        <input
          type="text"
          v-model="FormData.first_name"
          placeholder="Enter First Name"
          class="shadow appearance-none border rounded xl:w-56 lg:w-52 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
      </div>
      <div class="lg:px-4">
        <label for="Lname" class="block text-black text-md font-bold mb-1"
          >Last Name</label
        >
        <input
          type="text"
          placeholder="Enter Last Name"
          v-model="FormData.last_name"
          class="shadow appearance-none border rounded xl:w-56 lg:w-52 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
      </div>
    </div>

    <div class="flex flex-col lg:flex-row">
      <div class="">
        <label for="Email" class="block text-black text-md font-bold mb-1"
          >Email</label
        >
        <input
          type="email"
          v-model="FormData.email"
          placeholder="Enter Email"
          class="shadow appearance-none border rounded xl:w-56 lg:w-52 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
      </div>
      <div class="lg:px-4">
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
          class="shadow appearance-none border rounded xl:w-56 lg:w-52 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
      </div>
    </div>

    <div class="flex flex-col lg:flex-row">
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
          class="shadow appearance-none border rounded xl:w-56 lg:w-52 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <p class="mb-4 text-xs text-gray-600">
          Use 8 or more characters with a mix of letters, numbers & symbols
        </p>
      </div>
      <div class="lg:px-4">
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
          class="shadow appearance-none border rounded xl:w-56 lg:w-52 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
      </div>
    </div>

    <div class="flex flex-col lg:flex-row items-center">
      <div class="">
        <label for="Department" class="block text-black text-md font-bold mb-1"
          >Department</label
        >
        <select
          name="Department"
          id="Department"
          v-model="FormData.department"
          placeholder="Select"
          class="shadow border rounded xl:w-64 lg:w-52 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        >
          <option selected disabled>Select</option>
          <option  v-for="dep in department" :key="dep">{{ dep }}</option>
        </select>
      </div>
      <div>
        <button
          class="text-white bg-black p-2 lg:w-32 xl:w-40 rounded-full lg:mt-6 lg:ml-12"
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
      department: ['Finance','Procurement','Public Relations','Information Technology','Technical Affairs','Water Affairs','Water Projects','Electricity Affairs','Planning and Quality','Customer Service','Human Resources','General Services','Conservation','District Cooling','President Office']
    };
  },
  methods: {
    async signUpUser() {
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
        localStorage.setItem("user-info",result.data)
        this.$router.push("/create")
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
        localStorage.setItem("user-info",result2.data)
        this.$router.push("/map")
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
        localStorage.setItem("user-info",result3.data)
        this.$router.push("/manager")
      }
      }
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
