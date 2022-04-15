<template>
<div>
    <Navbar />
    <MainHeading title="Assign Solution Designers" />
    <div class="flex justify-center w-full ">
        <div class="w-full flex flex-row justify-center">
            <div class="p-16">
            <div>
                <label
            for="RequestName"
            class="block text-black text-md font-bold mb-1"
            >Request Name</label
          >
          <input
            type="text"
            class="shadow appearance-none border rounded w-128 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6">
            </div>
        
            <div>
                <label
                for="Designer"
                class="block text-black text-md font-bold mb-1"
                >Solution Designer</label
              >
              <select name="Designer"  class="shadow border rounded w-128 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6">
                  <option selected disabled>Select Solution Designer</option>
              </select>
            </div>
        </div>
        <div class="flex flex-col">
        <div class="flex bg-white flex-col items-center rounded-xl h-96 w-80 mt-10">
            <div class="m-24">
            <div class="flex items-center mb-3">
            <img src="../assets/message-circle.png" class="ml-2 inline" alt="">
            <span class="">Comments</span>
        </div>
        <div class="w-56">
            <textarea name="comments" id="comments" rows="6" class="shadow appearance-none border border-gray-200 rounded w-full mx-auto p-3 leading-tight focus:outline-none focus:shadow-outline overflow-auto"></textarea>
        </div>
    </div>
    </div>
    <div class="flex flex-col items-center">
        <button
        class="text-white bg-black p-2 w-40 rounded-full mt-6"
      >
        Save
      </button>
    </div>
    </div>
</div>
    </div>
    <DMsidebar current="Assign" />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import MainHeading from '@/components/MainHeading.vue'
import DMsidebar from '@/components/DMsidebar.vue'

export default {
    components: {
        Navbar,
        MainHeading,
        DMsidebar
    }
}
</script>