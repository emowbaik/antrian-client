<template>
  <div class="mx-auto mt-2 mb-8">
    <h2 class="flex items-center text-lg font-medium text-black">
      <ClipboardDocumentCheckIcon class=" h-6 w-6 mr-2"/> Daftar
    </h2>
    <dl class="grid grid-cols-1 gap-2 mt-4" v-if="tiket.total <= 0">
      <a href="" class="relative bg-sky-400 py-4 px-4 sm:px-6 shadow rounded-lg overflow-hidden">
        <p class="text-xs text-center font-semibold text-white">
          Anda belum melakukan transaksi hari ini
        </p>
      </a>
    </dl>
    <div class="mx-auto bg-white rounded-md mt-4" v-else>
      <ul role="list" class="divide-y divide-gray-200">
        <li v-for="item in tiket.data" :key="item.id">
          <a :href="`#/tiket/${item.uuid}`" class="block hover:bg-gray-50 border border-sky-200 rounded-md">
            <div class="px-2 py-2">
            <div class="text-xs flex">
              <p class="truncate text-xs font-medium text-sky-400">{{ item.mitra.nama }}</p>
            </div>
              <div class="flex items-center justify-between">
                <div class="text-xs mt-1">
                  <div class="flex items-center" v-show="item.status !== 'E'">
                    Antrian Nomor:
                    {{ item.posisi ?? 'Menunggu' }}
                  </div>
                  <div class="flex items-center mt-1">
                    {{ item.ref_nomor }}
                  </div>
                  <p class="text-gray-500 mt-1">
                    <time datetime="2020-01-07">{{ dateFormatId(item.tanggal) }}</time>
                  </p>
                </div>
                <div class="ml-2 flex flex-shrink-0">
                  <!-- <p v-if="item.status === 'P'" class="inline-flex rounded-full bg-yellow-100 px-2 text-sm font-semibold leading-5 text-yellow-800">Pending</p>
                  <p v-if="item.status === 'Q'" class="inline-flex rounded-full bg-blue-100 px-2 text-sm font-semibold leading-5 text-blue-800">Proses</p>
                  <p v-if="item.status === 'E'" class="inline-flex rounded-full bg-red-100 px-2 text-sm font-semibold leading-5 text-red-800">Batal</p>
                  <p v-if="item.status === 'D'" class="inline-flex rounded-full bg-green-100 px-2 text-sm font-semibold leading-5 text-green-800">Selesai</p> -->
                  <p v-if="item.status === 'P'" class="inline-flex rounded-full bg-yellow-100 px-2 text-lg font-semibold leading-5 text-yellow-800">Pending</p>
                  <p v-if="item.status === 'Q'" class="inline-flex rounded-full bg-blue-100 px-2 text-lg font-semibold leading-5 text-blue-800">Antri</p>
                  <p v-if="item.status === 'R'" class="inline-flex rounded-full bg-yellow-100 px-2 text-lg font-semibold leading-5 text-yellow-800">Proses</p>
                  <p v-if="item.status === 'E'" class="inline-flex rounded-full bg-red-100 px-2 text-lg font-semibold leading-5 text-red-800">Batal</p>
                  <p v-if="item.status === 'D'" class="inline-flex rounded-full bg-green-100 px-2 text-lg font-semibold leading-5 text-green-800">Selesai</p>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ClipboardDocumentCheckIcon } from '@heroicons/vue/24/outline';
import useTiket from '@/services/tiket';

const { tiket, userTiket } = useTiket()

userTiket(true)
</script>
