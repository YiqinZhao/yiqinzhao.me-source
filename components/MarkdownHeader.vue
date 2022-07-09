<script setup lang="ts">
defineProps([
    'title', 'hideTitle', 'subtitle'
])
</script>

<template>
    <h1 v-if="!hideTitle" class="dark:text-white text-center text-4xl md:text-5xl font-bold mb-0 mt-0 md:mt-10 max-w-5xl mx-auto">
        {{ title }}
    </h1>
    <h2 v-if="subtitle" class="dark:text-gray-200 text-center text-xl font-normal my-6 max-w-4xl mx-auto">
        {{ subtitle }}
    </h2>
</template>
