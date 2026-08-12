<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import MeibographyAndInterferometryIcon from '@/components/wheel/measurement/animated-icons/MeibographyAndInterferometry.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_meibography_and_interferometry_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[380px] md:z-10 md:col-span-5 md:ml-[-300px] md:max-w-xl md:w-auto">
        <template #icon>
            <MeibographyAndInterferometryIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_meibography_and_interferometry_text') }}
    </PopoverCard>
</template>
