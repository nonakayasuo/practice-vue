const app = Vue.createApp({
  data() {
    return {
      name: "ahemoe",
      age: 35,
      vueLink:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
    };
  },
  methods: {
    outputNumber() {
      const randomNumber = Math.random();
      return randomNumber;
    },
  },
});

app.mount("#assignment");
