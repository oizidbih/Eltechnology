<template>
<div>
    <Navbar />
    <MainHeading title="Review Status" />
    <div class="flex justify-center items-center">
      <div class="sm:w-8/12 lg:w-10/12 flex justify-center rounded-md md:my-auto lg:my-auto">
        <ReviewStatus current='review' />
      </div>
    </div>
    <UserSidebar current='Review'  />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import MainHeading from '@/components/MainHeading.vue'
import UserSidebar from '@/components/UserSidebar.vue'
import ReviewStatus from '@/components/ReviewStatus.vue'
export default {
    components: {
        Navbar,
        ReviewStatus,
        MainHeading,
        UserSidebar
    }
}
</script>