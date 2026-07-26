<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
import BlinkRateAndCompletenessIcon from '@/components/wheel/measurement/icons/BlinkRateAndCompletenessIcon.vue';
import ComfortTimeIcon from '@/components/wheel/measurement/icons/ComfortTimeIcon.vue';
import FluoresceinStainingIcon from '@/components/wheel/measurement/icons/FluoresceinStainingIcon.vue';
import LissamineGreenStainingIcon from '@/components/wheel/measurement/icons/LissamineGreenStainingIcon.vue';
import MeibographyAndInterferometryIcon from '@/components/wheel/measurement/icons/MeibographyAndInterferometryIcon.vue';
import EyelidsMeibomianGlandExpressionIcon from '@/components/wheel/measurement/icons/EyelidsMeibomianGlandExpressionIcon.vue';
import NonInvasiveBreakupTimeIcon from '@/components/wheel/measurement/icons/NonInvasiveBreakupTimeIcon.vue';
import OsmolarityIcon from '@/components/wheel/measurement/icons/OsmolarityIcon.vue';
import AqueousTearMeniscusHeightIcon from '@/components/wheel/measurement/icons/AqueousTearMeniscusHeightIcon.vue';
import Osdi6Icon from '@/components/wheel/measurement/icons/Osdi6Icon.vue';
import OcularSurfaceMisalignmentIcon from '@/components/wheel/measurement/icons/OcularSurfaceMisalignmentIcon.vue';
import EyelidsAnteriorBlepharitisExamIcon from '@/components/wheel/measurement/icons/EyelidsAnteriorBlepharitisExamIcon.vue';

const controlsStore = useControlsStore();
</script>

