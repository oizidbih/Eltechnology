<template>
    <div class="h-screen w-screen bg-white p-4 md:hidden ">

        <div>
               <div class="flex flex-col justify-center items-center my-2">
            
               <ChangeDisplay />
               <p class="capitalize">{{ profileName[0] }}</p>

               </div>
              <router-link v-for="page in pages" :key='page' :to=page.path class="p-2 text-md text-black w-full opacity-75 hover:bg-gray-100 hover:rounded flex justify-between items-center">
                {{page.name}}
                <i class="fas fa-chevron-circle-right text-PrimaryColor"></i>
              </router-link>
              <hr>
              <router-view/>
              <button @click="GoToMain()" class="p-2 text-md text-black w-full opacity-75 hover:bg-gray-100 hover:rounded flex justify-between items-center">
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
      pages: [
        { name: 'Account & Settings', path: '/' },
        { name: 'Help & Support', path: '/' }
      ],
      profileName : []
    }
  },
  methods: {
    GoToMain () {
      this.$router.push('/')
    },
    GoMobileDrop () {
      this.$router.push('/logout')
    }
  },
  components: {
      ChangeDisplay
  },
  mounted() {
    let profile = localStorage.getItem('name')
    this.profileName.push(profile)
  }
 }
</script>