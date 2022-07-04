<style lang="postcss">
.news-limit {
    li:nth-of-type(1n+7) {
        display: none;
    }
}
</style>

<template>
    <main>
        <h1 class="text-4xl font-bold mt-10 md:mt-20 mb-5">🦸🏻‍♂️ About Me</h1>
        <ContentDoc class="prose dark:prose-invert max-w-none mb-10" />

        <h1 class="text-4xl font-bold mb-5">📰 News</h1>
        <ContentDoc path="/news" class="prose dark:prose-invert max-w-none news-limit" />
        <div class="prose dark:prose-invert mb-10">
            <a href="/news/">More news >>></a>
        </div>

        <h1 class="text-4xl font-bold mb-5">🥷 Experiences</h1>
        <div v-for="expItem in pageData.experiences" v-bind:key="`${expItem.affiliation}${expItem.time}`">
            <div class="flex flex-row py-4 items-center">
                <img class="mr-4 h-20" :src="`/assets/img/affiliation/${expItem.icon}`" alt="">

                <div class="prose dark:prose-invert ">
                    <div class="text-white font-medium">{{ expItem.affiliation }}, {{ expItem.location }}</div>
                    <div v-html="expItem.title"></div>
                    <div>{{ expItem.time }}</div>
                </div>
            </div>
        </div>

        <h1 class="text-4xl font-bold mt-10 mb-5">📄 Publications</h1>
        <div v-for="pubItem in publicationData.publicationList" v-bind:key="pubItem.title">
            <div class="flex flex-col md:flex-row py-4 items-start">
                <img class="mr-4 w-full md:w-32" :src="`/assets/img/publications/${pubItem.thumbnail}`" alt="">

                <div class="prose dark:prose-invert max-w-none font-normal">
                    <div class="dark:text-white font-medium mt-2 md:mt-0">{{ pubItem.title }}</div>
                    <div>
                        <span v-for="(author, i) in pubItem.authors" v-bind:key="author"
                            v-bind:class="{ 'font-bold dark:text-white': author === 'Yiqin Zhao' }">
                            {{ author + (i < pubItem.authors.length - 1 ? ', ' : '') }} </span>
                    </div>
                    <div>{{pubItem.venue.name}} <b>({{pubItem.venue.acronym}}'{{pubItem.venue.year % 1000}})</b></div>
                    <div>
                        <span v-for="(link, artifact, i) in pubItem.artifactLinks" v-bind:key="artifact">
                            <a :href="link">[{{ artifact }}]</a>
                            <span>{{ (i < Object.keys(pubItem.artifactLinks).length - 1 ? ', ' : '') }} </span>
                            </span>
                    </div>
                    <div class="text-sm mt-2">{{ pubItem.note }}</div>
                </div>
            </div>
        </div>

        <h1 class="text-4xl font-bold mt-10">📧 Contacts</h1>
        <div class="prose dark:prose-invert max-w-none">
            <span v-for="contactItem in pageData.contacts" :key="contactItem.platform">
                <a :href="contactItem.url" class="mr-4">
                    <img class="w-6 inline dark:invert mr-2" :src="`/assets/img/icons/${contactItem.icon}.svg`" alt="" />{{
                            contactItem.platform
                    }}</a>
            </span>
        </div>
    </main>
</template>

<script setup>
const pageData = await queryContent('/page').findOne();
const publicationData = await queryContent('/publication/page').findOne();
</script>
