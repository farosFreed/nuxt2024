<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1>_Yourname_Tea_Shoppe_</h1>
          <ColorScheme
            ><USelect
              v-model="$colorMode.preference"
              :options="['system', 'light', 'dark']"
          /></ColorScheme>
        </div>
      </template>
      <PhaserGame :createGame="createGame" v-if="createGame" />
      <!-- <UButton
        icon="i-heroicons-book-open"
        to="https://ui.nuxt.com"
        target="_blank"
        >Open Nuxt UI Documentation</UButton
      > -->
    </UCard>
  </UContainer>
</template>
<script lang="ts">
import PhaserGame from "nuxtjs-phaser/phaserGame.vue";

async function getGame() {
  const { createGame } = await import("~/game/game");
  return createGame;
}

async function fetchGameState(gameId = 0) {
  const gameState = await $fetch("/api/gamestate");
  console.log("data", gameState);
  return gameState;
}

declare interface IndexPageData {
  createGame?: () => Phaser.Game;
  gameState?: any;
}

const setPhaserFocus = () => {
  const phaser = document.getElementById("phaser");
  if (phaser) phaser.focus();
};

export default {
  name: "IndexPage",
  components: { PhaserGame },
  data(): IndexPageData {
    return {
      createGame: undefined,
      gameState: undefined,
    };
  },
  methods: {
    emitPhaserEvent(eventName: string) {
      this.$phaser?.eventEmitter?.emit(eventName, "default");
    },
    jump() {
      this.emitPhaserEvent("jump");
    },
    interact() {
      this.emitPhaserEvent("interact");
    },
    walkLeft() {
      this.emitPhaserEvent("walkLeft");
    },
    walkRight() {
      this.emitPhaserEvent("walkRight");
    },
    pause() {
      this.emitPhaserEvent("pause");
    },
    resume() {
      this.emitPhaserEvent("resume");
    },
  },
  async mounted() {
    // this.gameState = await fetchGameState(); // to do implement gameId
    this.createGame = await getGame();
    this.$nextTick(() => setPhaserFocus());
  },
};
</script>
