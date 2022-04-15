<template>
<div>
    <Navbar />
    <MainHeading title="Evaluate Requests / Request Name" />
    <div class="flex justify-center my-auto w-full ">
        <div class="w-full flex items-center flex-row justify-center">
            <div class="p-6">
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
                for="description"
                class="block text-black text-md font-bold mb-1"
                >Description</label
              >
              <textarea name="description" id="description" rows="10" class="shadow appearance-none border border-gray-200 rounded w-128 mx-auto p-3 leading-tight focus:outline-none focus:shadow-outline overflow-auto"></textarea>
            </div>

            <div class="flex justify-between">
            <div>
                <label
                for="comments"
                class="block text-black text-md font-bold mb-1"
                >Comments</label
              >
              <textarea name="comments" id="comments" rows="6" class="shadow appearance-none border border-gray-200 rounded w-128 mx-auto p-3 leading-tight focus:outline-none focus:shadow-outline overflow-auto"></textarea>
            </div>
            <div class="flex flex-col ml-12">
                <div class="block">
                    <div class="mt-2">
                      <label class="inline-flex items-center">
                        <input type="checkbox"/>
                        <span class="ml-2">Return to User</span>
                      </label>
                    </div>
                  </div>
                  <div class="block">
                    <div class="mt-2">
                      <label class="inline-flex items-center">
                        <input type="checkbox"/>
                        <span class="ml-2">Assign to Solution Designer</span>
                      </label>
                    </div>
                  </div>
                
                
            <div class="flex flex-col items-center">
                <button
                class="text-white bg-black p-2 w-40 rounded-md mt-6"
              >
                Save
              </button>
            </div>
            </div>
        </div>
        </div>
            
            </div>
        </div>
    <DMsidebar />
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