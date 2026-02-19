<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import ComplexTreatmentsIcon from '@/components/wheel/management/animated-icons/ComplexTreatments.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_complex_treatments_button')"
        class="absolute left-1/2 top-[180px] z-10 col-span-5 ml-[-260px] max-w-xl">
        <template #icon>
            <ComplexTreatmentsIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_complex_treatments_text') }}
    </PopoverCard>
</template>
