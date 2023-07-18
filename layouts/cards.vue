<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { sort: [{ date: -1 }] }
</script>

<template>
    <Navigator />

    <article class="p-4 md:pt-8 max-w-5xl mx-auto flex flex-row flex-wrap justify-between font-serif">
        <ContentList :path="$route.path" :query="query">

            <template v-slot="{ list }">
                <div v-for="article in list" :key="article._path"
                    class="w-full max-w-none rounded-sm bg-gray-100 dark:bg-gray-800 prose dark:prose-invert mb-8 flex overflow-hidden flex-col
                       hover:shadow-lg hover:dark:bg-gray-700 hover:bg-gray-50 [&_img]:hover:opacity-40 [&_a]:hover:opacity-100 [&_img]:hover:scale-[1.02] transition-background isolate duration-500"
                    :class="article.previewCardDirection === 'horizontal' ? 'md:flex-row' : 'flex-col md:w-[48%]'">

                    <div class="w-full" :class="article.previewCardDirection === 'horizontal' ? 'md:w-1/2' : ''">
                        <a :href="article.previewRedirectLink ? article.previewRedirectLink : `${article._path}`">
                            <img class="m-0 transition-[opacity,transform] duration-500" :src="article.thumbnail"
                                alt="" /></a>
                    </div>

                    <a :href="article.previewRedirectLink ? article.previewRedirectLink : `${article._path}`"
                        class="h-full decoration-transparent"
                        :class="article.previewCardDirection === 'horizontal' ? 'md:w-1/2' : ''">
                        <div class="p-4 flex flex-col justify-between w-full h-full">

                            <div class="uppercase text-xs font-bold opacity-70">{{ article.tag }}</div>
                            <h1 class="text-bold font-bold text-xl md:text-2xl m-0 py-4">{{ article.title }}</h1>

                            <div class="text-xs opacity-70">{{ new Date(article.date).toLocaleDateString() }}</div>
                        </div>
                    </a>
                </div>
            </template>

            <template #not-found>
                <div class="h-screen w-full"></div>
            </template>

        </ContentList>
    </article>

    <Footer></Footer>
</template>
