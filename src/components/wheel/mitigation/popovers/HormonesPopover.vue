<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import HormonesIcon from '@/components/wheel/mitigation/animated-icons/Hormones.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_hormones_button')"
        class="absolute left-1/2 top-[240px] z-10 col-span-5 ml-[-140px] max-w-lg">
        <template #icon>
            <HormonesIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        {{ $t('_hormones_text') }}
    </PopoverCard>
</template>
