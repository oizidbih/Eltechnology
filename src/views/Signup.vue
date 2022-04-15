<template>
<div>
    <Mainbar />
    <div class="flex justify-center ">
    <div class="bg-white w-7/12 h-144 my-12 rounded-md flex flex-row justify-between">
        <Signupform />
        <div class="h-144 w-80 p-2">
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