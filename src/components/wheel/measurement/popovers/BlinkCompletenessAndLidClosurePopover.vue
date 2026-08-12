<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import BlinkCompletenessAndLidClosureIcon from '@/components/wheel/measurement/animated-icons/BlinkCompletenessAndLidClosure.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_blink_rate_and_completeness_title')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[320px] md:z-10 md:col-span-5 md:ml-[-300px] md:max-w-lg md:w-auto">
        <template #icon>
            <BlinkCompletenessAndLidClosureIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_blink_rate_and_completeness_text') }}
    </PopoverCard>
</template>
