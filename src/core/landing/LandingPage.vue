<template>
  <div class="content">
    <div class="navbar-container">
      <app-default-navbar></app-default-navbar>
    </div>
    <div class="container-outer">
      <div class="container-middle">
        <div class="container-inner">
          <app-logo-box></app-logo-box>
        </div>
      </div>
    </div>
    <app-container-info></app-container-info>
  </div>
</template>

<script>
import DefaltNavbar from "../../shared/components/DefaultNavbar.vue";
import ContainerInfo from "./components/ContainerInfo.vue";
import LogoBox from "./components/LogoBox.vue";

export default {
  components: {
    "app-default-navbar": DefaltNavbar,
    "app-container-info": ContainerInfo,
    "app-logo-box": LogoBox
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

.container-outer {
  height: 325px;
  width: 100%;
  background-image: linear-gradient(
      to bottom right,
      rgba(186, 104, 200, 0.9),
      rgba(74, 20, 140, 0.95)
    ),
    url("https://cdn.pixabay.com/photo/2016/07/01/09/26/texting-1490691_960_720.jpg");
  background-size: cover;
  background-position: center;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 90%);
}

.container-middle {
  height: 100%;
  position: relative;
}

.container-inner {
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  color: rgb(238, 238, 238);
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
}

@media screen and (max-width: 700px) {
  .content {
    padding: 0;
  }

  .navbar-container {
    display: none;
  }
}
</style>
