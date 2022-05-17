<template>
    <div>
    <div class="bg-black h-16 w-full flex items-center flex-row justify-between">
        <div class=" ml-4 lg:ml-16">
            <img src="../assets/logo.jpg" class="h-8 w-14 md:w-16 " alt="">
        </div>
        <div class="">
          <router-link to="/">
          <button
         class="w-20 text-sm mb-1 mr-1 text-white bg-black border-2 border-white p-0 sm:p-1 lg:text-base lg:font-normal lg:w-32 lg:mr-2 rounded-full "
          >  Login
            
          </button> </router-link>
          <router-link to="/signupAs"
          >
          <button class="mr-4 w-20 text-sm text-black bg-white p-0 sm:p-1 rounded-full lg:mr-16 lg:text-base lg:font-normal lg:w-32">
            Signup
          
          </button>
          </router-link>
        </div>
    </div>
    <div class="h-1 bg-gray-300"></div>
  </div>
</template>