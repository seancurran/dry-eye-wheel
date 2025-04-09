<script setup>
import Card from '@/components/Card.vue';
import ScleralLensesIcon from '@/components/icons/ScleralLenses.vue';
</script>

<template>
    <Card
        :title="$t('Scleral Lenses')"
        class="absolute left-1/2 top-[250px] z-10 col-span-5 ml-[-300px] max-w-xl">
        <template #icon>
            <ScleralLensesIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        {{ $t('_scleral_lenses_text') }}
    </Card>
</template>
