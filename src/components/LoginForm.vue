<template>
  <div class="mx-4 sm:mr-10 md:mx-auto lg:mx-4 lg:w-96 xl:mr-16 my-auto">
    <h1 class="font-bold text-center text-xl sm:text-3xl lg:text-3xl mb-6 mr-6">
      Login
    </h1>
    <div>
      <label for="Email" class="block text-black text-md font-bold mb-1"
        >Email</label
      >
      <input
        type="text"
        placeholder="Enter Email"
        class="shadow appearance-none border rounded w-11/12 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
    </div>
    <div class="">
      <label for="Password" class="block text-black text-md font-bold mb-1"
        >Password</label
      >
      <input
        type="text"
        placeholder="Enter Password"
        class="shadow appearance-none border rounded w-11/12 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <a href="#" class="text-sm font-medium">Forget Password?</a>
    </div>

    <button class="text-white bg-black p-2 w-11/12 rounded-md mt-6">
      Login
    </button>
    <br>
    <a href="#" class="text-center mt-12"
      >New User? <span class="font-bold">Signup</span>
    </a>
  </div>
</template>
