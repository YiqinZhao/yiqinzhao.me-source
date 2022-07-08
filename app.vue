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

  <NuxtPage></NuxtPage>

</template>
