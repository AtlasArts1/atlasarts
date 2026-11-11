<script setup>
import { RouterLink } from 'vue-router'
import { galleryCatalog } from '../content/galleryCatalog.js'

const galleries = Object.values(galleryCatalog)
const imageUrl = (gallery, artwork, format) => `${import.meta.env.BASE_URL}art/${gallery.assetDirectory}/${encodeURIComponent(artwork.file)}.${format}`
</script>

<template>
  <section class="galleries-page">
    <header class="galleries-intro section">
      <p class="eyebrow">Atlas Arts · Browse</p>
      <h1>Choose a gallery.</h1>
      <p class="gallery-description">Explore digital art, 3D work, and astronomy photos.</p>
    </header>

    <div class="gallery-choice-grid section">
      <article v-for="gallery in galleries" :key="gallery.slug" class="gallery-choice">
        <RouterLink class="gallery-choice-link" :to="`/galleries/${gallery.slug}`">
          <picture class="gallery-choice-picture">
            <source :srcset="imageUrl(gallery, gallery.artworks[0], 'jxl')" type="image/jxl" />
            <source :srcset="imageUrl(gallery, gallery.artworks[0], 'webp')" type="image/webp" />
            <img :src="imageUrl(gallery, gallery.artworks[0], 'jpg')" :alt="`${gallery.title} preview: ${gallery.artworks[0].title}`" />
          </picture>
          <div class="gallery-choice-details">
            <div>
              <p class="eyebrow">{{ gallery.artworks.length }} {{ gallery.artworks.length === 1 ? 'piece' : 'pieces' }}</p>
              <h2>{{ gallery.title }}</h2>
            </div>
            <span class="gallery-choice-arrow" aria-hidden="true">↗</span>
          </div>
        </RouterLink>
      </article>
    </div>
  </section>
</template>
