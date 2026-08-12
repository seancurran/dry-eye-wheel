<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import ScleralLensesIcon from '@/components/wheel/management/animated-icons/ScleralLenses.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_scleral_lenses_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[250px] md:z-10 md:col-span-5 md:ml-[-300px] md:max-w-xl md:w-auto">
        <template #icon>
            <ScleralLensesIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        {{ $t('_scleral_lenses_text') }}
    </PopoverCard>
</template>
