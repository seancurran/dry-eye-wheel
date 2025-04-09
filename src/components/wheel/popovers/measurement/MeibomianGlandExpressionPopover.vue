<script setup>
import Card from '@/components/Card.vue';
import MeibomianGlandExpressionIcon from '@/components/icons/MeibomianGlandExpression.vue';
</script>

<template>
    <Card
        :title="$t('Meibomian Gland Expression')"
        class="absolute left-1/2 top-[320px] z-10 col-span-5 ml-[-390px] max-w-lg">
        <template #icon>
            <MeibomianGlandExpressionIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_meibomian_gland_expression_text') }}
    </Card>
</template>
