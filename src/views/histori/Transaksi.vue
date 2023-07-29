<template>
  <div class="mx-auto mt-2 mb-8">
    <h2 class="flex items-center text-lg font-medium text-black">
      <ClockIcon class="h-6 w-6 mr-2"/> Histori Transaksi
    </h2>
    <dl class="grid grid-cols-1 gap-2 mt-4" v-if="transaksi.total <= 0">
      <a href="" class="relative bg-sky-400 py-4 px-4 sm:px-6 shadow rounded-lg overflow-hidden">
        <p class="text-xs text-center font-semibold text-white">
          Anda belum melakukan transaksi
        </p>
      </a>
    </dl>
    <div class="mx-auto bg-white rounded-md mt-4">
      <ul role="list" class="divide-y divide-gray-200">
        <li v-for="item in transaksi.data" :key="item.id">
          <div class="block hover:bg-gray-50 border border-sky-200 rounded-md">
            <div class="px-2 py-2">
            <div class="text-xs flex">
              <p class="truncate text-xs font-medium text-sky-400">#{{ item.id }}</p>
            </div>
              <div class="flex items-center justify-between">
                <div class="text-xs mt-1">
                  <div class="flex items-center">
                    {{ item.keterangan }}
                  </div>
                  <p class="text-gray-500 mt-1">
                    <time datetime="2020-01-07">{{ dateTimeFormatId(item.created_at) }}</time>
                  </p>
                </div>
                <div class="ml-2 flex flex-shrink-0">
                  <p v-if="item.mutasi == 'I'" class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">+ Rp {{ vueNumberFormat(item.nominal) }}</p>
                  <p v-if="item.mutasi == 'O'" class="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">- Rp {{ vueNumberFormat(item.nominal) }}</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import useTransaksi from '@/services/transaksi'
import { ClockIcon } from '@heroicons/vue/24/outline';

const { transaksi, index, show } = useTransaksi()

index('all')
</script>
