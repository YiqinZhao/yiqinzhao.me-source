<script setup>
const { path } = useRoute()

const firstRoute = path.split('/')[1]
const navigatorItems = [
    { path: '/', text: 'Home' },
    { path: '/news/', text: 'News' },
    { path: '/publication/', text: 'Publication' },
    // { path: '/research/', text: 'Research' },
    { path: '/project/', text: 'Projects' },
    { path: '/personal/', text: 'Personal' },
    // { path: '/blog/', text: 'Blog' },
    { path: '/yiqinzhao-cv.pdf', text: 'CV' },
].map(v => {
    v.active = v.path.split('/')[1] === firstRoute
    return v
})
const activeItem = navigatorItems.filter(v => v.active)[0]
</script>

<template>
    <div class="hidden md:block text-normal px-4 py-2 text-gray-500 dark:text-gray-400 mx-auto bg-gray-100 dark:bg-gray-800"
        :class="path === '/' ? 'bg-transparent dark:bg-transparent' : ''">
        <div class="md:flex justify-between max-w-6xl mx-auto">
            <a class="text-xl font-bold hover:dark:text-white hover:text-black transition-colors" href="/">
                <span :class="{ 'opacity-0': path === '/' }">
                    <img class="inline w-10 dark:invert transition-opacity opacity-60 hover:opacity-100"
                        src="/assets/img/qin-logo.svg" alt="">
                </span>
            </a>

            <div class="flex flex-row justify-center">

                <a class="pl-10 font-medium flex items-center" v-for="item in navigatorItems" v-bind:key="item.text"
                    :href="item.path">
                    <span v-if="item.path.split('/')[1] === firstRoute"
                        class="transition-border text-black dark:text-white border-b-2 border-b-gray-400">{{ item.text
                        }}</span>
                    <span v-else class="transition-border hover:border-b-2 border-b-gray-400">{{ item.text }}</span>
                </a>
            </div>
        </div>
    </div>

    <div
        class="fixed flex md:hidden flex-row justify-between p-5 text-black dark:text-white bg-gray-100 dark:bg-gray-800 z-50 w-full top-0">
        <span class="text-xl font-bold">{{ activeItem.text }}</span>
        <span v-on:click="onMenuButtonClick">
            <img class="inline dark:invert"
                :src="menuOpen ? '/assets/img/icons/close.svg' : '/assets/img/icons/menu.svg'" alt="">
        </span>
    </div>

    <div
        class="flex md:hidden opacity-0 flex-row justify-between p-5 text-black dark:text-white bg-gray-100 dark:bg-gray-800 z-50 w-full top-0">
        <span class="text-xl font-bold">{{ activeItem.text }}</span>
        <span v-on:click="onMenuButtonClick">
            <img class="inline dark:invert"
                :src="menuOpen ? '/assets/img/icons/close.svg' : '/assets/img/icons/menu.svg'" alt="">
        </span>
    </div>

    <div class="fixed w-full h-full top-0 left-0 z-40 bg-black transition-opacity opacity-0"
        :class="{ 'translate-y-[-100vh]': !menuOpen, 'opacity-40': menuOpen }">
    </div>
    <div class="md:hidden fixed flex flex-col justify-between w-full h-full top-0 left-0 bg-gray-100 dark:bg-gray-800 z-40
        transition-transform duration-500"
        :class="{ 'duration-0 translate-y-[-100vh] opacity-0': !menuOpen, 'opacity-100': menuOpen }">
        <div class="flex flex-col p-5 pt-24 text-xl text-gray-400 dark:text-gray-500">
            <a class="transition-color py-3" v-for="item in navigatorItems" v-bind:key="item.text" :href="item.path">
                <div class="flex justify-between">
                    <span v-if="item.active" class="dark:text-white font-medium">
                        {{ item.text }}
                    </span>
                    <span v-else class="transition-border :border-b-4 border-b-gray-400">{{ item.text }}</span>
                    <img class="dark:invert w-6 opacity-50"
                        :class="{ 'opacity-100': item.path.split('/')[1] === firstRoute }"
                        src="/assets/img/icons/arrow-right-bold.svg" alt="">
                </div>
            </a>
        </div>

        <div class="text-gray-400 dark:text-gray-500 text-center py-4">Yiqin Zhao</div>
    </div>
</template>

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
