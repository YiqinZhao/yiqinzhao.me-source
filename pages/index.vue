<style lang="postcss">
.news-limit {
    li:nth-of-type(1n+7) {
        display: none;
    }
}
</style>

<template>
    <main>
        <h1 class="text-4xl font-bold mt-20 mb-5">🦸🏻‍♂️ About Me</h1>
        <ContentDoc path="/about" class="prose dark:prose-invert max-w-none mb-10" />

        <h1 class="text-4xl font-bold mb-5">📰 News</h1>
        <ContentDoc path="/news" class="prose dark:prose-invert max-w-none news-limit" />
        <div class="prose dark:prose-invert mb-10">
            <a href="/news/">More news >>></a>
        </div>

        <h1 class="text-4xl font-bold mb-5">🥷 Experiences</h1>
        <div v-for="expItem in pageData.experiences" v-bind:key="`${expItem.affiliation}${expItem.time}`">
            <div class="flex flex-row py-4 items-center">
                <img class="mr-4 h-20" :src="`/img/affiliation/${expItem.icon}`" alt="">

                <div class="prose dark:prose-invert ">
                    <div class="text-white font-medium">{{expItem.affiliation}}, {{expItem.location}}</div>
                    <div v-html="expItem.title"></div>
                    <div>{{expItem.time}}</div>
                </div>
            </div>
        </div>

    </main>
</template>

<script setup>
const pageData = await queryContent('/page').findOne()
</script>
