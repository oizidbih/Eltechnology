<template>
    <div>
        <Mainbar />
    <div class="flex justify-center ">
    <div class="w-full bg-white m-2 lg:w-7/12 lg:h-144 lg:my-12 rounded-md flex flex-row justify-between">
        <div class="w-20 ml-1 h-144 sm:w-64 sm:ml-4 lg:w-80 lg:ml-4 ">
            <img src='../assets/Login-pattern.png' class="w-full h-full" alt="Pattern">
        </div>
        <LoginForm />
    </div>
</div>
    </div>
</template>

<script>
import Mainbar from '@/components/Mainbar.vue'
import LoginForm from '@/components/LoginForm.vue'
export default {
    components: {
        Mainbar,
        LoginForm
    }
}
</script>