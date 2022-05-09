<template>

    <!-- <div class="block mr-16 relative cursor-pointer md:hidden" @click="GoMobileDrop" >
        <img src="..\assets\User.png" class='w-10 h-10 rounded-full border border-4 border-white' alt="">
    </div> -->
    <div class="mr-4 md:mr-16 relative cursor-pointer" @click="toggleDropdown">
          <img src="..\assets\User.png" class='w-10 h-10 rounded-full border border-4 border-white' alt="">
           <div v-if="showDropdown === true" class="absolute z-10 right-0 bg-white w-56 rounded-md mt-1 saturate shadow shadow-md rounded px-3 py-1">
               <div class="flex flex-col justify-center items-center my-2">
            
               <ChangeDisplay />
               <p>Username</p>

               </div>
              <router-link v-for="page in pages" :key='page' :to=page.path class="p-2 text-md text-black w-full opacity-75 hover:bg-gray-100 hover:rounded flex justify-between items-center">
                {{page.name}}
                <i class="fas fa-chevron-circle-right text-PrimaryColor"></i>
              </router-link>
              <hr>
              <router-view/>
              <button @click="logout" class="p-2 text-md text-black w-full opacity-75 hover:bg-gray-100 hover:rounded flex justify-between items-center">
                Logout
                <i class="fas fa-sign-out-alt text-PrimaryColor"></i>
              </button>
            </div>
    </div>
</template>

<script>
import ChangeDisplay from '@/components/ChangeDisplay.vue'
export default {
  data () {
    return {
      showDropdown: false,
      pages: [
        { name: 'Account & Settings', path: '/' },
        { name: 'Help & Support', path: '/' }
      ]
    }
  },
  mounted() {
    let user = localStorage.getItem('token');
    if(!user)
    {
      this.$router.push({name:'Login'})
    }
  },
  methods: {
    toggleDropdown () {
      this.showDropdown = !this.showDropdown
    },
    logout() {
      {
          localStorage.clear();
          this.$router.push({name:'Login'})
      }
    }
  },
  components: {
      ChangeDisplay
  }
}
</script>