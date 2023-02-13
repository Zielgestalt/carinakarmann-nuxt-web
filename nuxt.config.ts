import { createResolver } from '@nuxt/kit'
import tailwindTypography from '@tailwindcss/typography'
const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    'nuxt-seo-kit',
  ],

  modules: [
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    '@nuxtjs/fontaine',
  ],

  runtimeConfig: { // Remove this in prod
    // apiKey: '' // Default to an empty string, automatically set at runtime using process.env.NUXT_API_KEY
    public: {
      siteUrl: process.env.SITE_URL,
      siteName: 'Carina Karmann',
      siteDescription: 'Fitness / Ernährung / Bewusstsein - Ich bringe dich in deine Kraft',
      titleSeparator: '·',
    }
  },

  colorMode: {
    classSuffix: ''
  },

  image: {
    provider: 'ipx',
    ipx: {
      modifiers: {
        format: 'webp'
      }
    },
    staticFilename: '[publicPath]/images/[name]-[hash][ext]',
    presets: {
      hero: {
        modifiers: {
          format: 'webp',
          width: 970,
          height: 791,
          fit: 'cover',
        }
      }
    }
  },

  tailwindcss: {
    exposeConfig: true,
    cssPath: resolve('./assets/css/tailwind.css'),
    config: {
      plugins: [tailwindTypography],
      content: [
        resolve('./formkit.config.{js,mjs,ts}')
      ]
    }
  },
})
