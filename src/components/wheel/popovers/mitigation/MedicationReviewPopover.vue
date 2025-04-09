<script setup>
import Card from '@/components/Card.vue';
import MedicationReviewIcon from '@/components/icons/MedicationReview.vue';
</script>

<template>
    <Card :title="$t('Medication Review')" class="absolute left-1/2 top-[390px] z-10 col-span-5 ml-[-224px] max-w-lg">
        <template #icon>
            <MedicationReviewIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_medication_review_text') }}
    </Card>
</template>
