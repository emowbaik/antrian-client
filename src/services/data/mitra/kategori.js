import axios from '@/services/axios'
import useExecute from "@/services/execute";
import router from '@/router'
import { ref } from 'vue'

export default function useKategori() {
  const mitra_kategori = ref([])
  const errors = ref({})
  const { confirm, accepted, rejected } = useExecute()

  async function index() {
    const response = await axios.get(`/api/panel/mitra-kategori`)
    mitra_kategori.value = response.data
  }

  async function option() {
    const response = await axios.get(`/api/panel/mitra-kategori?type=option`)
    mitra_kategori.value = response.data
  }

  async function update(id, payload) {
    try {
      await axios.put(`/api/panel/mitra-kategori/${id}`, payload)
      router.push({ path: `/pengaturan/mitra-kategori/${id}/detail` })
      await accepted('Data Telah Disimpan')
    } catch (error) {
      errors.value = error
    }
  }

  async function store(payload) {
    try {
      await axios.post(`/api/panel/mitra-kategori`, payload)
      router.back()
      accepted('Data Telah Disimpan')
    } catch (error) {
      errors.value = error
    }
  }

  async function show(uuid) {
    const response = await axios.get(`/api/mitra/${uuid}/kategori`)
    mitra_kategori.value = response.data
  }

  async function destroy(id) {
    const response = await confirm('Apa anda ingin menghapus data ini?')
    if(response.isConfirmed){
      accepted('Data Telah Dihapus')
      await axios.delete(`/api/panel/mitra-kategori/${id}`)
      router.push({path:`/pengaturan/mitra-kategori`})
    }
  }

  return {
    mitra_kategori,
    index,
    option,
    store,
    update,
    destroy,
    show,
  }
}
