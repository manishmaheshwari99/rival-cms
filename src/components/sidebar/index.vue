<template>
  <div class="sidebar">
    <router-link to="dashboard/manage">Manage</router-link>
    <ul>
      <li>
        <i class="fa fa-home sidebar-icon" aria-hidden="false"></i>
        <router-link to="manage/view-site">View Site</router-link>
      </li>
      <li>
        <i class="fa fa-file-o sidebar-icon" aria-hidden="false"></i>
        <router-link to="manage/">Create page</router-link>
      </li>
      <li>
        <i class="fa fa-rss sidebar-icon" aria-hidden="false"></i>
        <router-link to="dashboard/manage/blog">Blog articles</router-link>
      </li>
      <li>
        <i class="fa fa-files-o sidebar-icon" aria-hidden="false"></i>
        <router-link to="manage/view-site">Files</router-link>
      </li>
      <li>
        <i class="fa fa-user-o sidebar-icon" aria-hidden="false"></i>
        <router-link to="manage/view-site">Users</router-link>
      </li>
      <li>
        <i class="fa fa-scribd sidebar-icon" aria-hidden="false"></i>
        <router-link to="manage/view-site">Subscriptions</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
.sidebar {
  box-sizing: border-box;
  width: 250px;
  height: calc(100vh - 80px);
  padding: 60px 0px 0px 40px;
}
ul {
  padding: 0px;
  list-style: none;
}
ul li {
  margin-top: 20px;
}
.sidebar-icon {
  color: #2c5282;
  font-size: 20px;
  margin-right: 15px;
}
a {
  text-decoration: none;
  color: #2c5282;
  font-family: "Roboto";
  font-style: normal;
}
</style>