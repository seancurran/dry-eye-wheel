<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';

const controlsStore = useControlsStore();

const areas = [
    { code: 'mitigation', labelKey: '_mitigation_button' },
    { code: 'measurement', labelKey: '_measurement_button' },
    { code: 'management', labelKey: '_management_button' },
];
</script>

<template>
    <div class="grid grid-cols-3 gap-1 rounded-full border-2 border-[#E5E6E7] bg-white p-1">
        <button
            v-for="area in areas"
            :key="area.code"
            type="button"
            @click="controlsStore.selectArea(area.code)"
            :class="
                controlsStore.selectedArea === area.code
                    ? 'bg-[#2B398F] text-white'
                    : 'text-[#2B398F]'
            "
            class="min-h-[34px] rounded-full px-1 text-[10px] font-euclid-circular-bold uppercase leading-tight transition-colors">
            {{ $t(area.labelKey).split('|').join(' ') }}
        </button>
    </div>
</template>
