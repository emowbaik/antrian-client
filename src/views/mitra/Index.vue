<template>
  <div class="mx-auto mt-2">
    <div class="bg-white rounded-md shadow-md p-2 my-2">
      <div class="rounded-xl md:p-0">
        <img
          class="w-full h-48 rounded object-cover"
          :src="
            baseUrl +
            '/' +
            (mitra.image != null ? mitra.image : 'antrianglobal.png')
          "
        />
        <div class="w-full p-2 text-left">
          <div class="">
            <div class="text-sm font-semibold">{{ mitra.nama }}</div>
            <div class="text-gray-500 text-xs">{{ mitra.alamat }}</div>
          </div>
          <div class="flex items-center justify-between">
            <div class="text-xs text-sky-400">
              Rp. {{ vueNumberFormat(mitra.harga_tiket) }}/Daftar
            </div>
            <!-- <div class="text-sky-400">
                <p v-if="mitra.is_open == '0'" class="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">Tutup</p>
                <p v-if="mitra.is_open == '1'" class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">Buka</p>
              </div> -->
            <div class="flex">
              <div class="text-sky-400">
                <!-- <p v-if="mitra.status == '0'" class="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">Review</p> -->
                <p
                  v-if="mitra.status == '1'"
                  class="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800"
                >
                  Not Registered
                </p>
                <!-- <p v-if="mitra.status == '2'" class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">Register</p> -->
              </div>
              <div class="ml-2 text-sky-400" v-show="mitra.status == 2">
                <p
                  v-if="mitra.is_open == '0'"
                  class="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800"
                >
                  Tutup
                </p>
                <p
                  v-if="mitra.is_open == '1'"
                  class="inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-blue-800"
                >
                  Buka
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <dl class="grid grid-cols-1 gap-2 mt-4">
      <a v-show="mitra.is_open == '1'" :href="`#/mitra/${mitra.uuid}/buy`" class="relative bg-sky-400 py-2 px-4 shadow rounded-lg overflow-hidden flex items-center justify-center">
        <TicketIcon class="-rotate-45 h-6 w-6 text-white"/>
        <p class="text-xs ml-3 font-semibold text-white">
          Ambil Tiket
        </p>
      </a>
      <a  v-show="mitra.status == '0'" href="#/beranda" class="relative bg-gray-600 py-2 px-4 shadow rounded-lg overflow-hidden flex items-center justify-center">
        <ExclamationTriangleIcon class="h-6 w-6 text-white"/>
        <p class="text-xs ml-3 font-semibold text-white">
          Lokasi Belum di Verifikasi oleh kami
        </p>
      </a>
    </dl> -->
    <div
      v-if="mitra.status == '1'"
      class="bg-yellow-400 p-4 rounded-sm mt-4 text-sm"
    >
      <div class="flex justify-start">
        <div>
          <InformationCircleIcon
            class="h-10 w-8 mr-3 -mt-2"
            aria-hidden="true"
          />
        </div>
        <div class="w-full">
          Mohon maaf, mitra belum teregistrasi. Demi kemudahan dan kenyamanan
          layanan, hubungi dokter anda untuk melakukan registrasi dan aktivasi
          <span class="font-bold">Antrean Global</span>
        </div>
      </div>
    </div>
    <h2 class="mt-4 text-sm font-medium text-gray-900">
      {{ antriLength(antri) }} Antrian
    </h2>
    <div class="mx-auto bg-white rounded-md mt-4 mb-4">
      <ul role="list" class="divide-y divide-gray-200">
        <li
          v-for="item in antri"
          :key="item.id"
          v-show="item.status !== 'D' && item.tanggal == waktu(now)"
        >
          <div class="block hover:bg-gray-50 border border-sky-200 rounded-md">
            <div class="px-2 py-2">
              <div class="text-xs flex">
                <!-- <p class="truncate text-xs font-medium text-sky-400">{{ item.mitra.nama }}</p> -->
              </div>
              <div class="flex items-center justify-between">
                <div class="text-xs mt-1">
                  <div class="flex text-blue-500 items-center">
                    Antrian Nomor: {{ item.posisi }}
                  </div>
                  <div
                    class="flex text-sm items-center"
                    v-show="item.user_id === auth.id"
                  >
                    {{ item.user ? item.user.fullname : "" }}
                  </div>
                  <p class="text-gray-500 mt-1">
                    <time datetime="2020-01-07">{{
                      dateFormatId(item.tanggal)
                    }}</time>
                  </p>
                </div>
                <div class="ml-2 flex flex-shrink-0">
                  <p
                    v-if="item.status === 'P'"
                    class="inline-flex rounded-full bg-yellow-100 px-2 text-lg font-semibold leading-5 text-yellow-800"
                  >
                    Pending
                  </p>
                  <p
                    v-if="item.status === 'Q'"
                    class="inline-flex rounded-full bg-blue-100 px-2 text-lg font-semibold leading-5 text-blue-800"
                  >
                    Antri
                  </p>
                  <p
                    v-if="item.status === 'R'"
                    class="inline-flex rounded-full bg-yellow-100 px-2 text-lg font-semibold leading-5 text-yellow-800"
                  >
                    Proses
                  </p>
                  <p
                    v-if="item.status === 'E'"
                    class="inline-flex rounded-full bg-red-100 px-2 text-lg font-semibold leading-5 text-red-800"
                  >
                    Batal
                  </p>
                  <p
                    v-if="item.status === 'D'"
                    class="inline-flex rounded-full bg-green-100 px-2 text-lg font-semibold leading-5 text-green-800"
                  >
                    Selesai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <a
    :href="`#/mitra/${mitra.uuid}/buy`"
    v-show="mitra.status == '2' && mitra.is_open == '1'"
    title="Contact Sale"
    class="fixed z-90 bottom-28 right-6 bg-blue-400 w-12 h-12 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-xl"
  >
    <TicketIcon class="h-6 w-6 mx-auto" aria-hidden="true" />
  </a>
</template>
<script setup>
import useAuth from "@/services/authentication";
import useTiket from "@/services/tiket";
import useMitra from "@/services/data/mitra";
import { TicketIcon, InformationCircleIcon } from "@heroicons/vue/24/outline";
import { defineProps, onMounted } from "vue";

const baseUrl = import.meta.env.VITE_API_URL;
// const baseUrl = 'http://127.0.0.1:8000'

const props = defineProps(["uuid"]);
const { mitra, show } = useMitra();
const { antri, antriTiket } = useTiket();
const { auth, getAuth } = useAuth();

// waktu sekarang format tanggal bulan tahun
const now = new Date();

// format tanggal 2021-01-01
const waktu = (date) => {
  let d = new Date(date);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  let year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

// Hitung antri length by tanggal
const antriLength = (antri) => {
  let count = 0;
  antri.forEach((item) => {
    if (item.tanggal == waktu(now)) {
      count++;
    }
  });
  return count;
};

onMounted(() => {
  show(props.uuid);
  // mitraTiket(props.uuid)
  antriTiket(props.uuid);
  getAuth();
});
</script>
