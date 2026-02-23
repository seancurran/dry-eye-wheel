<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
const controlsStore = useControlsStore();
</script>

<template>
    <g
        class="svg-icon"
        :class="{ 'svg-active': controlsStore.selectedItem === 'surgical-approaches' }"
        style="transform: translate(14px, -10px)">
        <!-- Icon -->
        <g>
            <path
                class="cls-1"
                d="M410.9,455.7l-5.1-3.3c0,0,2.9-3.8,10.5-0.3c7.6,3.5,6.3,8,6.3,8l-5.2-1.2l-5.7,10.4c0,0-0.3,0.8,0.7,1.3
		c0.4,0.3,1.9,0.9,2.1,1c0.9,0.4,1.8,1.8,0.3,2.5c-2.3,1.1-9.5,3.8-9.5,3.8s-2.1,0.9-3-1.3c-0.9-2.2-2.9-9.2-2.9-9.2
		s-0.3-2.5,2.2-1.6l2.5,1.3c0,0,0.9,0.6,1.6-0.6C406.6,465,411,455.7,410.9,455.7L410.9,455.7z" />
        </g>
        <!-- Use _surgical_approaches_icon translation with | as line break delimiter -->
        <text
            x="460"
            y="464"
            text-anchor="middle">
            <tspan
                v-for="(line, index) in $t('_surgical_approaches_icon').split('|')"
                :key="index"
                x="460"
                :dy="index === 0 ? 0 : '1.2em'"
                :style="$selectedLanguage.value === 'zh' ? 'font-size: 11px !important;' : ''">
                {{ line }}
            </tspan>
        </text>
    </g>
</template>

<style lang="postcss" scoped>
g {
    stroke: none;
    fill: black;
}

.svg-active :deep(g) {
    fill: white;
}

.svg-active :deep(.cls-1) {
    stroke: #fff;
}

:deep(.cls-1) {
    fill: none;
    stroke: #000;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.5px;
}
</style>
