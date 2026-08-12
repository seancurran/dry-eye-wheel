<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
</script>

<template>
    <PopoverCard
        :title="$t('Mitigation')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[360px] md:z-10 md:col-span-5 md:ml-[-80px] md:max-w-md md:w-auto">
        <div
            class="contents"
            v-html="$t('_mitigation_text')" />
    </PopoverCard>
</template>
