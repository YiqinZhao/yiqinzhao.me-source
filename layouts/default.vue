<script setup lang="ts">
const { page } = useContent()
</script>

<template>
    <Navigator />

    <article class="pb-8 min-h-[100vh]
                    [&_header]:md:max-w-[140%] [&_header]:md:mx-[-20%]
                    [&_pre]:md:max-w-[140%] [&_pre]:md:mx-[-20%]"
        :class="page.disableFancyImage ? '' : '[&_p_img]:md:max-w-[140%] [&_p_img]:md:mx-[-20%]'">
        <ContentDoc v-slot="{ doc }">
            <ContentRenderer :value="doc" class="prose dark:prose-invert mx-auto p-4 md:text-lg [&_h1]:mt-12" />
        </ContentDoc>
    </article>

    <Footer></Footer>
</template>
