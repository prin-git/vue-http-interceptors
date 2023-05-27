import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App.vue";
Vue.use(VueResource);
Vue.http.options.root =
  "https://vuehttp-3366a-default-rtdb.firebaseio.com/data.json";
Vue.http.interceptors.push((req, next) => {
  console.log("interceptLog", req);
  /* if (req.method == "POST") {
    req.method = "PUT";
    
  } */
  req.body = { ...req.body, id: Math.random() * 1000000 };
  let arr = [];
  next((res) => {
    res.json = () => {
      for (let i in res.body) {
        arr.push(res.body[i]);
      }
      return arr;
    };
    console.log("inteddrceptLog", arr);
  });
});
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
