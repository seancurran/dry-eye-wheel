<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import PreviousEyeSurgeryIcon from '@/components/wheel/mitigation/animated-icons/PreviousEyeSurgery.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_previous_eye_surgery_button')"
        class="absolute left-1/2 top-[340px] z-10 col-span-5 ml-[-224px] max-w-lg">
        <template #icon>
            <PreviousEyeSurgeryIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_previous_eye_surgery_text') }}
    </PopoverCard>
</template>
