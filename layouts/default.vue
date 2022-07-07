<script setup lang="ts">
const {page} = useContent()
</script>

<template>
    <Navigator />
    <Header></Header>

    <article class="p-4 min-h-[100vh]
                    [&_header]:md:max-w-[140%] [&_header]:md:mx-[-20%]
                    [&_pre]:md:max-w-[140%] [&_pre]:md:mx-[-20%]"
            :class="page.disableFancyImage? '': '[&_img]:md:max-w-[140%] [&_img]:md:mx-[-20%]'">
        <ContentDoc v-slot="{ doc }">
            <ContentRenderer :value="doc" class="prose dark:prose-invert mx-auto m-8" />
        </ContentDoc>
    </article>

    <Footer></Footer>
</template>
