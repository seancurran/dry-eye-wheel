<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import MedicationReviewIcon from '@/components/wheel/mitigation/animated-icons/MedicationReview.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_medication_review_button')"
        class="absolute left-1/2 top-[390px] z-10 col-span-5 ml-[-224px] max-w-lg">
        <template #icon>
            <MedicationReviewIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_medication_review_text') }}
    </PopoverCard>
</template>
