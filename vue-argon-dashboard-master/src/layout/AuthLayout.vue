<template>
  <div class="container-for-bg">
    <!-- Navbar -->
    <base-nav
      class="navbar-top navbar-horizontal navbar-dark"
      containerClasses="px-4 container"
      expand
    >
      <!-- <router-link slot="brand" class="navbar-brand" to="/">
                <img src="img/brand/white.png"/>
            </router-link> -->
    </base-nav>
    <div class="container py-7 py-lg-8">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "auth-layout",
  data() {
    return {
      year: new Date().getFullYear(),
      showMenu: false,

    };
  },
};
</script>
<style>
.container-for-bg{
  background-image: linear-gradient(rgb(236, 0, 140), rgb(169, 54, 149));

}
</style>
