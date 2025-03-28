<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(() => {
  return queryCollection('page')
    .path(route.path)
    .first()
})

const { data: news } = await useAsyncData(() => {
  return queryCollection('page')
    .path("/news/")
    .first()
})
</script>

<template>
    <div class="[&_li:nth-of-type(1n+7)]:hidden [&_img]:hidden [&_h1]:hidden [&_h2]:hidden">
        <ContentRenderer :value="news" />
    </div>
</template>
