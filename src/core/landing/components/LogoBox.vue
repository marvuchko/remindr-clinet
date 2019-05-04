<template>
  <div>
    <img class="logo-image" src="../../../assets/images/logo-white.png" alt="Logo">
    <h1>
      <span class="heading-primary">RemindR</span>
      <span class="heading-secondary">won't let you forget anything</span>
    </h1>
    <div style="text-align: center; display: inline;">
      <button class="button-get-started shadow">
        <i class="fa fa-arrow-right"></i>
        <span style="margin-left: 5px;">Get Started</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.logo-image {
  height: 115px;
}

.heading-primary {
  font-size: 35px;
  display: block;
  letter-spacing: 15px;
}

.heading-secondary {
  font-size: 16px;
  display: block;
  letter-spacing: 1px;
}

h1 {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  line-height: 1.7;
}

.button-get-started {
  background-color: rgba(243, 229, 245, 1);
  height: 40px;
  width: 160px;
  margin-top: 20px;
  border-radius: 20px;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  line-height: 1.7;
  font-size: 16px;
  cursor: pointer;
  color: rgba(156, 39, 176, 1);
  border: 0;
  outline: none;
}

.button-get-started:hover {
  background-color: rgba(237, 231, 246, 1);
}

@media screen and (max-width: 700px){
  .logo-image {
    height: 75px;
    animation-name: "LogoImageAnimation";
    animation-duration: 1s;
  }

  .heading-primary {
    font-size: 24px;
  }

  .heading-secondary {
    font-size: 14px;
    letter-spacing: 3px;
  }

  .button-get-started {
    width: 200px;
  }
}

@keyframes LogoImageAnimation {
  0% {
    transform: translateX(-50%);
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
