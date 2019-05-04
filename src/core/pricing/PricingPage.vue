<template>
  <div class="content">
    <div class="navbar-container">
      <app-default-navbar></app-default-navbar>
    </div>
  </div>
</template>

<script>
import DefaultNavbar from "../../shared/components/DefaultNavbar.vue";

export default {
  components: {
    "app-default-navbar": DefaultNavbar
  }
};
</script>


<style scoped>
.content {
  position: relative;
  min-height: 100vh;
  padding: 20px;
  background-color: rgba(250, 250, 250, 1);
}

.navbar-container {
  margin-bottom: 15px;
}
</style>
