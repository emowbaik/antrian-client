<template>
  <div class="flex bg-sky-400">
    <div class="container mx-auto my-8 sm:w-full md:w-5/12 h-screen">
      <div class="bg-white p-4 rounded-md mx-auto w-10/12">
        <form action="#" method="POST" @submit.prevent="login" class="space-y-6">
          <div class="flex justify-between">
            <h2 class="mt-4 text-sm font-bold tracking-tight text-gray-800">Masukkan Kode OTP yang anda terima</h2>
            <img class="h-16" src="/apple-icon.png" alt="Your Company" />
          </div>
          <div class="mt-1">
            <input id="otp" name="otp" v-model="form.otp" type="number" autocomplete="username" required="true" class="block w-full text-center appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-sky-400 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-sky-400 text-xs" />
          </div>
          <div class="text-xs">
            <a :href="`#/otp/${props.phone}`" class="font-medium text-sky-400 hover:text-sky-400">Belum Menerima Kode OTP?</a>
          </div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-sky-400 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <PaperAirplaneIcon class="mr-2 flex-shrink-0 h-4 w-4" aria-hidden="true" />
            Kirim
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { PaperAirplaneIcon } from "@heroicons/vue/24/outline";
import useAuth from '@/services/authentication'
import { reactive, defineProps } from 'vue';

const props = defineProps(['phone'])
const form = reactive({
  otp: '',
  phone: props.phone,
})

const { checkOtp } = useAuth()
function login(){
  // console.log(form.otp, form.phone)
  checkOtp({...form})
}

</script>
