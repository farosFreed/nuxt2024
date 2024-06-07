<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1>Welcome to Nuxt UI Starter</h1>
          <ColorScheme
            ><USelect
              v-model="$colorMode.preference"
              :options="['system', 'light', 'dark']"
          /></ColorScheme>
        </div>
      </template>
      <PhaserGame :createGame="createGame" v-if="createGame" />
      <UButton
        icon="i-heroicons-book-open"
        to="https://ui.nuxt.com"
        target="_blank"
        >Open Nuxt UI Documentation</UButton
      >
    </UCard>
  </UContainer>
</template>
<script lang="ts">
import PhaserGame from "nuxtjs-phaser/phaserGame.vue";

async function getGame() {
  const { createGame } = await import("~/game/game");
  return createGame;
}

declare interface IndexPageData {
  createGame?: () => Phaser.Game;
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
    };
  },
  methods: {
    emitPhaserEvent(eventName: string) {
      this.$phaser?.eventEmitter?.emit(eventName, "default");
    },
    jump() {
      this.emitPhaserEvent("jump");
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
    this.createGame = await getGame();
    this.$nextTick(() => setPhaserFocus());
  },
};
</script>
