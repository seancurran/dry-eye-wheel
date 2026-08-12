<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import InOfficeLightHeatBasedDevicesIcon from '@/components/wheel/management/animated-icons/InOfficeLightHeatBasedDevices.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_in_office_light_heat_based_devices_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[200px] md:z-10 md:col-span-5 md:ml-[-300px] md:max-w-xl md:w-auto">
        <template #icon>
            <InOfficeLightHeatBasedDevicesIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_in_office_light_heat_based_devices_text') }}
    </PopoverCard>
</template>
