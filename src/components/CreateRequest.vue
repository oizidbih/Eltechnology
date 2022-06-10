<template>
  <form @submit.prevent="OnUpload" enctype="multipart/form-data">
  <div
    class="w-full flex items-center flex-col md:flex-row lg:flex-row justify-center"
  >
    <div class="py-4 px-24 lg:p-16 md:p-8">
      <div>
        <label for="RequestName" class="block text-black text-md font-bold mb-1"
          >Request Name</label
        >
        <input
          v-model="name"
          type="text"
          class="shadow appearance-none border rounded w-64 sm:w-112 lg:w-128 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
        />
      </div>

      <div>
        <label for="description" class="block text-black text-md font-bold mb-1"
          >Description</label
        >
        <textarea
          v-model="description"
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
        <!-- <label class="text-white bg-black p-2 rounded-md mt-6">
          <input type="file" accept=".doc, .docx, .txt, .pdf"  @change="onFileSelected"/>
        </label> -->
         <!-- <div class="flex w-full h-screen items-center justify-center bg-grey-lighter"> -->
    <label class="mt-4 flex flex-col items-center px-8 py-1 bg-black text-white text-blue rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer">
        <span class="text-lg leading-normal">Choose File</span>
        <input type='file' class="hidden" accept=".doc, .docx, .txt, .pdf"  @change="onFileSelected" />
    </label>
    <label v-if="selectedFile != ''" class="mt-4 flex flex-col items-center px-8 py-1 bg-black text-white text-blue rounded-lg shadow-lg tracking-wide border border-blue cursor-pointer">
        <span>{{ selectedFile.name }}</span>
    </label>
<!-- </div> -->
        <button 
          class="mb-4 text-white bg-black py-2 px-4 rounded-md mt-12"
        >
          Send Requirements
        </button>
          <div v-if="Error" class="text-red-900 h-12 flex items-center  w-11/12 text-center border-2 border-red-600 mb-2 bg-red-100">
      <p class="ml-4">{{Error}}</p>
    </div>
      </div>
    
    </div>
  </div>
  </form>
  <SuccessMessage v-if="successful" :toggle="toggleMessage" />
</template>

<script>
import axios from 'axios'
import SuccessMessage from '@/components/SuccessMessage.vue'
export default {
  components: {
    SuccessMessage
  },
  data() {
    return{
      name: '',
      description: '',
      selectedFile: '',
      Error: '',
      successful: false
    }
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
    },
    async OnUpload() {
      try{
      const fd = new FormData();
      fd.append('name', this.name)
      fd.append('description', this.description)
      if(this.selectedFile == null){
        // ..
      } else{
      fd.append('attachment',this.selectedFile, this.selectedFile.name)
      }

      let token = localStorage.getItem('token')
      let response = await axios.post('https://elbackendapp.azurewebsites.net/request/create/', fd, {headers: {
        "Authorization" : "Token " + token,
        'Content-Type': 'multipart/form-data'
      }})
        console.log(response)
        this.name = '',
        this.description = '',
        this.selectedFile = ''
        this.successful = true
      }
      catch(e) {
          if (this.name == '' || this.description == ''){
          this.Error = 'Please provide all details to create request.'
          }
    }
    },
    toggleMessage() {
      this.successful = !this.successful
    }
  }
}
</script>