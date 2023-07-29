<template>
  <div class="flex bg-slate-600 w-screen h-screen overflow-y-auto">
    <div class="container mx-auto my-8 sm:w-full md:w-5/12 h-fit">
      <div class="bg-white p-4 rounded-md mx-auto w-10/12 h-fit">
        <form action="#" method="POST" @submit.prevent="login" class="space-y-6">
          <div class="flex justify-between">
            <h2 class="mt-4 text-2xl font-bold tracking-tight text-gray-800">Login</h2>
            <img class="h-16" src="/apple-icon.png" alt="Your Company" />
          </div>
          <div>
            <label for="username" class="block text-xs font-medium text-gray-700">Nomor Handphone</label>
            <div class="mt-1">
              <input id="username" name="username" v-model="form.username" type="text" autocomplete="username" required="true" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-sky-400 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-sky-400 text-xs" />
            </div>
          </div>

          <div class="space-y-1">
            <label for="password" class="block text-xs font-medium text-gray-700">Password</label>
            <div class="mt-1">
              <input id="password" name="password" v-model="form.password" type="password" autocomplete="current-password" required="true" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-sky-400 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-sky-400 text-xs" />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <!-- <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-sky-300 text-sky-400 focus:ring-sky-400" />
              <label for="remember-me" class="ml-2 block text-xs text-gray-900">Ingat Saya?</label>
            </div> -->

            <div class="text-xs">
              <!-- <a href="#" class="font-medium text-sky-400 hover:text-sky-400">Forgot your password?</a> -->
            </div>
          </div>

          <div class="flex justify-between">
              <a
                href="#/register"
                class="mt-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <PencilSquareIcon class="mr-2 flex-shrink-0 h-4 w-4" aria-hidden="true" />
                Register
              </a>
              <button
                type="submit"
                class="w-full ml-4 mt-2 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-xs font-medium text-white bg-sky-400 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <KeyIcon class="mr-2 flex-shrink-0 h-4 w-4" aria-hidden="true" />
                Log in
              </button>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { PencilSquareIcon, KeyIcon } from "@heroicons/vue/24/outline";
import useAuth from '@/services/authentication'
import { reactive } from 'vue';

const form = reactive({
  username: '',
  password: ''
})

const { doLogin } = useAuth()

function login(){
  doLogin({...form})
  form.password = ''
}

</script>
