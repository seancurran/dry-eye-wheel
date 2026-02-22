<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
const controlsStore = useControlsStore();
</script>

<template>
    <g
        :class="{ 'svg-active': controlsStore.selectedItem === 'lissamine-green-staining' }"
        class="svg-icon svg-fill-path"
        style="transform: translate(0px, 0px)">
        <!-- Icon -->
        <g>
            <g>
                <circle
                    class="measurement-cls-1"
                    cx="476.79"
                    cy="316.72"
                    r="9.46" />
                <circle
                    class="measurement-cls-12"
                    cx="476.79"
                    cy="316.72"
                    r="3.61" />
            </g>
            <path
                d="m476.71,327.78c-4.93-.2-9.41-1.75-13.64-4.11-2.79-1.56-5.4-3.37-7.64-5.69-1.1-1.15-1.1-1.53.04-2.62,3.33-3.17,7.08-5.72,11.31-7.54,7.2-3.11,14.31-2.8,21.33.59,3.73,1.8,7.08,4.16,10.08,7.01,1.04.99,1.07,1.46.04,2.42-4.66,4.37-9.92,7.73-16.22,9.18-1.73.4-3.53.52-5.3.77Zm0-2.2c4.77.08,8.93-3.91,9.02-8.66.1-4.98-3.84-9.13-8.72-9.2-4.97-.07-9.07,3.85-9.16,8.78-.09,4.9,3.91,9,8.86,9.09Zm-8.45-1.81c-3.32-4.72-3.29-9.42-.09-14.19-4.2,1.65-7.79,4.08-11.14,7.14,3.37,3.11,7.04,5.47,11.23,7.05Zm17.11-.04c4.14-1.63,7.75-4.03,11.1-7.09-3.31-3.02-6.9-5.44-11.06-7.05,3.24,4.74,3.22,9.43-.03,14.14Z" />
            <path
                class="measurement-cls-12"
                d="m490.12,316.29c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
            <path
                class="measurement-cls-12"
                d="m492.87,318.33c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
            <path
                class="measurement-cls-12"
                d="m460.67,317.65c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
            <path
                class="measurement-cls-12"
                d="m463.56,315.97c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
            <path
                class="measurement-cls-12"
                d="m489.89,319.69c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
            <path
                class="measurement-cls-12"
                d="m463.56,319.43c1.29,0,1.29-2,0-2s-1.29,2,0,2h0Z" />
        </g>
        <!-- Use _lissamine_green_staining_icon translation with | as line break delimiter -->
        <text
            x="476"
            y="337"
            text-anchor="middle">
            <tspan
                v-for="(line, index) in $t('_lissamine_green_staining_icon').split('|')"
                :key="index"
                x="476"
                :dy="index === 0 ? 0 : '1.2em'"
                :style="$selectedLanguage.value === 'en' ? '' : 'font-size: 8px !important'">
                {{ line }}
            </tspan>
        </text>
    </g>
</template>

<style lang="postcss" scoped>
.cls-1 {
    fill: none;
}
</style>
