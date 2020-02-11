<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="registerForm.name" />
      <label for="email">E-mail Address</label>
      <input type="email" id="email" v-model="registerForm.email" />
      <label for="password">Password</label>
      <input type="password" id="password" v-model="registerForm.password" />
      <label for="password_confirm">Confirm Password</label>
      <input type="password" id="password_confirm" v-model="registerForm.password_confirmation" />
      <button type="submit">register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "register",
  components: {},
  data() {
    return {
      registerForm: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  },
  methods: {
    register() {
      this.$store.dispatch("auth/register", this.registerForm).then(() => {
        this.$router.push({ name: "dashboard" });
      });
    }
  }
};
</script>
