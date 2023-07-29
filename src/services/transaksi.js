import axios from '@/services/axios'
import { ref } from 'vue'
import router from '@/router'
import useExecute from "./execute";

export default function useTransaksi() {
  const transaksi = ref([])
  const user = ref([])
  const errors = ref({})
  const { confirm, accepted, rejected } = useExecute()

  async function index(type = 'member') {
    const response = await axios.get(`/api/panel/transaksi?type=${type}`)
    transaksi.value = response.data
  }

  async function show(id) {
    const response = await axios.get(`/api/panel/transaksi/${id}`)
    transaksi.value = response.data
  }

  // async function destroy(id) {
  //   const response = await confirm('Apa anda ingin menghapus data ini?')
  //   if(response.isConfirmed){
  //     accepted('Data Telah Dihapus')
  //     await axios.delete(`/api/panel/transaksi/${id}`)
  //     router.push({path:`/transaksi`})
  //   }
  // }

  return {
    transaksi,
    index,
    show,
  }
}
