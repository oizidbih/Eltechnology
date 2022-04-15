<template>
    <div class="w-96 my-auto ml-3 md:ml-4 lg:ml-auto lg:mr-auto">
            <h1 class="font-bold text-2xl mb-12">Signup As,</h1>
        <router-link to="/signup/user">
         <div class="px-2 text-sm text-white bg-black py-3 lg:px-6 w-11/12 rounded-md mt-6 flex justify-between">
             <div>
            <i class="fas fa-user mr-1"></i>
            User (General User)
        </div>
            <i class="fas fa-chevron-right mt-1"></i>
        </div>
        </router-link>
           
        <router-link to="/signup/Solution designer">
        <div class="px-2 text-sm text-white bg-black py-3 lg:px-6 w-11/12 rounded-md mt-6 flex justify-between">
            <div>
           <i class="fas fa-user mr-1"></i>
           Solution Designer
       </div>
           <i class="fas fa-chevron-right mt-1"></i>
       </div>
       </router-link>

    <router-link to="/signup/Demand Manager">
       <div class="px-2 text-sm text-white bg-black py-3 lg:px-6 w-11/12 rounded-md mt-6 flex justify-between">
        <div>
       <i class="fas fa-user mr-1"></i>
       Demand Manager
      
   </div>
    <i class="fas fa-chevron-right mt-1"></i>
       </div>
   </router-link>
   

      <router-link to="/signup/Manager">
   <div class="px-2 text-sm text-white bg-black py-3 lg:px-6 w-11/12 rounded-md mt-6 flex justify-between">
    <div>
   <i class="fas fa-user mr-1"></i>
   Manager
</div>
   <i class="fas fa-chevron-right mt-1"></i>
</div>
</router-link>
        </div>

</template>
