<template>
  <div class="container mx-auto sm:w-full md:w-5/12 h-screen bg-white">
    <div class="mx-auto max-w-lg py-48">
      <div>
        <div class="text-center">
          <img
            class="mx-auto my-auto h-36 rounded-full"
            src="/awal.jpeg"
            alt="Your Company"
          />
          <!-- <h2 class="mt-4 text-xl font-bold text-black">Selamat Datang</h2> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import router from "@/router";
// import { onMounted } from 'vue'

const loadApp = () => {
  setTimeout(() => {
    router.push("/beranda");
  }, 3000);
};

// onMounted(() => {
loadApp();
// })
</script>
