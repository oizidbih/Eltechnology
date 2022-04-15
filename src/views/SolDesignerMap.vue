<template>
<div>
    <Navbar />
    <MainHeading title="Mapping Request to Cost Models" />
    <div class="flex justify-center w-full mt-12">
      <div class="flex flex-col mr-24 ">
          <div>
              <label
              for="Request Name"
              class="block text-black text-md font-bold mb-1"
              >Request Name</label
            >
            <input
              type="text"
              class="shadow appearance-none border rounded w-128 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            />
      </div>
      <div>
          <label
          for="description"
          class="block text-black text-md font-bold mb-1"
          >Description</label
        >
        <textarea name="description" id="description" rows="10" class="shadow appearance-none border border-gray-200 rounded w-128 mx-auto p-3 leading-tight focus:outline-none focus:shadow-outline overflow-auto"></textarea>
      </div>

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
        <div>
          <button
          class="text-white bg-black p-2 w-40 rounded-md mt-6"
        >
          Save
        </button>
      </div>

  </div>

 <CostModels />

  </div>
    <DesignerSidebar current="Map" />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import CostModels from '@/components/CostModels.vue'
import MainHeading from '@/components/MainHeading.vue'
import DesignerSidebar from '@/components/DesignerSidebar.vue'
export default {
    components: {
        Navbar,
        CostModels,
        MainHeading,
        DesignerSidebar
    }
}
</script>