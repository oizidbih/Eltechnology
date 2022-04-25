<template>
<div>
    <Mainbar />
    <div class="flex justify-center ">
    <div class="bg-white w-full my-6 mx-8 p-6 lg:w-8/12 xl:w-8/12 lg:h-144 lg:my-12 rounded-md flex lg:flex-row justify-between">
        <Signupform />
        <div class="w-14 p-1 sm:w-28 md:w-36 lg:h-144 lg:w-56 xl:w-72 lg:-mt-6 lg:-mr-4 ">
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