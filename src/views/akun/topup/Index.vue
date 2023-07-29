<template>
  <div class="mx-auto mt-2">
    <h2 class="flex items-center text-lg font-medium text-black">
      <BanknotesIcon class="h-6 w-6 mr-2"/> Top Up
    </h2>
    <form action="#" @submit.prevent="deposit()" method="post" class="mt-4">
      <RadioGroup v-model="form.nominal" class="mt-2 mb-8">
        <RadioGroupLabel class="sr-only"> Nominal </RadioGroupLabel>
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-6">
          <RadioGroupOption as="template" v-for="option in nominalOptions" :key="option.name" :value="option.nominal" :disabled="!option.inStock" v-slot="{ active, checked }">
            <div :class="[option.inStock ? 'cursor-pointer focus:outline-none' : 'opacity-25 cursor-not-allowed', active ? 'ring-2 ring-offset-2 ring-sky-500' : '', checked ? 'bg-sky-400 border-transparent text-white hover:bg-sky-700' : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50', 'border rounded-md py-3 px-3 flex items-center justify-center text-xs font-bold uppercase sm:flex-1']">
              <RadioGroupLabel as="span">{{ option.name }}</RadioGroupLabel>
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
      <div class="flex justify-end">
        <button type="submit" class="w-30 flex items-center justify-center bg-sky-400 p-3 text-white text-xs rounded-md">
          <CreditCardIcon class="h-6 w-6 mr-2" />
          Pilih Pembayaran
        </button>
      </div>
    </form>
  </div>
  <div class="mx-auto bg-white rounded-md mt-4">
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="item in deposits.data" :key="item.id">
        <a @click="depositDetail(item.snap_token)" class="block hover:bg-gray-50 border border-sky-200 rounded-md">
          <div class="px-2 py-2">
          <div class="text-xs flex">
            <p class="truncate text-xs font-medium text-sky-400">#{{ item.nomor }}</p>
          </div>
            <div class="flex items-center justify-between">
              <div class="text-xs mt-1">
                <div class="flex items-center">
                  Rp {{ vueNumberFormat(item.nominal) }}
                </div>
                <p class="text-gray-500 mt-1">
                  <time datetime="2020-01-07">{{ dateTimeFormatId(item.created_at) }}</time>
                </p>
              </div>
              <div class="ml-2 flex flex-shrink-0">
                <p v-if="item.payment_status == '2'" class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">Selesai</p>
                <p v-if="item.payment_status == '1'" class="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800">Pending</p>
                <p v-if="item.payment_status == '3'" class="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">Expired</p>
                <p v-if="item.payment_status == '4'" class="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">Batal</p>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script setup>
import axios from '@/services/axios'
import router from '@/router'
import useAuth from '@/services/authentication'
import { onMounted, reactive, ref } from 'vue'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { BanknotesIcon, CreditCardIcon } from '@heroicons/vue/24/outline'

const { getAuth, auth } = useAuth()

onMounted(()=>{
  getAuth(),
  listDeposit()
})
const form = reactive({
  nominal: 20000
})
const nominalOptions = [
  { nominal: 20000, name: '20.000', inStock: true },
  { nominal: 25000, name: '25.000', inStock: true },
  { nominal: 50000, name: '50.000', inStock: true },
  { nominal: 100000, name: '100.000', inStock: true },
  { nominal: 500000, name: '500.000', inStock: true },
  { nominal: 1000000, name: '1.000.000', inStock: true },
]
const deposits = ref([])
const listDeposit = async () => {
  const response = await axios.get('/api/deposit?is_member=true')
  deposits.value = await response.data
}
const deposit = async () => {
  const response = await axios.post('/api/deposit', {...form})
  await window.snap.pay(response.data, {
    onSuccess: function(result){
      /* You may add your own implementation here */
      alert("Pembayaran Berhasil!");
      router.push('#/akun/top-up')
    },
    onPending: function(result){
      /* You may add your own implementation here */
      alert("Menunggu Pembayaran Anda!");
    },
    onError: function(result){
      /* You may add your own implementation here */
      alert("Pembayaran Gagal!");
      router.push('#/akun/top-up')
    },
    onClose: function(){
      alert('Anda menutup jendela tanpa menyelesaikan pembayaran');
    }
  })
  await listDeposit()
}
const depositDetail = async (token) => {
  await window.snap.pay(token, {
    onSuccess: function(result){
      /* You may add your own implementation here */
      alert("Pembayaran Berhasil!");
      router.push('/akun/top-up')
    },
    onPending: function(result){
      /* You may add your own implementation here */
      // alert("Menunggu Pembayaran Anda!");
      router.push('/akun/top-up')
    },
    onError: function(result){
      /* You may add your own implementation here */
      alert("Pembayaran Gagal!");
      router.push('/akun/top-up')
    },
    onClose: function(){
      router.push('/akun/top-up')
    }
  })
  await listDeposit()
}
</script>
