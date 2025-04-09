<script setup>
import Card from '@/components/Card.vue';
import ProphylaxisIcon from '@/components/icons/Prophylaxis.vue';
</script>

<template>
    <Card
        :title="$t('Prophylaxis')"
        class="absolute left-1/2 top-[340px] z-10 col-span-5 ml-[-224px] max-w-lg">
        <template #icon>
            <ProphylaxisIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_prophylaxis_text') }}
    </Card>
</template>
