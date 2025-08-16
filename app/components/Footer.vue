<template>
    <div class="bg-gray-100 dark:bg-gray-800 py-4">
        <div class="prose mx-auto dark:prose-invert p-4 md:text-lg opacity-60">

            <div class="flex-col md:flex-row flex justify-between border-b-2 border-b-gray-300">
                <div>
                    <p class="text-sm text-left">
                        赵一勤 | Yiqin (Pronunciation: ee-cheen) <br />
                        Assistant Professor  <br />
                        School of Interactive Games and Media  <br />
                        Rochester Institute of Technology
                    </p>
                </div>

                <div>
                    <p class="text-sm md:text-right [&_br]:hidden [&_br]:md:inline">
                        <a href="mailto:yzigm@rit.edu">E-Mail</a> <br />
                        <a href="https://github.com/YiqinZhao">GitHub</a> <br />
                        <a href="https://bsky.app/profile/yiqinzhao.bsky.social">Bluesky</a> <br />
                    </p>
                </div>
            </div>


            <div class="text-gray-500 dark:text-gray-400 mx-auto text-sm">
                <p>
                    © <a href="https://yiqinzhao.phd">Yiqin Zhao</a> {{ year }}. Last updated: {{ datetime }}.
                    Use my website <a class="underline" href="https://github.com/YiqinZhao/yiqinzhao.me-source">template</a>.
                </p>
            </div>

        </div>

    </div>
</template>

<script setup>
import lastUpdated from '~/static/lastUpdated';

const lastUpdatedTime = new Date(lastUpdated.timestamp)
const year = lastUpdatedTime.getFullYear()
const datetime = lastUpdatedTime.toLocaleDateString()
</script>
