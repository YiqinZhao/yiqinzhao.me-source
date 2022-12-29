<script setup>
defineProps(['icon', 'url'])
</script>

<template>
    <span>
        <a :href="url" class="mr-4">
            <img class="w-6 inline dark:invert mr-2 my-0" :src="`/assets/img/icons/${icon}.svg`" alt="" />
            <ContentSlot :use="$slots.default" unwrap="p"/>
        </a>
    </span>
</template>
