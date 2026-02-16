<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import LissamineGreenStainingIcon from '@/components/wheel/measurement/animated-icons/LissamineGreenStaining.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_lissamine_green_staining_button')"
        class="absolute left-1/2 top-[340px] z-10 col-span-5 ml-[-260px] max-w-lg">
        <template #icon>
            <LissamineGreenStainingIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        <div
            class="contents"
            v-html="$t('_lissamine_green_staining_text')" />
    </PopoverCard>
</template>
