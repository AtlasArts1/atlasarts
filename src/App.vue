<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <a class="skip-link" href="#main">Skip to main content</a>

  <header class="site-header">
    <RouterLink class="wordmark" to="/" aria-label="Atlas Arts home">ATLAS<span> / </span>ARTS</RouterLink>
    <nav aria-label="Main navigation">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/galleries">Galleries</RouterLink>
      <RouterLink to="/#about">About</RouterLink>
    </nav>
  </header>

  <main id="main" tabindex="-1">
    <RouterView />
  </main>

  <footer class="site-footer">
    <RouterLink class="wordmark" to="/">ATLAS<span> / </span>ARTS</RouterLink>
    <p>Made with care · © {{ new Date().getFullYear() }}</p>
    <a href="#main">Back to top ↑</a>
  </footer>
</template>
