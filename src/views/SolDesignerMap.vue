<template>
<div>
    <Navbar />
    <MainHeading title="Mapping Request to Cost Models" />
    <div class="flex lg:justify-evenly w-full mt-12">
      <div class="flex flex-col ml-auto mr-auto md:ml-24 lg:ml-64">
          <div>
              <label
              for="Request Name"
              class="block text-black text-md font-bold mb-1"
              >Request Name</label
            >
            <input
              type="text"
              v-model="request.name"
              class="shadow appearance-none border rounded  w-80 sm:w-144 lg:w-128 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              readonly
            />
      </div>
      <div>
          <label
          for="description"
          class="block text-black text-md font-bold mb-1"
          >Description</label
        >
        <textarea name="description"  v-model="request.description" id="description" rows="8" class="shadow appearance-none border border-gray-200 rounded w-80 sm:w-144 lg:w-128 mx-auto p-3 leading-tight focus:outline-none focus:shadow-outline overflow-auto" readonly></textarea>
      </div>
      <div class="my-2">
             <label
                for="description"
                class="text-black text-md font-bold mb-1"
                >File:  <a :href="'https://127.0.0.1:8000' + filepath" target="_blank" class="bg-black px-2 py-1 text-white rounded-md font-light">View File</a></label
              >
          </div> 

      <div class="block">
          <div class="mt-2">
            <label class="inline-flex items-center">
              <input type="checkbox" v-model="dmReturn" :disabled="checkedStatus ? true : false" />
              <span class="ml-2">Return to Demand Manager</span>
            </label>
          </div>
        </div>
        <div class="block">
          <div class="mt-2">
            <label class="inline-flex items-center">
              <input type="checkbox"  v-model="checkedStatus" :disabled="dmReturn ? true : false"/>
              <span class="ml-2">Assign the Cost Models</span>
            </label>
          </div>
        </div>

        <div v-if="checkedStatus" class="block mt-4 lg:hidden md:mr-24 lg:mr-44 flex flex-col">
          <div class="text-md font-bold">Cost Models</div>
          <div class="bg-white p-4 rounded-md h-60 scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-300 overflow-y-scroll">
              <div class="block">
                <div class="p-2" v-for="model in costModels" :key="model.id" >
                <div class="flex items-center " >
                  <input class="mr-2" type="checkbox" v-model="costmodel"
                      :value="model.name" /> 
                      <label>{{ model.name }}</label>
                </div>
                </div>
                </div>
          </div>
      </div>

        <div>
          <button @click="AssignCostModel"
          class="mb-52 lg:mb-6 text-white bg-black p-2 w-40 rounded-md mt-6 "
        >
          Save
        </button>
      </div>

  </div>

<div v-if="checkedStatus" class="sm:ml-4 lg:block lg:mr-64 hidden flex flex-col">
      <div class="text-sm sm:text-md font-bold">Cost Models</div>
      <div class="bg-white p-4 h-96 rounded-md sm:rounded-lg scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-300 overflow-y-scroll ">
          <div class="block">
              <div class="p-2" v-for="model in costModels" :key="model.id" >
                <div class="flex items-center " >
                  <input class="mr-2" type="checkbox" v-model="costmodel"
                      :value="model.name" /> 
                      <label>{{ model.name }}</label>
                </div>
              </div>
            </div>
      </div>
  </div>

  </div>
    <DesignerSidebar current="Map" />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import MainHeading from '@/components/MainHeading.vue'
import DesignerSidebar from '@/components/DesignerSidebar.vue'
import axios from 'axios'
export default {
    components: {
        Navbar,
        MainHeading,
        DesignerSidebar
    },
    data() {
      return{
        // costModels: [ {"id":1, "name": 'Software Development/Customization'},{"id":2, "name": 'Application Install/ de-Install'},{"id":3, "name": 'Application Configuration'}, {"id":4, "name": 'Application Licenses'} , {"id":5, "name": 'Application Support & Maintenance'}, {"id":6, "name": 'Applications Integration'} ,{"id":7, "name": 'Application Migration'} , {"id":8, "name": 'Application Operation'}  , {"id":9, "name": 'Application Hosting'} , {"id":10, "name": 'Hardware Implementation'} , {"id":11, "name": 'HW Support & Maintenance'}],
        costModels: [],
         request: {
            name: '',
            description: '',
          },
          checkedStatus: false,
          dmReturn: false,
          costmodel: [],
          filepath: ''
      }
    },
     async mounted(){
        let token = localStorage.getItem('token')
        let requestNo = localStorage.getItem('requestNo')
         let response = await axios.get('http://127.0.0.1:8000/request/' + requestNo + '/', {headers: {
        "Authorization": "Token " + token
      }})
      this.request=response.data
       this.filepath = this.request.attachments[0].file
       let response1 = await axios.get('https://elbackendapp.azurewebsites.net/cost-models/' , {headers: {
        "Authorization": "Token " + token
      }})
      console.log(response1.data)
      this.costModels = response1.data
},
methods:{
  async AssignCostModel() {
    let token = localStorage.getItem('token')
    let requestNo = localStorage.getItem('requestNo')
    
      let result = await axios.post('https://elbackendapp.azurewebsites.net/requests/assign/' + requestNo + '/' , ({cost_model: this.costmodel }) , {headers: {
        "Authorization" : "Token " + token
      }})

      if(result.status==201){
        this.$router.push('/mapRequest')
      }
  }
}
}
</script>