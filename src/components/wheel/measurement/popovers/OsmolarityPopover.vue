<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import OsmolarityIcon from '@/components/wheel/measurement/animated-icons/Osmolarity.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_osmolarity_button')"
        class="absolute left-1/2 top-[300px] z-10 col-span-5 ml-[-260px] max-w-lg">
        <template #icon>
            <OsmolarityIcon class="!-mb-12 !-mt-14 !h-40" />
        </template>
        <div
            class="contents"
            v-html="$t('_osmolarity_text')" />
    </PopoverCard>
</template>
