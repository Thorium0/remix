import {createApp} from "vue";
import "./assets/base.scss";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

// 注册全局组件
import * as Components from "./global-components";
Object.entries(Components).forEach(([key, component]) => {
	app.component(key, component);
});

app.use(router).use(store).mount("#app");
