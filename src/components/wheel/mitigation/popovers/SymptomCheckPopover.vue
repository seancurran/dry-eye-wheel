<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import SymptomCheckIcon from '@/components/wheel/mitigation/animated-icons/SymptomCheck.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_symptom_check_button')"
        class="absolute left-1/2 top-[220px] z-10 col-span-5 ml-[-224px] max-w-md">
        <template #icon>
            <SymptomCheckIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_symptom_check_text') }}
    </PopoverCard>
</template>
