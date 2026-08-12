<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import LissamineGreenStainingIcon from '@/components/wheel/measurement/animated-icons/LissamineGreenStaining.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_lissamine_green_staining_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[340px] md:z-10 md:col-span-5 md:ml-[-260px] md:max-w-lg md:w-auto">
        <template #icon>
            <LissamineGreenStainingIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        <div
            class="contents"
            v-html="$t('_lissamine_green_staining_text')" />
    </PopoverCard>
</template>
