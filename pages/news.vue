<template>
    <article>
        <ContentDoc v-slot="{ doc }">
            <h1 class="dark:text-white text-center text-5xl font-bold md:mt-16">{{ doc.title }}</h1>
            <h2 class="dark:text-gray-200 text-center text-2xl font-normal mt-3">{{ doc.subtitle }}</h2>

            <div class="prose lg:prose-xl mx-auto my-8">
                <img class="w-full" src="/assets/img/me-news-google.png" alt="">
            </div>

            <ContentRenderer :value="doc" class="prose dark:prose-invert mx-auto m-16" />
        </ContentDoc>
    </article>
</template>
