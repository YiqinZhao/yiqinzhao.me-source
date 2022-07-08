<script setup lang="ts">
defineProps([
    'title', 'hideTitle', 'headerImage', 'videoLink',
    'subtitle', 'authors', 'venue', 'artifactLinks'
])
</script>

<template>
    <header>
        <h1 v-if="!hideTitle" class="dark:text-white text-center md:text-5xl font-bold my-4 md:my-6 max-w-5xl mx-auto">
            {{ title }}
        </h1>
        <h2 v-if="subtitle" class="dark:text-gray-200 text-center md:text-xl font-normal my-6 max-w-4xl mx-auto">
            {{ subtitle }}
        </h2>

        <div class="prose dark:prose-invert mx-auto md:my-12 pb-6">

            <div class="flex flex-row flex-wrap justify-center">
                <a class="md:text-xl p-3 flex flex-col justify-between items-center" :href="author.url"
                    v-for="(author, i) in authors" :key="author.name">
                    <img v-if="author.avatar" class="w-24 m-0 mb-4" :src="author.avatar" alt="">
                    <div>
                        <span>{{ author.name }}</span>
                        <span class="no-underline">
                            <sup class="no-underline">{{ [... new Set(authors.map(v =>
                                    v.affiliation))].indexOf(author.affiliation)
                                    + 1
                            }}</sup>{{ i < authors.length - 1 ? ', ' : '' }} </span>
                    </div>
                </a>
            </div>

            <div class="flex flex-row flex-wrap justify-center">
                <span class="md:text-xl px-4 no-underline"
                    v-for="(affiliation, i) in [... new Set(authors.map(v => v.affiliation))]" :key="`${affiliation}`">
                    <span class="no-underline">
                        <sup>{{ i + 1 }}</sup>{{ affiliation }}
                    </span>
                </span>
            </div>

            <div class="text-center p-4 md:p-6 md:text-2xl text-black dark:text-white font-bold">{{ venue }}</div>

            <div class="flex flex-row flex-wrap justify-center">
                <a class="md:text-xl p-3 no-underline my-2" :href="`${link}`" v-for="(link, name) in artifactLinks"
                    :key="name">
                    <span class="px-4 py-3 bg-neutral-300 dark:bg-neutral-600 hover:dark:bg-slate-700 hover:bg-slate-200 rounded-md shadow-md transition">
                        {{ name }}
                    </span>
                </a>
            </div>
        </div>

        <iframe v-if="videoLink" class="w-full my-12" :src="videoLink" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen style="height: min(50vw, 500px)"></iframe>
    </header>
</template>
