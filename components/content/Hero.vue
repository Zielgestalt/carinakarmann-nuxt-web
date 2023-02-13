<template>
  <header class="hero pt-32 md:pt-40 lg:pt-32 xl:pt-40 pb-16 bg-white relative" :class="{ 'pb-32 lg:pb-20 xl:pb-32': props.large }">
    <div v-if="slots.background" class="hero-background absolute top-0 w-full h-full" :class="{ 'background-fullwidth': props.fullBackground }">
      <slot name="background" />
      
      <!-- <div class="absolute top-0 w-full h-full bg-gradient-to-t from-black to-gray-800 opacity-80 lg:opacity-60 xl:hidden"></div> -->
      <!-- <div v-if="props.fullBackground" class="absolute top-0 w-full h-full bg-gradient-to-r from-gray-800 via-gray-800 via-transparent opacity-60"></div> -->
    </div>
    
    <div class="container relative z-1 max-w-screen-2xl">
      <slot />
    </div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps({
  large: { type: Boolean, default: false },
  fullBackground: { type: Boolean, default: false },
})

const slots = useSlots()
</script>

<style lang="postcss">
  .hero-background > img {
    @apply ml-auto h-full w-auto max-w-none
  }

  .hero-background picture {
    @apply ml-auto h-full w-auto max-w-none
  }

  .hero-background picture img {
    @apply ml-auto h-full w-auto max-w-none -translate-x-[40%] md:transform-none
  }
  .hero-background.background-fullwidth > img,
  .hero-background.background-fullwidth > picture {
    @apply w-full h-full object-cover object-center
  }
</style>