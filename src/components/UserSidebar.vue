<template>
    <div class="bg-black h-screen w-16 fixed top-16">
       <div>
        <router-link v-for="page in pages" :key="page" @click="page(page.name)" :to=page.path >
       <div :class=" [current == page.name ? 'border-l-2 border-white text-white mt-5 text-xs': 'text-gray-300 mt-5 text-sm']">
           <div class="flex items-center flex-col">
            <a href="#"><img :src="page.icon" class="h-6 w-6" alt=""></a>
            <p class="text-sm">{{ page.name }}</p>
           </div>
       </div>
        </router-link>
  <div class="text-white fixed bottom-0 flex items-center left-4">
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