<template>
  <router-view />
</template>

<script>
import Login from "./views/Login";

export default {
  name: "App",
  components: {
    Login,
  },
};
</script>

<style>
body {
  padding: 0px;
  margin: 0px;
  background-color: #e5e5e5;
}
.btn {
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn-block {
  display: block;
  width: 100%;
}
.form-control {
  box-sizing: border-box;
  display: block;
  height: 35px;
  margin-bottom: 1rem;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>
