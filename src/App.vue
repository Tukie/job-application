<script setup>
import SideBar from './SideBar.vue';
</script>


<template>
  <div class="container-fluid d-flex p-0 m-0">
    <!-- sideBar -->
    <SideBar />

    <router-view></router-view>

  </div>
</template>

<style scoped></style>
