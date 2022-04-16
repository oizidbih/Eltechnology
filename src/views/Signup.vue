<template>
<div>
    <Mainbar />
    <div class="flex justify-center ">
    <div class="bg-white w-7/12 h-144 my-12 rounded-md flex flex-row justify-between">
        <Signupform />
        <div class="py-2 px-1">
          <div class="2xl:w-80 xl:w-64 lg:w-52 h-full">
            <img src="../assets/Signup.png" class="w-auto h-full" alt="Pattern">
          </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
import Mainbar from '@/components/Mainbar.vue'
import Signupform from '@/components/Signupform.vue'
export default {
    components: {
        Mainbar,
        Signupform
    }
}
</script>