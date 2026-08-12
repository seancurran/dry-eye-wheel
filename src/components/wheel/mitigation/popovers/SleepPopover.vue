<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import SleepIcon from '@/components/wheel/mitigation/animated-icons/Sleep.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_sleep_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[240px] md:z-10 md:col-span-5 md:ml-[-200px] md:max-w-lg md:w-auto">
        <template #icon>
            <SleepIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_sleep_text') }}
    </PopoverCard>
</template>
