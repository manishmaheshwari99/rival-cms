<template>
  <header>
    <div class="header">
      <router-link to="/dashboard" class="header-logo"> Auriga IT </router-link>
    </div>
    <div class="header-menu">
      <div>
      <img src="https://picsum.photos/200" />
      <button class="btn" @click="signOut">Sign out</button>
      </div>
    </div>
  </header>
</template>

<script>
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export default {
  name: "Header",
  methods: {
    async signOut() {
      try {
        const data = await signOut(auth);
        this.$router.replace({ name: "login" });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #2d3748;
}
.header {
  margin-left: 75px;
}
.header-logo {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 23px;
  color: white;
  text-decoration: none;
}

.header-menu div {
  display: flex;
  /* justify-content: flex-end; */
  margin-right: 25px;
}
.header-menu div img {
  width: 38px;
  height: 38px;
  border-radius: 50%;
}
.header-menu div * {
  margin-left: 15px;
}
.btn {
  color: white;
  font-weight: 700;
  font-size: 17px;
  background-color: #D53F8C;
}

</style>