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
  <div class="mx-auto bg-white p-1 rounded-md">
      <a href="#"
          ><i
            @click="toggle"
            class="fas fa-times text-PrimaryColor float-right mt-1 mr-2"
          ></i
        ></a>
    
      <div class="flex flex-col justify-center items-center p-5">
          <img src="../assets/message-circle.png" class="w-8 h-8" alt="">
           <textarea name="comment" id="" cols="30" rows="4"  class="rounded-lg mt-6 mx-auto border-2 border-gray-200" readonly></textarea>
      </div>
    

  </div>

    </div>
</template>

<script>
export default {
    props: ["toggle"],
}
</script>