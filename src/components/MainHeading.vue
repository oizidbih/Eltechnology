<template>
    <div class="h-20 w-full overflow-hidden relative">
        <img src="..\assets\head-pattern.png" class="w-full h-full" alt="">
        <div class="absolute w-full py-2 px-40 bottom-6 text-black text-2xl font-bold leading-4">{{ title }}</div>
    </div>
</template>

<script>
export default {
    props: {
    title: String
  },
}
</script>