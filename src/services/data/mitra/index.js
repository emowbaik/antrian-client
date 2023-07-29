import axios from "@/services/axios";
import useExecute from "@/services/execute";
import router from "@/router";
import { ref } from "vue";

export default function useMitra() {
  const mitra = ref([]);
  const errors = ref({});
  const status = ref([]);
  const { confirm, accepted, rejected } = useExecute();

  async function index() {
    const response = await axios.get(`/api/panel/mitra`);
    mitra.value = response.data;
  }

  async function getStatus() {
    const response = await axios.get("/api/status");
    status.value = response.data;
  }

  async function option() {
    const response = await axios.get(`/api/panel/mitra?type=option`);
    mitra.value = response.data;
  }

  async function search(keyword = "") {
    const response = await axios.get(
      `/api/panel/mitra/search?keyword=${keyword}`
    );
    mitra.value = response.data;
  }

  async function update(id, payload) {
    try {
      await axios.put(`/api/panel/mitra/${id}/update`, payload);
      router.back();
      await accepted("Data Telah Disimpan");
    } catch (error) {
      errors.value = error;
    }
  }

  async function store(payload) {
    try {
      await axios.post(`/api/panel/mitra`, payload);
      router.back();
      accepted("Data Telah Disimpan");
    } catch (error) {
      errors.value = error;
    }
  }

  async function show(id) {
    const response = await axios.get(`/api/panel/mitra/${id}`);
    mitra.value = response.data;
  }

  async function destroy(id) {
    const response = await confirm("Apa anda ingin menghapus data ini?");
    if (response.isConfirmed) {
      accepted("Data Telah Dihapus");
      await axios.delete(`/api/panel/mitra/${id}`);
      router.push({ path: `/pengaturan/mitra` });
    }
  }

  return {
    mitra,
    index,
    option,
    search,
    store,
    update,
    destroy,
    show,
    status,
    getStatus,
  };
}
