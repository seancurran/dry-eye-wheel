<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import ScleralLensesIcon from '@/components/wheel/management/animated-icons/ScleralLenses.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_scleral_lenses_button')"
        class="absolute left-1/2 top-[250px] z-10 col-span-5 ml-[-300px] max-w-xl">
        <template #icon>
            <ScleralLensesIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        {{ $t('_scleral_lenses_text') }}
    </PopoverCard>
</template>
