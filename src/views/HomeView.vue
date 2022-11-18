<script setup>
import GameCard from "../components/GameCard.vue";
const games = [
  {
    id: 1,
    name: "Valorant",
    regFee: "23",
    date: "25/11/2022",
    imageUrl: "src/assets/game-card/valorent.jpg",
    route: "/valorant",
  },
  {
    id: 2,
    name: "Fifa PC",
    regFee: "45",
    date: "25/11/2022",
    imageUrl: "src/assets/game-card/fifa-pc.jpg",
  },
  {
    id: 3,
    name: "E Football",
    regFee: "45",
    date: "25/11/2022",
    imageUrl: "src/assets/game-card/e-football.jpg",
  },
  {
    id: 4,
    name: "BGMI",
    regFee: "45",
    date: "25/11/2022",
    imageUrl: "src/assets/game-card/pubg.jpg",
  },
  {
    id: 5,
    name: "Forza Horizon",
    regFee: "45",
    date: "25/11/2022",
    imageUrl: "src/assets/game-card/forza.jpg",
  },
  {
    id: 6,
    name: "Free Fire",
    regFee: "45",
    date: "25/11/2022",
    imageUrl: "src/assets/game-card/free-fire.jpg",
  },
];
</script>

<template>
  <div class="flex flex-col pt-24">
    <!-- <h1 class="mx-auto text-white md:hidden text-9xl font-august">ESPORTS</h1>
    <h2 class="mx-auto mt-5 text-white md:hidden text-8xl font-august">TOURNAMENT</h2> -->
    <!-- Show only on large screens -->
    <!-- <h1 class="hidden mx-auto text-white md:block text-9xl font-august">ESPORTS TOURNAMENT</h1> -->
    <div class="flex justify-center">
      <img
        src="../assets/crossfire-logo-white.png"
        alt="Crossfire logo"
        class="w-[22rem] sm:w-[30rem]"
      />
    </div>
    <p class="font-michroma mx-auto mt-5 tracking-wide text-gray-50/75">
      Tagline goes here
    </p>
  </div>
  <!-- Divider Line -->
  <div class="mx-auto mt-5 max-w-4xl px-10">
    <div class="mx-auto h-1 rounded-sm bg-gray-50/30 backdrop-blur-md"></div>
  </div>
  <h2 class="font-michroma mt-5 text-center text-3xl tracking-wider text-white">
    Games
  </h2>
  <div
    class="mx-auto mt-5 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
  >
    <GameCard v-for="game in games" :key="game.id" :gameDetail="game" />
  </div>
</template>
