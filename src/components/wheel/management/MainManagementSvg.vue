<script setup>
// import { useControlsStore } from '@/stores/controlsStore.js';
import AdviceIcon from '@/components/wheel/management/icons/AdviceIcon.vue';
import ArtificialTearsIcon from '@/components/wheel/management/icons/ArtificialTearsIcon.vue';
import BlinkExercisesIcon from '@/components/wheel/management/icons/BlinkExercisesIcon.vue';
import InOfficeLightHeatBasedDevicesIcon from '@/components/wheel/management/icons/InOfficeLightHeatBasedDevicesIcon.vue';
import LidHygieneIcon from '@/components/wheel/management/icons/LidHygieneIcon.vue';
import DietAndDietarySupplementsIcon from '@/components/wheel/management/icons/DietAndDietarySupplementsIcon.vue';
import PharmaceuticalsIcon from '@/components/wheel/management/icons/PharmaceuticalsIcon.vue';
import SurgicalApproachesIcon from '@/components/wheel/management/icons/SurgicalApproachesIcon.vue';
import ComplexTreatmentsIcon from '@/components/wheel/management/icons/ComplexTreatmentsIcon.vue';
import ScleralLensesIcon from '@/components/wheel/management/icons/ScleralLensesIcon.vue';
import WarmCompressIcon from '@/components/wheel/management/icons/WarmCompressIcon.vue';

import ManagementTextFr from '@/assets/svg/fr/management-text.svg';
import ManagementTextZh from '@/assets/svg/zh/management.svg';
import ManagementTextAr from '@/assets/svg/ar/management-text.svg';

// const controlsStore = useControlsStore();
</script>

