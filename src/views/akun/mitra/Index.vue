<template>
  <div class="mx-auto mt-4">

    <div class="grid grid-cols-2">
  <div class="flex justify-start text-lg font-medium text-black">
    <div class=""><UserPlusIcon class="h-6 w-6 mr-2"/></div>
    <div class="">Pendaftaran Mitra</div>
  </div>
  <div class="flex justify-end">
    <a href="#/akun/mitra/create">
    <div class="text-3xl mr-3 font-semibold text-black">+</div>
  </a>
  </div>
</div>
    <dl class="grid grid-cols-1 gap-2 mt-2">
      <div v-for="item in mitra" :key="item">
      <div class="bg-white rounded-md shadow-md p-2">
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
              <div class="text-sky-400 text-center">
                <p v-if="item.status == '0'" class="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">Review</p>
                <p v-if="item.status == '1'" class="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">Not Registered</p>
                <!-- <p v-if="item.status == '2'" class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">Registered</p> -->
              </div>
        </a>
        <div class="text-gray-800 text-lg text-center">{{ item.kode }}</div>
      </div>
    </div>
    </dl>
  </div>
</template>
<script setup>
import { UserPlusIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue';
import axios from '@/services/axios'

const baseUrl = import.meta.env.VITE_API_URL
// const baseUrl = 'http://127.0.0.1:8000'
const mitra = ref([])
const listMitra = async () => {
  const response = await axios.get('/api/panel/mitra?is_member=true')
  mitra.value = await response.data
}

listMitra()
</script>
