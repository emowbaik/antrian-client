<template>
  <div class="flex bg-sky-400 w-screen h-screen overflow-y-auto">
      <div class="container mx-auto my-8 sm:w-full md:w-5/12 h-fit">
        <div class="bg-white p-4 rounded-md mx-auto w-10/12 h-fit">
          <form action="#" method="POST" @submit.prevent="login()" class="space-y-6">
            <div class="flex justify-between">
              <h2 class="mt-4 text-2xl font-bold tracking-tight text-gray-800">Register</h2>
              <img class="h-16" src="/apple-icon.png" alt="Your Company" />
            </div>
            <div>
              <label for="first_name" class="block text-xs font-medium text-gray-700">Nama Depan</label>
              <div class="mt-1">
                <input id="first_name" name="first_name" v-model="form.first_name" type="text" autocomplete="first_name" required="true" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-sky-400 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-sky-400 text-xs" />
              </div>
            </div>
            <div>
              <label for="last_name" class="block text-xs font-medium text-gray-700">Nama Belakang</label>
              <div class="mt-1">
                <input id="last_name" name="last_name" v-model="form.last_name" type="text" autocomplete="first_name" required="true" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-sky-400 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-sky-400 text-xs" />
              </div>
            </div>
            <div>
              <label for="phone" class="block text-xs font-medium text-gray-700">Nomor Handphone</label>
              <div class="mt-1">
                <input id="phone" name="phone" v-model="form.phone" type="text" autocomplete="phone" placeholder="Nomor yang terdaftar Whatsapp" required="true" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-sky-400 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-sky-400 text-xs" />
              </div>
            </div>
            <div class="space-y-1">
              <label for="password" class="block text-xs font-medium text-gray-700">Password</label>
              <div class="mt-1">
                <input id="password" name="password" v-model="form.password" type="password" autocomplete="current-password" required="true" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-sky-400 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-sky-400 text-xs" />
              </div>
            </div>
            <div class="space-y-1">
              <label for="password_confirm" class="block text-xs font-medium text-gray-700">Konfirmasi Password</label>
              <div class="mt-1">
                <input id="password_confirm" name="password_confirm" v-model="form.password_confirmation" type="password" autocomplete="current-password-confirm" required="true" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-sky-400 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-sky-400 text-xs" />
              </div>
            </div>
            <div class="space-y-1">
              <label for="kode_referral" class="block text-xs font-medium text-gray-700">Masukan Kode Refferal (Jika Ada)</label>
              <div class="mt-1">
                <input id="kode_referral" name="kode_referral" v-model="form.referral_code" type="text" autocomplete="current-password-confirm" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-sky-400 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-sky-400 text-xs" />
              </div>
            </div>
            <div class="flex items-center justify-between">
              <div class="text-xs">
                <a href="#/login" class="font-medium text-sky-400 hover:text-sky-400">Sudah Punya Akun?</a>
              </div>
            </div>
            <div class="flex justify-between">
              <button
                type="submit"
                class="w-full mt-2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-sky-400 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <PencilSquareIcon class="mr-2 flex-shrink-0 h-4 w-4" aria-hidden="true" />
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    <!-- <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-gray-800">
    </div> -->
  </div>
</template>
<script setup>
import { PencilSquareIcon } from "@heroicons/vue/24/outline";
import useAuth from '@/services/authentication'
import { reactive } from 'vue';
import { useRoute } from "vue-router";

const route = useRoute()

const form = reactive({
  first_name: null,
  last_name: null,
  phone: null,
  password: null,
  password_confirmation: null,
  referral_code: route.query != undefined ?  route.query.referral_code : null
})

const { doRegister } = useAuth()

function login(){
  doRegister({...form})
}

console.log(form.referral_code)

</script>