<template>
    <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="-60 -60 1000 1000">
        <defs>
            <linearGradient
                id="New_Gradient_Swatch_3"
                data-name="New Gradient Swatch 3"
                x1="272.05"
                y1="800.76"
                x2="823.84"
                y2="225.21"
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
                id="New_Gradient_Swatch_1"
                data-name="New Gradient Swatch 1"
                x1="328.96"
                y1="644.68"
                x2="653.7"
                y2="271.1"
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
                id="New_Gradient_Swatch_4"
                data-name="New Gradient Swatch 4"
                x1="387.89"
                y1="523.96"
                x2="547.62"
                y2="358.95"
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
        </defs>
        <g>
            <path
                class="management-cls-9"
                d="m642.72,526.85l-80.73,25.33-27.73-88.9-93.77-57.78-2.27-.03-93.61,63.81-87.49-10.36-9.29,79.56-134.85,102.02c73.29,100.1,191.66,165.1,325.22,165.1,146.58,0,274.88-78.3,345.35-195.36l-140.83-83.4Z" />
            <path
                class="management-cls-10"
                d="m642.72,526.85l-80.73,25.33-27.73-88.9-93.77-57.78-2.27-.03-93.61,63.81-87.49-10.36-9.29,79.56-12.57,9.51c45.19,64.38,119.99,106.47,204.62,106.47,90.84,0,170.34-48.48,214.08-120.97l-11.23-6.65Z" />
            <path
                class="management-cls-11"
                d="m534.26,463.28l-93.77-57.78-2.27-.03-93.61,63.81-.43-.05c20.9,30.37,55.9,50.29,95.56,50.29s75.29-20.27,96.12-51.1l-1.6-5.14Z" />
        </g>

        <AdviceIcon />
        <ArtificialTearsIcon />
        <BlinkExercisesIcon />
        <InOfficeLightHeatBasedDevicesIcon />
        <LidHygieneIcon />
        <DietAndDietarySupplementsIcon />
        <PharmaceuticalsIcon />
        <SurgicalApproachesIcon />
        <ComplexTreatmentsIcon />
        <ScleralLensesIcon />
        <WarmCompressIcon />

        <!-- MILD text -->
        <text
            x="-230"
            y="590"
            text-anchor="middle"
            :style="{ rotate: '-38deg', fontFamily: '\'EuclidCircularA-Bold\', sans-serif', fontSize: $selectedLanguage.value === 'ar' ? '15px' : '12px', letterSpacing: '1.5px', textTransform: 'uppercase', fill: '#fff' }">
            {{ $t('Mild') }}
        </text>

        <!-- MODERATE text -->
        <text
            x="-68"
            y="593"
            text-anchor="middle"
            :style="{ rotate: '-37deg', fontFamily: '\'EuclidCircularA-Bold\', sans-serif', fontSize: $selectedLanguage.value === 'ar' ? '15px' : '12px', letterSpacing: '1.5px', textTransform: 'uppercase', fill: '#fff' }">
            {{ $t('Moderate') }}
        </text>

        <!-- SEVERE text -->
        <text
            x="70"
            y="596"
            text-anchor="middle"
            :style="{ rotate: '-35deg', fontFamily: '\'EuclidCircularA-Bold\', sans-serif', fontSize: $selectedLanguage.value === 'ar' ? '15px' : '12px', letterSpacing: '1.5px', textTransform: 'uppercase', fill: '#fff' }">
            {{ $t('Severe') }}
        </text>

        <!-- MANAGEMENT text -->
        <g v-if="$selectedLanguage.value === 'en'">
            <path
                class="management-cls-8"
                d="m284.33,806.98l-7.48,20.45-7.42-2.72,12.13-33.15,6.77,2.48,5.14,18.08,15.59-10.49,6.77,2.48-12.13,33.15-7.47-2.73,7.48-20.45-14.57,9.86-4.81-16.95Z" />
            <path
                class="management-cls-8"
                d="m336.25,809.62l6.94,1.76,6,37.92-8-2.02-1.21-8-14.17-3.58-4.86,6.46-8-2.02,23.31-30.51Zm2.61,22.3l-1.68-11.4-6.9,9.23,8.58,2.17Z" />
            <path
                class="management-cls-8"
                d="m383.39,854.79l-13.75-24.14-3.25,21.58-7.82-1.18,5.26-34.9,6.73,1.02,13.71,24.09,3.25-21.53,7.86,1.19-5.26,34.9-6.73-1.02Z" />
            <path
                class="management-cls-8"
                d="m416.55,822.41l7.15.37,13.29,36.03-8.24-.42-2.75-7.61-14.6-.75-3.51,7.29-8.24-.42,16.9-34.48Zm6.92,21.36l-3.87-10.85-4.96,10.4,8.84.45Z" />
            <path
                class="management-cls-8"
                d="m442.16,841.17c-.45-10.23,6.95-18.57,17.72-19.04,7.15-.31,14.29,3.55,17.07,10.3l-9.09.4c-1.79-2.16-4.82-3.17-7.65-3.05-6.46.28-10.37,5.13-10.11,11.04.26,5.91,4.59,10.4,11.14,10.11,5.26-.23,8.18-3,8.83-7.31l-10.13.45-.33-7.4,18.33-.8c2.39,14.87-5.79,22.25-16.37,22.71-10.88.48-18.97-7.18-19.42-17.41Z" />
            <path
                class="management-cls-8"
                d="m485.66,820.9l22.18-2.93.99,7.49-14.34,1.89.83,6.26,11.39-1.5.99,7.49-11.39,1.5.83,6.26,14.34-1.9.99,7.49-22.18,2.93-4.62-35Z" />
            <path
                class="management-cls-8"
                d="m526.83,828.24l4.79,21.24-7.71,1.74-7.77-34.43,7.03-1.59,14.11,12.41,7.42-17.27,7.03-1.59,7.77,34.43-7.76,1.75-4.79-21.24-6.9,16.18-13.23-11.64Z" />
            <path
                class="management-cls-8"
                d="m561.25,805.77l21.28-6.9,2.33,7.19-13.76,4.46,1.95,6,10.92-3.54,2.33,7.19-10.92,3.54,1.95,6.01,13.76-4.46,2.33,7.19-21.28,6.9-10.89-33.58Z" />
            <path
                class="management-cls-8"
                d="m627.5,818.74l-24.35-13.38,8.52,20.09-7.28,3.08-13.78-32.5,6.27-2.66,24.29,13.35-8.5-20.05,7.32-3.1,13.78,32.5-6.27,2.66Z" />
            <path
                class="management-cls-8"
                d="m638.09,782.73l-7.95,4.23-3.55-6.67,23-12.24,3.55,6.67-8.03,4.27,13.03,24.5-7.02,3.74-13.03-24.5Z" />
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'es'"
            id="management-text-es"
            style="transform: translate(258px, 788px)"
            class="fill-grey">
            <g>
                <path d="M0,35.94L10.78,10.01,2.21,6.45,4.81.19l23.85,9.91-2.6,6.26-8.66-3.6-10.78,25.93-6.62-2.75Z" />
                <path
                    d="M25.14,45.91l10.82-33.14,12.7,4.14c3.02.98,5.16,2.72,6.44,5.2,1.27,2.48,1.45,5.12.54,7.92-1.42,4.36-4.63,6.49-9.63,6.41l7.1,18.59-8.17-2.67-6.83-17.67-1.63-.53-4.56,13.96-6.77-2.21ZM38.35,28.38l5.13,1.68c1.31.43,2.45.45,3.42.06.97-.39,1.64-1.14,2-2.26.37-1.12.27-2.12-.28-3.01-.55-.89-1.48-1.54-2.79-1.97l-5.13-1.68-2.35,7.19Z" />
                <path
                    d="M57.64,56.34l22.53-30.55,6.17,1.44,6.78,37.37-7.27-1.69-1.5-8.51-14.49-3.37-5.05,6.99-7.17-1.67ZM81.11,35.64l-7.25,9.91,9.33,2.17-2.08-12.08Z" />
                <path
                    d="M105.38,66.42l4.32-27.75-9.17-1.43,1.04-6.69,25.52,3.97-1.04,6.7-9.27-1.44-4.32,27.75-7.08-1.1Z" />
                <path
                    d="M124.84,69.53l17.74-33.56,6.31.5,12.26,35.95-7.44-.59-2.75-8.2-14.83-1.18-3.96,7.66-7.34-.58ZM144.97,45.57l-5.69,10.88,9.54.76-3.85-11.64Z" />
                <path
                    d="M170.37,37.83l6.48-.14,11.68,15.31,10.99-15.81,6.48-.14.77,34.85-7.12.16-.5-22.68-10.38,14.92-11.03-14.44.5,22.68-7.12.16-.77-34.85Z" />
                <path d="M220.04,70.54l-3.45-34.69,7.08-.7,3.45,34.69-7.08.7Z" />
                <path
                    d="M239.97,68.37l-5.48-34.43,21.43-3.41,1.06,6.69-14.4,2.29,1.13,7.08,11.49-1.83,1.07,6.69-11.49,1.83,1.16,7.27,14.4-2.29,1.07,6.69-21.43,3.41Z" />
                <path
                    d="M303.36,55.2l-5.96,1.49-22.84-17.73,5.5,22.06-6.91,1.72-8.44-33.82,5.96-1.48,22.84,17.73-5.5-22.06,6.91-1.72,8.44,33.82Z" />
                <path
                    d="M322.34,49.05l-9.12-26.56-8.78,3.01-2.2-6.41,24.43-8.38,2.2,6.41-8.87,3.04,9.12,26.56-6.78,2.33Z" />
                <path
                    d="M370.99,24.61c-1.81,4.64-4.99,7.96-9.54,9.96-4.55,2-9.15,2.1-13.79.29-4.64-1.8-7.96-4.98-9.96-9.54-2-4.55-2.1-9.15-.29-13.79,1.8-4.64,4.99-7.96,9.54-9.96,4.56-2,9.15-2.1,13.79-.3,4.64,1.81,7.96,4.99,9.96,9.54,2,4.56,2.1,9.15.3,13.79ZM350.33,28.38c2.81,1.14,5.59,1.11,8.35-.1s4.67-3.24,5.72-6.08c1.06-2.84.97-5.67-.27-8.49-1.24-2.82-3.26-4.8-6.07-5.94-2.81-1.14-5.59-1.11-8.35.1-2.76,1.21-4.66,3.24-5.72,6.08-1.06,2.84-.97,5.67.27,8.49,1.24,2.82,3.26,4.8,6.07,5.94Z" />
            </g>
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'fr'"
            style="transform: translate(202px, 772px)">
            <ManagementTextFr :viewBox="null" />
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'zh'"
            style="transform: translate(390px, 815px)">
            <ManagementTextZh :viewBox="null" />
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'ar'"
            style="transform: translate(180px, 735px) rotate(0deg)">
            <ManagementTextAr :viewBox="null" />
        </g>
    </svg>
