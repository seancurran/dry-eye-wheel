<script setup>
import Card from '@/components/Card.vue';
import HormonesIcon from '@/components/icons/Hormones.vue';
</script>

<template>
    <Card
        :title="$t('Hormones')"
        class="absolute left-1/2 top-[240px] z-10 col-span-5 ml-[-140px] max-w-lg">
        <template #icon>
            <HormonesIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        {{ $t('_hormones_text') }}
    </Card>
</template>
