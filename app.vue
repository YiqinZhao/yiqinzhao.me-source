<style lang="postcss">
body {
  @apply bg-gray-50 dark:bg-gray-900;
}
</style>

<template>
  <Meta property="twitter:card" content="summary_large_image" />

  <Header></Header>

  <div class="container mx-auto max-w-6xl px-4 dark:text-white">
    <NuxtPage />
    <Footer></Footer>
  </div>
</template>
