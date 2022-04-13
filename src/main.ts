import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
const app = createApp(App);
import {
  Button,
  List,
  Cell,
  Toast,
  Icon,
  Field,
  Grid,
  GridItem,
  Image,
  Uploader,
  Dialog,
} from "vant";
import { createPinia } from "pinia";
import VConsole from "vconsole";

// const vConsole = new VConsole();
app.use(Button);
app.use(List);
app.use(Cell);
app.use(router);
app.use(Icon);
app.use(createPinia());
app.use(Field);
app.use(Toast);
app.use(Grid);
app.use(GridItem);
app.use(Image);
app.use(Uploader);
app.use(Dialog);
app.mount("#app");
