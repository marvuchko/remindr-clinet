<template>
  <div class="container-info">
    <div class="col-third">
      <h3 class="subtitle">Lorem, ipsum.</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, natus? Veritatis, adipisci quam doloribus perferendis aperiam sapiente illum, consectetur iste dicta, pariatur a laborum corporis?</p>
    </div>
    <div class="col-third">
      <h3 class="subtitle">Lorem, ipsum.</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, natus? Veritatis, adipisci quam doloribus perferendis aperiam sapiente illum, consectetur iste dicta, pariatur a laborum corporis?</p>
    </div>
    <div class="col-third">
      <h3 class="subtitle">Lorem, ipsum.</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, natus? Veritatis, adipisci quam doloribus perferendis aperiam sapiente illum, consectetur iste dicta, pariatur a laborum corporis?</p>
    </div>
  </div>
</template>

<style scoped>
.container-info {
  margin-top: 16px;
  text-align: center;
  column-count: 3;
  column-rule: 1px solid rgba(225, 190, 231, 1);
}

.col-third {
  text-align: justify;
  margin-right: 4px;
  padding: 8px;
  margin-left: auto;
  margin-right: auto;
}

.subtitle {
  display: block;
  text-align: center;
  margin-bottom: 16px;
}

@media screen and (max-width: 700px) {
  .container-info {
    text-align: center;
    column-count: 1;
    column-rule: 0;
  }
}
</style>

