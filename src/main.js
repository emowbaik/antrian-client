import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import moment from "./plugins/moment";
import VueSweetalert2 from "vue-sweetalert2";
import vueNumberFormat from "vue-number-format";

import "./assets/main.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "vueperslides/dist/vueperslides.css";

const app = createApp(App);
app.use(moment);
app.use(vueNumberFormat, {
  precision: 0,
  prefix: "",
  decimal: "",
  thousand: ".",
});
app.use(VueSweetalert2);
app.use(router);
app.mount("#app");
