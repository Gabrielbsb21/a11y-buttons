<template>
  <button :style="style" :class="className" @click="toggleContrast">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { A11yManager } from '@a11y-buttons/core';
import '@a11y-buttons/core/src/styles/contrast.css';

const props = defineProps({
  text: { type: String, default: 'Modo Contraste' },
  style: { type: Object, default: () => ({}) },
  className: { type: String, default: '' }
});

const a11yManager = new A11yManager();

function toggleContrast() {
  a11yManager.toggleContrast();
}
</script>
