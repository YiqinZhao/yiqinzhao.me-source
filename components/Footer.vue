<template>
    <div class="dark:bg-gray-800 py-12">
        <div class="text-center dark:text-gray-400 max-w-6xl mx-auto">
            <p>© <a href="https://yiqinzhao.me">Yiqin Zhao</a> {{ year }}. Last updated: {{ datetime }}</p>
            <p>Use my website <a class="underline" href="https://github.com/YiqinZhao/yiqinzhao.me-source">template</a>.
            </p>
        </div>
    </div>
</template>

<script setup>
const year = new Date().getFullYear()
const datetime = new Date().toLocaleDateString()
</script>
