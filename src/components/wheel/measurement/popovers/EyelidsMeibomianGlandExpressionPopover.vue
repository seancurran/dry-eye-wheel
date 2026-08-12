<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import EyelidsMeibomianGlandExpressionIcon from '@/components/wheel/measurement/animated-icons/EyelidsMeibomianGlandExpression.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_eyelids_meibomian_gland_expression_title')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[320px] md:z-10 md:col-span-5 md:ml-[-390px] md:max-w-lg md:w-auto">
        <template #icon>
            <EyelidsMeibomianGlandExpressionIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_eyelids_meibomian_gland_expression_text') }}
    </PopoverCard>
</template>
