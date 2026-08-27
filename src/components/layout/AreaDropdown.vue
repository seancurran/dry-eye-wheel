<script setup>
import { ref } from 'vue';
import { useControlsStore } from '@/stores/controlsStore.js';

const controlsStore = useControlsStore();

const isOpen = ref(false);

const areas = [
    { code: 'mitigation', labelKey: '_mitigation_button' },
    { code: 'measurement', labelKey: '_measurement_button' },
    { code: 'management', labelKey: '_management_button' },
];

// Translations use '|' to mark preferred line breaks for the wheel/sidebar buttons; the dropdown is a
// single line, so flatten them back to spaces.
const label = (labelKey) => labelKey.split('|').join(' ');

// Picking the already-selected area collapses back to the neutral wheel, matching how the sidebar's
// own area buttons toggle.
const select = (code) => {
    if (controlsStore.selectedArea === code) {
        controlsStore.collapseArea();
    } else {
        controlsStore.selectArea(code);
    }
    isOpen.value = false;
};
</script>

<template>
    <div class="relative">
        <button
            type="button"
            @click="isOpen = !isOpen"
            class="flex h-[34px] w-full items-center justify-between gap-1 whitespace-nowrap rounded-full border-2 border-[#E5E6E7] bg-white px-4 text-[10px] font-euclid-circular-medium uppercase leading-tight text-[#2B398F] md:text-xs">
            <span>
                {{
                    controlsStore.selectedArea
                        ? label($t(areas.find((area) => area.code === controlsStore.selectedArea).labelKey))
                        : $t('_select_area_label')
                }}
            </span>
            <span class="text-[9px]">▾</span>
        </button>

        <div
            v-if="isOpen"
            class="fixed inset-0 z-10"
            @click="isOpen = false"></div>

        <div
            v-if="isOpen"
            class="absolute start-0 z-20 mt-1 flex w-56 max-w-[75vw] flex-col gap-1 rounded-xl border border-[#E5E6E7] bg-white p-1 shadow-lg">
            <button
                v-for="area in areas"
                :key="area.code"
                type="button"
                @click="select(area.code)"
                :class="
                    controlsStore.selectedArea === area.code
                        ? 'bg-[#2B398F] text-white'
                        : 'text-[#58595B]'
                "
                class="rounded-lg px-3 py-2 text-start text-sm">
                {{ label($t(area.labelKey)) }}
            </button>
        </div>
    </div>
</template>
