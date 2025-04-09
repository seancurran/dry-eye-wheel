<script setup>
import Card from '@/components/Card.vue';
import InOfficeTreatmentsIcon from '@/components/icons/InOfficeTreatmentsIcon.vue';
</script>

<template>
    <Card
        :title="$t('In-Office Treatments')"
        class="absolute left-1/2 top-[200px] z-10 col-span-5 ml-[-300px] max-w-xl">
        <template #icon>
            <InOfficeTreatmentsIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_in_office_treatments_text') }}
    </Card>
</template>
