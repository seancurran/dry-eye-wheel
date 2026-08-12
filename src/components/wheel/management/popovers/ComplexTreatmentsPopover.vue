<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import ComplexTreatmentsIcon from '@/components/wheel/management/animated-icons/ComplexTreatments.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_complex_treatments_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[180px] md:z-10 md:col-span-5 md:ml-[-260px] md:max-w-xl md:w-auto">
        <template #icon>
            <ComplexTreatmentsIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_complex_treatments_text') }}
    </PopoverCard>
</template>
