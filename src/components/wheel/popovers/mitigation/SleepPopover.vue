<script setup>
import Card from '@/components/Card.vue';
import SleepIcon from '@/components/icons/Sleep.vue';
</script>

<template>
    <Card
        :title="$t('Sleep')"
        class="absolute left-1/2 top-[240px] z-10 col-span-5 ml-[-200px] max-w-lg">
        <template #icon>
            <SleepIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_sleep_text') }}
    </Card>
</template>
