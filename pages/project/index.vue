<template>
    <article>
        <!-- <ContentList path="/project" v-slot="{ list }">
            <div v-for="article in list" :key="article._path">
                <h2>{{ article.title }}</h2>
                <p>{{ article.description }}</p>
            </div>
        </ContentList> -->
        <ContentDoc path="/project/" class="prose dark:prose-invert max-w-none mb-20" />
    </article>
</template>
