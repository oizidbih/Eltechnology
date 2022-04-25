<template>
<div>
    <Navbar />
    <MainHeading title="Evaluate Requests" />
    <div class="flex lg:justify-center items-center">
      <div class="lg:w-8/12 lg:w-10/12 flex justify-center rounded-md lg:my-auto">
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
                  <th scope="col" class="px-6 py-3 hidden md:block">Last Modified</th>
                  <th scope="col" class="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td
                    
                    class="px-6 py-4 hidden sm:block lg:mr-4"
                  >
                  31/02/2021
                  </td>
                  <td class="px-6 py-3">Access to OSS</td>
                  <td class="px-6 py-3 hidden sm:hidden lg:block">31/02/2021</td>
                  <td class="px-6 py-4">In Progress</td>
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
export default {
    components: {
        Navbar,
        MainHeading,
        ManagerSidebar
    }
}
</script>