<script setup>
import { RouterView } from "vue-router";
import MainNavbar from "./components/MainNavbar.vue";
import FooterBar from "./components/FooterBar.vue";
</script>

<template>
  <div class="background">
    <div class="min-h-screen">
      <MainNavbar />
      <RouterView />
      <FooterBar />
    </div>
  </div>
</template>