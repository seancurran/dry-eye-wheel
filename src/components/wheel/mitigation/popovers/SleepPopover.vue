<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import SleepIcon from '@/components/wheel/mitigation/animated-icons/Sleep.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_sleep_button')"
        class="absolute left-1/2 top-[240px] z-10 col-span-5 ml-[-200px] max-w-lg">
        <template #icon>
            <SleepIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_sleep_text') }}
    </PopoverCard>
</template>
