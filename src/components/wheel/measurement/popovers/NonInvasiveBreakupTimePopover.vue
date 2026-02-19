<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import NonInvasiveBreakupTimeIcon from '@/components/wheel/measurement/animated-icons/NonInvasiveBreakupTime.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_non_invasive_breakup_time_button')"
        class="absolute left-1/2 top-[300px] z-10 col-span-5 ml-[-260px] max-w-lg">
        <template #icon>
            <NonInvasiveBreakupTimeIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        <div
            class="contents"
            v-html="$t('_non_invasive_breakup_time_text')" />
    </PopoverCard>
</template>
