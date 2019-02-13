<template>
  <div>
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    "app-header": Header
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