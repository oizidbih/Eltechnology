<template>
<div>
    <Navbar />
    <MainHeading title="Update Requests" />
    <div class="flex justify-center items-center">
      <div class="lg:w-8/12 lg:w-10/12 flex justify-center rounded-md lg:my-auto">
        <div>
          <Update />
        </div>
      </div>
    </div>
    <UserSidebar current="Update" />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Update from '@/components/Update.vue'
import MainHeading from '@/components/MainHeading.vue'
import UserSidebar from '@/components/UserSidebar.vue'
export default {
    name: 'update',
    components: {
        Navbar,
        Update,
        MainHeading,
        UserSidebar
    }
}
</script>