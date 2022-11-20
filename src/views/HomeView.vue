<script setup>
import GameCard from "../components/GameCard.vue";
const games = [
  {
    id: 1,
    name: "Valorant",
    regFee: "250",
    date: "",
    imageUrl: "valorent.jpg",
    route: "/valorant",
  },
  {
    id: 2,
    name: "Fifa PC",
    regFee: "20",
    date: "22/11/2022",
    imageUrl: "fifa-pc.jpg",
    route: "/fifapc"
  },
  {
    id: 3,
    name: "E Football",
    regFee: "50",
    date: "",
    imageUrl: "e-football.jpg",
    route: "/efootball"
  },
  {
    id: 4,
    name: "BGMI",
    regFee: "200",
    date: "",
    imageUrl: "pubg.jpg",
    route: "/bgmi"
  },
  {
    id: 5,
    name: "Forza Horizon",
    regFee: "20",
    date: "",
    imageUrl: "forza.jpg",
    route: "/forza"
  },
  {
    id: 6,
    name: "Free Fire",
    regFee: "100",
    date: "",
    imageUrl: "free-fire.jpg",
    route: "/freefire"
  },
];
games.sort((a, b) => a.id - b.id);
</script>

<template>
  <div class="flex flex-col pt-24">
    <div class="flex justify-center">
      <img
        src="../assets/crossfire-logo-white.png"
        alt="Crossfire logo"
        class="w-[20rem] sm:w-[30rem]"
      />
    </div>
    <p class="mx-auto mt-5 tracking-wide text-center font-michroma text-gray-50/75">
      Your Battle Begins Here
    </p>
  </div>
  <!-- Divider Line -->
  <div class="max-w-4xl px-10 mx-auto mt-5">
    <div class="h-1 mx-auto rounded-sm bg-gray-50/30 backdrop-blur-md"></div>
  </div>
  <h2 class="mt-5 text-3xl tracking-wider text-center text-white font-michroma">
    Games
  </h2>
  <div
    class="grid max-w-5xl grid-cols-1 gap-4 mx-auto mt-5 md:grid-cols-2 xl:grid-cols-3"
  >
    <GameCard v-for="game in games" :key="game.id" :gameDetail="game" />
  </div>
</template>
