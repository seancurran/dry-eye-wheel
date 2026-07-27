<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
const controlsStore = useControlsStore();
</script>

<template>
    <g
        :class="{ 'svg-active': controlsStore.selectedItem === 'aqueous-tear-meniscus-height' }"
        class="svg-icon svg-fill-circle"
        :style="{ transform: $selectedLanguage.value === 'nl' ? 'translate(60px, 88px) scale(0.85)' : 'translate(60px, 80px) scale(0.85)' }">
        <!-- Icon -->
        <g>
            <circle
                cx="620.6"
                cy="349.22"
                r="4.94" />
            <path
                class="measurement-cls-10"
                d="m596.8,359.04s20.87-30.76,47.59,0c0,0-22.9,31.26-47.59,0Z" />
            <g>
                <line
                    class="measurement-cls-3"
                    x1="620.64"
                    y1="374.83"
                    x2="620.64"
                    y2="378.57" />
                <line
                    class="measurement-cls-3"
                    x1="619.42"
                    y1="374.83"
                    x2="621.87"
                    y2="374.83" />
            </g>
            <path
                class="measurement-cls-10"
                d="m609.85,348.78c0,5.94,4.81,10.75,10.75,10.75s10.75-4.81,10.75-10.75" />
            <line
                class="measurement-cls-3"
                x1="620.6"
                y1="360.89"
                x2="620.6"
                y2="367.81" />
            <line
                class="measurement-cls-3"
                x1="619.38"
                y1="368.23"
                x2="621.83"
                y2="368.23" />
            <g>
                <path
                    class="measurement-cls-5"
                    d="m599.97,356.95s.2.3.58.81" />
                <path
                    class="measurement-cls-6"
                    d="m601.83,359.32c4.85,5.51,18.84,17.42,38.04-.53" />
                <path
                    class="measurement-cls-5"
                    d="m640.6,358.1c.24-.23.47-.46.71-.7" />
            </g>
        </g>
        <!-- Use _aqueous_tear_meniscus_height_icon translation with | as line break delimiter -->
        <text
            :x="$selectedLanguage.value === 'ar' ? 710 : 650"
            :y="$selectedLanguage.value === 'nl' ? 366 : 358">
            <tspan
                v-for="(line, index) in $t('_aqueous_tear_meniscus_height_icon').split('|')"
                :key="index"
                :x="$selectedLanguage.value === 'ar' ? 710 : 650"
                :dy="index === 0 ? 0 : '1.2em'"
                :style="$selectedLanguage.value === 'zh' ? 'font-size: 14px !important;' : ''">
                {{ line }}
            </tspan>
        </text>
    </g>
</template>

<style lang="postcss" scoped>
.cls-1 {
    stroke-width: 0.75px;
}

.cls-1,
.cls-2,
.cls-3,
.cls-4 {
    fill: none;
    stroke: #000;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.cls-2,
.cls-4 {
    stroke-width: 0.25px;
}

.cls-3 {
    stroke-width: 3px;
}

.cls-4 {
    stroke-dasharray: 2.02 2.02;
}
</style>
