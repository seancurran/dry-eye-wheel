<script setup>
import Card from '@/components/Card.vue';
import ComplexTreatmentsIcon from '@/components/icons/ComplexTreatments.vue';
</script>

<template>
    <Card
        :title="$t('Complex Treatments')"
        class="absolute left-1/2 top-[180px] z-10 col-span-5 ml-[-260px] max-w-xl">
        <template #icon>
            <ComplexTreatmentsIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_complex_treatments_text') }}
    </Card>
</template>
