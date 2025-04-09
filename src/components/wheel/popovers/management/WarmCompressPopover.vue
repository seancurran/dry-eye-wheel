<script setup>
import Card from '@/components/Card.vue';
import WarmCompressIcon from '@/components/icons/WarmCompress.vue';
</script>

<template>
    <Card
        :title="$t('Warm Compress')"
        class="absolute left-1/2 top-[310px] z-10 col-span-5 ml-[-260px] max-w-lg">
        <template #icon>
            <WarmCompressIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        {{ $t('_warm_compress_text') }}
    </Card>
</template>
