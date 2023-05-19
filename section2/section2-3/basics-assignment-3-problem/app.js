const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Not there yet";
      } else if (this.number === 37) {
        return this.number;
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    add(num) {
      this.number = this.number + num;
    },
  },
  watch: {
    result() {
      console.log("初期化");
      setTimeout(() => {
        this.number = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
