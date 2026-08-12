<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import MedicationReviewIcon from '@/components/wheel/mitigation/animated-icons/MedicationReview.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_medication_review_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[390px] md:z-10 md:col-span-5 md:ml-[-224px] md:max-w-lg md:w-auto">
        <template #icon>
            <MedicationReviewIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_medication_review_text') }}
    </PopoverCard>
</template>
