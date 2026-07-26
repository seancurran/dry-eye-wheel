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
            :style="{ rotate: '-38deg', fontFamily: '\'EuclidCircularA-Bold\', sans-serif', fontWeight: '700', fontSize: $selectedLanguage.value === 'ar' ? '15px' : '12px', letterSpacing: '1.5px', textTransform: 'uppercase', fill: '#fff' }">
            {{ $t('Mild') }}
        </text>

        <!-- MODERATE text -->
        <text
            x="-68"
            y="593"
            text-anchor="middle"
            :style="{ rotate: '-37deg', fontFamily: '\'EuclidCircularA-Bold\', sans-serif', fontWeight: '700', fontSize: $selectedLanguage.value === 'ar' ? '15px' : '12px', letterSpacing: '1.5px', textTransform: 'uppercase', fill: '#fff' }">
            {{ $t('Moderate') }}
        </text>

        <!-- SEVERE text -->
        <text
            x="70"
            y="596"
            text-anchor="middle"
            :style="{ rotate: '-35deg', fontFamily: '\'EuclidCircularA-Bold\', sans-serif', fontWeight: '700', fontSize: $selectedLanguage.value === 'ar' ? '15px' : '12px', letterSpacing: '1.5px', textTransform: 'uppercase', fill: '#fff' }">
            {{ $t('Severe') }}
        </text>

        <!-- MANAGEMENT text: live textPath, same curve/position for every language -->
        <g>
            <path
                id="management-title-arc"
                d="M 261.4 823.2 A 446.5 446.5 0 0 0 629.2 818.3"
                fill="none"
                stroke="none" />
            <text
                font-family="'EuclidCircularA-Bold', sans-serif"
                font-weight="700"
                font-size="46"
                letter-spacing="3"
                text-anchor="middle"
                style="text-transform: uppercase"
                class="management-cls-8">
                <textPath
                    href="#management-title-arc"
                    startOffset="50%">
                    {{ $t('_management_title') }}
                </textPath>
            </text>
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
