<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import SymptomCheckIcon from '@/components/wheel/mitigation/animated-icons/SymptomCheck.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_symptom_check_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[220px] md:z-10 md:col-span-5 md:ml-[-224px] md:max-w-md md:w-auto">
        <template #icon>
            <SymptomCheckIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_symptom_check_text') }}
    </PopoverCard>
</template>
