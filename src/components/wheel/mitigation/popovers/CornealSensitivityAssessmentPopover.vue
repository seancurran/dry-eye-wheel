<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import CornealSensitivityAssessmentIcon from '@/components/wheel/mitigation/animated-icons/CornealSensitivityAssessment.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_corneal_sensitivity_button')"
        class="absolute left-1/2 top-[300px] z-10 col-span-5 ml-[-224px] max-w-lg">
        <template #icon>
            <CornealSensitivityAssessmentIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_corneal_sensitivity_assessment_text') }}
    </PopoverCard>
</template>
