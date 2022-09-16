<template>
  <div class="blog-header">
    <div class="title">Title</div>
    <div class="status">Status</div>
    <div class="stats">Stats</div>
    <div class="add-new">
      <button @click="openModal" class="btn">
        <i class="fa fa-plus"></i>Add new
      </button>
    </div>
  </div>
  <div v-for="blog in displayedPosts" :key="blog.id" class="blog-data">
    <BlogList :blog="blog" />
  </div>
  <div class="pagination">
    <button type="button" class="btn page-link previous" :disabled="page==1" @click="page--">
      Previous
    </button>
    <button
      type="button"
      class="btn page-link"
      v-for="pageNumber in pages.slice(page - 1, page + 5)"
      :key="pageNumber"
      @click="page = pageNumber"
    >
      {{ pageNumber }}
    </button>
    <button
      type="button"
      @click="page++"
      :disabled="page == pages.length"
      class="btn page-link next"
    >
      Next
    </button>
  </div>
  <Modal v-show="showModal" @close="close" @createBlog="createBlog" />
</template>

<script>
import Blogs from "./BlogData";
import BlogList from "../../components/BlogList";
import Modal from "../../components/BlogModal";

export default {
  name: "Blog",
  components: {
    BlogList,
    Modal,
  },
  data() {
    return {
      blogs: Blogs,
      showModal: false,
      page: 1,
      perPage: 5,
      pages: [],
    };
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.blogs.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(blogs) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return blogs.slice(from, to);
    },
    openModal() {
      this.showModal = true;
    },
    close() {
      this.showModal = false;
    },
    createBlog(blogData) {
      console.log(blogData, this.blogs);
      this.blogs = [...this.blogs, blogData];
      console.log(this.blogs);
    },
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.blogs);      
    },
  },
  watch: {
    blogs() {
      this.setPages();
    },
  },
  mounted() {
    this.setPages();
  }
};
</script>

<style>
button.page-link {
  display: inline-block;
}
button.page-link {
  font-size: 20px;
  color: #29b3ed;
  font-weight: 500;
}
.previous, .next {
  margin: 0px 10px;
}
.page-link {
  margin: 0px 10px;
}
.offset {
  width: 500px !important;
  margin: 20px auto;
}

.blog-header {
  padding-bottom: 25px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e2e8f0;
}
.blog-header,
.blog-data {
  display: flex;
  justify-content: center;
  align-items: center;
}
.blog-data {
  margin: 20px 0px;
  padding: 25px 10px;
  background-color: #f7fafc;
}
.blog-heading {
  font-weight: 800;
  color: #2a4365;
  margin: 5px 0px;
}
.blog-posted {
  margin: 0px;
  color: #a0aec0;
  font-weight: 500;
}
.title {
  flex: 0.4;
}
.title div {
  padding: 0px 20px;
}
.status {
  flex: 0.2;
}
.status div {
  padding-right: 15px;
}
.add-new .btn {
  background-color: #2a4365;
  color: white;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  padding: 10px 20px;
}
.fa {
  margin-right: 5px;
}
.btn-status {
  color: #9ae6b4;
  background-color: #f7fafc;
  border: 2px solid #9ae6b4;
  border-radius: 50px;
  padding: 0px;
  width: 120px;
  height: 32px;
}
.stats {
  flex: 0.2;
}
.stats-count {
  color: #2a4365;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  margin-right: 4px;
}
.stats-views {
  color: #a0aec0;
}
.add-new {
  flex: 0.2;
}
.add-new {
  display: flex;
  position: relative;
}
.pagination {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pagination div {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2c5282;
  font-weight: 700;
  margin-right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #e2e8f0;
}
.pagination .active {
  color: white;
  background-color: #2a4365;
}
</style>