<template>
  <div class="min-h-full">
    <div class="fixed inset-x-0 top-0 z-10 mx-auto w-full bg-white">
      <div
        class="container mx-auto p-1 sm:w-full md:w-5/12 shadow flex justify-between"
      >
        <div class="flex items-center navCSS">
          <a href="/" class="w-16 h-16 mr-6">
            <img
              class="inline-block ml-3 mr-3"
              src="/apple-icon.png"
              alt="Your Company"
            />
          </a>
          <div class="text-lg font-semibold TextNav">
            <p>Antrean Global</p>
            <div class="text-[16px] font-normal -mt-1">
              <span class="text-black-500"
                >Hallo, {{ auth.first_name }} {{ auth.last_name }}</span
              >
            </div>
          </div>
        </div>
        <div class="SearchNav">
          <a
            href="#/pencarian"
            class="inline-block text-black justify-center text-center w-full rounded-md py-2 px-2 mr-6"
          >
            <MagnifyingGlassIcon
              class="h-6 w-6 mx-auto icon"
              aria-hidden="true"
            />
            <span class="mt-1 text-xs">Cari</span>
          </a>
        </div>
      </div>
    </div>

    <main class="container mx-auto sm:w-full md:w-5/12 h-screen bg-grey-100">
      <div v-show="current.path === '/beranda'">
        <!-- test -->
        <!-- <div class="pt-[4rem] mt-3 overflow-hidden bg-sky-700 h-[300px]">
          
        </div> -->
        <!-- test -->
        <div
          class="pt-[4rem] min-[305px]:pt-[2.8rem] max-[350px]:pt-[2.8rem] mt-3 overflow-hidden BannerCSS"
        >
          <div
            id="default-carousel"
            class="relative w-full z-0 h-[200px]"
            data-carousel="slide"
          >
            <!-- Carousel wrapper -->
            <div class="relative overflow-hidden rounded-lg h-[200px]">
              <!-- Item 1 -->
              <!-- Item 2 -->
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
                  class="p-2 rounded-2xl absolute block w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-max"
                  alt="..."
                />
              </div>
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                  class="p-2 rounded-2xl absolute block w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-max"
                  alt="..."
                />
              </div>
              <!-- Item 3 -->
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img
                  src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  class="p-2 rounded-2xl absolute block w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 max-w-max"
                  alt="..."
                />
              </div>
            </div>
            <!-- Slider indicators -->
            <div
              class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-6 mb-2 left-1/2"
            >
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to="3"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 5"
                data-carousel-slide-to="4"
              ></button>
            </div>
          </div>
        </div>
      </div>
      <div class="pr-2 pl-2 pt-20 pb-24">
        <router-view />
      </div>
    </main>

    <div class="MENUBAWAH bg-white text-center fixed inset-x-0 bottom-0 z-10">
      <div
        class="grid grid-cols-4 place-items-center p-2 mb-2 container mx-auto sm:w-full md:w-1/3 border-t border-gray-200 bg-white"
      >
        <div>
          <a
            href="#/beranda"
            class="inline-block text-black justify-center text-center w-full rounded-md py-2 px-2"
          >
            <HomeIcon class="h-6 w-6 mx-auto icon" aria-hidden="true" />
            <span class="mt-1 text-sm">Beranda</span>
          </a>
        </div>
        <div>
          <a
            href="#/tiket"
            class="inline-block text-black justify-center text-center w-full rounded-md py-2 px-2"
          >
            <ClipboardDocumentCheckIcon
              class="h-6 w-6 mx-auto icon"
              aria-hidden="true"
            />
            <span class="mt-1 text-sm">Daftar</span>
          </a>
        </div>
        <div>
          <a
            href="#/histori"
            class="inline-block justify-center text-center w-full rounded-md py-2 px-2 text-black"
          >
            <ClockIcon class="h-6 w-6 mx-auto icon" aria-hidden="true" />
            <span class="mt-1 text-sm">Histori</span>
          </a>
        </div>
        <div>
          <a
            href="#/akun"
            class="inline-block text-black justify-center text-center w-full rounded-md py-2 px-2"
          >
            <UserCircleIcon class="h-6 w-6 mx-auto icon" aria-hidden="true" />
            <span class="mt-1 text-sm">Akun</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { registerSW } from "virtual:pwa-register";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import {
  UserCircleIcon,
  HomeIcon,
  ClipboardDocumentCheckIcon,
  MagnifyingGlassIcon,
  ClockIcon,
} from "@heroicons/vue/24/outline";
import useSlide from "@/services/slide";
import useAuth from "@/services/authentication";
import { onMounted, provide } from "vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import { useRouter } from "vue-router";
import { initFlowbite } from "flowbite";

const { getAuth, auth } = useAuth();
const { slide, optionSlide } = useSlide();
const baseUrl = import.meta.env.VITE_API_URL;
// const baseUrl =  'http://127.0.0.1:8000'
const router = useRouter();
const current = router.currentRoute;

if ("serviceWorker" in navigator) {
  // && !/localhost/.test(window.location)) {
  const updateSW = registerSW({
    onNeedRefresh() {
      Toastify({
        text: `<h4 style='display: inline'>Pembaruan Aplikasi Tersedia!</h4><br><a class='do-sw-update'>Klik untuk update</a>  `,
        duration: -1,
        escapeMarkup: false,
        gravity: "bottom",
        onClick() {
          updateSW(true);
        },
      }).showToast();
    },
  });
}

provide("auth", auth);
provide("baseUrl", baseUrl);

onMounted(() => {
  optionSlide();
  getAuth();
  initFlowbite();
});
</script>
