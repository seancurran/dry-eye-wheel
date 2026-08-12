<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import OsmolarityIcon from '@/components/wheel/measurement/animated-icons/Osmolarity.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_osmolarity_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[300px] md:z-10 md:col-span-5 md:ml-[-260px] md:max-w-lg md:w-auto">
        <template #icon>
            <OsmolarityIcon class="!-mb-12 !-mt-14 !h-40" />
        </template>
        <div
            class="contents"
            v-html="$t('_osmolarity_text')" />
    </PopoverCard>
</template>
