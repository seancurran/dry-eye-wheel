<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
import EnvironmentAdviceIcon from '@/components/wheel/mitigation/icons/EnvironmentAdviceIcon.vue';
import ContactLensIcon from '@/components/wheel/mitigation/icons/ContactLensIcon.vue';
import DigitalEyeStrainIcon from '@/components/wheel/mitigation/icons/DigitalEyeStrainIcon.vue';
import MedicationReviewIcon from '@/components/wheel/mitigation/icons/MedicationReviewIcon.vue';
import HormonesIcon from '@/components/wheel/mitigation/icons/HormonesIcon.vue';
import SleepIcon from '@/components/wheel/mitigation/icons/SleepIcon.vue';
import ProphylaxisIcon from '@/components/wheel/mitigation/icons/ProphylaxisIcon.vue';
import SymptomCheckIcon from '@/components/wheel/mitigation/icons/SymptomCheckIcon.vue';
import DifferentialDiagnosisIcon from '@/components/wheel/mitigation/icons/DifferentialDiagnosisIcon.vue';
import PreviousEyeSurgeryIcon from '@/components/wheel/mitigation/icons/PreviousEyeSurgeryIcon.vue';
import ProactiveManagementOfOcularSurfaceDiseaseIcon from '@/components/wheel/mitigation/icons/ProactiveManagementOfOcularSurfaceDiseaseIcon.vue';
import CornealSensitivityAssessmentIcon from '@/components/wheel/mitigation/icons/CornealSensitivityAssessmentIcon.vue';

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
                x1="-48.13"
                y1="493.79"
                x2="503.66"
                y2="-81.75"
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
                x1="150.85"
                y1="489.85"
                x2="475.58"
                y2="116.27"
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
                id="New_Gradient_Swatch_3-2"
                data-name="New Gradient Swatch 3"
                x1="41.63"
                y1="579.85"
                x2="593.42"
                y2="4.3"
                xlink:href="#New_Gradient_Swatch_3" />
            <linearGradient
                id="New_Gradient_Swatch_1-2"
                data-name="New Gradient Swatch 1"
                x1="149.84"
                y1="488.97"
                x2="474.57"
                y2="115.39"
                xlink:href="#New_Gradient_Swatch_1" />
            <linearGradient
                id="New_Gradient_Swatch_4"
                data-name="New Gradient Swatch 4"
                x1="295.47"
                y1="434.5"
                x2="455.2"
                y2="269.49"
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
                id="New_Gradient_Swatch_3-3"
                data-name="New Gradient Swatch 3"
                x1="116.61"
                y1="651.73"
                x2="668.4"
                y2="76.18"
                xlink:href="#New_Gradient_Swatch_3" />
            <linearGradient
                id="New_Gradient_Swatch_1-3"
                data-name="New Gradient Swatch 1"
                x1="226.29"
                y1="555.43"
                x2="551.02"
                y2="181.85"
                xlink:href="#New_Gradient_Swatch_1" />
            <linearGradient
                id="New_Gradient_Swatch_4-2"
                data-name="New Gradient Swatch 4"
                x1="310.3"
                y1="448.85"
                x2="470.02"
                y2="283.84"
                xlink:href="#New_Gradient_Swatch_4" />
            <linearGradient
                id="New_Gradient_Swatch_3-4"
                data-name="New Gradient Swatch 3"
                x1="-1.96"
                y1="538.05"
                x2="549.82"
                y2="-37.49"
                xlink:href="#New_Gradient_Swatch_3" />
            <linearGradient
                id="New_Gradient_Swatch_1-4"
                data-name="New Gradient Swatch 1"
                x1="222.8"
                y1="552.4"
                x2="547.54"
                y2="178.82"
                xlink:href="#New_Gradient_Swatch_1" />
            <linearGradient
                id="New_Gradient_Swatch_3-5"
                data-name="New Gradient Swatch 3"
                x1="31.79"
                y1="570.42"
                x2="583.58"
                y2="-5.13"
                xlink:href="#New_Gradient_Swatch_3" />
            <linearGradient
                id="New_Gradient_Swatch_1-5"
                data-name="New Gradient Swatch 1"
                x1="136.43"
                y1="477.31"
                x2="461.16"
                y2="103.73"
                xlink:href="#New_Gradient_Swatch_1" />
            <linearGradient
                id="New_Gradient_Swatch_3-6"
                data-name="New Gradient Swatch 3"
                x1="61.93"
                y1="599.3"
                x2="613.71"
                y2="23.76"
                xlink:href="#New_Gradient_Swatch_3" />
            <linearGradient
                id="New_Gradient_Swatch_1-6"
                data-name="New Gradient Swatch 1"
                x1="166.29"
                y1="503.27"
                x2="491.03"
                y2="129.7"
                xlink:href="#New_Gradient_Swatch_1" />
            <linearGradient
                id="New_Gradient_Swatch_3-7"
                data-name="New Gradient Swatch 3"
                x1="117.33"
                y1="652.42"
                x2="669.12"
                y2="76.88"
                xlink:href="#New_Gradient_Swatch_3" />
            <linearGradient
                id="New_Gradient_Swatch_1-7"
                data-name="New Gradient Swatch 1"
                x1="226.69"
                y1="555.78"
                x2="551.43"
                y2="182.2"
                xlink:href="#New_Gradient_Swatch_1" />
            <linearGradient
                id="New_Gradient_Swatch_4-3"
                data-name="New Gradient Swatch 4"
                x1="311.05"
                y1="449.58"
                x2="470.78"
                y2="284.57"
                xlink:href="#New_Gradient_Swatch_4" />
            <linearGradient
                id="New_Gradient_Swatch_3-8"
                data-name="New Gradient Swatch 3"
                x1="117.33"
                y1="652.42"
                x2="669.12"
                y2="76.87"
                xlink:href="#New_Gradient_Swatch_3" />
            <linearGradient
                id="New_Gradient_Swatch_1-8"
                data-name="New Gradient Swatch 1"
                x1="226.69"
                y1="555.78"
                x2="551.43"
                y2="182.2"
                xlink:href="#New_Gradient_Swatch_1" />
            <linearGradient
                id="New_Gradient_Swatch_4-4"
                data-name="New Gradient Swatch 4"
                x1="311.05"
                y1="449.58"
                x2="470.78"
                y2="284.57"
                xlink:href="#New_Gradient_Swatch_4" />
            <linearGradient
                id="New_Gradient_Swatch_4-5"
                data-name="New Gradient Swatch 4"
                x1="1738.25"
                y1="-3236.23"
                x2="1751.47"
                y2="-3236.23"
                gradientTransform="translate(1484.68 2550.41) rotate(-58.75) scale(.69 .67)"
                xlink:href="#New_Gradient_Swatch_4" />
            <linearGradient
                id="New_Gradient_Swatch_4-6"
                data-name="New Gradient Swatch 4"
                x1="10144.69"
                y1="-5207.04"
                x2="10170.04"
                y2="-5207.04"
                gradientTransform="translate(3516.51 2033.52) rotate(-124.46) scale(.31 .34)"
                xlink:href="#New_Gradient_Swatch_4" />
            <linearGradient
                id="New_Gradient_Swatch_4-7"
                data-name="New Gradient Swatch 4"
                x1="12407.32"
                y1="7062.01"
                x2="12432.67"
                y2="7062.01"
                gradientTransform="translate(4042.15 892.7) rotate(145.71) scale(.23 .36)"
                xlink:href="#New_Gradient_Swatch_4" />
        </defs>
        <g>
            <!-- Triaging: 1 of 3 -->
            <path
                class="mitigation-cls-11"
                :filter="controlsStore.triagingSectionGrayscale ? 'url(#grayscaleFilter)' : ''"
                d="m435.75,154.84L435.22,0C292.51,1.04,167.45,76.29,96.71,189.07l132.34,81.46c43.66-68.49,119.78-114.28,206.7-115.69Z" />

            <polygon
                class="mitigation-cls-12"
                points="435.75 154.84 435.75 154.84 435.8 169.28 435.75 154.84" />
            <path
                class="mitigation-cls-19"
                d="m229.06,270.53l113.5,69.86c20.31-31.16,55.2-51.96,95-52.7l58.14-65.12-59.89-53.3-.05-14.43c-86.91,1.41-163.03,47.2-206.7,115.69Z" />

            <!-- Triaging: 2 of 3 -->
            <path
                :class="{ grayscale: controlsStore.triagingSectionGrayscale }"
                class="mitigation-cls-27"
                :filter="controlsStore.triagingSectionGrayscale ? 'url(#grayscaleFilter)' : ''"
                d="m229.06,270.53l113.5,69.86c20.31-31.16,55.2-51.96,95-52.7l58.14-65.12-59.89-53.3-.05-14.43c-86.91,1.41-163.03,47.2-206.7,115.69Z" />
            <polygon
                class="mitigation-cls-13"
                points="437.56 287.7 437.56 287.7 437.02 288.3 437.56 287.7" />
            <path
                class="mitigation-cls-23"
                d="m342.55,340.39l92.98,57.23.11-.07,1.38-109.25.53-.6c-39.8.74-74.69,21.53-95,52.7Z" />
            <path
                class="mitigation-cls-28"
                d="m342.55,340.39l92.98,57.23.11-.07,1.38-109.25.53-.6c-39.8.74-74.69,21.53-95,52.7Z" />

            <!-- Triaging: 3 of 3 -->
            <path
                class="mitigation-cls-16"
                :filter="controlsStore.triagingSectionGrayscale ? 'url(#grayscaleFilter)' : ''"
                d="m342.55,340.39l92.98,57.23.11-.07,1.38-109.25.53-.6c-39.8.74-74.69,21.53-95,52.7Z" />

            <!-- Risk Factors: 1 of 3 -->
            <path
                class="mitigation-cls-24"
                :filter="controlsStore.riskFactorsSectionGrayscale ? 'url(#grayscaleFilter)' : ''"
                d="m108.32,634l122.44-92.64c-25.74-39.29-40.72-86.26-40.72-136.73s14.3-95.31,38.98-134.05l-132.34-81.42,132.34,81.42s.02-.04.04-.06l-132.34-81.46c-38.85,61.94-61.32,135.21-61.32,213.72,0,86.03,26.98,165.77,72.93,231.21Z" />
            <polygon
                class="mitigation-cls-30"
                points="230.76 541.36 240.29 534.16 230.76 541.36 230.76 541.36" />
            <path
                class="mitigation-cls-18"
                d="m342.55,340.39l-113.5-69.86s-.02.04-.04.06l113.51,69.83s.01-.02.02-.03Z" />
            <path
                class="mitigation-cls-25"
                d="m342.55,340.39l-113.5-69.86s-.02.04-.04.06l113.51,69.83s.01-.02.02-.03Z" />
            <path
                class="mitigation-cls-20"
                d="m323.81,403.6c0-23.31,6.89-45,18.72-63.18l-113.51-69.83c-24.68,38.73-38.98,84.72-38.98,134.05s14.98,97.44,40.72,136.73l9.52-7.2,9.82-84.12,92.48,10.95-3.84-.45c-9.5-16.82-14.93-36.24-14.93-56.94Z" />

            <!-- Risk Factors: 2 of 3 -->
            <path
                class="mitigation-cls-29"
                :filter="controlsStore.riskFactorsSectionGrayscale ? 'url(#grayscaleFilter)' : ''"
                d="m323.81,403.6c0-23.31,6.89-45,18.72-63.18l-113.51-69.83c-24.68,38.73-38.98,84.72-38.98,134.05s14.98,97.44,40.72,136.73l9.52-7.2,9.82-84.12,92.48,10.95-3.84-.45c-9.5-16.82-14.93-36.24-14.93-56.94Z" />
            <path
                class="mitigation-cls-21"
                d="m323.81,403.6c0,20.69,5.43,40.12,14.93,56.94l3.84.45,92.95-63.36-92.99-57.21c-11.84,18.17-18.72,39.87-18.72,63.18Z" />
            <path
                class="mitigation-cls-31"
                d="m323.81,403.6c0,20.69,5.43,40.12,14.93,56.94l3.84.45,92.95-63.36-92.99-57.21c-11.84,18.17-18.72,39.87-18.72,63.18Z" />

            <!-- Risk Factors: 3 of 3 -->
            <path
                class="mitigation-cls-17"
                :filter="controlsStore.riskFactorsSectionGrayscale ? 'url(#grayscaleFilter)' : ''"
                d="m323.81,403.6c0,20.69,5.43,40.12,14.93,56.94l3.84.45,92.95-63.36-92.99-57.21c-11.84,18.17-18.72,39.87-18.72,63.18Z" />
            <path
                class="mitigation-cls-22"
                d="m342.53,340.42l92.99,57.21h0s-92.98-57.24-92.98-57.24c0,0-.01.02-.02.03Z" />
            <path
                class="mitigation-cls-26"
                d="m342.53,340.42l92.99,57.21h0s-92.98-57.24-92.98-57.24c0,0-.01.02-.02.03Z" />
            <path
                class="mitigation-cls-15"
                d="m342.53,340.42l92.99,57.21h0s-92.98-57.24-92.98-57.24c0,0-.01.02-.02.03Z" />
        </g>

        <!-- Dotted Line -->
        <g>
            <line
                class="mitigation-cls-6"
                x1="442.55"
                y1="401.95"
                x2="440.42"
                y2="400.64" />
            <line
                class="mitigation-cls-4"
                x1="436.2"
                y1="398.05"
                x2="100.92"
                y2="191.78" />
            <line
                class="mitigation-cls-6"
                x1="98.81"
                y1="190.48"
                x2="96.68"
                y2="189.17" />
        </g>

        <!-- MITIGATION text: live textPath, same curve/position for every language -->
        <g>
            <path
                id="mitigation-title-arc"
                d="M 6.3 339.8 A 462.7 462.7 0 0 1 224.3 32.2"
                fill="none"
                stroke="none" />
            <text
                font-family="'EuclidCircularA-Bold', sans-serif"
                font-weight="700"
                font-size="46"
                letter-spacing="3"
                text-anchor="middle"
                style="text-transform: uppercase"
                class="mitigation-cls-3">
                <textPath
                    href="#mitigation-title-arc"
                    startOffset="50%">
                    {{ $t('_mitigation_title') }}
                </textPath>
            </text>
        </g>

        <!-- Risk Factors text -->
        <text
            x="260"
            y="134"
            text-anchor="middle"
            :style="{
                fontSize:
                    $selectedLanguage.value === 'es' ? '11px' :
                    $selectedLanguage.value === 'fr' ? '11px' :
                    $selectedLanguage.value === 'zh' ? '14px' :
                    $selectedLanguage.value === 'uk' ? '12px' :
                    '14px'
            }"
            style="rotate: 31deg; font-family: 'EuclidCircularA-Bold', sans-serif; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; fill: #fff;">
            {{ $t('Risk Factors') }}
        </text>

        <EnvironmentAdviceIcon />

        <ContactLensIcon />

        <DigitalEyeStrainIcon />

        <MedicationReviewIcon />

        <HormonesIcon />

        <SleepIcon />

        <ProphylaxisIcon />

        <SymptomCheckIcon />

        <DifferentialDiagnosisIcon />

        <PreviousEyeSurgeryIcon />

        <ProactiveManagementOfOcularSurfaceDiseaseIcon />

        <CornealSensitivityAssessmentIcon />

        <!-- TRIAGING text -->
        <text
            x="260"
            y="102"
            text-anchor="middle"
            :style="{
                fontSize:
                    $selectedLanguage.value === 'es' ? '11px' :
                    $selectedLanguage.value === 'fr' ? '11px' :
                    $selectedLanguage.value === 'zh' ? '14px' :
                    $selectedLanguage.value === 'uk' ? '12px' :
                    '14px'
            }"
            style="rotate: 31deg; font-family: 'EuclidCircularA-Bold', sans-serif; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; fill: #fff;">
            {{ $t('Triaging') }}
        </text>
        </svg>
