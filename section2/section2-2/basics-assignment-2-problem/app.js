const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      comfirmedInput: "",
    };
  },
  methods: {
    saveInput(event) {
      this.userInput = event.target.value;
    },
    noticeForm() {
      alert("NOTCE!");
    },
    confirmInput() {
      this.comfirmedInput = this.userInput;
    },
  },
});

app.mount("#assignment");
