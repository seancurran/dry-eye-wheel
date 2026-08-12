<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import NonInvasiveBreakupTimeIcon from '@/components/wheel/measurement/animated-icons/NonInvasiveBreakupTime.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_non_invasive_breakup_time_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[300px] md:z-10 md:col-span-5 md:ml-[-260px] md:max-w-lg md:w-auto">
        <template #icon>
            <NonInvasiveBreakupTimeIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        <div
            class="contents"
            v-html="$t('_non_invasive_breakup_time_text')" />
    </PopoverCard>
</template>
