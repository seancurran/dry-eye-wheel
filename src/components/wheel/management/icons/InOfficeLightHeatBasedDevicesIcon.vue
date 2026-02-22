<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
const controlsStore = useControlsStore();
</script>

<template>
    <g
        :class="{ 'svg-active': controlsStore.selectedItem === 'in-office-light-heat-based-devices' }"
        class="svg-icon svg-fill-path"
        style="transform: translate(0px, 0px)">
        <!-- Icon -->
        <g>
            <path
                d="M333.8,549.4c0.8-2,1.6-3.9,2.5-5.8c0.8-1.9,1.6-3.9,2.5-5.8h-4.6c0.1-0.3,0.2-0.5,0.3-0.8c1.4-3.5,2.8-6.9,4.1-10.4
    c0.1-0.2,0.2-0.2,0.4-0.2c1.5,0,2.9,0,4.4,0c0.1,0,0.1,0,0.2,0c-1.1,2.7-2.2,5.3-3.3,8h4.8c-0.1,0.1-0.1,0.2-0.2,0.2
    c-1.8,2.5-3.7,5-5.5,7.5c-1.8,2.4-3.6,4.8-5.3,7.2C334,549.3,334,549.5,333.8,549.4L333.8,549.4z" />
            <path
                d="M338.8,550.9c-6.3-0.2-12.1-2.2-17.5-5.3c-3.6-2-6.9-4.3-9.8-7.3c-1.4-1.5-1.4-2,0-3.4c4.3-4.1,9.1-7.3,14.5-9.7
    c9.2-4,18.4-3.6,27.4,0.8c4.8,2.3,9.1,5.3,12.9,9c1.3,1.3,1.4,1.9,0.1,3.1c-6,5.6-12.7,9.9-20.8,11.8
    C343.4,550.5,341,550.6,338.8,550.9L338.8,550.9z M338.8,548.1c6.1,0.1,11.5-5,11.6-11.1c0.1-6.4-4.9-11.7-11.2-11.8
    c-6.4-0.1-11.6,4.9-11.8,11.3C327.3,542.7,332.4,548,338.8,548.1L338.8,548.1z M328,545.8c-4.3-6-4.2-12.1-0.1-18.2
    c-5.4,2.1-10,5.2-14.3,9.2C317.9,540.7,322.6,543.8,328,545.8L328,545.8z M349.9,545.8c5.3-2.1,10-5.2,14.2-9.1
    c-4.2-3.9-8.9-7-14.2-9C354.1,533.7,354.1,539.7,349.9,545.8L349.9,545.8z" />
        </g>
        <!-- Use _in_office_light_heat_based_devices_icon translation with | as line break delimiter -->
        <text
            x="340"
            y="566"
            text-anchor="middle">
            <tspan
                v-for="(line, index) in $t('_in_office_light_heat_based_devices_icon').split('|')"
                :key="index"
                x="340  "
                :dy="index === 0 ? 0 : '1.2em'"
                :style="$selectedLanguage.value === 'zh' ? 'font-size: 14px !important;' : ''">
                {{ line }}
            </tspan>
        </text>
    </g>
</template>
