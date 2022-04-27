<template>
    <div class="fixed bg-black w-screen bottom-0 lg:h-screen lg:w-16 lg:fixed md:fixed lg:top-16">
       <div class="flex justify-around -mt-2 mb-1 items-center lg:flex-col">
       <router-link v-for="page in pages" :key="page" :to=page.path >
       <div :class=" [current == page.name ? 'border-b-2 border-white lg:border-l-2 text-white mt-6 text-xs': 'text-gray-300 mt-5 text-sm']">
           <div class="flex items-center flex-col">
            <a href="#"><img :src="page.icon" class="h-6 w-6" alt=""></a>
            <p class="text-sm">{{ page.name }}</p>
           </div>
       </div>
        </router-link>
</div>
<div>
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
        { name: 'Evaluate', path: '/evaluate' , icon: require('../assets/check-circle.png')},
        { name: 'Assign', path: '/assign', icon: require('../assets/user-check.png') }
      ],
    }
  },
  props: {
      current: String
  }
}
</script>