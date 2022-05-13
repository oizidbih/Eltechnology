<template>
<div>
    <Mainbar />
    <div class="flex justify-center ">
    <div class="bg-white w-full mx-8 px-6 pt-6 lg:w-8/12 xl:w-8/12 rounded-md my-12 flex lg:flex-row justify-between">
        <Signupform />
        <div class="w-24 p-1 sm:w-36 md:w-40 lg:w-48 xl:w-72 lg:-mt-6 lg:-mr-4 ">
            <img src="..\assets\Signup.png" class="w-full h-full" alt="Pattern">
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