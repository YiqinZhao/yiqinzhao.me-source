<template>
    <Navigator />
    <Header></Header>

    <article class="p-4 [&_iframe]:md:max-w-[140%] [&_iframe]:md:w-[140%] [&_iframe]:md:mx-[-20%] [&_iframe]:my-8
                    [&_img]:md:max-w-[140%] [&_img]:md:mx-[-20%]
                    [&_pre]:md:max-w-[140%] [&_pre]:md:mx-[-20%]">
        <ContentDoc v-slot="{ doc }">
            <ContentRenderer :value="doc" class="prose dark:prose-invert mx-auto m-8" />
        </ContentDoc>
    </article>

    <Footer></Footer>
</template>
