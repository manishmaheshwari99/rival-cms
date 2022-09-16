<template>
  <div class="center">
    <form @submit.prevent="onSubmit">
      <input
        type="text"
        class="form-control"
        v-model="email"
        placeholder="Enter your email..."
      />
      <input
        type="password"
        class="form-control"
        v-model="password"
        placeholder="Enter your password..."
      />
      <input class="btn btn-submit btn-block" type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createToast } from "mosha-vue-toastify";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
      try {
        const user = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );

        this.$router.replace({name: "dashboard"});
        createToast(
          { title: "You have logged in successfully" },
          { type: "success" }
        );
      } catch (err) {
        createToast(
          { title: "Error: Login again after some time" },
          { type: "danger" }
        );
      }
    },
  },
};
</script>

<style scoped>
.center {
  position: absolute;
  width: 312px;
  height: 413px;
  left: 38%;
  top: 20%;
  background: #ffffff;
  border-radius: 10px;
  padding: 25px;
}
</style>