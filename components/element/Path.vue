<template>
  <div class="inline-block anim-path">
    <div v-for="(el, index) in props.count" class="rounded-full bg-primary w-3 h-3 mt-3 anim-path-element"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  count: { type: Number, default: 5 },
})
</script>
