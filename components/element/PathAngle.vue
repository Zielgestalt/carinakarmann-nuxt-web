<template>
  <div class="inline-block anim-path">
    <div v-for="(el, index) in props.count" class="rounded-full bg-primary w-3 h-3 mt-3 anim-path-element"></div>
    <div class="rounded-full bg-primary w-3 h-3 mt-2 ml-3 anim-path-element"></div>
    <div class="rounded-full bg-primary w-3 h-3 mt-1 ml-8 anim-path-element"></div>
    <div class="flex -mt-1 ml-14">
      <div v-for="(el, aindex) in props.countAfter" class="rounded-full bg-primary w-3 h-3 mr-3 anim-path-element"></div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  count: { type: Number, default: 3 },
  countAfter: { type: Number, default: 2 },
})
</script>
