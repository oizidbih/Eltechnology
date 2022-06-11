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
              <textarea name="description" v-model="request.description" id="description" rows="8" class="shadow appearance-none border border-gray-200 rounded w-full sm:w-112 lg:w-128  mx-auto p-3 leading-tight focus:outline-none focus:shadow-outline overflow-auto" readonly></textarea>
            </div>

          <div class="my-2">
             <label
                for="description"
                class="text-black text-md font-bold mb-1"
                >File:  <a :href="filepath" target="_blank" class="bg-black px-2 py-1 text-white rounded-md font-light">View File</a></label
              >
              
            <!-- <label v-if="attachments != ''" class="mt-4 flex flex-col items-center w-28 px-1 py-1 bg-black text-white rounded-lg shadow-lg border border-blue cursor-pointer overflow-x-hidden">
        <a :href="'https://elbackendapp.azurewebsites.net' + filepath" target="_blank">View File</a>
    </label> -->
          </div> 

            <div class="flex flex-col md:flex-row justify-between">
            <div>
                <label
                for="comments"
                class="block text-black text-md font-bold mb-1"
                >Comments</label
              >
              <textarea name="comments" id="comments" rows="6" v-model="comment" class="shadow appearance-none border border-gray-200 rounded w-full sm:w-112 lg:w-128  mx-auto p-3 leading-tight focus:outline-none focus:shadow-outline overflow-auto"></textarea>
            </div>
            <div class="flex flex-col ml-12">
                <div class="block">
                    <div class="mt-2">
                      <label class="inline-flex items-center">
                        <input type="checkbox" v-model="User" value="ReturnedUser" :disabled="status=='Assigned' ? true : false"/>
                        <span class="ml-2">Return to User</span>
                      </label>
                    </div>
                  </div>
                  <div class="block">
                    <div class="mt-2">
                      <label class="inline-flex items-center">
                        
                        <input type="checkbox" id="Assigned" value="Assigned" v-model="status" :disabled="User ? true : false"/>
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
          comment: '',
          error: '',
          filepath:'',
          User: false
        }
    },
    async mounted(){
        let token = localStorage.getItem('token')
        let requestNo = localStorage.getItem('requestNo')
         let response = await axios.get('https://elbackendapp.azurewebsites.net/request/' + requestNo + '/', {headers: {
        "Authorization": "Token " + token
      }})
      this.request=response.data
      this.filepath = this.request.attachments[0].file
},
methods: {
  async check() {
    let token = localStorage.getItem('token')
    let requestNo = localStorage.getItem('requestNo')
    if( this.status == 'Assigned'){
      let result = await axios.post('https://elbackendapp.azurewebsites.net/request/assign-status/' + requestNo + '/' , ({status: this.status[0] }) , {headers: {
        "Authorization" : "Token " + token
      }})
      if(result.status==201){
        this.$router.push('/assign')
      }
      }
      else if(this.User == true){
       let result1 = await axios.post('https://elbackendapp.azurewebsites.net/create-comment/' , ({request_id: requestNo,comment: this.comment }) , 
       {headers: {
        "Authorization" : "Token " + token
      }})
      if(result1.status==201){
        this.$router.push('/evaluate')
      }
    }
    else{
      this.error = "Please select the status."
    }
  }
}
}
</script>