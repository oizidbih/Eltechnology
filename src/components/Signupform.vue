<template>
    <div class="w-96 my-auto px-7 ">
            <h1 class="font-bold text-2xl mb-10">Create Account</h1>
            <div class="flex flex-row">
                <div class="">
                <label
            for="Fname"
            class="block text-black text-md font-bold mb-1"
            >First Name</label
          >
          <input
            type="text"
            placeholder="Enter First Name"
            class="shadow appearance-none border rounded w-64 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
          />
        </div>
        <div class="px-4">
            <label
        for="Lname"
        class="block text-black text-md font-bold mb-1"
        >Last Name</label
      >
      <input
        type="text"
        placeholder="Enter Last Name"
        class="shadow appearance-none border rounded w-64 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
      />
    </div>
            </div>
         
            <div class="flex flex-row">
              <div class="">
              <label
          for="Email"
          class="block text-black text-md font-bold mb-1"
          >Email</label
        >
        <input
          type="email"
          placeholder="Enter Email"
          class="shadow appearance-none border rounded w-64 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
        />
      </div>
      <div class="px-4">
          <label
      for="mobile"
      class="block text-black text-md font-bold mb-1"
      >Mobile Number</label
    >
    <input
    type="tel" name="mobile" id="mobile" placeholder="Enter your mobile number" pattern="[0-9]{4}-{0-9]{7}"
      class="shadow appearance-none border rounded w-64 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
    />
  </div>
          </div>
       
          <div class="flex flex-row">
            <div class="">
            <label
        for="password"
        class="block text-black text-md font-bold mb-1"
        >Password</label
      >
      <input
      type="password" name="password" id="password" placeholder="Enter password"
        class="shadow appearance-none border rounded w-64 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <p class="mb-4 text-xs text-gray-600">Use 8 or more characters with a mix of letters, numbers & symbols</p>
    </div>
    <div class="px-4">
        <label
    for="confirmPassword"
    class="block text-black text-md font-bold mb-1"
    >Confirm Password</label
  >
  <input
  type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password"
    class="shadow appearance-none border rounded w-64 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
  />
</div>
        </div>
     
        <div class="flex items-center">
          <div class="">
          <label
      for="Department"
      class="block text-black text-md font-bold mb-1"
      >Department</label
    >
    <select name="Department" id="Department" placeholder="Select" class="shadow border rounded w-64 mx-auto p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4">
    <option selected disabled >Select</option>
    <option value="1">OSS</option>
  </select>
    
  </div>
  <div v-if="$route.name === 'User'" >
    <router-link to="/create" >
    <button
    class="text-white bg-black p-2 w-40 rounded-full mt-6 ml-24"
  >
    Signup
  </button>
  </router-link>
</div>
 <div v-if="$route.name === 'Demand Manager'" >
    <router-link to="/evaluate" >
    <button
    class="text-white bg-black p-2 w-40 rounded-full mt-6 ml-24"
  >
    Signup
  </button>
  </router-link>
</div>
 <div v-if="$route.name === 'Solution Designer'" >
    <router-link to="/map" >
    <button
    class="text-white bg-black p-2 w-40 rounded-full mt-6 ml-24"
  >
    Signup
  </button>
  </router-link>
</div>
<div v-if="$route.name === 'Manager'" >
    <router-link to="/manager" >
    <button
    class="text-white bg-black p-2 w-40 rounded-full mt-6 ml-24"
  >
    Signup
  </button>
  </router-link>
</div>
      </div>
   
        
        </div>
</template>