</template>

<style lang="postcss">
.mitigation-cls-1 {
    fill: #010101;
}

.svg-active {
    .mitigation-cls-1 {
        fill: #fff;
    }
}

.mitigation-cls-2 {
    fill: #fff;
}

.mitigation-cls-3 {
    fill: #a6a8ac;
}

.svg-active {
    .mitigation-cls-3 {
        fill: #fff;
    }
}

.mitigation-cls-4 {
    stroke-dasharray: 0 0 4.95 4.95;
}

.mitigation-cls-4,
.mitigation-cls-5,
.mitigation-cls-6,
.mitigation-cls-7,
.mitigation-cls-8,
.mitigation-cls-9 {
    stroke-width: 2px;
}

.mitigation-cls-4,
.mitigation-cls-5,
.mitigation-cls-6,
.mitigation-cls-7,
.mitigation-cls-8,
.mitigation-cls-10 {
    stroke-linecap: round;
}

.mitigation-cls-4,
.mitigation-cls-5,
.mitigation-cls-6,
.mitigation-cls-9 {
    fill: none;
}

.mitigation-cls-4,
.mitigation-cls-5,
.mitigation-cls-6,
.mitigation-cls-10 {
    stroke-linejoin: round;
}

.mitigation-cls-4,
.mitigation-cls-6 {
    stroke: #fff;
}

