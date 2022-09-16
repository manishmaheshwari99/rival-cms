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
      <input class="btn btn-submit btn-block" type="submit" value="Register" />
    </form>
  </div>
</template>

<script>
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createToast } from "mosha-vue-toastify";


export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );

        createToast(
          { title: "You have registered successfully" },
          { type: "success" }
        );
        this.$router.replace({name: "dashboard"})
      } catch (err) {
        createToast(
          { title: "Error: Something's happens wrong" },
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