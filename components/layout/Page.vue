<template>
  <div>
    <header class="hero pt-16 pb-24 bg-primary-inverse text-white pt-40">
      <div class="container max-w-screen-xl">
        <h1 class="text-6xl font-display text-primary uppercase"><slot name="title" /></h1>
      </div>
    </header>
    <section class="bg-white skew">
      <div class="container prose max-w-screen-xl">
        <slot />
      </div>
    </section>
  </div>
</template>