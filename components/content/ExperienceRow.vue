<script setup>
defineProps(['icon'])
</script>

<template>
    <div class="flex flex-row py-4 items-center my-5">
        <img :id="`publication-${icon}`" class="mr-4 w-20 my-0" :src="`/assets/img/affiliation/${icon}`" alt="" />

        <div class="prose dark:prose-invert [&_p]:my-0 md:text-lg">
            <ContentSlot :use="$slots.default"/>
        </div>
    </div>
</template>
