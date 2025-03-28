<script setup lang="ts">
defineProps(['title', 'thumbnail', 'authors', 'venue', 'artifactLinks', 'hideBottomBorder'])
</script>

<template>
    <div class="publication-row flex flex-col md:flex-row items-start mt-4 pb-8"
        :class="{ 'border-b-2': !hideBottomBorder }">

        <div class="w-full font-normal">

            <div class="dark:text-white my-4">
                <span> 
                    <span
                        class="mr-2 bg-gray-200 text-black py-[0.4em] text-md px-2">
                        {{ venue.acronym }}'{{ venue.year % 1000 }}
                    </span>
                </span>
                <span class="font-bold text-2xl md:text-2xl">{{ title }}</span>
            </div>

            <div class="md:flex md:flex-row items-start">
                <img v-if="thumbnail" class="mr-4 w-full md:w-64 mt-1 mb-0 flex-grow-0"
                    :src="`/assets/img/publications/${thumbnail}`" alt="" />

                <div class="w-full mt-4 md:mt-0">
                    <div class="text-lg">
                        <span v-for="(author, i) in authors" v-bind:key="author">
                            <span :class="{ 'font-bold dark:text-white underline': author === 'Yiqin Zhao' }">{{ author
                                }}</span>
                            <span>{{ (i < authors.length - 1 ? ',' : '') }}&nbsp;</span>
                            </span>

                    </div>
                    <div class="text-gray-500 text-sm">{{ venue.name }}</div>

                    <div class="prose dark:prose-invert [&_p]:my-0">
                        <slot unwrap="p" />
                    </div>

                    <div class="flex flex-wrap mt-auto">

                        <span v-for="(link, artifact, _) in artifactLinks" v-bind:key="artifact">
                            <a class="bg-gray-700 text-white px-2 py-[0.2em] mr-1 no-underline text-sm" :href="link">{{
                                artifact
                            }}</a>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
