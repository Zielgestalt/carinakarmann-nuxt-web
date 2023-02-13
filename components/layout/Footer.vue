<template>
  <footer class="pt-16 pb-6">
    <div class="container max-w-screen-2xl">
      <NuxtLink to="/" class="mb-12 block">
        <SvgLogo class="w-48" />
      </NuxtLink>

      © <span class="uppercase">Carina Karmann</span> - {{ new Date().getFullYear() }}  |  <NuxtLink to="/impressum">Impressum</NuxtLink>
    </div>
  </footer>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const brand = ref(config.public.brand || {})
</script>

<style lang="postcss" scoped>

</style>
