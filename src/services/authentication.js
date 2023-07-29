import axios from "./axios"
import useExecute from "./execute";
import { useRouter } from 'vue-router'
import { ref } from "vue";

export default function useAuthentication() {

  const auth = ref('')
  const router = useRouter()
  const errors = ref('')
  const { confirm, accepted, rejected } = useExecute()

  async function doLogin(payload) {
    try {
      await axios.get(`/sanctum/csrf-cookie`)
      const response = await axios.post('/api/login', payload)
      const token = await response.data.content.access_token
      const is_member = await response.data.content.is_member
      const is_verified = await response.data.content.is_verified
      // const phone = await response.data.content.phone

      if(is_verified === 0) {
        router.push({ name: 'OTP', params: {phone: response.data.content.phone}})
        // removeHeaderToken()
        // }else if(is_member !== 1) {
        //   rejected('User Anda Tidak Boleh Mengakses Halaman Ini!!!!')
      }else{
        accepted('Selamat Datang')
        router.push('/beranda')
        setHeaderToken(token)
      }

    } catch (error) {
      if (error.response.status === 401) { errors.value = error.response.data.message, rejected(errors.value) }
      if (error.response.status === 422) errors.value = error.response.data.errors
      if (error.response.status === 500) rejected('Server In Trouble call your administrator')
    }
  }

  async function doRegister(payload) {
    try {
      await axios.get( `/sanctum/csrf-cookie`)
      const response = await axios.post('/api/register', payload)
      router.push({ name: 'OTP', params: {phone: response.data.content.phone}})
      accepted('Pendaftaran Anda Berhasil, Silakan Masukkan Kode OTP')

    } catch (error) {
      if (error.response.status === 401) { errors.value = error.response.data.message, rejected(errors.value) }
      if (error.response.status === 422) rejected(error.response.data.message)
      if (error.response.status === 500) rejected('Server In Trouble call your administrator')
    }
  }

  async function checkOtp(payload) {
    try {
      await axios.post('/api/verify_otp', payload)
      router.push('/login')
      accepted('Pendaftaran Anda Berhasil, Silakan Melakukan Login')
    } catch (error) {
      if (error.response.status === 401) { errors.value = error.response.data.message, rejected(errors.value) }
      if (error.response.status === 422) rejected(error.response.data.message)
      if (error.response.status === 500) rejected(error.response.data)
    }
  }

  async function getAuth() {
    try {
      const response = await axios.get('/api/profile')
      auth.value = await response.data
      if(response.data.is_verified === 0) {
        router.push('/otp/'+response.data.phone)
        // console.log('here')
      }
    } catch (error) {
      removeHeaderToken()
      if (error.response.status === 401) router.push('/login')
      // console.log(error.response);
    }
  }

  async function doLogout() {
    const response = await confirm('Apa anda ingin keluar?')
    if (response.isConfirmed) {
      try {
        await axios.get('/api/logout')
        removeHeaderToken()
        router.push('/login')
        await accepted('Anda telah keluar')
      } catch (error) {
        console.log(error)
      }
    }
  }

  async function doUpdate(payload) {
    try {
      await axios.post('api/profile/update', payload)
      window.location.reload()
      isLoading.value = false
    } catch (error) {
      console.log(error)
    }
  }

  function setHeaderToken(token) {
    localStorage.setItem('access_token', token)
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  function removeHeaderToken() {
    delete axios.defaults.headers.common.Authorization
    localStorage.removeItem('access_token')
  }

  return {
    auth,
    errors,
    doLogin,
    doLogout,
    checkOtp,
    doRegister,
    doUpdate,
    getAuth
  }
}
