<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import AdviceIcon from '@/components/wheel/management/animated-icons/Advice.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_advice_button')"
        class="absolute left-1/2 top-[320px] z-10 col-span-5 ml-[-280px] max-w-lg">
        <template #icon>
            <AdviceIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        {{ $t('_advice_text') }}
    </PopoverCard>
</template>
