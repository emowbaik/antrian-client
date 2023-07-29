<template>
  <div class="mx-auto mt-2 mb-8">
    <h2 class="text-lg font-medium text-black flex items-center">
      <div v-html="mitra_kategori.kategori != null ? mitra_kategori.kategori.icon : ''" class="h-[32px] w-[32px] mr-2 flex items-center justify-center"></div>
      {{ mitra_kategori.kategori != null ? mitra_kategori.kategori.nama : ''}}
    </h2>
    <dl class="grid grid-cols-1 gap-2 mt-2">
      <div v-for="item in mitra_kategori.mitra" :key="item">
      <div v-if="item.status !== 0" class="bg-white rounded-md shadow-md p-2">
        <a :href="`#/mitra/`+ item.uuid" class="rounded-xl flex md:p-0">
          <div class="flex-none w-12 h-12 rounded-full overflow-hidden">
            <img class="w-12 h-12 rounded object-cover" :src="baseUrl+'/'+(item.image != null ? item.image : 'antrianglobal.png')" width="384" height="512">
          </div>
            <div class="w-full px-2 text-left space-y-4">
              <div class="">
                <p class="text-sm font-semibold">{{ item.nama }}</p>
                <div class="text-gray-500 text-xs">{{ item.alamat }}</div>
              </div>
            </div>
            <div class="text-sky-400">
              <!-- <p v-if="item.status == '0'" class="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">Review</p> -->
              <p v-if="item.status == '1'" class="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800" style="width: 98px;">Not Registered</p>
              <!-- <p v-if="item.status == '2'" class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">Register</p> -->
            </div>
            <div class="ml-2 text-sky-400" v-show="item.status == 2">
              <p v-if="item.is_open == '0'" class="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800">Tutup</p>
              <p v-if="item.is_open == '1'" class="inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-blue-800">Buka</p>
            </div>
          </a>
      </div>
    </div>
    </dl>
  </div>
</template>
<script setup>
import useKategori from '@/services/data/mitra/kategori'
import { defineProps } from "vue";

const props = defineProps(['uuid'])
const baseUrl = import.meta.env.VITE_API_URL
// const baseUrl = 'http://localhost:8000'
const { mitra_kategori, show } = useKategori()
show(props.uuid)

</script>
