<template>
  <section id="top" class="hero section">
    <div class="hero-copy">
      <p class="eyebrow">Personal website · Portfolio</p>
      <h1>A space for ideas, work, and everything in between.</h1>
      <p class="intro">A personal corner of the internet. A little about me, a selection of things I’ve made, and ways to get in touch.</p>
      <RouterLink class="button" to="/gallery">Explore the gallery <span aria-hidden="true">↗</span></RouterLink>
    </div>
    <div class="hero-image-frame">
      <picture>
        <source :srcset="`${baseUrl}hero/dragon.jxl`" type="image/jxl" />
        <source :srcset="`${baseUrl}hero/dragon.webp`" type="image/webp" />
        <source :srcset="`${baseUrl}hero/dragon.jpg`" type="image/jpeg" />
        <img :src="`${baseUrl}hero/dragon.png`" alt="Purple dragon artwork with dark horns, multiple eyes, and bright yellow accents" fetchpriority="high" />
      </picture>
    </div>
  </section>

  <section id="about" class="about section">
    <p class="eyebrow">01 / A little about me</p>
    <div>
      <h2>Making thoughtful things for a changing world.</h2>
      <p class="section-copy">This is a starting point for my story. I’m interested in creative work, useful ideas, and the details that make an experience memorable.</p>
    </div>
  </section>

  <section class="home-gallery section">
    <div>
      <p class="eyebrow">02 / Selected work</p>
      <h2>Browse the art gallery.</h2>
    </div>
    <RouterLink class="button" to="/gallery">View all artwork <span aria-hidden="true">↗</span></RouterLink>
  </section>

  <section id="contact" class="contact section">
    <p class="eyebrow">03 / Find me online</p>
    <h2>Let’s connect.</h2>
    <p class="section-copy">Follow along or say hello on any of these platforms.</p>
    <SocialLinks />
  </section>
</template>

<script setup>
import SocialLinks from '../components/SocialLinks.vue'

const baseUrl = import.meta.env.BASE_URL
</script>
