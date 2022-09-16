<template>
  
    <div class="title">
      <div>
        <p class="blog-heading">{{ blog?.title }}</p>
        <p class="blog-posted">{{ blog?.posted }}</p>
      </div>
    </div>
    <div class="status">
      <div>
        <button class="btn btn-status">
          {{ blog?.status }}
        </button>
      </div>
    </div>
    <div class="stats">
      <span class="stats-count">{{ blog?.views }}</span>
      <span class="stats-views">views</span>
    </div>
    <div class="add-new">
      <i class="fa fa-ellipsis-h" @click="openAction" aria-hidden="true"></i>
      <div class="side-modal" v-if="isOpen">
        <p>Edit</p>
        <p>Delete</p>
      </div>
    </div>
</template>

<script>
export default {
  name: "BlogList",
  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    blog: Object,
  },
  methods: {
    openAction() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.side-modal {
  padding: 15px 20px;
  background-color: white;
  position: absolute;
  left: 30px;
}
.side-modal p {
  margin-top: 0px;
}
.side-modal p:last-child {
  margin-bottom: 0px;
}
</style>