<style lang="postcss">
body {
  @apply bg-[#FAFAF9] dark:bg-gray-900;
}

p {
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.6em;
}

a {
  transition: opacity 100ms linear;
}
a:hover {
  opacity: 0.4;
}

h2 a {
  text-decoration: none !important;
  font-weight: 900 !important;
}

h2 a:before {
  display: block;
  width: 100px;
  max-width: 100%;

  border-top: 1px solid rgba(0, 0, 0, 1);
  padding-bottom: 0.2em;

  content: "";
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

  <!-- <Meta name="theme-color" content="#f5f5f4" media="(prefers-color-scheme: light)"/> -->
  <!-- <Meta name="theme-color" content="#292525" media="(prefers-color-scheme: dark)"/> -->

  <NuxtPage></NuxtPage>

</template>
