<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import EnvironmentAdviceIcon from '@/components/wheel/mitigation/animated-icons/EnvironmentAdvice.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_environment_advice_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[340px] md:z-10 md:col-span-5 md:ml-[-224px] md:max-w-lg md:w-auto">
        <template #icon>
            <EnvironmentAdviceIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        {{ $t('_environment_advice_text') }}
    </PopoverCard>
</template>
