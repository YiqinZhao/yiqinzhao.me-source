<template>
    <div>
        <div class="xl:w-[175%] xl:ml-[-37.5%]">
            <ContentSlot :use="$slots.default" unwrap="p"/>
        </div>
    </div>
</template>
