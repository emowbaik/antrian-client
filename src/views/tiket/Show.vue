<template>
  <div class="mx-auto mt-2 mb-8">
    <h2 class="text-lg font-medium text-gray-900">Daftar</h2>
    <div class="overflow-hidden bg-white shadow sm:rounded-lg mt-4">
      <div class="border-t border-gray-200">
        <dl>
          <div class="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-xs font-medium text-gray-500">Untuk Tanggal Antrian</dt>
            <dd class="mt-1 text-xs text-gray-900 sm:col-span-2 sm:mt-0">{{ dateFormatId(tiket.tanggal) }}</dd>
          </div>
          <div class="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-xs font-medium text-gray-500">Posisi</dt>
            <dd class="mt-1 text-xs text-gray-900 sm:col-span-2 sm:mt-0">{{ tiket.posisi ?? '-' }}</dd>
          </div>
          <div class="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-xs font-medium text-gray-500">Kode</dt>
            <dd class="mt-1 text-xs text-gray-900 sm:col-span-2 sm:mt-0">{{ tiket.ref_nomor ?? '-' }}</dd>
          </div>
          <div class="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-xs font-medium text-gray-500">Nama Mitra</dt>
            <dd class="mt-1 text-xs text-gray-900 sm:col-span-2 sm:mt-0">{{ tiket.mitra != null ? tiket.mitra.nama : '' }}</dd>
          </div>
          <div class="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-xs font-medium text-gray-500">Kontak Mitra</dt>
            <dd class="mt-1 text-xs text-gray-900 sm:col-span-2 sm:mt-0">{{ tiket.mitra != null ? tiket.mitra.kontak : '' }}</dd>
          </div>
          <div class="bg-white px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-xs font-medium text-gray-500">Status</dt>
            <dd class="mt-1 text-xs text-gray-900 sm:col-span-2 sm:mt-0 text-right">
              <p v-if="tiket.status === 'P'" class="inline-flex rounded-full bg-yellow-100 px-2 text-lg font-semibold leading-5 text-yellow-800">Pending</p>
              <p v-if="tiket.status === 'Q'" class="inline-flex rounded-full bg-blue-100 px-2 text-lg font-semibold leading-5 text-blue-800">Antri</p>
              <p v-if="tiket.status === 'R'" class="inline-flex rounded-full bg-yellow-100 px-2 text-lg font-semibold leading-5 text-yellow-800">Proses</p>
              <p v-if="tiket.status === 'E'" class="inline-flex rounded-full bg-red-100 px-2 text-lg font-semibold leading-5 text-red-800">Batal</p>
              <p v-if="tiket.status === 'D'" class="inline-flex rounded-full bg-green-100 px-2 text-lg font-semibold leading-5 text-green-800">Selesai</p>
            </dd>
          </div>
          <!-- <div class="bg-gray-50 px-2 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-xs font-medium text-gray-500">Whatsapp</dt>
            <dd class="mt-1 text-xs text-gray-900 sm:col-span-2 sm:mt-0">08000000000</dd>
          </div> -->
        </dl>

      </div>
    </div>
    <!-- <div v-show="tiket.status === 'P'">
      <a @click="acceptTiket(tiket.uuid)" class="bg-green-600 flex justify-center items-center text-white mt-2 px-6 py-4 text-sm font-medium rounded-md">
        <CheckIcon class="flex-shrink-0 mr-2 h-6 w-6" aria-hidden="true" />
        <span class="truncate">Accept</span>
      </a>
      <a @click="rejectTiket(tiket.uuid)" class="bg-red-600 flex justify-center items-center text-white mt-2 px-6 py-4 text-sm font-medium rounded-md">
        <XMarkIcon class="flex-shrink-0 mr-2 h-6 w-6" aria-hidden="true" />
        <span class="truncate">Reject</span>
      </a>
    </div>
    <div v-show="tiket.status === 'Q'">
      <a @click="doneTiket(tiket.uuid)" class="bg-green-600 flex justify-center items-center text-white mt-2 px-6 py-4 text-sm font-medium rounded-md">
        <CheckIcon class="flex-shrink-0 mr-2 h-6 w-6" aria-hidden="true" />
        <span class="truncate">Selesai</span>
      </a>
    </div> -->
  </div>
</template>
<script setup>
// import { CheckIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import useTiket from '@/services/tiket'
import { defineProps } from 'vue';

const props = defineProps(['uuid'])
const { tiket, showTiket } = useTiket()
showTiket(props.uuid)
</script>
