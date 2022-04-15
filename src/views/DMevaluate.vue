<template>
<div>
    <Navbar />
    <MainHeading title="Evaluate Requests" />
    <div class="flex justify-center items-center">
      <div class="w-10/12 flex justify-center rounded-md my-auto">
        <Evaluate />
      </div>
    </div>
    <DMsidebar current="Evaluate" />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import MainHeading from '@/components/MainHeading.vue'
import Evaluate from '@/components/Evaluate.vue'
import DMsidebar from '@/components/DMsidebar.vue'

export default {
    components: {
        Navbar,
        Evaluate,
        MainHeading,
        DMsidebar
    }
}
</script>