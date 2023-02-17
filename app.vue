<script setup>
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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
})



let observer

function initObserver() {
  const sections = document.querySelectorAll('.is-observed')
  const options = {
    threshold: 0.5
  }
  observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      console.log('Observed')
      if (entry.isIntersecting) {
        console.log('Is visible')
        entry.target.classList.add('is-visible')
        console.log(entry.target)
      }
    })
  }, options)
  sections.forEach((section) => {
    observer.observe(section)
  })
}

onMounted(() => {
  setTimeout(() => {
    initObserver()
  }, 100)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

const transitionProps = {
  name: 'page',
  mode: 'out-in',
  onBeforeLeave: (_el) => {
    console.log('OnBeforeLeave...')
  },
  onLeave: (_el, done) => {
    console.log('OnLeave...')
    if (observer) {
      observer.disconnect()
    }
    // 
    console.log('Observer: ', observer)
    done()
  },
  onAfterLeave: (_el) => {
    console.log('OnAfterLeave...')
  },
  onLeaveCancelled: (_el) => {
    console.log('onLeaveCancelled...')
  },
  onBeforeEnter: (_el) => {
    console.log('OnBeforeEnter...')
  },
  onEnter: (_el, done) => {
    console.log('OnEnter...')
    done()
  },
  onAfterEnter: (_el) => {
    console.log('OnAfterEnter...')
    initObserver()
  },
  onEnterCancelled: (_el) => {
    console.log('onEnterCancelled...')
  }
}
</script>

<template>
  <NuxtLayout :name="layout">
    <SeoKit />
    <NuxtPage />
  </NuxtLayout>
</template>
