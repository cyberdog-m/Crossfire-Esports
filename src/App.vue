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

<style>
@font-face {
  font-family: "August";
  src: local("August"), url(./fonts/August-Bold.woff);
}

/* .background {
  background-image: url(./assets/bg-poster-2.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  animation: scaling 5s linear;
} */

/* @keyframes scaling{
    from{
      background-size: 200%;
    }
    to{
      background-size: contain;
    }
  } */
</style>
