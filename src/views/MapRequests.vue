<template>
<div>
    <Navbar />
    <MainHeading title="Map Requests to Cost Models" />
    <div class="flex justify-center items-center">
      <div class="lg:w-8/12 lg:w-10/12 flex justify-center rounded-md lg:my-auto">
        <div>
          <div class="p-2 bg-white sm:rounded-lg rounded-md lg:p-6 scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-300 overflow-y-scroll h-128 ml-0 my-0 lg:my-10 lg:ml-12 lg:w-full">
            <table
              class="w-screen lg:w-full text-md text-left text-gray-500 dark:text-gray-400 text-sm sm:text-base "
            >
            <div class="ml-6 sm:ml-0">
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
                <tr v-for="request in requests" :key="request"
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td
                    
                    class="px-6 py-4 hidden sm:block lg:mr-4"
                  >
                  {{ request.timestamp.slice(0, 10) }}
                  </td>
                  <td class="px-6 py-4">{{ request.name }}</td>
                  <td class="px-6 py-4 hidden sm:hidden lg:block">{{ request.last_modified.slice(0, 10) }}</td>
                  <td class="px-6 py-4">{{ request.status }}</td>
                  <td class="px-6 py-4 text-right">
                    <a
                      @click="editRequest(request.id)" href=""
                      class="font-medium text-white  mr-12 bg-black rounded-full py-1 px-6 sm:mr-12 lg:mr-3"
                      >Edit</a
                    >
                  </td>
                </tr>
              </tbody>
              </div>
            </table>
          </div>
        </div>
      </div>
    </div>
    <DesignerSidebar current="Map" />
    </div>
</template>

<script>
import axios from 'axios'
import Navbar from '@/components/Navbar.vue'
import MainHeading from '@/components/MainHeading.vue'
import DesignerSidebar from '@/components/DesignerSidebar.vue'

export default {
    components: {
        Navbar,
        MainHeading,
        DesignerSidebar
    },
  data() {
    return{
      requests: null,
    }
  },
   async mounted() {
     localStorage.removeItem('requestNo')
      let token = localStorage.getItem('token')
      await axios.get('http://127.0.0.1:8000/solution-designer/requests/', {headers: {
        "Authorization": "Token " + token
      }})
      .then(response => this.requests = response.data)
      .catch(error => {
        console.log(error);
    })
    },
    methods: {
      editRequest(req){

        this.$router.push('/map')
        localStorage.setItem('requestNo',req)
      }
    }
}
</script>