<template>
    <div class="xl:flex xl:ml-[-37.5%] xl:w-[175%] xl:justify-between">
        <div class="xl:w-[55%]">
            <slot name="left" />
        </div>

        <div class="xl:w-[40%]">
            <slot name="right" />
        </div>
    </div>
</template>