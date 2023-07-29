<template>
  <div class="mx-auto -mt-20 mb-8">
    <dl class="grid grid-cols-1 gap-2 mt-4">
      <div class="Cardsaldo relative overflow-hidden rounded-md bg-gray-100 px-4 pt-4 pb-3 shadow max-[320px]:py-2">
        <!-- test1 -->
        <div class="flex mb-2">
          <div class="SaldoTunai flex-1 text-xs font-semibold py-0.5">
            <p>Saldo Tunai<span class="ml-[15px] mr-1 "> :</span>Rp. {{ vueNumberFormat(auth.saldo) }}</p>
          </div>
          <div class="TextTopUp inline-flex-1 mr-2 text-[10px]">
            <a href="#/akun/top-up">
            <p class="inline-flex px-1 py-0.5 bg-green-600 rounded-full text-white font-semibold">Top up <ArrowDownTrayIcon class="h-4 w-4 ml-1 IconTopUp"/></p>
            </a>
          </div>
          <div class="TextWithdraw inline-flex-1 text-[10px]">
            <a href="#/akun/saldo">
            <p class="inline-flex px-1 py-0.5 bg-red-500 rounded-full text-white font-semibold">Withdrawel <ArrowUpTrayIcon class="h-4 w-4 ml-1 IconWithdraw"/></p>
            </a>
          </div>
        </div>
        <div class="flex mb-2">
          <div class="SaldoReff flex-1 text-xs font-semibold py-0.5">
            <p>Saldo Referral<span class="ml-[1.5px] mr-[1px]"> : </span>Rp. {{ vueNumberFormat(auth.saldo_referral) }}</p>
          </div>
          <div class="Pindahkan inline-flex-1 text-[10px]">
            <a href="#/akun/referral">
            <p class="inline-flex px-[17px] py-0.5 bg-green-600 rounded-full font-semibold bg-gray-300 text-black">Pindahkan Ke Saldo Tunai</p>
            </a>
          </div>
        </div>

        <!-- end test 1 -->

        <!-- test -->
        <!-- <div class="grid grid-cols-6">
          <div class="col-span-2 mr-2 font-semibold mr-1 text-xs SaldoTunai"><p>Saldo Tunai<span class="ml-[14px] md:ml-6">:</span></p></div>
          <div class="col-span-2  text-xs -ml-4 md:-ml-14 font-semibold RpSaldoTunai"><p>Rp. {{ vueNumberFormat(auth.saldo) }}</p></div>
          <div class="col-span-1 -mt-2 TopUp">
            <a href="#/akun/top-up">
            <p class="inline-flex rounded-full w-16 -ml-6 bg-green-600 px-2 text-[8px] leading-5 text-white justify-center font-semibold">Top up <ArrowDownTrayIcon class="h-5 w-4 ml-1 TrayIcon"/></p>
            </a>
          </div>
          <div class="col-span-1 -mt-2 Withdrawel">
            <a href="#/akun/saldo">
            <p class="inline-flex rounded-full w-15 -ml-2 md:-ml-4 bg-red-500 px-1 text-[8px] leading-5 text-white font-semibold">Withdrawel<ArrowUpTrayIcon class="h-5 w-4 ml-1 TrayIcon"/></p>
            </a>
          </div>
        </div>
        <div class="grid grid-cols-6 mt-2">
           <div class="col-span-2 text-xs font-semibold SaldoReff"><p>Saldo Referral <span class="md:ml-[10px]">:</span></p></div>
           <div class="col-span-2 text-xs -ml-4 md:-ml-14 font-semibold RpSaldoReff"><p>Rp. {{  vueNumberFormat(auth.saldo_referral) }}</p></div>
           <div class="col-span-2 -mt-1 Pindahkan">
            <a href="#/akun/referral">
            <p class="inline-flex rounded-full w-[140px] -ml-[25px] md:w-40 flex justify-center bg-gray-300 px-2 text-[9px] leading-5 text-black font-semibold">Pindahkan Ke Saldo Tunai</p>
            </a>
           </div>
        </div> -->
        <!-- test -->
      </div>
      <!-- TEST KATEGORI -->
      <div class="grid grid-cols-4 mt-2 mx-auto KategoriCSS">
        <div class="col-span-1 text-center text-xs w-[85px] md:w-full pb-4" v-for="data in mitra_kategori" :key="data.id">
          <a :href="`#/kategori/${data.uuid}`">
            <div v-html="data.icon" class="mb-2 mx-auto flex justify-center"></div>
            <p class="mt-2">{{ data.nama }}</p>
          </a>
        </div>
      </div>
      <!-- END TEST KATEGORI -->
      <!-- Kategori Lama -->
      <!-- <div class="grid grid-cols-4 bg-red-700 mt-2 mb-2 place-items-center w-[19rem] md:w-full mx-auto min-[305px]:w-[15rem] max-[350px]:w-[15rem]">
        <div class="KategoriCSS" v-for="data in mitra_kategori" :key="data.id">
          <a :href="`#/kategori/${data.uuid}`" class="inline-block  justify-center text-center  w-24 h-28 rounded-md py-2 px-4">
            <div v-html="data.icon" class="ICON h-14 w-14 mx-auto flex items-center justify-center"></div>
            <div class="mt-2 text-xs flex justify-center ICONNAME">{{ data.nama }}</div>
          </a>
        </div>
      </div> -->
      <!-- End Kategori Lama -->
    </dl>
  </div>
</template>
<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import { inject } from 'vue';
import { ArrowUpTrayIcon, ArrowDownTrayIcon } from '@heroicons/vue/24/outline'


import useMitra         from '@/services/data/mitra'
import useMitraKategori from '@/services/data/mitra/kategori'


const { mitra_kategori, option }     = useMitraKategori()
const { mitra, option: optionMitra } = useMitra()
const auth    = inject('auth')
const baseUrl = inject('baseUrl')

option()
optionMitra()

</script>
