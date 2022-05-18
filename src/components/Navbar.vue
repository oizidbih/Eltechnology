<template>
    <div class="bg-black h-16 w-full flex items-center flex-row justify-between sticky top-0">
        <div class=" ml-4 lg:ml-16">
            <img src="..\assets\logo.jpg" class="h-8 w-14 md:w-16" alt="">
        </div>
        <Dropdown />
    </div>
</template>

<script>
import Dropdown from '@/components/Dropdown.vue'
export default {
    components: {
        Dropdown
    }
}
</script>