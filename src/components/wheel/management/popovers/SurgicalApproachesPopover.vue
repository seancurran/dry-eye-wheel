<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import SurgicalApproachesIcon from '@/components/wheel/management/animated-icons/SurgicalApproaches.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_surgical_approaches_button')"
        class="absolute left-1/2 top-[180px] z-10 col-span-5 ml-[-260px] max-w-xl">
        <template #icon>
            <SurgicalApproachesIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        {{ $t('_surgical_approaches_text') }}
    </PopoverCard>
</template>
