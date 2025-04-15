<template>
    <div class="mb-16">
        <div class="fixed z-50 left-0 top-0 w-full h-full flex justify-center items-center bg-black/80 flex-col opacity-0 transition-opacity duration-500"
            :class="{ 'opacity-100': animalDetailViewOpen, 'translate-y-[-100vh]': !animalDetailViewOpen }"
            v-on:click="onAnimalImageClick">
            <img class="w-full mb-2 md:w-1/2" src="/assets/img/animals.png"
                title="Shiloh, my cat, and Stella, my dog" />
            <p class="text-white text-center text-2xl mt-0">🐈‍⬛ Shiloh & 🐕Stella</p>
        </div>

        <div class="container md:w-[140%] md:ml-[-20%] px-0 md:pt-0">
            <div class="flex py-0 dark:text-white relative justify-end items-center mx-auto">

                <div class="w-[55%] hidden md:flex flex-col items-center justify-start shadow-lg
                            p-12 py-8 z-20 h-fit absolute left-0 bg-neutral-100 dark:bg-neutral-700 bottom-16">
                    <p class="w-full text-6xl py-4 m-0 font-bold">Yiqin Zhao</p>
                    <p class="w-full text-xl pl-3 prose dark:prose-invert m-0 text-left text-gray-500">
                        赵一勤 | Yiqin (Pronunciation: ee-cheen) <br />
                        CS Ph.D. candidate <a href="https://cake.wpi.edu" class="text-gray-500">@wpicakelab</a> <br />
                        Incoming Assistant Professor <a href="https://rit.edu" class="text-gray-500">@RIT</a> <br />
                    </p>
                    <p class="w-full text-xl pl-3 prose dark:prose-invert mt-2 mb-0 text-left text-gray-500">
                        <i>Building dynamic intelligent systems for immersive mobile computing.</i>
                    </p>
                    <p class="mt-4 w-full pl-3 m-0">
                        <span class="m-0">
                            <a href="mailto:yiqinzhao@outlook.com">
                                <img class="inline dark:invert w-6 mr-3 opacity-75 hover:opacity-100 transition-opacity m-0"
                                    src="/assets/img/icons/email.svg" alt="">
                            </a>
                            <a href="https://github.com/YiqinZhao">
                                <img class="inline dark:invert w-6 mr-3 opacity-75 hover:opacity-100 transition-opacity m-0"
                                    src="/assets/img/icons/github.svg" alt="">
                            </a>
                            <a href="https://scholar.google.com/citations?user=2Dq4bAcAAAAJ&hl=en">
                                <img class="inline dark:invert w-6 mr-3 opacity-75 hover:opacity-100 transition-opacity m-0"
                                    src="/assets/img/icons/google-scholar.svg" alt="">
                            </a>
                            <a href="https://bsky.app/profile/yiqinzhao.bsky.social">
                                <img class="inline dark:invert w-6 mr-3 opacity-75 hover:opacity-100 transition-opacity m-0"
                                    src="/assets/img/icons/bluesky.svg" alt="">
                            </a>
                        </span>
                    </p>
                </div>

                <img class="w-1/2 md:w-1/3 shadow-lg my-0 md:my-12 z-30 absolute right-[-2%] bottom-[-2%] md:bottom-[-1em] md:right-[-3%] cursor-pointer"
                    src="/assets/img/animals.png" title="Shiloh, my cat, and Stella, my dog"
                    v-on:click="onAnimalImageClick" />

                <img class="w-full md:w-1/2 shadow-lg my-0 md:my-12 z-10" src="/assets/img/hero-3-4.jpg" alt="" />

                <div class="absolute h-full w-[75%] left-0 z-[-1]"></div>

                <img class="hidden md:block absolute w-3/5 top-[-8rem] left-[-5rem] dark:invert z-[-1] opacity-30"
                    src="/assets/img/qin-logo.svg" alt="">
            </div>

        </div>

        <div
            class="hidden md:block w-full h-fit p-0 m-0 absolute mx-auto top-0 left-0 z-[-2] bg-neutral-200 dark:bg-neutral-800">
            <div class="max-w-prose mt-[3.4rem] opacity-0">
                <div class="container w-[140%] ml-[-20%] px-0 md:pt-0">
                    <div class="flex py-0 dark:text-white relative justify-end items-center mx-auto">
                        <img class="w-full md:w-1/2 shadow-lg my-12 z-10" src="/assets/img/hero-3-4.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            animalDetailViewOpen: false
        }
    },
    methods: {
        onAnimalImageClick() {
            this.animalDetailViewOpen = !this.animalDetailViewOpen
        }
    }
}
</script>
