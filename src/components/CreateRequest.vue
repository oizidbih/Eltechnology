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
        <label class="text-white bg-black p-2 rounded-md mt-6">
          <input type="file"  @change="onFileSelected"/>
        </label>
        <button 
          class="mb-4 text-white bg-black py-2 px-4 rounded-md mt-12"
        >
          Send Requirements
        </button>
      </div>
    </div>
  </div>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return{
      name: '',
      description: '',
      selectedFile: null
    }
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
    },
    async OnUpload() {
      const fd = new FormData();
      fd.append('name', this.name)
      fd.append('description', this.description)
      fd.append('attachment',this.selectedFile, this.selectedFile.name)

      let token = localStorage.getItem('token')
      return await axios.post('http://127.0.0.1:8000/request/create/', fd, {headers: {
        "Authorization" : "Token " + token,
        'Content-Type': 'multipart/form-data'
      }})
      .then(res => {
        console.log(res)
        this.name = '',
        this.description = '',
        this.selectedFile = ''
      })
      .catch(error => {
        console.log(error);
    })
    }
  },
}
</script>