<template>
    <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="-60 -60 1000 1000">
        <defs>
            <filter id="grayscaleFilter">
                <feColorMatrix
                    type="matrix"
                    values="
        0.2126 0.7152 0.0722 0 0
        0.2126 0.7152 0.0722 0 0
        0.2126 0.7152 0.0722 0 0
        0      0      0      1 0" />
            </filter>
            <linearGradient
                id="New_Gradient_Swatch_3"
                data-name="New Gradient Swatch 3"
                x1="324.06"
                y1="850.61"
                x2="875.84"
                y2="275.06"
                gradientUnits="userSpaceOnUse">
                <stop
                    offset="0"
                    stop-color="#9f6d29" />
                <stop
                    offset=".03"
                    stop-color="#a56f28" />
                <stop
                    offset=".15"
                    stop-color="#bf7927" />
                <stop
                    offset=".27"
                    stop-color="#d28125" />
                <stop
                    offset=".4"
                    stop-color="#de8525" />
                <stop
                    offset=".53"
                    stop-color="#e28725" />
                <stop
                    offset="1"
                    stop-color="#9f6d29" />
            </linearGradient>
            <linearGradient
                id="New_Gradient_Swatch_3-2"
                data-name="New Gradient Swatch 3"
                x1="97.79"
                y1="633.69"
                x2="649.58"
                y2="58.14"
                xlink:href="#New_Gradient_Swatch_3" />
            <linearGradient
                id="New_Gradient_Swatch_3-3"
                data-name="New Gradient Swatch 3"
                x1="220.19"
                y1="751.03"
                x2="771.97"
                y2="175.48"
                xlink:href="#New_Gradient_Swatch_3" />
            <linearGradient
                id="New_Gradient_Swatch_1"
                data-name="New Gradient Swatch 1"
                x1="154.51"
                y1="493.03"
                x2="479.24"
                y2="119.45"
                gradientUnits="userSpaceOnUse">
                <stop
                    offset="0"
                    stop-color="#808185" />
                <stop
                    offset=".02"
                    stop-color="#86878b" />
                <stop
                    offset=".11"
                    stop-color="#a8a9ac" />
                <stop
                    offset=".21"
                    stop-color="#c2c3c5" />
                <stop
                    offset=".32"
                    stop-color="#d5d6d8" />
                <stop
                    offset=".42"
                    stop-color="#e1e2e3" />
                <stop
                    offset=".53"
                    stop-color="#e5e6e7" />
                <stop
                    offset="1"
                    stop-color="#808185" />
            </linearGradient>
            <linearGradient
                id="New_Gradient_Swatch_3-4"
                data-name="New Gradient Swatch 3"
                x1="258.67"
                y1="787.93"
                x2="810.46"
                y2="212.38"
                xlink:href="#New_Gradient_Swatch_3" />
            <linearGradient
                id="New_Gradient_Swatch_1-2"
                data-name="New Gradient Swatch 1"
                x1="377.88"
                y1="687.2"
                x2="702.62"
                y2="313.62"
                xlink:href="#New_Gradient_Swatch_1" />
            <linearGradient
                id="New_Gradient_Swatch_3-5"
                data-name="New Gradient Swatch 3"
                x1="193.55"
                y1="725.49"
                x2="745.33"
                y2="149.94"
                xlink:href="#New_Gradient_Swatch_3" />
            <linearGradient
                id="New_Gradient_Swatch_1-3"
                data-name="New Gradient Swatch 1"
                x1="313.17"
                y1="630.95"
                x2="637.9"
                y2="257.37"
                xlink:href="#New_Gradient_Swatch_1" />
            <linearGradient
                id="New_Gradient_Swatch_3-6"
                data-name="New Gradient Swatch 3"
                x1="122.39"
                y1="657.28"
                x2="674.18"
                y2="81.73"
                xlink:href="#New_Gradient_Swatch_3" />
            <linearGradient
                id="New_Gradient_Swatch_1-4"
                data-name="New Gradient Swatch 1"
                x1="240.15"
                y1="567.47"
                x2="564.88"
                y2="193.9"
                xlink:href="#New_Gradient_Swatch_1" />
            <linearGradient
                id="New_Gradient_Swatch_3-7"
                data-name="New Gradient Swatch 3"
                x1="201.32"
                y1="732.95"
                x2="753.11"
                y2="157.4"
                xlink:href="#New_Gradient_Swatch_3" />
            <linearGradient
                id="New_Gradient_Swatch_1-5"
                data-name="New Gradient Swatch 1"
                x1="315.46"
                y1="632.94"
                x2="640.19"
                y2="259.36"
                xlink:href="#New_Gradient_Swatch_1" />
            <linearGradient
                id="New_Gradient_Swatch_4"
                data-name="New Gradient Swatch 4"
                x1="394.55"
                y1="530.41"
                x2="554.28"
                y2="365.4"
                gradientUnits="userSpaceOnUse">
                <stop
                    offset="0"
                    stop-color="#b68c2e" />
                <stop
                    offset=".1"
                    stop-color="#c99b28" />
                <stop
                    offset=".24"
                    stop-color="#dbaa23" />
                <stop
                    offset=".38"
                    stop-color="#e7b320" />
                <stop
                    offset=".53"
                    stop-color="#ebb61f" />
                <stop
                    offset="1"
                    stop-color="#b68c2e" />
            </linearGradient>
            <linearGradient
                id="New_Gradient_Swatch_3-8"
                data-name="New Gradient Swatch 3"
                x1="144.38"
                y1="678.35"
                x2="696.16"
                y2="102.8"
                xlink:href="#New_Gradient_Swatch_3" />
            <linearGradient
                id="New_Gradient_Swatch_1-6"
                data-name="New Gradient Swatch 1"
                x1="258.99"
                y1="583.86"
                x2="583.73"
                y2="210.28"
                xlink:href="#New_Gradient_Swatch_1" />
            <linearGradient
                id="New_Gradient_Swatch_4-2"
                data-name="New Gradient Swatch 4"
                x1="337.59"
                y1="475.27"
                x2="497.31"
                y2="310.26"
                xlink:href="#New_Gradient_Swatch_4" />
        </defs>
        <g>
            <path
                class="measurement-cls-1"
                d="m782.29,193.25l5.16-3.13-.06-.09-5.16,3.13s.04.06.05.09Z" />

            <!-- Sub Class: 1 of 3 -->
            <path
                class="measurement-cls-15"
                :filter="controlsStore.subTypingSectionGrayscale ? 'url(#grayscaleFilter)' : ''"
                d="m782.29,193.25l-130.4,79.15c23.98,38.35,37.84,83.67,37.84,132.23,0,44.29-11.54,85.88-31.75,121.95l-14.24-8.43,143.88,85.21c33.97-59.06,53.4-127.54,53.4-200.57,0-76.76-21.47-148.49-58.73-209.54Z" />

            <!-- Diagnosis: 1 of 3 -->
            <path
                class="measurement-cls-20"
                :filter="controlsStore.diagnosisSectionGrayscale ? 'url(#grayscaleFilter)' : ''"
                d="m651.82,272.3l130.41-79.14C712.3,78.64,586.8,1.76,443.22.01l.54,154.83c87.77,1.33,164.55,47.92,208.07,117.46Z" />

            <path
                class="measurement-cls-24"
                d="m651.82,272.3s.04.07.06.11l130.4-79.15s-.04-.06-.05-.09l-130.41,79.14Z" />
            <polygon
                class="measurement-cls-16"
                points="443.75 154.84 443.79 165.68 443.75 154.84 443.75 154.84" />
            <path
                class="measurement-cls-25"
                d="m689.73,404.63c0-48.56-13.87-93.88-37.84-132.23l-114.13,69.27c11.34,17.91,17.91,39.15,17.91,61.92,0,20.21-5.17,39.2-14.26,55.74l-.4-1.3,26.24,84.11,76.49-24,14.24,8.43c20.21-36.07,31.75-77.66,31.75-121.95Z" />

            <!-- Sub Class: 2 of 3 -->
            <path
                class="measurement-cls-27"
                :filter="controlsStore.subTypingSectionGrayscale ? 'url(#grayscaleFilter)' : ''"
                d="m689.73,404.63c0-48.56-13.87-93.88-37.84-132.23l-114.13,69.27c11.34,17.91,17.91,39.15,17.91,61.92,0,20.21-5.17,39.2-14.26,55.74l-.4-1.3,26.24,84.11,76.49-24,14.24,8.43c20.21-36.07,31.75-77.66,31.75-121.95Z" />
            <path
                class="measurement-cls-19"
                d="m537.68,341.56s.05.08.07.12l114.13-69.27s-.04-.07-.06-.11l-114.14,69.26Z" />
            <path
                class="measurement-cls-28"
                d="m537.68,341.56s.05.08.07.12l114.13-69.27s-.04-.07-.06-.11l-114.14,69.26Z" />
            <path
                class="measurement-cls-21"
                d="m443.75,154.84l.04,10.84,63.21,56.25-62.02,69.47,3.06-3.42c37.73,2.67,70.47,23.4,89.64,53.59l114.14-69.26c-43.52-69.54-120.3-116.12-208.07-117.46Z" />

            <!-- Diagnosis: 2 of 3 -->
            <path
                class="measurement-cls-30"
                :filter="controlsStore.diagnosisSectionGrayscale ? 'url(#grayscaleFilter)' : ''"
                d="m443.75,154.84l.04,10.84,63.21,56.25-62.02,69.47,3.06-3.42c37.73,2.67,70.47,23.4,89.64,53.59l114.14-69.26c-43.52-69.54-120.3-116.12-208.07-117.46Z" />
            <path
                class="measurement-cls-22"
                d="m555.67,403.6c0-22.77-6.57-44.01-17.91-61.92l-93.5,56.76,96.75,59.61.4,1.3c9.09-16.54,14.26-35.54,14.26-55.74Z" />
            <path
                class="measurement-cls-26"
                d="m555.67,403.6c0-22.77-6.57-44.01-17.91-61.92l-93.5,56.76,96.75,59.61.4,1.3c9.09-16.54,14.26-35.54,14.26-55.74Z" />

            <!-- Sub Class: 3 of 3 -->
            <path
                class="measurement-cls-17"
                :filter="controlsStore.subTypingSectionGrayscale ? 'url(#grayscaleFilter)' : ''"
                d="m555.67,403.6c0-22.77-6.57-44.01-17.91-61.92l-93.5,56.76,96.75,59.61.4,1.3c9.09-16.54,14.26-35.54,14.26-55.74Z" />
            <path
                class="measurement-cls-23"
                d="m537.68,341.56l-92.51,56.14,92.51-56.14c-19.17-30.19-51.91-50.92-89.64-53.59l-3.06,3.42-1.35,106.66.61.38,93.5-56.76s-.05-.08-.07-.12Z" />
            <path
                class="measurement-cls-29"
                d="m537.68,341.56l-92.51,56.14,92.51-56.14c-19.17-30.19-51.91-50.92-89.64-53.59l-3.06,3.42-1.35,106.66.61.38,93.5-56.76s-.05-.08-.07-.12Z" />

            <!-- Diagnosis: 3 of 3 -->
            <path
                class="measurement-cls-18"
                :filter="controlsStore.diagnosisSectionGrayscale ? 'url(#grayscaleFilter)' : ''"
                d="m537.68,341.56l-92.51,56.14,92.51-56.14c-19.17-30.19-51.91-50.92-89.64-53.59l-3.06,3.42-1.35,106.66.61.38,93.5-56.76s-.05-.08-.07-.12Z" />
            <g>
                <line
                    class="measurement-cls-4"
                    x1="445.17"
                    y1="397.69"
                    x2="447.31"
                    y2="396.4" />
                <line
                    class="measurement-cls-9"
                    x1="451.59"
                    y1="393.8"
                    x2="783.55"
                    y2="192.36" />
                <line
                    class="measurement-cls-4"
                    x1="785.69"
                    y1="191.06"
                    x2="787.83"
                    y2="189.76" />
            </g>
        </g>

        <!-- DIAGNOSIS text -->
        <text
            x="480"
            y="568"
            text-anchor="middle"
            :style="{
                fontSize:
                    $selectedLanguage.value === 'es' ? '11px' :
                    $selectedLanguage.value === 'fr' ? '11px' :
                    $selectedLanguage.value === 'zh' ? '14px' :
                    $selectedLanguage.value === 'uk' ? '12px' :
                    '14px'
            }"
            style="rotate: -32deg; font-family: 'EuclidCircularA-Bold', sans-serif; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; fill: #fff;">
            {{ $t('Diagnosis') }}
        </text>

        <!-- SUB-TYPING text -->
        <text
            x="480"
            y="600"
            text-anchor="middle"
            class="block-title"
            :style="{
                fontSize:
                    $selectedLanguage.value === 'es' ? '11px' :
                    $selectedLanguage.value === 'fr' ? '11px' :
                    $selectedLanguage.value === 'zh' ? '14px' :
                    $selectedLanguage.value === 'uk' ? '12px' :
                    '14px'
            }"
            style="rotate: -32deg; letter-spacing: 1.5px;">
            {{ $t('Sub-Typing') }}
        </text>

        <BlinkRateAndCompletenessIcon />
        <ComfortTimeIcon />
        <FluoresceinStainingIcon />
        <LissamineGreenStainingIcon />
        <MeibographyAndInterferometryIcon />
        <EyelidsMeibomianGlandExpressionIcon />
        <NonInvasiveBreakupTimeIcon />
        <OsmolarityIcon />
        <AqueousTearMeniscusHeightIcon />
        <Osdi6Icon />
        <OcularSurfaceMisalignmentIcon />
        <EyelidsAnteriorBlepharitisExamIcon />

        <polyline
            class="measurement-cls-1"
            points="518.9 267.4 521.4 267.4 521.4 269.9 518.9 269.9" />

        <!-- MEASUREMENT text: live textPath, same curve/position for every language -->
        <g>
            <path
                id="measurement-title-arc"
                d="M 682 50 A 462.7 462.7 0 0 1 878 372"
                fill="none"
                stroke="none" />
            <text
                font-family="'EuclidCircularA-Bold', sans-serif"
                font-weight="700"
                font-size="46"
                letter-spacing="3"
                text-anchor="middle"
                style="text-transform: uppercase"
                class="measurement-cls-14">
                <textPath
                    href="#measurement-title-arc"
                    startOffset="50%">
                    {{ $t('_measurement_title') }}
                </textPath>
            </text>
        </g>
    </svg>
