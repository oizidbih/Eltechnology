<template>
<div>
    <Navbar />
    <MainHeading title="Create Requests" />
    <div class="flex justify-center my-auto w-full ">
        <div class="w-full flex items-center flex-row justify-center">
            <CreateRequest />
        <UserUpload/>
    </div>
    </div>
    <UserSidebar current='Create' />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import CreateRequest from '@/components/CreateRequest.vue'
import UserUpload from '@/components/UserUpload.vue'
import MainHeading from '@/components/MainHeading.vue'
import UserSidebar from '@/components/UserSidebar.vue'
export default {
    components: {
        Navbar,
        CreateRequest,
        UserUpload,
        MainHeading,
        UserSidebar
    }
}
</script>