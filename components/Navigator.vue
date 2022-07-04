<template>
    <div class="hidden md:flex justify-between text-2xl pt-8 dark:text-gray-400">
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

    <div class="fixed flex md:hidden flex-row justify-between p-5 dark:text-white dark:bg-gray-900 z-30 w-full top-0">
        <span class="text-xl">{{ activeItem.text }}</span>
        <span v-on:click="onMenuButtonClick">
            <img class="inline dark:invert" :src="menuOpen ? '/assets/img/icons/close.svg' : '/assets/img/icons/menu.svg'" alt="">
        </span>
    </div>

    <div class="fixed flex flex-col justify-between w-full h-full top-0 left-0 dark:bg-gray-900 z-20"
        :class="{ 'hidden': !menuOpen }">
        <div class="flex flex-col p-5 pt-24 text-xl dark:text-gray-500">
            <a class="hover:text-white transition-color py-3" v-for="item in navigatorItems" v-bind:key="item.text"
                :href="item.path">
                <div class="flex justify-between">
                    <span v-if="item.active" class="dark:text-white font-medium">
                        {{ item.text }}
                    </span>
                    <span v-else class="transition-border hover:border-b-4 border-b-gray-400">{{ item.text }}</span>
                    <img class="dark:invert w-6 opacity-50"
                        :class="{ 'opacity-100': item.path.split('/')[1] === firstRoute }"
                        src="/assets/img/icons/arrow-right-bold.svg" alt="">
                </div>
            </a>
        </div>

        <div class="dark:text-gray-500 text-center py-4">Yiqin Zhao</div>
    </div>

</template>

<script setup>
const { path } = useRoute()

const firstRoute = path.split('/')[1]
const navigatorItems = [
    { path: '/', text: 'Home' },
    { path: '/news/', text: 'News' },
    { path: '/research/', text: 'Research' },
    { path: '/project/', text: 'Projects' },
    { path: '/blog/', text: 'Blog' },
    { path: '/yiqinzhao-cv.pdf', text: 'CV' },
].map(v => {
    v.active = v.path.split('/')[1] === firstRoute
    return v
})
const activeItem = navigatorItems.filter(v => v.active)[0]
</script>

<script>
export default {
    data() {
        return {
            menuOpen: false
        }
    },
    methods: {
        onMenuButtonClick() {
            this.menuOpen = !this.menuOpen
        }
    }
}
</script>
