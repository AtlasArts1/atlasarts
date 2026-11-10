<script setup>
const socials = [
  { name: 'YouTube', href: 'https://youtube.com/@atlasart1?si=XuGQp9XpcKvaCPuY', icon: 'youtube' },
  { name: 'Telegram', href: 'https://t.me/AtlasArts1', icon: 'telegram' },
  { name: 'Discord', href: 'https://discord.gg/xu4wVBEx', icon: 'discord' },
  { name: 'Instagram', href: 'https://www.instagram.com/atlasarts1?rpxt=MTE4cTdhODd6b2J1dg%3D%3D&utm_source=qr', icon: 'instagram' },
  { name: 'Threads', href: 'https://www.threads.com/@atlasarts1?igshid=NTc4MTIwNjQ2YQ==', icon: 'threads' },
  { name: 'X / Twitter', href: 'https://x.com/atlasarts11?s=11&t=Z6ESuoyYXMt1Z6aT7g2NPw', icon: 'x' },
  { name: 'Barq', href: 'https://barq.app/@AtlasArts', icon: 'barq' },
]
</script>

<template>
  <div class="social-links" aria-label="Social media links">
    <a
      v-for="social in socials"
      :key="social.name"
      class="social-link"
      :href="social.href"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="`Open Atlas Arts on ${social.name} (opens in a new tab)`"
    >
      <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <template v-if="social.icon === 'youtube'">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.8V8.2l6.3 3.8-6.3 3.8Z" />
        </template>
        <template v-else-if="social.icon === 'telegram'">
          <path d="M21.8 3.3 18.5 20c-.2 1.2-.9 1.5-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L5.9 13.6 1 12.1c-1.1-.3-1.1-1.1.2-1.6L20.3 3c.9-.3 1.7.2 1.5.3Z" />
        </template>
        <template v-else-if="social.icon === 'discord'">
          <path d="M19.7 5.3A18 18 0 0 0 15.3 4l-.5 1a16 16 0 0 0-5.6 0l-.5-1a18 18 0 0 0-4.4 1.3C1.5 9.4.7 13.4 1.1 17.4a18 18 0 0 0 5.4 2.7l1.2-2a12 12 0 0 1-1.9-.9l.5-.4a13 13 0 0 0 11.4 0l.5.4-1.9.9 1.2 2a18 18 0 0 0 5.4-2.7c.5-4.7-.8-8.7-3.2-12.1ZM8.8 14.9c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm6.4 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" />
        </template>
        <template v-else-if="social.icon === 'instagram'">
          <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8" />
          <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.8" />
          <circle cx="17.7" cy="6.5" r="1.1" />
        </template>
        <template v-else-if="social.icon === 'threads'">
          <path d="M12.3 3.2c-4.8 0-7.7 3.3-7.7 8.7 0 5.6 2.8 8.9 7.5 8.9 4 0 6.8-2.4 6.8-6.1 0-3.2-2.1-5.1-5.6-5.1-2.4 0-4.1 1.2-4.1 3.1 0 1.6 1.2 2.7 3 2.7 2.4 0 4-1.7 4-4.4 0-3.9-2.2-6.4-5.9-6.4-3.3 0-5.2 2.1-5.2 5.6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" />
          <circle cx="12.2" cy="12.8" r=".8" />
        </template>
        <template v-else-if="social.icon === 'x'">
          <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.8 5.7 22H2.5l7.3-8.4L1.9 2h6.5l4.4 6.6L18.9 2Zm-1.1 18h1.7L7.4 3.9H5.6L17.8 20Z" />
        </template>
        <template v-else>
          <path d="M12 1.8a10.2 10.2 0 1 0 0 20.4 10.2 10.2 0 0 0 0-20.4Zm0 2a8.2 8.2 0 1 1 0 16.4 8.2 8.2 0 0 1 0-16.4Z" />
          <path d="M13 5.1 7.2 13h4l-.3 5.9 5.9-8h-4.1l.3-5.8Z" />
        </template>
      </svg>
      <span>{{ social.name }}</span>
      <span class="social-external" aria-hidden="true">↗</span>
    </a>
  </div>
</template>
