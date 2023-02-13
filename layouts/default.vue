<template>
  <div class="nuxt-app max-w-full min-h-screen overflow-x-clip">
    <main class="min-h-screen">
      <nuxt-link to="/" class="navbar-item logo absolute z-10 h-12 top-6 left-6 block">
        <svg-logo class="text-white h-full" />
      </nuxt-link>

      <nuxt-link to="https://kurse.carinakarmann.de" target="_blank" class="navbar-item logo absolute z-10 h-10 top-6 right-6">
        <SvgLogin class="text-white h-full" />
      </nuxt-link>

      <slot />
    </main>
    <LayoutFooter class="bg-secondary text-white">
      
    </LayoutFooter>
    <!-- <LayoutToTop /> -->
    <!-- <LayoutModal v-if="showModal">
      <div class="iframe-container relative overflow-hidden w-full pt-[56.25%] min-w-[95vw] lg:min-w-[900px]">
        <iframe class="absolute inset-0 w-full h-full" src="https://www.youtube-nocookie.com/embed/NqMzqxH3vUc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </LayoutModal> -->
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const route = useRoute()
</script>

<style lang="postcss">
/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;

  .hero-background {
    @media (min-width: 1025px) {
      transition: all 0.2s ease-out;
    }
  }
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(-1rem);
  filter: grayscale(100%);
  /* filter: blur(1rem); */

  .hero-background {
    @media (min-width: 1025px) {
      opacity: 0;
      transform: translateY(2rem)
    }
  }

  /* .hero-background {
    opacity: 0;
    transform: translateY(2rem)
  } */
}

main > div {
  @apply bg-white;
}


/* Animations */
/* :root {
  --animation-transition-short: 0.2s;
  --animation-transition-medium: 0.4s;
}

@media only screen and (min-width: 1024px) {
  .onload-fade-up,
  .onvisible-fade-up {
    will-change: transform, opacity;
    transition: transform var(--animation-transition-medium) ease-out, opacity var(--animation-transition-medium) ease-out;
    transform: translateY(15px);
    opacity: 0;

    &.is-visible {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .onload-fade-down,
  .onvisible-fade-down {
    will-change: transform, opacity;
    transition: transform var(--animation-transition-medium) ease-out, opacity var(--animation-transition-medium) ease-out;
    transform: translateY(-15px);
    opacity: 0;

    &.is-visible {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .animation-ready {
    .onload-fade-up,
    .onload-fade-down {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .onload-fade-right,
  .onvisible-fade-right {
    will-change: transform, opacity;
    transition: transform var(--animation-transition-medium) ease-out, opacity var(--animation-transition-medium) ease-out;
    transform: translateX(-50px);
    opacity: 0;

    &.is-visible {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .onload-fade-left,
  .onvisible-fade-left {
    will-change: transform, opacity;
    transition: transform var(--animation-transition-medium) ease-out, opacity var(--animation-transition-medium) ease-out;
    transform: translateX(20px);
    opacity: 0;

    &.is-visible {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .animation-ready {
    .onload-fade-right {
      transform: translateY(0);
      opacity: 1;
    }
  }
}

.is-staggered-1 {
  transition-delay: var(--animation-transition-short);
}

.is-staggered-2 {
  transition-delay: calc(2 * var(--animation-transition-short));
}

.is-staggered-3 {
  transition-delay: calc(3 * var(--animation-transition-short));
}

.is-staggered-4 {
  transition-delay: calc(4 * var(--animation-transition-short));
}

.is-staggered-5 {
  transition-delay: calc(5 * var(--animation-transition-short));
}

.is-staggered-6 {
  transition-delay: calc(6 * var(--animation-transition-short));
}

.is-staggered-7 {
  transition-delay: calc(7 * var(--animation-transition-short));
}

.is-staggered-8 {
  transition-delay: calc(8 * var(--animation-transition-short));
}

.is-staggered-9 {
  transition-delay: calc(9 * var(--animation-transition-short));
}

.is-staggered-10 {
  transition-delay: calc(10 * var(--animation-transition-short));
} */
</style>
