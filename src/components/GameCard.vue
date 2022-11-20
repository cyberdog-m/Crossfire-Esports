<script setup>
import { computed } from '@vue/reactivity';
import { useRouter } from 'vue-router';

const props = defineProps({
  gameDetail: {
    type: Object,
    default: () => ({
      name: "Game Name",
      route: "/",
    }),
  },
});
const router = useRouter()
const redirect = ()=>{
  router.push(props.gameDetail.route)
  console
}
const imageUrlParsed = computed(()=>{
  return new URL(`../assets/game-card/${props.gameDetail.imageUrl}`, import.meta.url)
})
</script>

<template>
  <div @click="redirect"
    class="duration mx-auto w-[18rem] rounded-xl bg-black/30 bg-clip-padding text-gray-300 transition ease-in hover:bg-opacity-60 hover:shadow-lg"
  >
    <div class="m-2 h-[15rem] overflow-clip rounded-lg">
      <img
        class="object-cover w-full h-full"
        :src="imageUrlParsed"
        alt="game poster"
      />
    </div>
    <div class="mx-2 mb-4">
      <h3 class="text-2xl text-center font-michroma">
        {{ props.gameDetail.name }}
      </h3>
      <!-- Event Details -->
      <div v-if="props.gameDetail.regFee"
      class="flex items-center justify-between mx-4 my-2">
        <p class="text-2xl font-bold font-exo">
          ₹{{ props.gameDetail.regFee }}
        </p>
        <p class="font-bold font-exo">{{ props.gameDetail.date }}</p>
      </div>
      <div v-else class="my-2 text-center">
        <p class="font-exo">Coming Soon ...</p>
      </div>
      <!-- Register button -->
      <div class="flex justify-center">
        <a :href="props.gameDetail.route">
          <div
            class="font-exo flex h-10 w-[10rem] items-center justify-center rounded-md bg-gray-800/50 text-center text-white hover:bg-gray-800/70"
          >
            <span v-if="props.gameDetail.regFee">Register</span>
            <span v-else>Know More</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
