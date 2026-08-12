<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import HormonesIcon from '@/components/wheel/mitigation/animated-icons/Hormones.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_hormones_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[240px] md:z-10 md:col-span-5 md:ml-[-140px] md:max-w-lg md:w-auto">
        <template #icon>
            <HormonesIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        {{ $t('_hormones_text') }}
    </PopoverCard>
</template>
