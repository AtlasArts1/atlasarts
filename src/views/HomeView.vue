<template>
  <section id="top" class="hero section">
    <div class="hero-copy">
      <p class="eyebrow">Personal website · Portfolio</p>
      <h1>A space for ideas, work, and everything in between.</h1>
      <p class="intro">A personal corner of the internet. A little about me, a selection of things I’ve made, and ways to get in touch.</p>
      <RouterLink class="button" to="/galleries">Explore the galleries <span aria-hidden="true">↗</span></RouterLink>
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
      <h2>Curious by Nature, Creative by Design.</h2>
      <div class="section-copy about-copy">
        <p>I'm an aspiring designer, creative thinker, and technology enthusiast with a passion for exploring how things work and finding new ways to bring ideas to life.</p>
        <p>My interests span architecture, engineering, astronomy, digital technology, art, and innovation. I enjoy experimenting with new concepts, taking on creative challenges, and combining technical knowledge with imagination to develop ideas that could make a difference.</p>
        <p>Whether I'm exploring the possibilities of 3D printing, developing entrepreneurial concepts, studying design, or looking towards the stars, I'm always looking for something new to learn, create, or improve.</p>
        <p>I believe curiosity is one of the most valuable tools a person can have, and I'm always eager to see where it takes me.</p>
      </div>
    </div>
  </section>

  <section class="home-gallery section">
    <div>
      <p class="eyebrow">02 / Selected work</p>
      <h2>Browse the galleries.</h2>
    </div>
    <RouterLink class="button" to="/galleries">Choose a gallery <span aria-hidden="true">↗</span></RouterLink>
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
