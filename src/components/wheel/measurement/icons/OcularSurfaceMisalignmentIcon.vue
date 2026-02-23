<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
const controlsStore = useControlsStore();
</script>

<template>
    <g
        class="svg-icon svg-fill-path"
        :class="{ 'svg-active': controlsStore.selectedItem === 'ocular-surface-misalignment' }"
        style="transform: translate(430px, -8px)">
        <!-- Icon -->
        <g style="transform: translate(610px, 1060px); scale: 0.29">
            <path
                d="M56.2,35.8c2.1,0,3.3-1.2,3.9-3.2,1.1-3.8,3.5-6.6,6.8-8.6,1.5-.9,3.3-1.4,4.9-2.1,1.9-.9,2.9-2.6,1.9-4.3-.7-1.2-2.7-2.6-4.1-2.4-6.9.6-15.3,9-16.6,15.9-.5,2.5.9,4.6,3.2,4.8Z" />
            <path
                d="M144.5,34.8c-2.9-3.5-7.8-9-14.8-14.6C118.2,11,99.2,0,74.7,0S31.4,11.2,20,20.5c-6.8,5.6-11.7,11-14.5,14.6-3.7,4.6-5.5,7.7-5.5,9.4s0,2.4,6.3,9.4c3.2,3.5,8.4,8.8,15.7,14.4,12,9.2,31.1,20.2,53.5,20.2s41.3-10.8,53.1-19.9c7.3-5.6,12.4-10.9,15.4-14.4,6.2-7,6.2-9,6.2-9.7,0-2.3-3.1-6.5-5.7-9.7ZM108.6,39.7c0,18.5-15,33.5-33.5,33.5s-33.5-15-33.5-33.5S56.6,6.2,75.1,6.2s33.5,15,33.5,33.5ZM123.7,64.8c-10.8,8.1-28,17.7-48.2,17.7s-37.5-9.8-48.5-18c-11.2-8.3-18.8-17.2-20.7-20.2,1.7-2.9,8.1-11.8,18.7-20.2,5.7-4.6,13.5-9.6,23-13.2-7.6,7.2-12.4,17.4-12.4,28.7,0,21.8,17.7,39.5,39.5,39.5s39.5-17.7,39.5-39.5-4.7-21.3-12.2-28.5c9.2,3.6,16.7,8.4,22.4,12.7,11.5,8.9,17.8,17.8,19.2,20.5-1.6,2.8-8.9,11.8-20.4,20.4Z" />
            <path
                d="M68.7,48.8c0,8.8,7.1,16,16,16s16-7.1,16-16-7.1-16-16-16-16,7.1-16,16ZM90.3,37.2c2.9,0,5.2,2.3,5.2,5.2s-2.3,5.2-5.2,5.2-5.2-2.3-5.2-5.2,2.3-5.2,5.2-5.2Z" />
        </g>

        <!-- Use _ocular_surface_misalignment_title translation with | as line break delimiter -->
        <text
            x="200"
            y="346"
            text-anchor="middle">
            <tspan
                v-for="(line, index) in $t('_ocular_surface_misalignment_title').split('|')"
                :key="index"
                x="200"
                :dy="index === 0 ? 0 : '1.2em'"
                :style="$selectedLanguage.value === 'zh' ? 'font-size: 14px !important;' : ''">
                {{ line }}
            </tspan>
        </text>
    </g>
</template>
