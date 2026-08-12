<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import Osdi6Icon from '@/components/wheel/measurement/animated-icons/Osdi6.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_osdi_6_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[220px] md:z-10 md:col-span-5 md:ml-[-240px] md:max-w-lg md:w-auto">
        <template #icon>
            <Osdi6Icon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        <div
            class="contents"
            v-html="$t('_osdi_6_text')" />
    </PopoverCard>
</template>
