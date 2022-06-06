<template>
    <div
    class="
      flex
      items-center
      fixed
      overflow-hidden
      bg-black bg-opacity-25
      h-screen
      w-screen
      top-0
      left-0
    "
  >
  <div class="mx-auto bg-white p-1 w-64 rounded-md">
      <div class="bg-green-500">
          <img class="mx-auto p-2" src="../assets/check-circle.png">
      </div>
      <div class="mx-auto text-center">
          <p class="my-2">Request created successfully.</p>
          <button @click="toggle" class="bg-green-500 rounded-lg px-4 text-white ml-auto mr-auto">Ok</button>
      </div>
    

  </div>

    </div>
</template>

<script>
export default {
    props: ["toggle"],
  
}
</script>