<template>
  <Header />
  <div class="container">
    <Sidebar />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";

export default {
  name: "Dashboard",
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style scoped>
.container {
  position: relative;
}
.content {
  background-color: white;
  width: calc(100% - 330px);
  position: absolute;
  left: 250px;
  top: 0px;
  padding: 40px;
  min-height: calc(100vh - 120px);
}
</style>