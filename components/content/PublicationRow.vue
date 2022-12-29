<script setup>
defineProps(['title', 'thumbnail', 'authors', 'venue', 'artifactLinks'])
</script>

<template>
    <div class="flex flex-col md:flex-row py-2 items-start my-5">
        <img class="mr-4 w-full md:w-32 my-2" :src="`/assets/img/publications/${thumbnail}`" alt="" />

        <div class="prose dark:prose-invert max-w-none font-normal">
            <div class="dark:text-white  font-bold mt-2 md:mt-0  md:text-lg">{{ title }}</div>
            <div class="pt-1">
                <span v-for="(author, i) in authors" v-bind:key="author"
                    v-bind:class="{ 'font-bold underline dark:text-white': author === 'Yiqin Zhao' }">
                    {{ author + (i < authors.length - 1 ? ', ' : '') }} </span>
            </div>
            <div>{{ venue.name }} <b>({{ venue.acronym }}'{{ venue.year % 1000 }})</b></div>
            <div>
                <span v-for="(link, artifact, i) in artifactLinks" v-bind:key="artifact">
                    <a :href="link">[{{ artifact }}]</a>
                    <span>{{ (i < Object.keys(artifactLinks).length - 1 ? ', ' : '' ) }} </span>
                    </span>
            </div>
            <div class="prose dark:prose-invert [&_p]:my-0">
                <ContentSlot :use="$slots.default" unwrap="p"/>
            </div>
        </div>
    </div>
</template>
