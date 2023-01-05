<script setup lang="ts">
const { page } = useContent()
</script>

<template>
    <Navigator class="font-sans" />

    <article class="pb-16 min-h-[100vh]
                    [&_header]:md:max-w-[140%] [&_header]:md:mx-[-20%]
                    [&_pre]:md:text-xs
                    font-serif"
        :class="page.disableFancyImage ? '' : '[&_p_img]:md:max-w-[140%] [&_p_img]:md:mx-[-20%]'">
        <ContentDoc v-slot="{ doc }">
            <ContentRenderer :value="doc" class="prose dark:prose-invert mx-auto p-4 md:p-0 md:text-xl [&_h1]:mt-12" />
        </ContentDoc>
    </article>

    <Footer></Footer>
</template>
