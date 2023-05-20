const app = Vue.createApp({
  data() {
    return { enterTaskValue: "", tasks: [], taskListIsVisible: true };
  },
  computed: {
    buttonCaption() {
      return this.taskListIsVisible ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enterTaskValue);
    },
    toggleTaskList() {
      this.taskListIsVisible = !this.taskListIsVisible;
    },
  },
});

app.mount("#assignment");
