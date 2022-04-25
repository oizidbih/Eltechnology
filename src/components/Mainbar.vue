<template>
    <div>
    <div class="bg-black h-16 w-full flex items-center flex-row justify-between">
        <div class=" ml-4 lg:ml-16">
            <img src="../assets/logo.jpg" class="h-10 w-16 lg:w-24 " alt="">
        </div>
        <div class="">
          <button
         class="w-20 text-sm mb-1 mr-1 text-white bg-black border-2 border-white p-0 sm:p-1 lg:text-base lg:font-normal lg:w-32 lg:mr-2 rounded-full "
          > <router-link to="/">Login </router-link>
            
          </button>
          <button class="mr-4 w-20 text-sm text-black bg-white p-0 sm:p-1 rounded-full lg:mr-16 lg:text-base lg:font-normal lg:w-32"><router-link to="/signupAs"
          >
            Signup
          </router-link>
          </button>
        </div>
    </div>
    <div class="h-1 bg-gray-300"></div>
  </div>
</template>