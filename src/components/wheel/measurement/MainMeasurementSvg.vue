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

import MeasurementTextFr from '@/assets/svg/fr/measurement-text.svg';
import MeasurementTextZh from '@/assets/svg/zh/measurement-text.svg';

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
                    '14px'
            }"
            style="rotate: -32deg; font-family: 'EuclidCircularA-Bold', sans-serif; letter-spacing: 1.5px; text-transform: uppercase; fill: #fff;">
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

        <!-- MEASUREMENT text -->
        <g v-if="$selectedLanguage.value === 'en'">
            <path
                class="measurement-cls-14"
                d="m683.36,36.59l-12.44,17.87-6.49-4.51,20.17-28.97,5.92,4.12.37,18.79,17.75-6.18,5.92,4.12-20.17,28.97-6.53-4.54,12.44-17.87-16.6,5.83-.34-17.62Z" />
            <path
                class="measurement-cls-14"
                d="m725.21,50.5l17.07,14.46-4.88,5.76-11.04-9.35-4.08,4.82,8.76,7.42-4.88,5.76-8.76-7.42-4.08,4.82,11.04,9.35-4.88,5.76-17.07-14.46,22.82-26.93Z" />
            <path
                class="measurement-cls-14"
                d="m759.2,81.1l5.04,5.08-14.42,35.59-5.81-5.86,3.09-7.47-10.29-10.38-7.5,3.03-5.81-5.86,35.71-14.12Zm-9.26,20.46l4.44-10.63-10.67,4.35,6.23,6.28Z" />
            <path
                class="measurement-cls-14"
                d="m760.56,117.1l5.07,6.06c-1.97,2.3-1.67,5.22.31,7.58,1.69,2.02,3.81,2.77,5.34,1.5,1.26-1.05,1.45-2.84-.03-6l-1.52-3.21c-2.46-5.27-2.2-10.54,2-14.11,5.08-4.31,11.33-3.19,16.02,2.41,4.94,5.91,3.73,13.21-.3,16.84l-5.04-6.02c1.62-2.4.95-4.68-.27-6.13-1.47-1.75-3.41-2.53-4.89-1.35-1.52,1.21-1.38,3.16-.16,5.7l1.78,3.76c2.56,5.38,1.95,10.55-2.28,14.09-4.61,3.86-11.39,3.04-16.27-2.79-5.61-6.71-4.12-14.31.22-18.33Z" />
            <path
                class="measurement-cls-14"
                d="m785.34,143.14l17.46-12.24,4.54,6.47-17.54,12.3c-3.46,2.43-4.04,6.11-1.78,9.32,2.25,3.22,5.91,3.93,9.37,1.5l17.54-12.3,4.54,6.47-17.46,12.24c-7.2,5.05-15.41,3.4-20.26-3.52-4.88-6.96-3.61-15.2,3.59-20.25Z" />
            <path
                class="measurement-cls-14"
                d="m826.48,165.82l6.94,12.07c3.32,5.77,1.32,11.86-3.77,14.78-3.96,2.28-7.72,1.63-11.33-1.45l-7.27,18.57-4.73-8.23,6.78-17.43-.64-1.12-12.63,7.26-3.94-6.85,30.6-17.6Zm-5.68,18.24c1.17,2.03,3.17,2.82,4.94,1.81,1.85-1.07,2.09-3.15.92-5.18l-2.53-4.4-5.86,3.37,2.53,4.4Z" />
            <path
                class="measurement-cls-14"
                d="m845.28,199.79l9.53,20.23-6.83,3.22-6.17-13.08-5.71,2.69,4.89,10.39-6.83,3.22-4.89-10.39-5.71,2.69,6.17,13.08-6.83,3.22-9.53-20.23,31.93-15.04Z" />
            <path
                class="measurement-cls-14"
                d="m849.76,243.32l-20.49,7.37-2.67-7.44,33.22-11.94,2.44,6.78-10.58,15.53,18.05,5.24,2.44,6.78-33.22,11.94-2.69-7.49,20.49-7.37-16.91-4.86,9.93-14.56Z" />
            <path
                class="measurement-cls-14"
                d="m875.82,278.88l5.53,21.67-7.32,1.87-3.58-14.01-6.12,1.56,2.84,11.12-7.32,1.87-2.84-11.12-6.12,1.56,3.58,14.01-7.32,1.87-5.53-21.67,34.19-8.73Z" />
            <path
                class="measurement-cls-14"
                d="m853.2,342.81l18.78-20.48-21.54,3.5-1.27-7.8,34.84-5.66,1.09,6.72-18.74,20.42,21.49-3.49,1.28,7.85-34.84,5.66-1.09-6.72Z" />
            <path
                class="measurement-cls-14"
                d="m883.38,364.3l-.65-8.97,7.54-.54,1.88,25.98-7.54.54-.66-9.07-27.67,2-.57-7.93,27.67-2Z" />
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'es'"
            style="transform: translate(682px, 31px)"
            class="fill-grey"
            id="measurement-text-es">
            <path
                d="M0,28.27L21.48,0l17.6,13.37-4.17,5.5-11.83-8.98-4.42,5.81,9.43,7.17-4.17,5.49-9.44-7.17-4.54,5.97,11.83,8.98-4.17,5.49L0,28.27Z" />
            <path d="M33.09,54.96l12.94-36.16,5.82,5.26-9.08,25.03,23.88-11.65,5.93,5.36-34.71,16.48-4.78-4.33Z" />
            <path
                d="M48.43,68.77l36.41-12.99,4.4,4.72-15.52,35.42-5.18-5.56,3.58-8.04-10.32-11.09-8.25,3.03-5.11-5.49ZM80.03,64.63l-11.75,4.25,6.64,7.14,5.11-11.39Z" />
            <path d="M78.11,101.64l27.94-21.9,4.47,5.71-22.51,17.64,9.38,11.96-5.43,4.26-13.85-17.67Z" />
            <path
                d="M103.48,137.2c-2.37-3.59-3.18-7.23-2.42-10.92.75-3.69,2.97-6.76,6.64-9.18l17.94-11.85,4,6.05-18.02,11.91c-1.95,1.29-3.12,2.84-3.51,4.66-.4,1.82.01,3.65,1.23,5.48s2.73,2.93,4.56,3.28c1.83.35,3.72-.12,5.66-1.41l18.02-11.91,4,6.05-17.94,11.86c-3.64,2.41-7.33,3.22-11.06,2.45-3.73-.77-6.76-2.93-9.09-6.46Z" />
            <path
                d="M114.92,153.54l38.51-3.31,3.05,5.68-24.02,30.32-3.6-6.7,5.5-6.87-7.17-13.35-8.75.84-3.55-6.61ZM146.53,157.56l-12.45,1.12,4.61,8.59,7.84-9.71Z" />
            <path
                d="M140.64,206.88c-2.07-4.92-2.16-9.69-.27-14.31,1.88-4.63,5.21-7.94,9.97-9.95,4.76-2,9.46-2.06,14.08-.18,4.63,1.89,7.97,5.29,10.04,10.2,1.56,3.72,1.89,7.51.97,11.39-.92,3.88-2.92,7.01-6,9.39l-3.04-7.24c1.33-1.32,2.13-2.98,2.4-5,.27-2.01.02-3.96-.77-5.83-1.29-3.07-3.35-5.16-6.16-6.25-2.81-1.09-5.71-1.02-8.69.24-2.98,1.25-5.06,3.27-6.24,6.05-1.18,2.78-1.13,5.7.17,8.77.79,1.87,2,3.42,3.63,4.63,1.63,1.21,3.38,1.8,5.25,1.78l3.04,7.24c-3.86.54-7.5-.22-10.91-2.27-3.42-2.05-5.9-4.94-7.47-8.66Z" />
            <path d="M150.44,230.76l33.63-11.37,2.32,6.87-33.63,11.37-2.32-6.87Z" />
            <path
                d="M168.33,275.42c-4.36-2.58-7.18-6.32-8.44-11.23-1.26-4.91-.6-9.54,1.97-13.91,2.58-4.36,6.32-7.17,11.23-8.44,4.91-1.26,9.54-.6,13.91,1.97,4.36,2.58,7.17,6.32,8.44,11.23,1.26,4.91.6,9.54-1.97,13.9-2.58,4.36-6.32,7.17-11.23,8.44-4.91,1.26-9.54.6-13.9-1.97ZM167.94,254.04c-1.61,2.63-2.03,5.44-1.27,8.41.76,2.97,2.49,5.22,5.17,6.75,2.68,1.53,5.54,1.91,8.58,1.12,3.03-.78,5.36-2.49,6.97-5.12,1.61-2.63,2.03-5.44,1.27-8.41-.77-2.97-2.49-5.22-5.17-6.75-2.68-1.53-5.54-1.9-8.58-1.12-3.03.78-5.36,2.49-6.97,5.12ZM197.21,252.32l8.5,1.53,1.92,7.46-9.13-4-1.28-4.99Z" />
            <path
                d="M171.38,321.93l-.93-6.18,20.2-21.43-22.89,3.43-1.07-7.17,35.11-5.26.93,6.18-20.2,21.43,22.89-3.43,1.07,7.17-35.11,5.26Z" />
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'fr'"
            style="transform: translate(682px, 31px)">
            <MeasurementTextFr :viewBox="null" />
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'zh'"
            style="transform: translate(770px, 125px)">
            <MeasurementTextZh :viewBox="null" />
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
