<template>
    <div class="mt-6 md:mt-0 sticky bg-black w-screen bottom-0 lg:h-screen lg:w-16 lg:fixed md:fixed lg:top-16 overflow-x-hidden">
       <div class="flex justify-evenly sm:justify-around -mt-2 mb-1 items-center lg:flex-col">
       <router-link v-for="page in pages" :key="page" :to=page.path >
       <div :class=" [current == page.name ? 'border-b-2 border-white text-white mt-6 text-xs': 'text-gray-300 mt-5 text-sm']">
           <div class="flex items-center flex-col ">
            <a href="#"><img :src="page.icon" class="h-5 w-5 sm:h-6 sm:w-6" alt=""></a>
            <p class="text-xs sm:text-sm">{{ page.name }}</p>
           </div>
       </div>
        </router-link>
  <div class="hidden lg:text-white lg:fixed lg:bottom-0 lg:flex lg:items-center lg:left-4">
        <div class="flex items-center flex-col">
            <a href="#"><img src="../assets/help-circle.png" class="h-6 w-6" alt=""></a>
         <p class="text-sm">Help</p>
        </div>
    </div>
</div>
   </div>
</template>

<script>
export default {
    data () {
    return {
      pages: [
        { name: 'Create', path: '/create' , icon: require('../assets/pencil.png')},
        { name: 'Update', path: '/update', icon: require('../assets/edit.png') },
        { name: 'Review', path: '/review', icon: require('../assets/loader.png') }
      ],
    }
  },
  props: {
      current: String
  }
}
</script>