<template>
<div>
    <Navbar />
    <MainHeading :title="'Evaluate Request / ' + (request.name)"  />
    <div class="flex justify-center my-auto w-full ">
        <div class="w-full flex items-center flex-row justify-center">
            <div class="p-6">
            <div>
                <label
            for="RequestName"
            class="block text-black text-md font-bold mb-1"
            >Request Name</label
          >
          <input
            type="text"
            v-model="request.name"
            class="shadow appearance-none border rounded w-full sm:w-112 lg:w-128  mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6" readonly>
            </div>
        
            <div>
                <label
                for="description"
                class="block text-black text-md font-bold mb-1"
                >Description</label
              >
              <textarea name="description" v-model="request.description" id="description" rows="10" class="shadow appearance-none border border-gray-200 rounded w-full sm:w-112 lg:w-128  mx-auto p-3 leading-tight focus:outline-none focus:shadow-outline overflow-auto" readonly></textarea>
            </div>

            <div class="flex flex-col md:flex-row justify-between">
            <div>
                <label
                for="comments"
                class="block text-black text-md font-bold mb-1"
                >Comments</label
              >
              <textarea name="comments" id="comments" rows="6" class="shadow appearance-none border border-gray-200 rounded w-full sm:w-112 lg:w-128  mx-auto p-3 leading-tight focus:outline-none focus:shadow-outline overflow-auto"></textarea>
            </div>
            <div class="flex flex-col ml-12">
                <div class="block">
                    <div class="mt-2">
                      <label class="inline-flex items-center">
                        <input type="checkbox"/>
                        <span class="ml-2">Return to User</span>
                      </label>
                    </div>
                  </div>
                  <div class="block">
                    <div class="mt-2">
                      <label class="inline-flex items-center">
                        
                        <input type="checkbox" id="Assigned" value="Assigned" v-model="status"/>
                        <span class="ml-2">Assign to Solution Designer</span>
                      </label>
                    </div>
                  </div>
                
                
            <div class="flex flex-col items-center">
                <button @click="check"
                class="mr-24 md:mr-0 text-white bg-black p-2 w-40 rounded-md my-6"
              >
                Save
              </button>
            </div>
              <div v-if="error" class="text-red-900 h-12 flex items-center text-center border-2 mb-12 bg-red-100 border-red-600">
      <p class="ml-4">{{error}}</p>
    </div>
            </div>
        </div>
        </div>
            
            </div>
        </div>
    <DMsidebar />
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
          status: [],
          request: {
            name: '',
            description: '',
          },
          error: ''
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
methods: {
  async check() {
    let token = localStorage.getItem('token')
    let requestNo = localStorage.getItem('requestNo')
    if( this.status == 'Assigned'){
      let result = await axios.post('http://127.0.0.1:8000/request/assign-status/' + requestNo + '/' , ({status: this.status[0] }) , {headers: {
        "Authorization" : "Token " + token
      }})
      if(result.status==201){
        this.$router.push('/assign')
      }
      }
    else{
      this.error = "Please select the status."
    }
  }
}
}
</script>