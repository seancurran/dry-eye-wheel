<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import EyelidsMeibomianGlandExpressionIcon from '@/components/wheel/measurement/animated-icons/EyelidsMeibomianGlandExpression.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_eyelids_meibomian_gland_expression_title')"
        class="absolute left-1/2 top-[320px] z-10 col-span-5 ml-[-390px] max-w-lg">
        <template #icon>
            <EyelidsMeibomianGlandExpressionIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_eyelids_meibomian_gland_expression_text') }}
    </PopoverCard>
</template>
