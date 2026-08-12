<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import ProphylaxisIcon from '@/components/wheel/mitigation/animated-icons/Prophylaxis.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_prophylaxis_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[340px] md:z-10 md:col-span-5 md:ml-[-224px] md:max-w-lg md:w-auto">
        <template #icon>
            <ProphylaxisIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_prophylaxis_text') }}
    </PopoverCard>
</template>
