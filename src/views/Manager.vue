<template>
<div>
    <Navbar />
    <MainHeading title="Evaluate Requests" />
    <div class="flex lg:justify-center items-center">
      <div class="lg:w-8/12 lg:w-10/12 flex justify-center rounded-md lg:my-auto">
        <div>
          <div class="p-2 bg-white sm:rounded-lg rounded-md lg:p-6 scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-300 overflow-y-scroll h-128 ml-0 my-0 lg:my-10 lg:ml-12 lg:w-full">
            <table
              class="w-screen lg:w-full text-md text-left text-gray-500 dark:text-gray-400 "
            >
              <thead
                class="text-md text-gray-700 dark:bg-gray-700 border-b dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3 hidden sm:block lg:mr-4">Date</th>
                  <th scope="col" class="px-6 py-3">Request Name</th>
                  <th scope="col" class="px-6 py-3 hidden md:block">Last Modified</th>
                  <th scope="col" class="px-6 py-3">Status</th>
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
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <ManagerSidebar current='Evaluate'  />
    
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import MainHeading from '@/components/MainHeading.vue'
import ManagerSidebar from '@/components/ManagerSidebar.vue'
import axios from 'axios'
export default {
    components: {
        Navbar,
        MainHeading,
        ManagerSidebar
    },
    data() {
    return{
      requests: ''
    }
  },
  mounted() {
    let status = localStorage.getItem('status')
    let token = localStorage.getItem('token')
    if (status == 'Manager'){
      axios.get('https://elbackendapp.azurewebsites.net//requests/' ,{headers: {
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