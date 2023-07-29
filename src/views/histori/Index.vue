<template>
  <div class="mx-auto mt-2">
    <h2 class="flex items-center text-lg font-medium text-black">
      <ClockIcon class="h-6 w-6 mr-2"/> Histori
    </h2>
    <div class="grid grid-cols-2 gap-4 mt-2 mb-2 place-items-center w-full">
      <div class="bg-gray-100 shadow p-2 rounded-md w-full">
        <a href="#/histori/transaksi" class="inline-block text-black justify-center text-center w-full rounded-md py-2 px-2">
          <DocumentTextIcon class="h-12 w-12 mx-auto"/>
          <div class="mt-1 text-xs">Transaksi</div>
        </a>
        </div>
        <div class="bg-gray-100 shadow p-2 rounded-md w-full">
        <a href="#/histori/tiket" class="inline-block text-black justify-center text-center w-full rounded-md py-2 px-2">
          <ClipboardDocumentCheckIcon class="h-12 w-12 mx-auto"/>
          <div class="mt-1 text-xs">Daftar</div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ClockIcon, DocumentTextIcon, ClipboardDocumentCheckIcon } from '@heroicons/vue/24/outline';
</script>
