<script setup lang="ts">
const props = defineProps([
    'title', 'links'
])

const relatedProjects = props.links
    .map((v: string) => `project${v}.md`)

const { data: query } = await useAsyncData(() => {
    return queryCollection('project')
        .order("date", "DESC")
        .where("id", "IN", relatedProjects)
        .limit(3)
        .all()
})
</script>

<template>

    <div class="w-full dark:border-gray-600 border-gray-200 border my-12"></div>
    <h2 class="mb-0">
        <a href="#{{ title }}">{{ title }}</a>
    </h2>

    <section class="max-w-prose mx-auto flex flex-row flex-wrap justify-between items-center">
        <div v-for="article in query" :key="article.id"
            class="w-full prose dark:prose-invert md:my-1 flex overflow-hidden flex-row [&_img]:hover:opacity-40 [&_img]:hover:scale-[1.02] max-w-none">

            <div class="w-1/4 flex items-center">
                <a class="overflow-hidden rounded-md isolate" :href="`${article.previewRedirectLink ? article.previewRedirectLink : article.path}`"><img
                        class="m-0 transition-[opacity,transform] duration-500" :src="article.thumbnail"
                        alt="" /></a>
            </div>

            <a :href="`${article.previewRedirectLink ? article.previewRedirectLink : article.path}`" class="w-3/4 h-full decoration-transparent">
                <div class="p-4 flex flex-col justify-between w-full h-full">

                    <div class="text-sm md:text-xl m-0 py-2 md:py-3">{{ article.title }}</div>

                    <div class="text-xs opacity-70">{{ new Date(article.date).toLocaleDateString() }}</div>
                </div>
            </a>
        </div>
    </section>

</template>
