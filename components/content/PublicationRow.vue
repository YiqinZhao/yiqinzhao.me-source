<script setup>
defineProps(['title', 'thumbnail', 'authors', 'venue', 'artifactLinks', 'hideBottomBorder'])
</script>

<template>
    <div class="publication-row flex flex-col md:flex-row items-start mt-8 pb-8"
        :class="{ 'border-b-2': !hideBottomBorder }">

        <div class="prose dark:prose-invert max-w-none font-normal">
            <div>
                <span class="mr-2 bg-gray-200 text-black py-[0.2em] text-sm px-2"> {{ venue.acronym }}'{{ venue.year % 1000
                }}</span>
                <span class="mr-2">|</span>
                <span v-for="(link, artifact, i) in artifactLinks" v-bind:key="artifact">
                    <a class="bg-gray-700 text-white px-2 py-[0.2em] mr-1 no-underline text-sm" :href="link">{{ artifact
                    }}</a>
                </span>
            </div>

            <div class="dark:text-white font-bold my-4 text-2xl md:text-2xl">{{ title }}</div>

            <div class="md:flex md:flex-row items-start">
                <img class="mr-4 w-full md:w-40 mt-1 mb-0 flex-grow-0" :src="`/assets/img/publications/${thumbnail}`"
                    alt="" />

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
                        <ContentSlot :use="$slots.default" unwrap="p" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
