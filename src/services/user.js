import axios from '@/services/axios'
import { ref } from 'vue'
import router from '@/router'
import useExecute from "./execute";

export default function useUser() {
  const users = ref([])
  const user = ref([])
  const errors = ref({})
  const { confirm, accepted, rejected } = useExecute()

  async function index() {
    const response = await axios.get(`/api/data/pengguna`)
    users.value = response.data
  }

  async function update(id, payload) {
    try {
      await axios.put(`/api/data/pengguna/${id}`, payload)
      router.push({ path: `/pengaturan/pengguna/${id}/detail` })
      await accepted('Data Telah Disimpan')
    } catch (error) {
      errors.value = error
    }
  }

  async function store(payload) {
    try {
      await axios.post(`/api/data/pengguna`, payload)
      router.back()
      accepted('Data Telah Disimpan')
    } catch (error) {
      errors.value = error
      rejected(errors.value)
    }
  }

  async function show(id) {
    const response = await axios.get(`/api/data/pengguna/${id}`)
    user.value = response.data
  }

  async function destroy(id) {
    const response = await confirm('Apa anda ingin menghapus data ini?')
    if(response.isConfirmed){
      accepted('Data Telah Dihapus')
      await axios.delete(`/api/data/pengguna/${id}`)
      router.push({path:`/pengguna`})
    }
  }

  return {
    users,
    user,
    index,
    store,
    update,
    destroy,
    show,
  }
}
