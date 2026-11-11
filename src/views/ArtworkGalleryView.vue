<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { galleryCatalog } from '../content/galleryCatalog.js'

const props = defineProps({
  category: { type: String, required: true },
})

const gallery = computed(() => galleryCatalog[props.category])
const galleryOptions = Object.values(galleryCatalog)
const search = ref('')
const selected = ref(null)
const filteredArtworks = computed(() => {
  const artworks = gallery.value?.artworks ?? []
  const query = search.value.trim().toLowerCase()
  if (!query) return artworks
  return artworks.filter((artwork) => `${artwork.title} ${artwork.dateLabel}`.toLowerCase().includes(query))
})

const imageUrl = (artwork, format) => `${import.meta.env.BASE_URL}art/${gallery.value.assetDirectory}/${encodeURIComponent(artwork.file)}.${format}`
const selectedIndex = computed(() => filteredArtworks.value.findIndex((artwork) => artwork.id === selected.value?.id))

function moveSelection(direction) {
  if (!filteredArtworks.value.length) return
  const nextIndex = (selectedIndex.value + direction + filteredArtworks.value.length) % filteredArtworks.value.length
  selected.value = filteredArtworks.value[nextIndex]
}

function onKeydown(event) {
  if (!selected.value) return
  if (event.key === 'Escape') selected.value = null
  if (event.key === 'ArrowRight') moveSelection(1)
  if (event.key === 'ArrowLeft') moveSelection(-1)
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <section class="gallery-page">
    <div class="gallery-intro section">
      <div>
        <RouterLink class="gallery-back" to="/galleries">← All galleries</RouterLink>
        <p class="eyebrow">Atlas Arts · The collection</p>
        <h1>{{ gallery.title }}</h1>
        <p class="gallery-description">{{ gallery.description }}</p>
      </div>
      <label class="gallery-search">
        <span class="visually-hidden">Search artwork by title or date</span>
        <input v-model="search" type="search" placeholder="Find a piece…" />
        <span aria-hidden="true">⌕</span>
      </label>
    </div>

    <nav class="gallery-switcher section" aria-label="Choose a gallery">
      <RouterLink
        v-for="entry in galleryOptions"
        :key="entry.slug"
        :to="`/galleries/${entry.slug}`"
        :aria-current="entry.slug === category ? 'page' : undefined"
      >{{ entry.shortTitle }}</RouterLink>
    </nav>

    <div class="gallery-toolbar section" aria-live="polite">
      <span>{{ filteredArtworks.length }} {{ filteredArtworks.length === 1 ? 'piece' : 'pieces' }}</span>
      <span>Click any artwork to view it larger</span>
    </div>

    <div v-if="filteredArtworks.length" class="artwork-grid section">
      <figure v-for="artwork in filteredArtworks" :key="artwork.id" class="artwork-card">
        <button class="artwork-open" type="button" :aria-label="`View ${artwork.title}, ${artwork.dateLabel}`" @click="selected = artwork">
          <picture class="artwork-picture">
            <source :srcset="imageUrl(artwork, 'jxl')" type="image/jxl" />
            <source :srcset="imageUrl(artwork, 'webp')" type="image/webp" />
            <source :srcset="imageUrl(artwork, 'jpg')" type="image/jpeg" />
            <img :src="imageUrl(artwork, 'png')" :alt="artwork.title" loading="lazy" decoding="async" />
          </picture>
          <span class="artwork-zoom" aria-hidden="true">↗</span>
        </button>
        <figcaption class="artwork-caption">
          <h2>{{ artwork.title }}</h2>
          <time :datetime="artwork.isoDate">{{ artwork.dateLabel }}</time>
        </figcaption>
      </figure>
    </div>
    <p v-else class="gallery-empty section">No artwork matches “{{ search }}”. Try another title or date.</p>
  </section>

  <Teleport to="body">
    <div v-if="selected" class="lightbox" role="dialog" aria-modal="true" :aria-label="selected.title" @click.self="selected = null">
      <button class="lightbox-close" type="button" aria-label="Close artwork viewer" @click="selected = null">×</button>
      <button class="lightbox-arrow lightbox-arrow--previous" type="button" aria-label="Previous artwork" @click="moveSelection(-1)">←</button>
      <figure class="lightbox-figure">
        <picture>
          <source :srcset="imageUrl(selected, 'jxl')" type="image/jxl" />
          <source :srcset="imageUrl(selected, 'webp')" type="image/webp" />
          <source :srcset="imageUrl(selected, 'jpg')" type="image/jpeg" />
          <img :src="imageUrl(selected, 'png')" :alt="selected.title" />
        </picture>
        <figcaption><h2>{{ selected.title }}</h2><time :datetime="selected.isoDate">{{ selected.dateLabel }}</time></figcaption>
      </figure>
      <button class="lightbox-arrow lightbox-arrow--next" type="button" aria-label="Next artwork" @click="moveSelection(1)">→</button>
    </div>
  </Teleport>
</template>
