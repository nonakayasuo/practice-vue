const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  computed: {
    fullname() {
      console.log("実行");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Nonaka";
    },
  },
  methods: {
    outputFullname() {
      console.log("実行");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Nonaka";
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(num) {
      this.name = "";
    },
  },
});

app.mount("#events");
