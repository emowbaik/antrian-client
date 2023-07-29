import axios from '@/services/axios'
import useExecute from "@/services/execute";
import router from '@/router'
import { ref } from 'vue'

export default function useTiket() {
  const tiket = ref([])
  const antri = ref([])
  const errors = ref({})
  const { confirm, accepted, rejected } = useExecute()

  async function indexTiket() {
    const response = await axios.get(`/api/tiket`)
    tiket.value = response.data
  }

  async function userTiket(status = false) {
    const response = await axios.get(`/api/tiket-user?queue=${status}`)
    tiket.value = response.data
  }

  async function mitraTiket(id) {
    const response = await axios.get(`/api/tiket-mitra/${id}`)
    tiket.value = response.data
  }

  async function antriTiket(id) {
    const response = await axios.get(`/api/tiket-mitra/${id}/antri`)
    antri.value = response.data
  }

  async function updateTiket(id, payload) {
    try {
      await axios.post(`/api/tiket/${id}`, payload)
      router.back()
      await accepted('Data Telah Disimpan')
    } catch (error) {
      // errors.value = error
    }
  }

  async function buyTiket(uuid, payload) {
    const response = await confirm('Apa anda ingin mendaftar disini?')
    if(response.isConfirmed){
      try {
        await axios.post(`/api/tiket/${uuid}/buy`, payload)
        router.back()
        accepted('Data Telah Disimpan')
      } catch (error) {
        // errors.value = error
        if (error.response.status === 500) rejected(error.response.data)
      }
    }
  }

  async function showTiket(id) {
    const response = await axios.get(`/api/tiket/${id}`)
    tiket.value = response.data
  }

  async function destroyTiket(id) {
    const response = await confirm('Apa anda ingin menghapus data ini?')
    if(response.isConfirmed){
      accepted('Data Telah Dihapus')
      await axios.delete(`/api/tiket/${id}`)
      router.back()
    }
  }

  return {
    tiket,
    antri,
    indexTiket,
    userTiket,
    mitraTiket,
    antriTiket,
    // optionTiket,
    buyTiket,
    updateTiket,
    destroyTiket,
    showTiket,
  }
}
