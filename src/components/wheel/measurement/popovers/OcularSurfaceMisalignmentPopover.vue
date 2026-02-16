<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import OcularSurfaceMisalignmentIcon from '@/components/wheel/measurement/animated-icons/OcularSurfaceMisalignment.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_ocular_surface_misalignment_button')"
        class="absolute left-1/2 top-[340px] z-10 col-span-5 ml-[-300px] max-w-lg">
        <template #icon>
            <OcularSurfaceMisalignmentIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_ocular_surface_misalignment_text') }}
    </PopoverCard>
</template>
