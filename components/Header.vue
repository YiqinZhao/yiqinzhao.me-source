<template>
    <div class="w-full relative mb-10">

        <div class="container mx-auto max-w-6xl px-4">
            <Navigator class="z-20"/>

            <div v-if="path == '/'" class="flex py-20 dark:text-white relative">
                <div class="w-1/2 flex flex-col justify-end z-10">
                    <p class="text-6xl font-bold py-4">Yiqin Zhao</p>
                    <p class="text-2xl pl-3 prose dark:prose-invert">
                        赵一勤 | Yiqin (Yi-Chin) <br />
                        PhD student <a href="https://cake.wpi.edu">@wpicakelab</a> <br />
                        Student Researcher <a href="https://arvr.google.com">@GoogleARVR</a> <br />
                        Research: AR, System, CV, CG
                    </p>
                </div>

                <img class="w-1/2 shadow-md" src="img/hero.jpg" alt="">

                <img class="absolute w-2/3 top-[-5rem] left-[-5rem] dark:invert z-[-1]" src="img/qin-logo.svg" alt="">
            </div>
            <div v-if="path == '/'" class="w-full h-full absolute top-0 left-0 z-[-2] dark:bg-neutral-800"></div>
        </div>
    </div>
</template>

<script setup>
const { path } = useRoute()
</script>
