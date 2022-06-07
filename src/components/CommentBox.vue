<template>
    <div
    class="
      flex
      items-center
      fixed
      overflow-hidden
      bg-black bg-opacity-25
      h-screen
      w-screen
      top-0
      left-0
    "
  >
  <div class="mx-auto bg-white p-1 rounded-md">
      <a href="#"
          ><i
            @click="toggle"
            class="fas fa-times text-PrimaryColor float-right mt-1 mr-2"
          ></i
        ></a>
    
      <div class="flex flex-col justify-center items-center p-5">
          <img src="../assets/message-circle.png" class="w-8 h-8" alt="">
           <textarea name="comment" id="" cols="30" rows="4" v-model="com"  class="rounded-lg mt-6 mx-auto border-2 border-gray-200" readonly></textarea>
      </div>
    

  </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: ["toggle"],
    data() {
      return{
      com : ''
    }
    },
    async mounted(){
      let requestNo = localStorage.getItem('requestNo')
      let token = localStorage.getItem('token')
      let comments = await axios.get('https://elbackendapp.azurewebsites.net//get-comment/' +  requestNo  +'/', {headers: {
        "Authorization": "Token " + token
      }})
      this.com = comments.data.comment
      console.log(comments.data.comment)
      localStorage.removeItem('requestNo')
    }
}
</script>