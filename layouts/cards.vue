<template>
    <Navigator />

    <article class="px-4 pt-16 md:pt-4 p-4 max-w-prose mx-auto flex flex-row flex-wrap justify-between">
        <ContentList v-slot="{ list }" :path="$route.path">
            <div v-for="article in (list.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).reverse())"
                :key="article._path"
                class="w-full rounded-md bg-gray-100 dark:bg-gray-800 prose dark:prose-invert my-4 flex overflow-hidden flex-col"
                :class="article.previewCardDirection === 'horizontal' ? 'md:flex-row' : 'flex-col md:w-[47.5%]'">

                <div class="w-full" :class="article.previewCardDirection === 'horizontal' ? 'md:w-1/2' : ''">
                    <a :href="`${article._path}`"><img class="m-0" :src="article.thumbnail" alt="" /></a>
                </div>

                <a :href="`${article._path}`" class="h-full decoration-transparent"
                    :class="article.previewCardDirection === 'horizontal' ? 'md:w-1/2' : ''">
                    <div class="p-4 flex flex-col justify-between w-full h-full">

                        <div class="uppercase text-xs font-bold opacity-70">{{ article.tag }}</div>
                        <h1 class="text-bold font-bold text-xl m-0 py-4">{{ article.title }}</h1>

                        <div class="text-xs opacity-70">{{ article.date }}</div>
                    </div>
                </a>
            </div>
        </ContentList>
    </article>

    <Footer></Footer>
</template>
