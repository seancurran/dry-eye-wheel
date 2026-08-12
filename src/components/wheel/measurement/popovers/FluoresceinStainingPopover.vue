<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import FluoresceinStainingIcon from '@/components/wheel/measurement/animated-icons/FluoresceinStaining.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_fluorescein_staining_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[260px] md:z-10 md:col-span-5 md:ml-[-300px] md:max-w-lg md:w-auto">
        <template #icon>
            <FluoresceinStainingIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        <div
            class="contents"
            v-html="$t('_fluorescein_staining_text')" />
    </PopoverCard>
</template>
