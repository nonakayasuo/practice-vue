const app = Vue.createApp({
  data() {
    return {
      boxASeletcted: false,
      boxBSeletcted: false,
      boxCSeletcted: false,
    };
  },
  methods: {
    boxSeletcted(box) {
      if (box === "A") {
        this.boxASeletcted = !this.boxASeletcted;
      }
      if (box === "B") {
        this.boxBSeletcted = !this.boxBSeletcted;
      }
      if (box === "C") {
        this.boxCSeletcted = !this.boxCSeletcted;
      }
    },
  },
});

app.mount("#styling");
