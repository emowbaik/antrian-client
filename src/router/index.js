import { createRouter, createWebHashHistory } from 'vue-router'
const Index       = () => import('@/views/Index.vue')
const Notifikasi  = () => import('@/views/Notifikasi.vue')
const Support     = () => import('@/views/Support.vue')
const Transfer    = () => import('@/views/Transfer.vue')
const Pencarian  = () => import('@/views/Pencarian.vue')
const Beranda     = () => import('@/views/Beranda.vue')
const Bantuan     = () => import('@/views/Bantuan.vue')
const Kebijakan     = () => import('@/views/Kebijakan.vue')
const KebijakanID     = () => import('@/views/Kebijakan-ID.vue')
const KebijakanEN     = () => import('@/views/Kebijakan-EN.vue')
const Tiket       = () => import('@/views/tiket/Index.vue')
const TiketShow       = () => import('@/views/tiket/Show.vue')
const Histori     = () => import('@/views/histori/Index.vue')
const HistoriTransaksi     = () => import('@/views/histori/Transaksi.vue')
const HistoriTiket     = () => import('@/views/histori/Tiket.vue')
const Akun        = () => import('@/views/akun/Index.vue')
// const Pengaturan  = () => import('@/views/pengaturan/Index.vue')
// const Profile     = () => import('@/views/profile/Index.vue')

const routes = [
  {
    path: '/login',
    component: (() => import('@/views/auth/Login.vue')),
    meta: {
      guestRequired: true
    }
  },
  {
    path: '/register',
    component: (() => import('@/views/auth/Register.vue')),
    meta: {
      guestRequired: true
    }
  },
  {
    path: '/otp/:phone',
    name: 'OTP',
    component: (() => import('@/views/auth/Otp.vue')),
    props: true,
    meta: {
      guestRequired: true
    }
  },
  {
    path: '/',
    component: (() => import('@/views/Welcome.vue')),
  },
  {
    path: '/',
    component: Index,
    redirect: { path: '/beranda' },
    meta: {
      authRequired: true
    },
    children: [
      {
        path: '/support',
        name: 'support',
        component: Support
      },
      {
        path: '/pencarian',
        name: 'pencarian',
        component: Pencarian
      },
      {
        path: '/notifikasi',
        name: 'notifikasi',
        component: Notifikasi
      },
      {
        path: '/beranda',
        name: 'beranda',
        component: Beranda
      },
      {
        path: '/bantuan',
        name: 'bantuan',
        component: Bantuan
      },
      {
        path: '/tiket',
        name: 'tiket',
        component: Tiket
      },
      {
        path: '/tiket/:uuid',
        name: 'tiket-show',
        component: TiketShow,
        props: true
      },
      {
        path: '/histori',
        name: 'histori',
        component: Histori
      },
      {
        path: '/histori/transaksi',
        name: 'histori-transaksi',
        component: HistoriTransaksi
      },
      {
        path: '/histori/tiket',
        name: 'histori-tiket',
        component: HistoriTiket
      },
      {
        path: '/kebijakan',
        name: 'kebijakan',
        component: Kebijakan,
        children: [
          {
            path: '/kebijakan',
            component: KebijakanID
          },
          {
            path: '/kebijakan/en',
            component: KebijakanEN
          },
        ]
      },
      {
        path: '/akun',
        name: 'akun',
        component: Akun
      },
      {
        path: '/transfer',
        name: 'transfer',
        component: Transfer
      },
      {
        path: '/mitra/:uuid',
        component: (() => import('@/views/mitra/Index.vue')),
        props: true,
      },
      {
        path: '/mitra/:uuid/buy',
        component: (() => import('@/views/mitra/Buy.vue')),
        props: true,
      },
      {
        path: '/kategori/:uuid',
        component: (() => import('@/views/Kategori.vue')),
        props: true,
      },
      {
        path: '/profile',
        component: (() => import('@/views/akun/profile/Index.vue')),
      },
      {
        path: '/akun/referral',
        component: (() => import('@/views/akun/referral/Index.vue')),
      },
      {
        path: '/akun/saldo',
        component: (() => import('@/views/akun/saldo/Index.vue')),
      },
      {
        path: '/akun/mitra',
        component: (() => import('@/views/akun/mitra/Index.vue')),
      },
      {
        path: '/akun/mitra/create',
        component: (() => import('@/views/akun/mitra/Create.vue')),
      },
      {
        path: '/akun/top-up',
        component: (() => import('@/views/akun/topup/Index.vue')),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('access_token')
  if (to.matched.some(record => record.meta.authRequired)) {
      if (isLoggedIn == null) {
        next('/login')
      } else {
        next()
      }
    } else if (to.matched.some(record => record.meta.guestRequired)) {
      if (isLoggedIn == null) {
        next()
      } else {
        next('/beranda')
      }
    } else {
      next()
    }
})

export default router
