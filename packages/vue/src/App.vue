<template>
  <div style="display: flex; gap: 10px;">
    <ContrastButton text="Modo Contraste" />
    <IncreaseFontButton text="Aumentar Fonte" />
    <DecreaseFontButton text="Diminuir Fonte" />
  </div>
</template>

<script setup lang="ts">
import ContrastButton from './ContrastButton.vue';
import IncreaseFontButton from './IncreaseFontButton.vue';
import DecreaseFontButton from './DecreaseFontButton.vue';
</script>
