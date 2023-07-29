<template>
  <div class="mx-auto mb-8">
    <input
      type="text"
      v-model="keyword"
      class="my-2 w-full rounded-md shadow-md border border-sky-400 placeholder-sky-400 focus:outline-none focus:border-sky-200 focus:placeholder-sky-400 text-sm InputSearch"
      placeholder="Ketik nama tempat yang ingin anda kunjungi"
    />
    <div class="mx-auto mt-4">
      <div class="flex gap-5" v-for="item in status" :key="item.id">
        <p
          class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold text-green-800"
        >
          Registered {{ item.registered }}
        </p>
        <p
          class="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold text-red-800"
        >
          Not Registered {{ item.not_registered }}
        </p>
      </div>
      <div class="flex justify-end"></div>
      <dl class="grid grid-cols-1 gap-2 mt-2">
        <div v-for="item in searchings" :key="item.uuid">
          <div v-if="item.status !== 0">
            <div
              class="bg-white rounded-md shadow-md p-2 flex items-center justify-between"
            >
              <!--  :href="`#/mitra/` + item.uuid" -->
              <a :href="`#/mitra/` + item.uuid" class="rounded-xl flex md:p-0">
                <div class="flex-none w-12 h-12 rounded-full overflow-hidden">
                  <img
                    class="w-12 h-12 rounded-full"
                    :src="
                      baseUrl +
                      '/' +
                      (item.image != null ? item.image : 'antrianglobal.png')
                    "
                    width="384"
                    height="512"
                  />
                </div>
                <div class="w-full px-2 text-left space-y-4">
                  <div class="">
                    <p class="text-sm font-semibold">{{ item.nama }}</p>
                    <div class="text-gray-500 text-xs">{{ item.alamat }}</div>
                  </div>
                </div>
              </a>
              <div class="">
                <div
                  class="text-sky-400 buttonsearch flex justify-center items-center"
                >
                  <!-- <p v-if="item.status == '0'" class="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">Review</p> -->
                  <div class="flex items-center gap-3">
                    <p
                      v-if="item.status == '1'"
                      class="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold text-red-800 w-[98px]"
                    >
                      Not Registered
                    </p>
                    <button
                      v-if="item.status == '1'"
                      @click="registrasiMitra(item.uuid)"
                      class="flex lg:hidden flex-col gap-1"
                    >
                      <div class="bg-gray-500 h-1.5 w-1.5 rounded-full"></div>
                      <div class="bg-gray-500 h-1.5 w-1.5 rounded-full"></div>
                      <div class="bg-gray-500 h-1.5 w-1.5 rounded-full"></div>
                    </button>
                  </div>

                  <!-- <p v-if="item.status == '2'" class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">Register</p> -->
                </div>
                <div
                  class="ml-2 text-sky-400 flex justify-center items-center"
                  v-show="item.status == 2"
                >
                  <p
                    v-if="item.is_open == '0'"
                    class="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800"
                  >
                    Tutup
                  </p>
                  <p
                    v-if="item.is_open == '1'"
                    class="inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-blue-800"
                  >
                    Buka
                  </p>
                </div>
              </div>
              <!-- <a :href="`#/mitra/` + item.uuid" class="rounded-xl flex md:p-0">
                <div class="flex-none w-12 h-12 rounded-full overflow-hidden">
                  <img
                    class="w-12 h-12 rounded-full"
                    :src="
                      baseUrl +
                      '/' +
                      (item.image != null ? item.image : 'antrianglobal.png')
                    "
                    width="384"
                    height="512"
                  />
                </div>
                <div class="w-full px-2 text-left space-y-4">
                  <div class="">
                    <p class="text-sm font-semibold">{{ item.nama }}</p>
                    <div class="text-gray-500 text-xs">{{ item.alamat }}</div>
                  </div>
                </div>
                <div
                  class="text-sky-400 buttonsearch flex justify-center items-center"
                >

                  <div class="flex items-center gap-3">
                    <p
                      v-if="item.status == '1'"
                      class="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold text-red-800 w-[98px]"
                    >
                      Not Registered
                    </p>
                  </div>
                </div>
                <div
                  class="ml-2 text-sky-400 flex justify-center items-center"
                  v-show="item.status == 2"
                >
                  <p
                    v-if="item.is_open == '0'"
                    class="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800"
                  >
                    Tutup
                  </p>
                  <p
                    v-if="item.is_open == '1'"
                    class="inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-blue-800"
                  >
                    Buka
                  </p>
                </div>
              </a> -->
            </div>
          </div>
        </div>
      </dl>
    </div>
  </div>
</template>
<script setup>
import useMitra from "@/services/data/mitra";
import { ref, computed } from "vue";

const baseUrl = import.meta.env.VITE_API_URL;
// const baseUrl = 'http://127.0.0.1:8000'
const { mitra, search, status, getStatus, registrasiMitra } = useMitra();
const keyword = ref("");

async function searching() {
  search(keyword.value);
}

let isShow = ref(false);

function showModal(payload) {
  isShow.value = !isShow.value;
}

const searchings = computed(() => {
  if (keyword.value) {
    return mitra.value.filter((item) => {
      return keyword.value
        .toLowerCase()
        .split(" ")
        .every(
          (items) =>
            item.nama.toLowerCase().includes(items) ||
            item.alamat.toLowerCase().includes(items)
        );
    });
  } else {
    return mitra.value;
  }
});

// const searchings = computed(() => {
//   if (keyword.value) {
//     return mitra.value.filter((item) => {
//       return keyword.value
//         .toLowerCase()
//         .split(" ")
//         .every((items) => item.nama.toLowerCase().includes(items));
//     });
//   } else {
//     return mitra.value;
//   }
// });

search();
getStatus();
</script>
