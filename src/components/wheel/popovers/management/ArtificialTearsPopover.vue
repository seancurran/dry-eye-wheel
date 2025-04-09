<script setup>
import Card from '@/components/Card.vue';
import ArtificialTearsIcon from '@/components/icons/ArtificialTears.vue';
</script>

<template>
    <Card
        :title="$t('Artificial Tears')"
        class="absolute left-1/2 top-[260px] z-10 col-span-5 ml-[-200px] max-w-lg">
        <template #icon>
            <ArtificialTearsIcon class="!-mb-4 !-mt-4 !h-40" />
        </template>

        {{ $t('_artificial_tears_text') }}
    </Card>
</template>
