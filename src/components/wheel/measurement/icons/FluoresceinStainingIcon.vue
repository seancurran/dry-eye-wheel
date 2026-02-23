<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
const controlsStore = useControlsStore();
</script>

<template>
    <g
        :class="{ 'svg-active': controlsStore.selectedItem === 'fluorescein-staining' }"
        class="svg-icon svg-fill-path"
        style="transform: translate(0px, 0px)">
        <!-- Icon -->
        <g>
            <g>
                <circle
                    class="measurement-cls-1"
                    cx="545.55"
                    cy="198.68"
                    r="9.99" />
                <circle
                    class="measurement-cls-12"
                    cx="545.55"
                    cy="198.68"
                    r="3.81" />
            </g>
            <path
                d="m545.46,210.35c-5.21-.21-9.93-1.85-14.4-4.34-2.95-1.64-5.71-3.56-8.06-6.01-1.16-1.21-1.16-1.62.04-2.76,3.52-3.35,7.47-6.04,11.94-7.97,7.6-3.28,15.1-2.96,22.52.62,3.94,1.9,7.47,4.39,10.64,7.4,1.1,1.05,1.13,1.54.05,2.55-4.92,4.61-10.47,8.16-17.12,9.7-1.83.42-3.73.55-5.59.81Zm0-2.32c5.04.09,9.43-4.13,9.53-9.14.1-5.26-4.06-9.64-9.21-9.72-5.25-.08-9.57,4.06-9.67,9.27-.09,5.17,4.13,9.5,9.35,9.59Zm-8.92-1.91c-3.51-4.98-3.47-9.95-.09-14.98-4.43,1.74-8.23,4.31-11.76,7.53,3.56,3.28,7.43,5.78,11.85,7.45Zm18.06-.05c4.38-1.72,8.18-4.26,11.72-7.49-3.5-3.19-7.28-5.75-11.68-7.45,3.43,5,3.4,9.95-.03,14.93Z" />
            <path
                class="measurement-cls-12"
                d="m551.81,203.37c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
            <path
                class="measurement-cls-12"
                d="m549.36,205.83c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
            <path
                class="measurement-cls-12"
                d="m545.25,206.11c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
            <path
                class="measurement-cls-12"
                d="m541.73,204.65c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
            <path
                class="measurement-cls-12"
                d="m538.68,202.55c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
            <path
                class="measurement-cls-12"
                d="m547.8,208.84c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
            <path
                class="measurement-cls-12"
                d="m552.45,206.56c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
            <path
                class="measurement-cls-12"
                d="m542.6,208.66c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
            <path
                class="measurement-cls-12"
                d="m539.18,207.08c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
        </g>
        <!-- Use _fluorescein_staining_icon translation with | as line break delimiter -->
        <text
            x="546"
            y="222"
            text-anchor="middle">
            <tspan
                v-for="(line, index) in $t('_fluorescein_staining_icon').split('|')"
                :key="index"
                x="546"
                :dy="index === 0 ? 0 : '1.2em'"
                :style="$selectedLanguage.value === 'en' ? '' : $selectedLanguage.value === 'zh' ? 'font-size: 12px !important;' : 'font-size: 8px !important;'">
                {{ line }}
            </tspan>
        </text>
    </g>
</template>

<style scoped lang="postcss">
.cls-1 {
    fill: none;
}
</style>
