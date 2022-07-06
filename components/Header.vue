<script setup>
const { path } = useRoute()
</script>

<template>
    <div class="w-full relative">
        <div class="container mx-auto max-w-5xl px-0 md:px-4 md:pt-0">
            <div v-if="path == '/'" class="flex py-0 md:py-16 dark:text-white relative justify-between mx-auto">

                <img class="w-full md:w-2/5 shadow-md" src="/assets/img/hero-3-4.jpg" alt="" />

                <div class="w-3/5 p-12 hidden md:flex flex-col items-center justify-end z-10">
                    <p class="w-full text-6xl font-bold py-4">Yiqin Zhao</p>
                    <p class="w-full text-xl pl-3 prose dark:prose-invert">
                        赵一勤 | Yiqin (Yi-Chin) <br />
                        PhD student <a href="https://cake.wpi.edu">@wpicakelab</a> <br />
                        Student Researcher <a href="https://arvr.google.com">@GoogleARVR</a> <br />
                        Research: AR, System, CV, CG
                    </p>
                    <p class="mt-4 w-full pl-3">
                        <span>
                            <a href="mailto:yiqinzhao@outlook.com">
                                <img class="inline dark:invert w-6 mr-3 opacity-75 hover:opacity-100 transition-opacity" src="/assets/img/icons/email.svg" alt="">
                            </a>
                            <a href="https://github.com/YiqinZhao">
                                <img class="inline dark:invert w-6 mr-3 opacity-75 hover:opacity-100 transition-opacity" src="/assets/img/icons/github.svg" alt="">
                            </a>
                            <a href="https://twitter.com/yiqin_zhao">
                                <img class="inline dark:invert w-6 mr-3 opacity-75 hover:opacity-100 transition-opacity" src="/assets/img/icons/twitter.svg" alt="">
                            </a>
                            <a href="https://www.instagram.com/yiqinzhao1996">
                                <img class="inline dark:invert w-6 mr-3 opacity-75 hover:opacity-100 transition-opacity" src="/assets/img/icons/instagram.svg" alt="">
                            </a>
                        </span>
                    </p>
                </div>

                <img class="hidden md:block absolute w-3/5 top-0 right-[-5rem] dark:invert z-[-1] opacity-30"
                    src="/assets/img/qin-logo.svg" alt="">
            </div>
            <div v-if="path == '/'" class="w-full h-full absolute top-0 left-0 z-[-2] dark:bg-neutral-800"></div>
        </div>
    </div>
</template>
