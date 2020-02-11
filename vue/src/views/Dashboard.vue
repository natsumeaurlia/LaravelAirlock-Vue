<template>
  <div>
    <h1>ログイン者情報</h1>
    <ul v-if="isLogin">
      <li>{{user.name}}</li>
      <li>{{user.email}}</li>
      <li>
        <button type="button" @click="logout">logout</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  components: {},
  computed: {
    isLogin() {
      return this.$store.getters["auth/check"];
    },
    user() {
      return this.$store.getters["auth/user"];
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.push({ name: "home" });
      });
    }
  },
  mounted() {
    const token = this.$store.getters["auth/token"];
    const user = this.$store.getters["auth/user"];
    if (token && !user) {
      this.$store.dispatch("auth/fetchUser");
    }
  }
};
</script>
