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

  <NuxtPage></NuxtPage>

</template>
