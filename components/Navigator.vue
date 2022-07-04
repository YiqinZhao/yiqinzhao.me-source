<template>
    <div class="flex justify-between text-2xl pt-8 dark:text-gray-400">
        <a class="text-3xl font-bold hover:text-white transition-colors" href="/">
            <span v-show="path !== '/'">Yiqin Zhao</span>
        </a>

        <div class="flex flex-row">

            <a class="pl-10 font-medium hover:text-white transition-colors" v-for="item in navigatorItems"
                v-bind:key="item.text" :href="item.path">
                <span v-if="item.path.split('/')[1] === firstRoute"
                    class="transition-border text-white border-b-4 border-b-gray-400">{{ item.text }}</span>
                <span v-else class="transition-border hover:border-b-4 border-b-gray-400">{{ item.text }}</span>
            </a>
        </div>
    </div>
</template>

<script setup>
const { path } = useRoute()
const firstRoute = path.split('/')[1]
const navigatorItems = [
    { path: '/', text: 'Home' },
    { path: '/news/', text: 'News' },
    { path: '/projects/', text: 'Projects' },
    { path: '/publications/', text: 'Publications' },
    { path: '/blog/', text: 'Blog' },
    { path: '/yiqinzhao-cv.pdf', text: 'CV' },
]
</script>
