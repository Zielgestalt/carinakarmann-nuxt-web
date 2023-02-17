<template>
  <NuxtLink :to="props.link" class="relative cursor-pointer inline-block group transition hover:scale-105">
    <svg data-name="button-shape" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 218 82" class="absolute inset-0 object-fill w-full h-full cursor-pointer">
      <path class="fill-primary group-hover:fill-primary-hover transition-colors" d="m185,74c-18,0-33.46,8-53.23,8s-31.36-8-50.07-8h-48.7C14.85,74,0,59.15,0,41h0C0,22.85,15,8,33,8S65.61,0,87.3,0s27.14,8,48.42,8h49.28c18.15,0,33,14.85,33,33h0c0,18.15-15,33-33,33Z"/>
    </svg>
    <span><slot /></span>
    
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  link: { type: String, default: '' }
})
</script>

<style lang="postcss" scoped>
.cls-1 {
  fill: #939393;
}

span {
  position: relative;
  padding: 1.75rem 2rem;
  font-weight: 300;
  text-align: center;
  display: inline-block;
  letter-spacing: 0.1em;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  /* transition: background-color .25s, border-color .25s, color .25s; */
}
</style>