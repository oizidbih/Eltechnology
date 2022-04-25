<template>
<div>
    <Navbar />
    <MainHeading title="Create Requests" />
    <div class="flex justify-center my-auto w-full ">
            <CreateRequest />
    </div>
    <UserSidebar current='Create' />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import CreateRequest from '@/components/CreateRequest.vue'
import MainHeading from '@/components/MainHeading.vue'
import UserSidebar from '@/components/UserSidebar.vue'
export default {
    components: {
        Navbar,
        CreateRequest,
        MainHeading,
        UserSidebar
    }
}
</script>