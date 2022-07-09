<template>
    <Navigator />

    <article class="px-4 pt-16 md:pt-4 p-4 max-w-5xl mx-auto flex flex-row flex-wrap justify-between">
        <ContentList v-slot="{ list }" :path="$route.path" :query="{ sort: { date: -1 } }">
            <div v-for="article in list" :key="article._path" class="w-full max-w-none rounded-md md:rounded-xl bg-gray-100 dark:bg-gray-800 prose dark:prose-invert my-4 flex overflow-hidden flex-col
                       hover:shadow-lg hover:dark:bg-gray-700 hover:bg-gray-50 [&_img]:hover:opacity-70 transition-all isolate"
                :class="article.previewCardDirection === 'horizontal' ? 'md:flex-row' : 'flex-col md:w-[48%]'">

                <div class="w-full" :class="article.previewCardDirection === 'horizontal' ? 'md:w-1/2' : ''">
                    <a :href="`${article._path}`"><img class="m-0 transition-opacity" :src="article.thumbnail" alt="" /></a>
                </div>

                <a :href="`${article._path}`" class="h-full decoration-transparent"
                    :class="article.previewCardDirection === 'horizontal' ? 'md:w-1/2' : ''">
                    <div class="p-4 flex flex-col justify-between w-full h-full">

                        <div class="uppercase text-xs font-bold opacity-70">{{ article.tag }}</div>
                        <h1 class="text-bold font-bold text-xl md:text-2xl m-0 py-4">{{ article.title }}</h1>

                        <div class="text-xs opacity-70">{{ new Date(article.date).toLocaleDateString() }}</div>
                    </div>
                </a>
            </div>
        </ContentList>
    </article>

    <Footer></Footer>
</template>
