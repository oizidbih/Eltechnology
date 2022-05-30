<template>
    <div>
          <div class="p-2 bg-white sm:rounded-lg rounded-md lg:p-6 scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-300 overflow-y-scroll h-128 ml-0 my-0 lg:my-10 lg:ml-12 lg:w-full">
            <table
              class="w-full lg:w-full text-md text-left text-gray-500 dark:text-gray-400 text-center text-sm sm:text-base"
            >
              <thead
                class="text-md text-gray-700 dark:bg-gray-700 border-b dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3">Date</th>
                  <th scope="col" class="px-6 py-3">Request Name</th>
                  <th scope="col" class="pl-8 sm:pl-6 lg:pl-10 py-3">Feedback
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="request in requests" :key="request.id"
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td
                    
                    class="py-4"
                  >
                     {{ request.timestamp.slice(0, 10) }}
                  </td>
                  <td class="px-6 py-4 break-all">{{ request.name }}</td>
                  <td class="px-6 py-4 text-right">
                    <a
                      href="#"
                      @click="view(request.id)"
                      @click.prevent="toggleFeedback"
                      class="font-medium text-white bg-black rounded-full py-1 px-4 "
                      >View</a
                    >
                    <CommentBox v-if="feedback" :toggle="toggleFeedback"/>
                  </td>
                </tr>
               
              </tbody>
            </table>
          </div>
        </div>
</template>

<script>
import axios from 'axios'
import CommentBox from "@/components/CommentBox.vue"
export default {
  components:{
    CommentBox
  },
  data() {
    return{
      requests: null,
      feedback: false,
    }
  },
   mounted() {
      let token = localStorage.getItem('token')
      axios.get('http://127.0.0.1:8000/user/requests/', {headers: {
        "Authorization": "Token " + token
      }})
      .then(response => this.requests = response.data)
      .catch(error => {
        console.log(error);
    })
    },
    methods: {
       async view(req){        
        localStorage.setItem('requestNo',req)
      },
      toggleFeedback(){
        this.feedback = !this.feedback
      }
    }
}
</script>