.mitigation-cls-5,
.mitigation-cls-7,
.mitigation-cls-8,
.mitigation-cls-9,
.mitigation-cls-10 {
    stroke: #000;
}

.svg-active {
    .mitigation-cls-5,
    .mitigation-cls-7,
    .mitigation-cls-8,
    .mitigation-cls-9,
    .mitigation-cls-10 {
        stroke: #fff;
    }
}

.mitigation-cls-11 {
    fill: url(#New_Gradient_Swatch_3);
}

.mitigation-cls-12 {
    fill: url(#New_Gradient_Swatch_1);
}

.mitigation-cls-13 {
    fill: url(#New_Gradient_Swatch_4);
}

.mitigation-cls-7 {
    fill: url(#New_Gradient_Swatch_4-7);
}

.mitigation-cls-7,
.mitigation-cls-8,
.mitigation-cls-9 {
    stroke-miterlimit: 10;
}

.mitigation-cls-8 {
    fill: url(#New_Gradient_Swatch_4-6);
}

.mitigation-cls-14 {
    fill: url(#New_Gradient_Swatch_4-5);
}

.mitigation-cls-15 {
    fill: url(#New_Gradient_Swatch_4-4);
}

.mitigation-cls-16 {
    fill: url(#New_Gradient_Swatch_4-2);
}

.mitigation-cls-17 {
    fill: url(#New_Gradient_Swatch_4-3);
}

.mitigation-cls-18 {
    fill: url(#New_Gradient_Swatch_3-5);
}

.mitigation-cls-19 {
    fill: url(#New_Gradient_Swatch_3-2);
}

.mitigation-cls-20 {
    fill: url(#New_Gradient_Swatch_3-6);
}

.mitigation-cls-21 {
    fill: url(#New_Gradient_Swatch_3-7);
}

.mitigation-cls-22 {
    fill: url(#New_Gradient_Swatch_3-8);
}

.mitigation-cls-23 {
    fill: url(#New_Gradient_Swatch_3-3);
}

.mitigation-cls-24 {
    fill: url(#New_Gradient_Swatch_3-4);
}

.mitigation-cls-25 {
    fill: url(#New_Gradient_Swatch_1-5);
}

.mitigation-cls-26 {
    fill: url(#New_Gradient_Swatch_1-8);
}

.mitigation-cls-27 {
    fill: url(#New_Gradient_Swatch_1-2);
}

.mitigation-cls-28 {
    fill: url(#New_Gradient_Swatch_1-3);
}

.mitigation-cls-29 {
    fill: url(#New_Gradient_Swatch_1-6);
}

.mitigation-cls-30 {
    fill: url(#New_Gradient_Swatch_1-4);
}

.mitigation-cls-31 {
    fill: url(#New_Gradient_Swatch_1-7);
}

.fill-grey {
    fill: #a5a7ab;
}
</style>
