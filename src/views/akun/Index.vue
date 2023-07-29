<template>
  <div class="mx-auto mt-2 mb-8">
    <h2 class="flex items-center text-lg font-medium text-black">
      <UserCircleIcon class="h-6 w-6 mr-2"/> Akun
    </h2>
    <nav class="space-y-1 mt-4 bg-white rounded-md" aria-label="Sidebar">
      <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-200 text-gray-900' : 'text-black', 'flex items-center px-6 py-4 text-sm font-medium rounded-md']" :aria-current="item.current ? 'page' : undefined">
        <component :is="item.icon" :class="[item.current ? 'text-gray-500' : 'text-black', 'flex-shrink-0 -ml-1 mr-3 h-6 w-6']" aria-hidden="true" />
        <span class="truncate">{{ item.name }}</span>
        <!-- <span v-if="item.count" :class="[item.current ? 'bg-gray-50' : 'bg-gray-200 text-sky-400', 'ml-auto inline-block py-0.5 px-3 text-xs rounded-full']">{{ item.count }}</span> -->
      </a>
      <a href="#/akun" @click="doUpdate()" class="text-black flex items-center px-6 py-4 text-sm font-medium rounded-md">
        <ArrowPathIcon class="text-black flex-shrink-0 -ml-1 mr-3 h-6 w-6" aria-hidden="true" />
        <span class="truncate">Update Aplikasi</span>
        <!-- <span v-if="item.count" :class="[item.current ? 'bg-gray-50' : 'bg-gray-200 text-gray-600', 'ml-auto inline-block py-0.5 px-3 text-xs rounded-full']">{{ item.count }}</span> -->
      </a>
    </nav>
    <a href="#/akun" @click="doLogout()" class="bg-sky-400 flex items-center text-white mt-4 px-6 py-4 text-sm font-medium rounded-md">
      <PowerIcon class="flex-shrink-0 -ml-1 mr-3 h-6 w-6" aria-hidden="true" />
      <span class="truncate">Log Out</span>
      <!-- <span v-if="item.count" :class="[item.current ? 'bg-gray-50' : 'bg-gray-200 text-gray-600', 'ml-auto inline-block py-0.5 px-3 text-xs rounded-full']">{{ item.count }}</span> -->
    </a>
  </div>
</template>
<script setup>
import useAuth from '@/services/authentication'
import useExecute from '@/services/execute'
import { FingerPrintIcon, BanknotesIcon, PowerIcon, ArrowPathIcon, UserPlusIcon, UserCircleIcon, PhoneIcon, QuestionMarkCircleIcon,QrCodeIcon, ArrowDownTrayIcon } from '@heroicons/vue/24/outline'

const { doLogout } = useAuth()
const { accepted } = useExecute()

const doUpdate = async () => {
  await accepted('Aplikasi telah diupdate')
  await location.reload()
}

const navigation = [
  { name: 'Profile',             href: '#/profile',       icon: FingerPrintIcon,        current: false },
  { name: 'Top Up',              href: '#/akun/top-up',   icon: BanknotesIcon,          current: false },
  { name: 'Tarik Saldo',         href: '#/akun/saldo',    icon: ArrowDownTrayIcon,          current: false },
  { name: 'Referral',            href: '#/akun/referral', icon: QrCodeIcon,          current: false },
  { name: 'Pendaftaran Mitra',   href: '#/akun/mitra',    icon: UserPlusIcon,           current: false },
  { name: 'Kebijakan & Privasi', href: '#/kebijakan',     icon: QuestionMarkCircleIcon, current: false },
  { name: 'Tentang Aplikasi',             href: '#/bantuan',       icon: PhoneIcon,              current: false },
  // { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  // { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
  ]
</script>

