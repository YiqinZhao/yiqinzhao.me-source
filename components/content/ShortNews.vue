<template>
    <div class="[&_li:nth-of-type(1n+7)]:hidden [&_img]:hidden [&_h1]:hidden [&_h2]:hidden">
        <!-- TODO: explicitly remove items to save network -->
        <ContentDoc path="/news/" class="prose dark:prose-invert max-w-none news-limit" v-slot="{ doc }" :head="false">
            <ContentRenderer :value="doc" />
        </ContentDoc>
    </div>
</template>
