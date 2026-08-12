<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import ProactiveManagementOfOcularSurfaceDiseaseIcon from '@/components/wheel/mitigation/animated-icons/ProactiveManagementOfOcularSurfaceDisease.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_proactive_management_of_ocular_surface_disease_title')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[240px] md:z-10 md:col-span-5 md:ml-[-224px] md:max-w-lg md:w-auto">
        <template #icon>
            <ProactiveManagementOfOcularSurfaceDiseaseIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_proactive_management_of_ocular_surface_disease_text') }}
    </PopoverCard>
</template>
