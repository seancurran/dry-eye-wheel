<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';

const controlsStore = useControlsStore();
</script>

<template>
    <g
        :class="{ 'svg-active': controlsStore.selectedItem === 'complex-treatments' }"
        class="svg-icon svg-fill-circle svg-stroke-polyline svg-fill-polyline svg-fill-line"
        style="transform: translate(-70px, 36px)">
        <!-- Icon -->
        <g>
            <path
                class="st17 stroke-path-manual"
                d="M486,451.7c0-0.7,0.4-1.3,0.9-1.6l-6.3-11c-0.3,0.2-0.6,0.2-0.9,0.2c-1,0-1.8-0.8-1.8-1.8h-12.5
			c0,1-0.8,1.8-1.8,1.8c-0.3,0-0.6-0.1-0.9-0.2l-6.3,10.9c0.5,0.3,0.9,0.9,0.9,1.6c0,0.7-0.4,1.3-0.9,1.6l6.4,11
			c0.3-0.2,0.6-0.2,0.9-0.2c1,0,1.8,0.8,1.8,1.8h12.5c0-1,0.8-1.8,1.8-1.8c0.3,0,0.6,0.1,0.9,0.2l6.3-10.9
			C486.3,453,486,452.4,486,451.7z" />
            <circle
                class="st17"
                cx="479.6"
                cy="465.7"
                r="1.8" />
            <circle
                class="st17"
                cx="463.5"
                cy="465.7"
                r="1.8" />
            <circle
                class="st17"
                cx="479.6"
                cy="437.6"
                r="1.8" />
            <circle
                class="st17"
                cx="463.5"
                cy="437.6"
                r="1.8" />
            <circle
                class="st17"
                cx="455.4"
                cy="451.6"
                r="1.8" />
            <circle
                class="st17"
                cx="487.8"
                cy="451.7"
                r="1.8" />
            <circle
                class="st17"
                cx="479.6"
                cy="465.7"
                r="1.8" />
            <circle
                class="st17"
                cx="463.5"
                cy="465.7"
                r="1.8" />
            <circle
                class="st17"
                cx="479.6"
                cy="437.6"
                r="1.8" />
            <circle
                class="st17"
                cx="463.5"
                cy="437.6"
                r="1.8" />
            <circle
                class="st17"
                cx="455.4"
                cy="451.6"
                r="1.8" />
            <circle
                class="st17"
                cx="487.8"
                cy="451.7"
                r="1.8" />
            <line
                class="st17"
                x1="465.1"
                y1="464.8"
                x2="486.2"
                y2="452.7" />
            <line
                class="st17"
                x1="464.4"
                y1="464.2"
                x2="478.7"
                y2="439.2" />
            <line
                class="st17"
                x1="479.6"
                y1="439.4"
                x2="479.6"
                y2="463.9" />
            <line
                class="st17"
                x1="463.5"
                y1="463.9"
                x2="463.5"
                y2="439.4" />
            <line
                class="st17"
                x1="478.1"
                y1="464.8"
                x2="456.9"
                y2="452.5" />
            <line
                class="st17"
                x1="478.7"
                y1="464.2"
                x2="464.4"
                y2="439.2" />
            <line
                class="st17"
                x1="465.1"
                y1="438.5"
                x2="486.2"
                y2="450.8" />
            <line
                class="st17"
                x1="486"
                y1="451.7"
                x2="457.2"
                y2="451.6" />
            <line
                class="st17"
                x1="478.1"
                y1="438.5"
                x2="456.9"
                y2="450.7" />
        </g>
        <!-- Use _complex_treatments_icon translation with | as line break delimiter -->
        <text
            :x="$selectedLanguage.value === 'uk' ? 534 : 528"
            y="450"
            text-anchor="middle">
            <tspan
                v-for="(line, index) in $t('_complex_treatments_icon').split('|')"
                :key="index"
                :x="$selectedLanguage.value === 'uk' ? 534 : 528"
                :dy="index === 0 ? 0 : '1.2em'"
                :style="$selectedLanguage.value === 'zh' ? 'font-size: 14px !important;' : ''">
                {{ line }}
            </tspan>
        </text>
    </g>
</template>

<style lang="postcss" scoped>
.st17 {
    fill: none;
    stroke: #000000;
    stroke-width: 1.25;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
}

.st15 {
    font-family: 'EuclidCircularA-SemiBold';
    font-weight: 600;
}

.st16 {
    font-size: 10px;
}

.st14 {
    enable-background: new;
}

.svg-active .stroke-path-manual {
    @apply !stroke-white;
}

.svg-active .st14 path {
    @apply !stroke-none;
    fill: white;
    stroke: none;
    outline: none;
}

.svg-active .cls-1 {
    stroke: #fff;
}

.cls-1 {
    fill: none;
    stroke: #000;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.25px;
}

.svg-active .fill-black {
    fill: white;
}

.fill-black {
    stroke: none;
    fill: black;
}
</style>
