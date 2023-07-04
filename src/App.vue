<script setup>
import SideBar from './SideBar.vue';
</script>

<template>
  <div class="container-fluid d-flex p-0 m-0">
    <!-- sideBar -->
    <SideBar />

    <div class="container py-4 px-3 px-md-5 ">
      <router-view></router-view>
    </div>

  </div>
</template>

<style scoped></style>
