<script setup>
import Card from '@/components/Card.vue';
import NonInvasiveBreakupTimeIcon from '@/components/icons/NonInvasiveBreakupTime.vue';
</script>

<template>
    <Card
        :title="$t('Non-Invasive Breakup Time')"
        class="absolute left-1/2 top-[300px] z-10 col-span-5 ml-[-260px] max-w-lg">
        <template #icon>
            <NonInvasiveBreakupTimeIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        <div
            class="contents"
            v-html="$t('_non_invasive_breakup_time_text')" />
    </Card>
</template>
