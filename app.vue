<script setup>
import Phaser from "phaser";
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "gameContainer",
  physics: {
    default: "arcade",
    arcade: {
      // gravity: { y: 200 }
    },
  },
  scene: [GameScene],
};
const game = new Phaser.Game(config);
</script>
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
      <div id="gameContainer" class="game-div"></div>
      <UButton
        icon="i-heroicons-book-open"
        to="https://ui.nuxt.com"
        target="_blank"
        >Open Nuxt UI Documentation</UButton
      >
    </UCard>
  </UContainer>
</template>
