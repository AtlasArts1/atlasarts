<script setup>
const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <a class="skip-link" href="#main">Skip to main content</a>

  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="Atlas Arts home">ATLAS<span> / </span>ARTS</a>
    <nav aria-label="Main navigation">
      <a v-for="item in navigation" :key="item.label" :href="item.href">{{ item.label }}</a>
    </nav>
  </header>

  <main id="main" tabindex="-1">
    <section id="top" class="hero section">
      <div class="hero-copy">
        <p class="eyebrow">Personal website · Portfolio</p>
        <h1>A space for ideas, work, and everything in between.</h1>
        <p class="intro">A personal corner of the internet. A little about me, a selection of things I’ve made, and ways to get in touch.</p>
        <a class="button" href="#work">Explore my work <span aria-hidden="true">↗</span></a>
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

    <section id="work" class="work section">
      <div class="section-heading">
        <p class="eyebrow">02 / Selected work</p>
        <h2>A few things I’ve made.</h2>
      </div>
      <div class="project-grid">
        <article class="project-card project-card--warm">
          <span class="project-number">01</span>
          <div class="project-shape shape--one" aria-hidden="true"></div>
          <div><p class="project-type">Project · 2026</p><h3>Project name</h3></div>
        </article>
        <article class="project-card project-card--cool">
          <span class="project-number">02</span>
          <div class="project-shape shape--two" aria-hidden="true"></div>
          <div><p class="project-type">Project · 2026</p><h3>Another idea</h3></div>
        </article>
      </div>
    </section>

    <section id="contact" class="contact section">
      <p class="eyebrow">03 / Say hello</p>
      <h2>Have something in mind?</h2>
      <p class="section-copy">I’d love to hear from you. Add your preferred contact details here.</p>
      <a class="contact-link" href="mailto:hello@example.com">hello@example.com <span aria-hidden="true">↗</span></a>
    </section>
  </main>

  <footer class="site-footer">
    <a class="wordmark" href="#top">ATLAS<span> / </span>ARTS</a>
    <p>Made with care · © {{ new Date().getFullYear() }}</p>
    <a href="#top">Back to top ↑</a>
  </footer>
</template>
