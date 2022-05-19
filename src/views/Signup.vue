<template>
<div>
    <Mainbar />
    <div class="flex justify-evenly ">
    <div class="bg-white sm:ml-6 pl-2 pr-6 lg:pt-6 w-full sm:w-8/12 2xl:w-7/12 rounded-md my-16 flex lg:flex-row justify-between">
        <Signupform />
        <div class="w-24 shrink p-1 w-64 sm:w-52 md:w-72 lg:-mt-6 -mr-6">
            <div class="w-full h-full">
            <img src="..\assets\Signup.png" class="w-full h-full" alt="Pattern">
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