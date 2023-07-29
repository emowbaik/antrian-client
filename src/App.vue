<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'

const midtransConfig = document.createElement("script");

midtransConfig.setAttribute("src", import.meta.env.VITE_MIDTRANS_URL)
midtransConfig.setAttribute("data-cliet-key", import.meta.env.VITE_MIDTRANS_CLIENTKEY)
document.head.appendChild(midtransConfig);
</script>
