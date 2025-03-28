<script setup lang="ts">
defineProps([
    'title', 'hideTitle', 'headerImage', 'videoLink',
    'subtitle', 'authors', 'venue', 'artifactLinks', 'headline'
])
</script>

<template>
    <header>
        <!-- Title and artifacts. -->
        <div class="flex flex-col md:flex-row justify-between mb-6">
            <div class="md:w-3/4 border-t-2 border-t-black mt-4 md:mt-12 [&_h1]:mt-3 [&_h1]:md:mt-4">
                <h1 v-if="!hideTitle" class="dark:text-white md:text-4xl font-normal max-w-5xl mx-auto">
                    {{ title }}
                </h1>
                <h2 v-if="subtitle"
                    class="dark:text-gray-200 text-center md:text-xl font-normal my-6 max-w-4xl mx-auto">
                    {{ subtitle }}
                </h2>

                <!--  Author info. -->
                <div class="flex flex-row flex-wrap">
                    <a class="md:text-xl pr-3 flex flex-col justify-between items-center" :href="author.url"
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

                <div class="flex flex-row flex-wrap opacity-60">
                    <span class="md:text-xl pr-3 no-underline"
                        v-for="(affiliation, i) in [... new Set(authors.map(v => v.affiliation))]"
                        :key="`${affiliation}`">
                        <span class="no-underline">
                            <sup>{{ i + 1 }}</sup>{{ affiliation }}
                        </span>
                    </span>
                </div>

                <div class="md:pt-6 md:text-sm text-black dark:text-white font-normal opacity-60 italic">Accepted by <strong>{{ venue }}</strong>.</div>
            </div>

            <div class="md:w-1/5 mt-12 md:border-t-2 border-t-black">
                <div class="flex flex-row flex-wrap justify-center">
                    <a class="w-full md:text-xl no-underline mt-2" :href="`${link}`" v-for="(link, name) in artifactLinks"
                        :key="name">
                        <span class="w-full text-sm text-center block px-4 py-3 bg-gray-900 dark:bg-neutral-600 hover:dark:bg-slate-700 hover:bg-gray-500 isolate rounded-sm shadow-md transition text-white">
                            {{ name }}
                        </span>
                    </a>
                </div>
            </div>
        </div>

        <!-- Headline -->
        <div v-if="headline" class="prose mx-auto bg-gray-200 p-8 md:text-xl mt-8 mb-10">
            <p>{{ headline }}</p>
        </div>

        <iframe v-if="videoLink" class="w-full my-12" :src="videoLink" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen style="height: min(50vw, 500px)"></iframe>
    </header>
</template>
