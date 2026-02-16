<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import MeibographyAndInterferometryIcon from '@/components/wheel/measurement/animated-icons/MeibographyAndInterferometry.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_meibography_and_interferometry_button')"
        class="absolute left-1/2 top-[380px] z-10 col-span-5 ml-[-300px] max-w-xl">
        <template #icon>
            <MeibographyAndInterferometryIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_meibography_and_interferometry_text') }}
    </PopoverCard>
</template>
