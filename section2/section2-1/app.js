const app = Vue.createApp({
  data() {
    return {
      html: "<h1>h1です<h1>",
      courseGoalA: "Good",
      courseGoalB: "Bad",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
