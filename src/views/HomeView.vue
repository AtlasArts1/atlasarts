<template>
  <section id="top" class="hero section">
    <div class="hero-copy">
      <p class="eyebrow">Personal website · Portfolio</p>
      <h1>A space for ideas, work, and everything in between.</h1>
      <p class="intro">A personal corner of the internet. A little about me, a selection of things I’ve made, and ways to get in touch.</p>
      <RouterLink class="button" to="/gallery">Explore the gallery <span aria-hidden="true">↗</span></RouterLink>
    </div>
    <div class="hero-art" aria-hidden="true">
      <div class="orbit orbit--outer"></div>
      <div class="orbit orbit--inner"></div>
      <div class="sun"></div>
      <span class="art-label">CURIOUS BY NATURE</span>
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
    <p class="eyebrow">03 / Say hello</p>
    <h2>Have something in mind?</h2>
    <p class="section-copy">I’d love to hear from you. Add your preferred contact details here.</p>
    <a class="contact-link" href="mailto:hello@example.com">hello@example.com <span aria-hidden="true">↗</span></a>
  </section>
</template>
