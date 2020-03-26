<template>
  <div>
    <b-navbar type="dark" variant="info">
      <b-navbar-brand href="#/">
        {{ title }}
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item href="#/create_post">
          Create new Post
        </b-nav-item>
      </b-navbar-nav>
      <Userbutton class="ml-auto" />
    </b-navbar>
  </div>
</template>

<script>
import Userbutton from "./Userbutton.vue";

export default {
  props: ["title"],
  components: {
    Userbutton
  }
};
</script>

<style>
</style>