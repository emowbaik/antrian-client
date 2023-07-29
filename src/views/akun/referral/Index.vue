<template>
  <div class="mx-auto mt-2">
    <h2 class="flex items-center text-lg font-medium text-black">
      <QrCodeIcon class="h-6 w-6 mr-2" /> Referral
    </h2>
    <div class="bg-white p-4 rounded-md mt-4">
      <div>
        <label
          for="referral_code"
          class="block text-xs font-medium text-gray-700"
          >Kode Referral</label
        >
        <div class="mt-1">
          <input
            id="referral_code"
            readonly
            name="referral_code"
            v-model="auth.referral_code"
            type="text"
            autocomplete="first_name"
            required="true"
            class="block w-full text-xl bg-gray-200 text-center appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-sky-400 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-sky-400 text-xs"
          />
        </div>
      </div>
      <p
        class="mt-2 text-lg font-semibold flex justify-between items-baseline text-black"
      >
        Saldo Referral
        <span>Rp. {{ vueNumberFormat(auth.saldo_referral) }}</span>
      </p>
      <p
        class="mt-1 text-sm font-semibold flex justify-between items-baseline text-black"
      >
        Mitra yang didaftarkan
        <span> {{ mitra ? mitra.length : 0 }} Mitra</span>
      </p>
      <div class="bg-yellow-400 p-4 rounded-sm mt-4 text-sm">
        <div class="flex justify-start">
          <div>
            <InformationCircleIcon
              class="h-10 w-8 mr-3 -mt-2"
              aria-hidden="true"
            />
          </div>
          <div class="w-full">
            Pemindahan saldo referral ke saldo tunai hanya dapat dilakukan
            setiap tanggal 1 setiap bulannya senilai Rp.100.000, dengan
            ketentuan memiliki sekurangnya 1 orang mitra
          </div>
        </div>
      </div>
      <div class="mt-2 flex justify-end">
        <button
          type="button"
          @click="open = true"
          class="w-30 mt-3 flex items-end justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-xs font-medium text-white bg-sky-400 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <ArrowDownIcon
            class="mr-2 flex-shrink-0 h-4 w-4"
            aria-hidden="true"
          />
          Tarik Saldo
        </button>
      </div>
    </div>
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-10" @close="open = false">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div
            class="flex mt-48 justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
              >
                <form @submit.prevent="withdrawn()" method="post">
                  <div class="">
                    <DialogTitle
                      as="h3"
                      class="text-sm font-medium leading-6 text-gray-900"
                      >Tarik Saldo Referral</DialogTitle
                    >
                    <vueNumberFormat
                      id="nominal"
                      required
                      name="nominal"
                      v-model:value="form.nominal"
                      autocomplete="first_name"
                      class="block w-full text-sm text-right appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-sky-400 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-sky-400 text-xs"
                    />
                  </div>
                  <div class="mt-4 flex flex-row-reverse">
                    <button
                      type="submit"
                      class="inline-flex w-full justify-center rounded-md border border-transparent bg-sky-600 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ml-3 text-sm"
                      @click="open = false"
                    >
                      Kirim
                    </button>
                    <button
                      type="button"
                      class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-0 text-sm"
                      @click="open = false"
                      ref="cancelButtonRef"
                    >
                      Batal
                    </button>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <div class="mx-auto mt-4">
      <h2 class="flex items-center text-lg font-medium text-black">
        <ClockIcon class="h-6 w-6 mr-2" /> Histori Referral
      </h2>
      <dl class="grid grid-cols-1 gap-2 mt-4" v-if="transaksi.total <= 0">
        <a
          href=""
          class="relative bg-gray-400 py-4 px-4 sm:px-6 shadow rounded-lg overflow-hidden"
        >
          <p class="text-xs text-center font-semibold text-white">
            Anda tidak memiliki transaksi
          </p>
        </a>
      </dl>
      <div class="mx-auto bg-white rounded-md mt-4">
        <ul role="list" class="divide-y divide-gray-200">
          <li v-for="item in transaksi.data" :key="item.id">
            <div
              class="block hover:bg-gray-50 border border-sky-200 rounded-md"
            >
              <div class="px-2 py-2">
                <div class="text-xs flex">
                  <p class="truncate text-xs font-medium text-sky-400">
                    #{{ item.id }}
                  </p>
                </div>
                <div class="flex items-center justify-between">
                  <div class="text-xs mt-1">
                    <div class="flex items-center">
                      {{ item.keterangan }}
                    </div>
                    <p class="text-gray-500 mt-1">
                      <time datetime="2020-01-07">{{
                        dateTimeFormatId(item.created_at)
                      }}</time>
                    </p>
                  </div>
                  <div class="ml-2 flex flex-shrink-0">
                    <p
                      v-if="item.mutasi == 'I'"
                      class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
                    >
                      + Rp {{ vueNumberFormat(item.nominal) }}
                    </p>
                    <p
                      v-if="item.mutasi == 'O'"
                      class="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800"
                    >
                      - Rp {{ vueNumberFormat(item.nominal) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  QrCodeIcon,
  InformationCircleIcon,
  ClockIcon,
  ArrowDownIcon,
} from "@heroicons/vue/24/outline";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ref, inject, reactive } from "vue";
import useTransaksi from "@/services/transaksi";
import useExecute from "@/services/execute";
import axios from "@/services/axios";

const { transaksi, index } = useTransaksi();
const { accepted, rejected } = useExecute();
const open = ref(false);
const mitra = ref([]);
const auth = inject("auth");
const form = reactive({
  nominal: 0,
});

async function withdrawn() {
  try {
    await axios.post(`api/panel/pengguna/withdraw-referral`, { ...form });
    accepted("Saldo Referral telah di tarik");
    index("referral");
  } catch (error) {
    rejected(error.response.data);
  }
}

const listMitra = async () => {
  const response = await axios.get("/api/panel/mitra?is_referral=true");
  mitra.value = await response.data;
};

listMitra();

index("referral");
</script>
