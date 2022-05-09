<template>
<div>
    <Navbar />
    <MainHeading title="Assign Solution Designers" />
    <div class="flex justify-center w-full mt-8 lg:mt-0 ">
        <div class="w-full flex flex-col md:flex-row md:justify-evenly lg:justify-center">
            <div class="ml-auto mr-auto md:mr-6 md:ml-0 lg:p-16">
            <div>
                <label
            for="RequestName"
            class="block text-black text-md font-bold mb-1"
            >Request Name</label
          >
          <input
            type="text"
            v-model="request.name"
            class="shadow appearance-none border rounded  w-80 sm:w-112 lg:w-128 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
            readonly>
            </div>
        
            <div v-for="des in designers" :key="des.id" >
                <label 
                for="Designer"
                class="block text-black text-md font-bold mb-1"
                >Solution Designer</label
              >
              <select name="Designer" v-model="request.designer" class="shadow border rounded w-80 sm:w-112 lg:w-128 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6">
                  <option :value="des.id"  class="capitalize">{{ des.user.first_name + " " + des.user.last_name  + " ,Department: "+ des.department }}</option>
              </select>
            </div>

            <div class="block md:hidden">
                <div class="flex items-center">
                <img src="../assets/message-circle.png" class="inline" alt="">
                <label
            for="RequestName"
            class="block text-black text-md font-bold mb-1"
            >Comments</label
          >
          </div>
          <textarea
            rows="8"
            class="shadow appearance-none border rounded  w-80 sm:w-112 lg:w-128 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"></textarea>
            <div class="flex flex-col items-center">
        <button
        class="mb-10 text-white bg-black p-2 w-40 rounded-full mt-6"
      >
        Save
      </button>
    </div>
            </div>
        </div>
        <div class="flex flex-col hidden md:block">
        <div class="flex bg-white flex-col items-center rounded-xl h-96 w-80 mt-10">
            <div class="m-24">
            <div class="flex items-center mb-3">
            <img src="../assets/message-circle.png" class="ml-2 inline" alt="">
            <span class="">Comments</span>
        </div>
        <div class="w-56">
            <textarea name="comments" id="comments" rows="6" class="shadow appearance-none border border-gray-200 rounded w-full mx-auto p-3 leading-tight focus:outline-none focus:shadow-outline overflow-auto"></textarea>
        </div>
    </div>
    </div>
    <div class="flex flex-col items-center">
        <button @click="save"
        class="mb-10 text-white bg-black p-2 w-40 rounded-full mt-4"
      >
        Save
      </button>
    </div>
    </div>
</div>
    </div>
    <DMsidebar current="Assign" />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import MainHeading from '@/components/MainHeading.vue'
import DMsidebar from '@/components/DMsidebar.vue'
import axios from 'axios'

export default {
    components: {
        Navbar,
        MainHeading,
        DMsidebar
    },
    data() {
      return{
        request:{
          name: '',
          designer: ''
        },
        designers: ''
      }
    },
  async mounted() {
      let token = localStorage.getItem('token')
      let requestNo = localStorage.getItem('requestNo')
         let response = await axios.get('http://127.0.0.1:8000/request/' + requestNo + '/', {headers: {
        "Authorization": "Token " + token
      }})
      this.request=response.data
      await axios.get('http://127.0.0.1:8000/designers/', {headers: {
        "Authorization": "Token " + token
      }})
      .then(response => this.designers = response.data)
      .catch(error => {
        console.log(error);
    })
    },
    methods: {
  async save() {
    let token = localStorage.getItem('token')
    let requestNo = localStorage.getItem('requestNo')
      let result = await axios.post('http://127.0.0.1:8000/request/assign-designer/' + requestNo + '/' , ({designer: this.request.designer}) , {headers: {
        "Authorization" : "Token " + token
      }})
      if(result.status==201){
        this.$router.push('/evaluate')
      }
  }
}
}
    
    
    
</script>