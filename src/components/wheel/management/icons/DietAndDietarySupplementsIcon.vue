<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
const controlsStore = useControlsStore();
</script>

<template>
    <!-- class="svg-fill-path" -->
    <!-- class="svg-stroke-polyline" -->

    <g
        class="svg-icon"
        :class="{ 'svg-active': controlsStore.selectedItem === 'diet-and-dietary-supplements' }"
        style="transform: translate(0px, 0px)">
        <g>
            <path
                class="st9"
                d="M478.9,702.8L478.9,702.8l-11.6,11.6c-4.5,4.5-4.5,11.8,0,16.3s11.8,4.5,16.3,0l11.6-11.6l0,0
                c1.4-1.4-1.1-6.2-5.6-10.7C485.1,703.9,480.3,701.4,478.9,702.8z" />

            <ellipse
                transform="matrix(0.7071 -0.7071 0.7071 0.7071 -360.0909 552.6717)"
                class="st10"
                cx="487.1"
                cy="711"
                rx="3.6"
                ry="11.5" />
            <path
                class="st11"
                d="M477.3,709.9l-8.5,8.5c-0.3,0.3-0.7,0.3-1,0l0,0c-0.3-0.3-0.3-0.7,0-1l8.5-8.5c0.3-0.3,0.7-0.3,1,0l0,0
                C477.6,709.2,477.6,709.6,477.3,709.9z" />
            <path
                class="st9"
                d="M541,714.4l-11.6-11.6l0,0c-1.4-1.4-6.2,1.1-10.7,5.6s-7,9.3-5.6,10.7l0,0l11.6,11.6
                c4.5,4.5,11.8,4.5,16.3,0S545.5,718.9,541,714.4z" />
            <path
                class="st11"
                d="M533,711.8l-4-4c-0.3-0.3-0.3-0.7,0-1l0,0c0.3-0.3,0.7-0.3,1,0l4,4c0.3,0.3,0.3,0.7,0,1l0,0
                C533.7,712.1,533.2,712.1,533,711.8z" />
            <polygon
                class="st9"
                points="523,694 516.5,694 516.5,687.6 511.1,687.6 511.1,694 504.6,694 504.6,699.5 511.1,699.5
                511.1,705.9 516.5,705.9 516.5,699.5 523,699.5" />
            <path
                class="st9"
                d="M500.3,710.8c0,0-7.6,0.3-8.6-7C491.6,703.8,497.1,703.8,500.3,710.8z" />
            <path
                class="st9"
                d="M497.9,703.8c0,0-7.7-0.4-8.3-7.7C489.6,696.1,495.5,697.1,497.9,703.8z" />
            <path
                class="st9"
                d="M494.7,695.4c0,0-7.5,0.4-8.9-6.8C485.8,688.6,491.7,689.4,494.7,695.4z" />
            <path
                class="st9"
                d="M491.3,687.6c0,0-7.2,0.8-8.5-6.4C482.8,681.2,488.4,681.4,491.3,687.6z" />
            <path
                class="st9"
                d="M500.3,710.8c0,0,5.7-4.9,1.7-11.5C502,699.2,498.7,704.8,500.3,710.8z" />
            <path
                class="st9"
                d="M497.9,703.8c0,0,4.6-6.3,0.3-11.3C498.2,692.5,495.3,695.5,497.9,703.8z" />
            <path
                class="st9"
                d="M494.7,695.4c0,0,5-5.6-0.2-10.7C494.5,684.7,492.2,689.4,494.7,695.4z" />
            <path
                class="st9"
                d="M491.3,687.6c0,0,5-6.2-0.3-11.2C491,676.4,488.2,681.6,491.3,687.6z" />
            <path
                class="st9"
                d="M486.8,679.2" />
            <path
                class="st12"
                d="M502.1,715.8c-0.1-0.2-5.4-19.7-13.9-34.9c0,0.2,0,0.5-0.1,0.7c0,0-0.2-0.1-0.6-0.2
                c8.4,15.1,13.7,34.4,13.8,34.6c0,0.2,0.2,0.3,0.4,0.3h0.1C502.1,716.2,502.2,716,502.1,715.8z" />
            <path
                class="st9"
                d="M488.2,681.6c0,0-6.3-1.7-5.8-9.3C482.4,672.3,489,674.7,488.2,681.6z" />
        </g>
        <!-- Use _diet_and_dietary_supplements_icon translation with | as line break delimiter -->
        <text
            x="506"
            y="750"
            text-anchor="middle">
            <tspan
                v-for="(line, index) in $t('_diet_and_dietary_supplements_icon').split('|')"
                :key="index"
                x="506  "
                :dy="index === 0 ? 0 : '1.2em'"
                :style="$selectedLanguage.value === 'zh' ? 'font-size: 14px !important;' : ''">
                {{ line }}
            </tspan>
        </text>
    </g>
</template>

<style lang="postcss" scoped>
.st9 {
    fill: none;
    stroke: #241f20;
    stroke-width: 1.0871;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
}

.svg-active .st9 {
    stroke: white;
}

.st10 {
    fill: none;
    stroke: #241f20;
    stroke-width: 1.0871;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 9.9997;
}

.svg-active .st10 {
    stroke: white;
}

.st11 {
    fill: none;
    stroke: #241f20;
    stroke-width: 0.9059;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
}

.svg-active .st11 {
    stroke: white;
}

.st12 {
    fill: #241f20;
}

.svg-active .st12 {
    fill: white;
}

.svg-active {
    &.svg-fill-path {
        path {
            @apply !fill-white;
        }
    }

    .svg-fill-path {
        path {
            @apply !fill-white;
        }
    }
}

/* Spanish */
.cls-1 {
    stroke-width: 1.09px;
}

.cls-1,
.cls-2,
.cls-3 {
    fill: none;
    stroke: #000;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.cls-2 {
    stroke-width: 0.91px;
}

.cls-3 {
    stroke-width: 1.09px;
}

.svg-active .stroke-black {
    stroke: #fff;
}

.stroke-black {
    fill: none;
    stroke: #000;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.5px;
}

.svg-active .fill-black {
    fill: white;
}

.fill-black {
    stroke: none;
    fill: black;
}
</style>