</template>

<style lang="postcss">
.management-cls-1 {
    stroke: #010101;
}

.svg-active {
    .management-cls-1 {
        stroke: #fff;
    }
}

.management-cls-1,
.management-cls-2,
.management-cls-3,
.management-cls-4 {
    fill: none;
}

.management-cls-1,
.management-cls-2,
.management-cls-4 {
    stroke-linecap: round;
}

.management-cls-1,
.management-cls-4 {
    stroke-linejoin: round;
}

.management-cls-5,
.management-cls-2,
.management-cls-3 {
    stroke: #000;
    stroke-miterlimit: 10;
}

.management-cls-6 {
    fill: #010101;
}

.svg-active {
    .management-cls-6 {
        fill: #fff;
    }
}

.management-cls-7 {
    fill: #fff;
}

.management-cls-8 {
    fill: #a6a8ac;
}

.svg-active {
    .management-cls-8 {
        fill: #fff;
    }
}

.management-cls-9 {
    fill: url(#New_Gradient_Swatch_3);
}

.management-cls-10 {
    fill: url(#New_Gradient_Swatch_1);
}

.management-cls-11 {
    fill: url(#New_Gradient_Swatch_4);
}

.management-cls-2,
.management-cls-3 {
    stroke-width: 2px;
}

.management-cls-4 {
    stroke: #241f20;
    stroke-width: 3px;
}

.svg-active {
    .management-cls-4 {
        stroke: #fff;
    }
}

.fill-grey {
    fill: #a5a7ab;
}

.fill-white {
    fill: #fff;
}
</style>
