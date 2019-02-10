<template>
  <div>
    <ShowBlogs/>
  </div>
</template>

<script>
import AddBlog from "./components/AddBlog";
import ShowBlogs from "./components/ShowBlogs";

export default {
  components: {
    AddBlog: AddBlog,
    ShowBlogs: ShowBlogs
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