<template>
  <div>
    <add-blog />
  </div>
</template>

<script>
import AddBlog from './components/AddBlog';
export default {
  components: {
    'AddBlog': AddBlog
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
  body {
    margin: 0;
    font-family: 'Courier New', Courier, monospace;
  }
</style>