<template>
    <div class="h-20 w-screen overflow-hidden">
        <img src="..\assets\head-pattern.png" class="w-full h-full" alt="">
        <div class="capitalize relative -mt-8 w-full p-2 lg:px-40 bottom-6 text-black text-2xl font-bold leading-4">{{ title }}</div>
    </div>
</template>

<script>
export default {
    props: {
    title: String
  },
}
</script>