</template>

<style lang="postcss">
.measurement-cls-1,
.measurement-cls-2,
.measurement-cls-3,
.measurement-cls-4,
.measurement-cls-5,
.measurement-cls-6,
.measurement-cls-7,
.measurement-cls-8,
.measurement-cls-9,
.measurement-cls-10 {
    fill: none;
}

.measurement-cls-2 {
    stroke: #241f20;
    stroke-width: 1.5px;
}

.svg-active {
    .measurement-cls-2 {
        stroke: #fff;
    }
}

.measurement-cls-2,
.measurement-cls-3,
.measurement-cls-4,
.measurement-cls-5,
.measurement-cls-6,
.measurement-cls-9,
.measurement-cls-10 {
    stroke-linecap: round;
}

.measurement-cls-2,
.measurement-cls-11,
.measurement-cls-7,
.measurement-cls-8 {
    stroke-miterlimit: 10;
}

.measurement-cls-3 {
    stroke-width: 0.75px;
}

.measurement-cls-3,
.measurement-cls-4,
.measurement-cls-5,
.measurement-cls-6,
.measurement-cls-9,
.measurement-cls-10 {
    stroke-linejoin: round;
}

.measurement-cls-3,
.measurement-cls-11,
.measurement-cls-5,
.measurement-cls-6,
.measurement-cls-7,
.measurement-cls-8,
.measurement-cls-10 {
    stroke: #000;
}

