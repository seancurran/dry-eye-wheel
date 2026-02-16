<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import ProphylaxisIcon from '@/components/wheel/mitigation/animated-icons/Prophylaxis.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_prophylaxis_button')"
        class="absolute left-1/2 top-[340px] z-10 col-span-5 ml-[-224px] max-w-lg">
        <template #icon>
            <ProphylaxisIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_prophylaxis_text') }}
    </PopoverCard>
</template>
