<template>
  <div class="mx-auto mt-2">
    <h2 class="flex items-center text-lg font-medium text-black">
      <FingerPrintIcon class="h-6 w-6 mr-2"/> Profile
    </h2>
    <div class="bg-white p-4 rounded-md mt-4 h-fit">
      <form action="#" method="POST" @submit.prevent="update()" class="space-y-6">
        <!-- <div>
          <label for="referral_code" class="block text-xs font-medium text-gray-700">Kode Referral</label>
          <div class="mt-1">
            <input id="referral_code" readonly name="referral_code" v-model="form.referral_code" type="text" autocomplete="first_name" required="true" class="block w-full text-center appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-sky-400 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-sky-400 text-xs" />
          </div>
        </div> -->
        <div>
          <label for="phone" class="block text-xs font-medium text-gray-700">Nomor Handphone</label>
          <div class="mt-1">
            <input id="phone" name="phone" v-model="form.phone" type="text" autocomplete="phone" placeholder="Nomor yang terdaftar Whatsapp" required="true" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-sky-400 text-xs" />
          </div>
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
          <label for="rekening_bank" class="block text-xs font-medium text-gray-700">Bank</label>
          <div class="mt-1">
            <select id="rekening_bank" name="rekening_bank" v-model="form.rekening_bank" type="text" autocomplete="first_name" required="true" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-sky-400 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-sky-400 text-xs">
              <option v-for="item in bank">{{ item }}</option>
            </select>
          </div>
        </div>
        <div>
          <label for="rekening_nomor" class="block text-xs font-medium text-gray-700">Nomor Rekening</label>
          <div class="mt-1">
            <input id="rekening_nomor" name="rekening_nomor" v-model="form.rekening_nomor" type="text" autocomplete="first_name" required="true" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-sky-400 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-sky-400 text-xs" />
          </div>
        </div>
        <div>
          <label for="rekening_nama" class="block text-xs font-medium text-gray-700">Atas Nama</label>
          <div class="mt-1">
            <input id="rekening_nama" name="rekening_nama" v-model="form.rekening_nama"  type="text" autocomplete="first_name" required="true" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-sky-400 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-sky-400 text-xs" />
          </div>
        </div>

        <div class="space-y-1 text-center">
          <label for="phone" class="block text-xs font-medium text-red-700">Jika Ingin Merubah Password isi input dibawah ini </label>
        </div>
        <div class="space-y-1">
          <label for="password" class="block text-xs font-medium text-gray-700">Password</label>
          <div class="mt-1">
            <input id="password" name="password" v-model="form.password" type="password" autocomplete="current-password" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-sky-400 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-sky-400 text-xs" />
          </div>
        </div>
        <div class="space-y-1">
          <label for="password_confirm" class="block text-xs font-medium text-gray-700">Konfirmasi Password</label>
          <div class="mt-1">
            <input id="password_confirm" name="password_confirm" v-model="form.password_confirmation" type="password" autocomplete="current-password-confirm" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-sky-400 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-sky-400 text-xs" />
          </div>
        </div>
        <div class="flex justify-end ">
            <button
              type="submit"
              class="w-30 mt-2 flex rounded-lg justify-center py-2 px-4 border border-transparent shadow-sm text-xs font-medium text-white bg-sky-400 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <PencilSquareIcon class="mr-2 flex-shrink-0 h-4 w-4" aria-hidden="true" />
              Simpan
            </button>
          </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import useAuth from '@/services/authentication'
import { FingerPrintIcon, PencilSquareIcon } from '@heroicons/vue/24/outline';
import { watch, reactive } from 'vue'

const bank = [
  'MANDIRI',
  'BSI',
  'BNI',
  'BRI',
  'BCA',
  'DANAMON',
  'MAYBANK',
  'NIAGA',
  'PANIN',
  'SINAR MAS',
]
const { auth, getAuth, doUpdate } = useAuth()
const form = reactive({
  first_name: null,
  last_name: null,
  phone: null,
  rekening_bank: null,
  rekening_nama: null,
  rekening_nomor: null,
  password: null,
  password_confirmation: null
})

function update() {
  doUpdate({...form})
}

getAuth()

watch(auth, item =>{
  form.referral_code = item.referral_code
  form.first_name = item.first_name
  form.last_name = item.last_name
  form.phone = item.phone
  form.rekening_bank = item.rekening_bank
  form.rekening_nama = item.rekening_nama
  form.rekening_nomor = item.rekening_nomor
})


</script>
