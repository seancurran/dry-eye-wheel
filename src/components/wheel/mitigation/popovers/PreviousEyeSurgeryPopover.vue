<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import PreviousEyeSurgeryIcon from '@/components/wheel/mitigation/animated-icons/PreviousEyeSurgery.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_previous_eye_surgery_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[340px] md:z-10 md:col-span-5 md:ml-[-224px] md:max-w-lg md:w-auto">
        <template #icon>
            <PreviousEyeSurgeryIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_previous_eye_surgery_text') }}
    </PopoverCard>
</template>
