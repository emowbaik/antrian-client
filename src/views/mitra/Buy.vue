<template>
  <h2 class="flex items-center text-lg font-medium text-black">
    <ClipboardDocumentCheckIcon class="h-6 w-6 mr-2" />Daftar Disini
  </h2>
  <div class="mx-auto mt-2">
    <div class="bg-white rounded-md shadow-md p-2 my-2">
      <div class="rounded-xl md:p-0">
        <div class="w-full p-2 text-left space-y-4">
          <div class="">
            <div class="text-sm font-semibold">Lokasi :</div>
            <div class="text-lg font-semibold">{{ mitra.nama }}</div>
            <div class="text-gray-500 text-xs">{{ mitra.alamat }}</div>
            <div class="text-sm text-sky-400 text-right">
              Rp. {{ vueNumberFormat(mitra.harga_tiket) }}/Daftar
            </div>
            <div class="mt-2 text-lg text-gray-800 text-center">
              Tanggal {{ dateFormatId() }}
            </div>
            <!-- <div class="text-sky-400 text-right">
                <p v-if="mitra.status == '0'" class="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">Not Registered</p>
                <p v-if="mitra.status == '1'" class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">Registered</p>
              </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pt-4">
    <form @submit.prevent="save()" method="POST">
      <div class="shadow overflow-hidden sm:rounded-md">
        <div class="px-4 py-5 bg-white sm:p-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-6">
              <label for="nama" class="block text-xs font-medium text-gray-700"
                >Nama pasien</label
              >
              <input
                type="text"
                v-model="form.atas_nama"
                autofocus
                name="nama"
                id="nama"
                required
                placeholder="Nama pasien"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-xs border-gray-300 rounded-md"
              />
            </div>
            <div class="col-span-6 sm:col-span-6">
              <label
                for="catatan"
                class="block text-xs font-medium text-gray-700"
                >Catatan atau keluhan</label
              >
              <textarea
                v-model="form.catatan"
                autofocus
                name="catatan"
                id="catatan"
                required
                placeholder="Catatan atau keluhan"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-xs border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <!-- <div class="px-4 py-3 bg-gray-50 sm:px-6">
          <div class="flex justify-between">
            <div></div>
            <div class="flex">
              <button
                type="submit"
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-sky-400 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 ml-2"
              >
                <CheckIcon class="mr-2 h-4 w-4" aria-hidden="false" />
                Bayar
              </button>
            </div>
          </div>
        </div> -->
      </div>
    </form>
  </div>
  <a
    @click="save"
    class="bg-sky-400 flex justify-center items-center text-white mt-4 px-6 py-4 text-sm font-medium rounded-md"
  >
    <ClipboardDocumentCheckIcon
      class="flex-shrink-0 -ml-1 mr-3 h-6 w-6"
      aria-hidden="true"
    />
    <span class="truncate">Daftar</span>
    <!-- <span v-if="item.count" :class="[item.current ? 'bg-gray-50' : 'bg-gray-200 text-gray-600', 'ml-auto inline-block py-0.5 px-3 text-xs rounded-full']">{{ item.count }}</span> -->
  </a>
</template>
<script setup>
import useMitra from "@/services/data/mitra";
import useTiket from "@/services/tiket";
import { ClipboardDocumentCheckIcon } from "@heroicons/vue/24/outline";
import { defineProps, reactive, onMounted } from "vue";

const baseUrl = import.meta.env.VITE_API_URL;
const props = defineProps(["uuid"]);
const { buyTiket } = useTiket();
const { mitra, show } = useMitra();
const form = reactive({
  atas_nama: "",
  catatan: "",
});

const save = () => {
  buyTiket(props.uuid, { ...form });
};

onMounted(() => {
  show(props.uuid);
});
</script>
