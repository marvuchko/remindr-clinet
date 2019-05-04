<template>
  <nav class="nav-top shadow">
    <router-link
      to="/home"
      :class="activeLink === 'home' ? 'active' : ''"
      @click="activeLink = 'home'"
    >
      <i class="fa fa-home" style="margin-right: 5px;"></i>
      Home
    </router-link>
    <router-link
      to="/pricing"
      :class="activeLink === 'pricing' ? 'active' : ''"
      @click="activeLink = 'pricing'"
    >
      <i class="fa fa-dollar-sign" style="margin-right: 5px;"></i>
      Pricing
    </router-link>
    <router-link
      to="/"
      :class="activeLink === 'guide' ? 'active' : ''"
      @click="activeLink = 'guide'"
    >
      <i class="fa fa-book" style="margin-right: 5px;"></i>
      Guide
    </router-link>
    <div class="registration-container">
      <a href="#" class="link-divider registration-link">
        <i class="fa fa-sign-in-alt" style="margin-right: 5px;"></i>
        Sign in
      </a>
      <a href="#" class="registration-link">
        <i class="fa fa-user-plus" style="margin-right: 5px;"></i>
        Sign up
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    activeLink() {
      const pathParts = this.$route.path.split("/");
      if (pathParts[1] === "") {
        return "home";
      }
      return pathParts[1];
    }
  }
};
</script>


<style scoped>
.nav-top {
  background-image: linear-gradient(
    to right,
    rgba(142, 36, 170, 1),
    rgba(74, 20, 140, 1)
  );
  overflow: hidden;
  position: relative;
}

.nav-top a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.nav-top a:hover {
  background-color: rgba(225, 190, 231, 1);
  color: rgba(123, 31, 162, 1);
}

.nav-top a.active {
  background-color: rgba(186, 104, 200, 1);
  color: white;
}

.registration-container {
  position: absolute;
  top: 5px;
  right: 5px;
}

.link-divider {
  border-right: 1px solid;
}

.link-divider:hover {
  border-right-color: white !important;
}

.registration-link {
  padding: 8px 10px !important;
}

.registration-link:hover {
  color: rgba(225, 190, 231, 1) !important;
  background-color: rgba(0, 0, 0, 0) !important;
}
</style>
