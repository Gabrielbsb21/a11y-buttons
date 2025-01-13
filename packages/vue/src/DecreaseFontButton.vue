<template>
  <button :style="style" :class="className" @click="decreaseFont">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { A11yManager } from '@a11y-buttons/core';
import '@a11y-buttons/core/src/styles/contrast.css';

const props = defineProps({
  text: { type: String, default: 'Diminuir Fonte' },
  style: { type: Object, default: () => ({}) },
  className: { type: String, default: '' }
});

const a11yManager = new A11yManager();

function decreaseFont() {
  a11yManager.decreaseFontSize();
}
</script>
