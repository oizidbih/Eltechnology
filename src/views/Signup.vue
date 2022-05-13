<template>
<div>
    <Mainbar />
    <div class="flex justify-evenly ">
    <div class="bg-white w-full mx-8 px-6 lg:pt-6 lg:w-8/12 rounded-md my-16 flex lg:flex-row justify-between">
        <Signupform />
        <div class="w-24 p-1 lg:px-2 sm:w-36 md:w-40 lg:w-48 xl:w-72 lg:-mt-6 lg:-mr-4 ">
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