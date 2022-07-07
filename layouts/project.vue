<template>
    <Navigator />
    <Header></Header>

    <article class="p-4 [&_iframe]:md:max-w-[140%] [&_iframe]:md:w-[140%] [&_iframe]:md:mx-[-20%] [&_iframe]:my-8
                    [&_img]:md:max-w-[140%] [&_img]:md:mx-[-20%]
                    [&_pre]:md:max-w-[140%] [&_pre]:md:mx-[-20%]">
        <ContentDoc v-slot="{ doc }">
            <div class="dark:invert max-w-prose mx-auto py-8">
                <img  :src="doc.headerImage" alt=""/>
            </div>


            <h1 v-if="!doc.hideTitle"
                class="dark:text-white text-center text-5xl font-bold mt-0 md:mt-10 max-w-5xl mx-auto">{{ doc.title }}
            </h1>
            <h2 v-if="doc.subtitle" class="dark:text-gray-200 text-center text-xl font-normal my-6 max-w-4xl mx-auto">{{
                    doc.subtitle
            }}
            </h2>

            <div class="prose dark:prose-invert mx-auto py-4">

                <div class="flex flex-row flex-wrap justify-center">
                    <a class="text-xl p-3" :href="author.url" v-for="(author, i) in doc.authors" :key="author.name">
                        {{ author.name }}
                        <span class="no-underline">
                            <sup class="no-underline">{{ [... new Set(doc.authors.map(v => v.affiliation))].indexOf(author.affiliation)
                                    + 1
                            }}</sup>{{ i < doc.authors.length - 1 ? ', ' : '' }} </span>
                    </a>
                </div>

                <div class="flex flex-row flex-wrap justify-center">
                    <span class="text-xl px-4 no-underline"
                        v-for="(affiliation, i) in [... new Set(doc.authors.map(v => v.affiliation))]"
                        :key="`${affiliation}`">
                        <span class="no-underline">
                            <sup>{{ i + 1 }}</sup>{{ affiliation }}
                        </span>
                    </span>
                </div>

                <div class="text-center p-6 text-2xl text-black dark:text-white font-bold">{{ doc.venue }}</div>

                <div class="flex flex-row flex-wrap justify-center capitalize">
                    <a class="text-xl p-3 no-underline" :href="`${link}`" v-for="(link, name) in doc.artifactLinks" :key="name">
                        <span class="p-4 bg-neutral-800 hover:bg-slate-700 rounded-md shadow-md transition">{{ name }}</span>
                    </a>
                </div>

            </div>

            <ContentRenderer :value="doc" class="prose dark:prose-invert mx-auto m-8" />
        </ContentDoc>
    </article>

    <Footer></Footer>
</template>
