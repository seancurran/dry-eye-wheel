<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import SurgicalApproachesIcon from '@/components/wheel/management/animated-icons/SurgicalApproaches.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_surgical_approaches_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[180px] md:z-10 md:col-span-5 md:ml-[-260px] md:max-w-xl md:w-auto">
        <template #icon>
            <SurgicalApproachesIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        {{ $t('_surgical_approaches_text') }}
    </PopoverCard>
</template>
