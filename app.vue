<template>
  <NuxtLayout :name="layout">
    <SeoKit />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const route = useRoute()
const config = useRuntimeConfig()
const layout = route.meta.layout || config.public.defaultLayout || 'default'

useHead({
  link: [
    { rel: 'apple-touch-icon', size: '180x180', href: '/favicon/apple-icon.png' },
    { rel: 'icon', type: 'image/png', size: '32x32', href: '/favicon/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', size: '16x16', href: '/favicon/favicon-16x16.png' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
    { rel: 'manifest', href: '/favicon/site.webmanifest' },
  ]
  // as a string,
  // where `%s` is replaced with the title
  // titleTemplate: '%s - ' + config.public.siteTitle
  // ... or as a function
  // titleTemplate: (productCategory) => {
  //   return productCategory
  //     ? `${productCategory} - Site Title`
  //     : 'Site Title'
  // }
})
</script>
