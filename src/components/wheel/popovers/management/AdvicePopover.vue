<script setup>
import Card from '@/components/Card.vue';
import AdviceIcon from '@/components/icons/Advice.vue';
</script>

<template>
    <Card
        :title="$t('Advice')"
        class="absolute left-1/2 top-[320px] z-10 col-span-5 ml-[-280px] max-w-lg">
        <template #icon>
            <AdviceIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        {{ $t('_advice_text') }}
    </Card>
</template>
