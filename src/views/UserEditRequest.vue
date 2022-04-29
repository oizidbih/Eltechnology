<template>
<div>
    <Navbar />
    <MainHeading :title="'Edit Request / ' + (request.name)" />
    <div class="flex justify-center my-auto w-full " >
       
        <form >
  <div 
    class="w-full flex items-center flex-col md:flex-row lg:flex-row justify-center"
  >
    <div class="py-4 px-24 lg:p-16 md:p-8" >
      <div>
        <label for="RequestName" class="block text-black text-md font-bold mb-1"
          >Request Name</label
        >
        <input
          
          v-model="request.name"
          type="text"
          class="capitalize shadow appearance-none border rounded w-64 sm:w-112 lg:w-128 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
        />
      </div>

      <div>
        <label for="description" class="block text-black text-md font-bold mb-1"
          >Description</label
        >
        <textarea
          v-model="request.description"
          name="description"
          id="description"
          rows="10"
          class="shadow appearance-none border border-gray-200 rounded w-64 sm:w-112 lg:w-128 mx-auto p-3 leading-tight focus:outline-none focus:shadow-outline overflow-auto"
        ></textarea>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center">
      <div class="inline-block align-middle leading-4">
        <img src="../assets/upload.png" class="ml-2" alt="" />
        <p class="text-center">
          Upload a file <br />
          (txt,doc,docx,pdf)
        </p>
      </div>
      <div class="flex flex-col items-center">
        <label class="text-white bg-black p-2 rounded-md mt-6">
          <input type="file"/>
        </label>
        <button @click="updateRequest"
          class="mb-4 text-white bg-black py-2 px-4 rounded-md mt-12"
        >
          Update Requirements
        </button>
      </div>
    </div>
  </div>
  </form>
    </div>
    <UserSidebar current='Update' />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import MainHeading from '@/components/MainHeading.vue'
import UserSidebar from '@/components/UserSidebar.vue'
import axios from 'axios'
import router from '@/router'
export default {
    components: {
        Navbar,
        MainHeading,
        UserSidebar
    },
    data() {
        return{
          request: {
            name: '',
            description: '',
          }
        }
    },
    async mounted(){
        let token = localStorage.getItem('token')
        let requestNo = localStorage.getItem('requestNo')
         let response = await axios.get('http://127.0.0.1:8000/request/' + requestNo + '/', {headers: {
        "Authorization": "Token " + token
      }})
      this.request=response.data
},
methods:{
  async updateRequest(){
    const fd = new FormData();
      fd.append('name', this.request.name)
      fd.append('description', this.request.description)
    let token = localStorage.getItem('token')
    let requestNo = localStorage.getItem('requestNo')
      let result = await axios.put('http://127.0.0.1:8000/request/' + requestNo + '/', fd, {headers: {
        "Authorization" : "Token " + token
      }})
      if(result.status==200){
        localStorage.removeItem('requestNo')
        this.$router.push({name:'UserUpdate'})
      }
  }
}
}
</script>