<template>
    <div class="text-center py-4 mt-8 border-t border-t-gray-400 dark:text-gray-400">
        <p>© <a href="https://yiqinzhao.me">Yiqin Zhao</a> {{year}}. Last updated: {{datetime}}</p>
        <p>Use my website <a class="underline" href="https://github.com/YiqinZhao/yiqinzhao.me-source">template</a>.</p>
    </div>
</template>

<script setup>
const year = new Date().getFullYear()
const datetime = new Date().toLocaleDateString()
</script>
