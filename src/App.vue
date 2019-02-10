<template>
  <div>
    <app-header />
    <router-view />
  </div>
</template>

<script>
import AddBlog from "./components/AddBlog";
import ShowBlogs from "./components/ShowBlogs";
import ListBlogs from "./components/ListBlogs";
import Header from "./components/Header";

export default {
  components: {
    'add-blog': AddBlog,
    'show-blogs': ShowBlogs,
    'list-blogs': ListBlogs,
    'app-header': Header
  },
  data() {
    return {};
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: "Courier New", Courier, monospace;
}
</style>