<template>
  <div class="mx-auto mt-2">
    <h2 class="text-lg font-medium text-gray-900">Pendaftaran Mitra</h2>
    <div class="pt-4">
      <form @submit.prevent="save()" method="POST" enctype="multipart/form-data">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-6">
                <label for="kategori" class="block text-xs font-medium text-gray-700"
                  >Kategori</label
                >
                <select
                  id="kategori"
                  v-model="form.mitra_kategori_id"
                  name="kategori"
                  class="capitalize mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xs"
                >
                  <option v-for="item in mitra_kategori" :value="item.id">
                    {{ item.nama }}
                  </option>
                </select>
              </div>
              <div class="col-span-6 sm:col-span-6">
                <label for="nama" class="block text-xs font-medium text-gray-700"
                  >Nama</label
                >
                <input
                  type="text"
                  v-model="form.nama"
                  name="nama"
                  id="nama"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-xs border-gray-300 rounded-md"
                />
              </div>
              <div class="col-span-6 sm:col-span-6">
                <label for="kontak" class="block text-xs font-medium text-gray-700"
                  >Kontak</label
                >
                <input
                  type="text"
                  v-model="form.kontak"
                  name="kontak"
                  id="kontak"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-xs border-gray-300 rounded-md"
                />
              </div>
              <div class="col-span-6 sm:col-span-6">
                <label for="alamat" class="block text-xs font-medium text-gray-700"
                  >Alamat</label
                >
                <textarea
                  v-model="form.alamat"
                  name="alamat"
                  id="alamat"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-xs border-gray-300 rounded-md"
                />
              </div>
              <div class="col-span-6 sm:col-span-6">
                <label for="kontak" class="block text-xs font-medium text-gray-700"
                  >Kota</label
                >
                <input
                  type="text"
                  v-model="form.kota"
                  name="kota"
                  id="kota"
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-xs border-gray-300 rounded-md"
                />
              </div>
              <div class="col-span-6 sm:col-span-6">
                <label for="photo" class="block text-xs font-medium text-gray-900">Foto </label>
                <div class="mt-1">
                  <div class="flex items-center">
                    <div v-if="form.preview" class="mx-auto w-full">
                      <img class="h-48 mx-auto rounded-md" :src="form.preview" alt="" v-if="form.preview"/>
                    </div>
                    <div v-else class="mx-auto w-full">
                      <img class="h-48 mx-auto rounded-md" :src="baseUrl+'/'+form.image" alt="" v-if="form.image"/>
                      <div class="rounded-md overflow-hidden bg-gray-100" v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-48 mx-auto text-gray-300">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <label for="image" class="flex justify-center border w-full border-sky-300 mt-3 px-2 py-2 bg-white text-xs rounded-md focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                    <ArrowUpTrayIcon class="mr-2 text-center h-4 w-4" aria-hidden="false" />
                    <span>Upload Foto</span>
                    <input id="image" name="image" type="file" class="sr-only" @change="getImage($event)"/>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 sm:px-6">
            <div class="flex justify-between">
              <div>
                <!-- <button
                  type="button"
                  @click="destroyMitra(props.mitra)"
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-red-900 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                >
                  <TrashIcon class="mr-2 h-4 w-4" aria-hidden="false" />
                  Hapus
                </button> -->
              </div>
              <div class="flex">
                <router-link
                  :to="`/akun/mitra`"
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-gray-900 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                >
                  <ChevronLeftIcon class="mr-2 h-4 w-4" aria-hidden="false" />
                  Kembali
                </router-link>
                <button
                  type="submit"
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-sky-400 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 ml-2"
                >
                  <PencilSquareIcon class="mr-2 h-4 w-4" aria-hidden="false" />
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import useMitra from "@/services/data/mitra";
import useMitraKategori from "@/services/data/mitra/kategori";
import { ChevronLeftIcon, PencilSquareIcon, ArrowUpTrayIcon } from "@heroicons/vue/24/outline";
import { reactive } from "vue";

const getImage = ($event) =>{
    const target = $event.target
    form.image = target.files[0];
    form.preview = URL.createObjectURL($event.target.files[0]);
  }

const baseUrl = import.meta.env.VITE_API_URL
// const baseUrl = 'http://localhost:8000'
const { store } = useMitra();
const { mitra_kategori, option } = useMitraKategori();
const form = reactive({
  status: 0,
  mitra_kategori_id: "",
  nama: "",
  kontak: "",
  alamat: "",
  kota: "",
  image: "",
  preview: "",
});
const save = async () => {
  const formData = new FormData();
  formData.append('status', 0)
  formData.append('mitra_kategori_id', form.mitra_kategori_id)
  formData.append('nama', form.nama)
  formData.append('kontak', form.kontak)
  formData.append('alamat', form.alamat)
  formData.append('kota', form.kota)
  formData.append('image_mitra', form.image)
  await store(formData);
};

option()
</script>
