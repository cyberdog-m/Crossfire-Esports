<script setup>
const props = defineProps({
  gameDetail: {
    type: Object,
    default: () => ({
      name: "Game Name",
      route: "/",
    }),
  },
});
</script>

<template>
  <div
    class="duration mx-auto w-[20rem] rounded-xl bg-black bg-opacity-30 bg-clip-padding text-gray-300 backdrop-blur transition ease-in hover:bg-opacity-40 hover:shadow-lg"
  >
    <div class="m-2 h-[15rem] overflow-clip rounded-lg">
      <img
        class="h-full w-full object-cover"
        :src="props.gameDetail.imageUrl"
        alt="game poster"
      />
    </div>
    <div class="mx-2 mb-4">
      <h3 class="font-michroma text-center text-2xl">
        {{ props.gameDetail.name }}
      </h3>
      <!-- Event Details -->
      <div class="mx-4 my-2 flex items-center justify-between">
        <p class="font-exo text-2xl font-bold">
          ₹{{ props.gameDetail.regFee }}
        </p>
        <p class="font-exo font-bold">{{ props.gameDetail.date }}</p>
      </div>
      <!-- Register button -->
      <div class="flex justify-center">
        <a :href="props.gameDetail.route">
          <div
            class="font-exo flex h-10 w-[10rem] items-center justify-center rounded-md bg-gray-800/50 text-center text-white"
          >
            <span>Register</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
