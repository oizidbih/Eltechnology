<template>
     <div class="sm:ml-4 lg:block lg:mr-64 hidden flex flex-col">
      <div class="text-sm sm:text-md font-bold">Cost Models</div>
      <div class="bg-white p-4 h-96 rounded-md sm:rounded-lg scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-300 overflow-y-scroll ">
          <div class="block">
              <div class="p-2" v-for="model in costModels" :key='model'>
                <label class="flex items-center">
                  <input type="checkbox"/>
                  <span class="ml-2">{{ model }}</span>
                </label>
              </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
    costModels: ['Software Development/Customization', 'Application Install/ de-Install', 'Application Configuration', 'Application Licenses', 'Application Configuration', 'Application Support & Maintenance', 'Applications Integration', 'Application Migration', 'Application Operation', 'Application Hosting', 'Hardware Implementation', 'HW Support & Maintenance', 'Application Hosting', 'Hardware Implementation', 'HW Support & Maintenance']
    }
  }
}
</script>