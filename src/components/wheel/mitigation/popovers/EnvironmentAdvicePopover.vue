<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import EnvironmentAdviceIcon from '@/components/wheel/mitigation/animated-icons/EnvironmentAdvice.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_environment_advice_button')"
        class="absolute left-1/2 top-[340px] z-10 col-span-5 ml-[-224px] max-w-lg">
        <template #icon>
            <EnvironmentAdviceIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        {{ $t('_environment_advice_text') }}
    </PopoverCard>
</template>
