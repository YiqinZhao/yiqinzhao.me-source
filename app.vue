<style lang="postcss">
body {
  @apply bg-gray-50 dark:bg-gray-900;
}
</style>

<script setup>
useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - Yiqin Zhao` : 'Yiqin Zhao';
    }
})
</script>

<template>

  <Link rel="icon" type="image/x-icon" href="/site-icons/favicon.ico"/>
  <Link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.0/dist/katex.min.css"/>

  <Meta name="theme-color" content="#f5f5f4" media="(prefers-color-scheme: light)"/>
  <Meta name="theme-color" content="#292525" media="(prefers-color-scheme: dark)"/>

  <NuxtPage></NuxtPage>

</template>
