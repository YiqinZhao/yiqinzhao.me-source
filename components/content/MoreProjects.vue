<script setup>
defineProps([
    'title', 'links'
])
</script>

<template>

    <div class="w-full dark:border-gray-600 border-gray-200 border my-12"></div>
    <div class="text-2xl font-bold dark:text-white text-black">{{ title }}</div>

    <section class="max-w-prose mx-auto flex flex-row flex-wrap justify-between items-center">
        <ContentList v-slot="{ list }" :path="$route.path.split('/').slice(0, 2).join('/') + '/'" :head="false"
            :query="{ sort: { date: -1 }, where: { _path: { $in: links } } }">
            <div v-for="article in list" :key="article._path"
                class="w-full prose dark:prose-invert md:my-1 flex overflow-hidden flex-row [&_img]:hover:opacity-70 [&_img]:hover:scale-[1.02] max-w-none">

                <div class="w-1/4 flex items-center">
                    <a class="overflow-hidden rounded-md isolate" :href="`${article._path}`"><img class="m-0 transition-[opacity,transform] duration-500" :src="article.thumbnail" alt="" /></a>
                </div>

                <a :href="`${article._path}`" class="w-3/4 h-full decoration-transparent">
                    <div class="p-4 flex flex-col justify-between w-full h-full">

                        <div class="text-sm md:text-xl m-0 py-2 md:py-3">{{ article.title }}</div>

                        <div class="text-xs opacity-70">{{ new Date(article.date).toLocaleDateString() }}</div>
                    </div>
                </a>
            </div>
        </ContentList>
    </section>

</template>
