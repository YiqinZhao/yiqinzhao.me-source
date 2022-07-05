<style lang="postcss">
.news-limit {
    li:nth-of-type(1n+7) {
        display: none;
    }
}
</style>

<template>
    <main>
        <h1 class="text-4xl font-bold mt-10 md:mt-20 mb-5"></h1>
        <ContentDoc class="prose dark:prose-invert  mx-auto mb-10" />

        <!-- <h1 class="text-4xl font-bold mt-10 mb-5">📄 Publications</h1>
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
        </div> -->
    </main>
</template>