.svg-active {
    .measurement-cls-3,
    .measurement-cls-11,
    .measurement-cls-5,
    .measurement-cls-6,
    .measurement-cls-7,
    .measurement-cls-8,
    .measurement-cls-10 {
        stroke: #fff;
    }
}

.measurement-cls-12 {
    fill: #010101;
}

.svg-active {
    .measurement-cls-12 {
        fill: #fff;
    }
}

.measurement-cls-13 {
    fill: #fff;
}

.svg-active {
    .measurement-cls-13 {
        fill: #fff;
    }
}

.measurement-cls-14 {
    fill: #a6a8ac;
}

.svg-active {
    .measurement-cls-14 {
        fill: #fff;
    }
}

.measurement-cls-15 {
    fill: url(#New_Gradient_Swatch_3);
}

.measurement-cls-16 {
    fill: url(#New_Gradient_Swatch_1);
}

.measurement-cls-17 {
    fill: url(#New_Gradient_Swatch_4);
}

.measurement-cls-4,
.measurement-cls-9 {
    stroke: #fff;
    stroke-width: 2px;
}

.measurement-cls-11 {
    stroke-width: 0.5px;
}

.measurement-cls-5,
.measurement-cls-6 {
    stroke-width: 0.25px;
}

.measurement-cls-6 {
    stroke-dasharray: 0 0 2.02 2.02;
}

.measurement-cls-7 {
    stroke-width: 4px;
}

.measurement-cls-18 {
    fill: url(#New_Gradient_Swatch_4-2);
}

.measurement-cls-19 {
    fill: url(#New_Gradient_Swatch_3-5);
}

.measurement-cls-20 {
    fill: url(#New_Gradient_Swatch_3-2);
}

.measurement-cls-21 {
    fill: url(#New_Gradient_Swatch_3-6);
}

.measurement-cls-22 {
    fill: url(#New_Gradient_Swatch_3-7);
}

.measurement-cls-23 {
    fill: url(#New_Gradient_Swatch_3-8);
}

.measurement-cls-24 {
    fill: url(#New_Gradient_Swatch_3-3);
}

.measurement-cls-25 {
    fill: url(#New_Gradient_Swatch_3-4);
}

.measurement-cls-26 {
    fill: url(#New_Gradient_Swatch_1-5);
}

.measurement-cls-27 {
    fill: url(#New_Gradient_Swatch_1-2);
}

.measurement-cls-28 {
    fill: url(#New_Gradient_Swatch_1-3);
}

.measurement-cls-29 {
    fill: url(#New_Gradient_Swatch_1-6);
}

.measurement-cls-30 {
    fill: url(#New_Gradient_Swatch_1-4);
}

.measurement-cls-9 {
    stroke-dasharray: 0 0 5.01 5.01;
}

.measurement-cls-31 {
    fill-rule: evenodd;
}

.measurement-cls-10 {
    stroke-width: 3px;
}

.fill-grey {
    fill: #a5a7ab;
}
</style>
