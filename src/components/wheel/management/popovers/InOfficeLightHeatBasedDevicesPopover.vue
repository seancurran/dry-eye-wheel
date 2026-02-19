<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import InOfficeLightHeatBasedDevicesIcon from '@/components/wheel/management/animated-icons/InOfficeLightHeatBasedDevices.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_in_office_light_heat_based_devices_button')"
        class="absolute left-1/2 top-[200px] z-10 col-span-5 ml-[-300px] max-w-xl">
        <template #icon>
            <InOfficeLightHeatBasedDevicesIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_in_office_light_heat_based_devices_text') }}
    </PopoverCard>
</template>
