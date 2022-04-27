<template>
    <div>
            <div class="relative p-2 bg-white sm:rounded-lg rounded-md lg:p-6 scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-300 overflow-y-scroll absolute h-128 ml-0 my-0 lg:my-10 lg:ml-12 lg:w-full">
              <table
               class="w-screen lg:w-full text-md text-left text-gray-500 dark:text-gray-400 "
              >
                <thead
                  class="text-md text-gray-700 dark:bg-gray-700 border-b dark:text-gray-400"
                >
                  <tr>
                  <th scope="col" class="px-6 py-3 hidden sm:block lg:mr-4">Date</th>
                  <th scope="col" class="px-6 py-3">Request Name</th>
                  <th scope="col" class="px-6 py-3 hidden sm:hidden lg:block">Last Modified</th>
                  <th scope="col" class="px-6 py-3">Status</th>
                  <th scope="col" class="px-12 sm:px-10 md:pl-10 lg:px-6 py-3">Action
                  </th>
                </tr>
                </thead>
                <tbody>
                  <tr v-for="request in requests" :key="request.id"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td
                      
                      class="px-6 py-4 hidden sm:block lg:mr-4"
                    >
                    {{ request.timestamp.slice(0, 10) }}
                   </td>
                  <td class="px-6 py-3">{{ request.name }}</td>
                  <td class="px-6 py-3 hidden sm:hidden lg:block">{{ request.last_modified.slice(0, 10) }}</td>
                  <td class="px-6 py-4">{{ request.status }}</td>
                  <td class="py-4 text-right">
                    <router-link
                      to="/edit"
                      class="font-medium text-white  mr-12 bg-black rounded-full py-1 px-6 sm:mr-12 lg:mr-3"
                      >Edit</router-link
                    >
                  </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return{
      requests: ''
    }
  },
  mounted() {
    let status = localStorage.getItem('status')
    let token = localStorage.getItem('token')
    if (status == 'Demand Manager'){
      axios.get('http://127.0.0.1:8000/requests/' ,{headers: {
        "Authorization": "Token " + token
      }})
       .then(response => this.requests = response.data)
      .catch(error => {
        console.log(error);
    })
    }
  }
}
</script>