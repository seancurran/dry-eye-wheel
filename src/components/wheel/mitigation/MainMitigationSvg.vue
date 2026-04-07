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

import MitigationTextFr from '@/assets/svg/fr/mitigation-text.svg';
import MitigationTextZh from '@/assets/svg/zh/mitigation-text.svg';
import MitigationTextAr from '@/assets/svg/ar/mitigation-text.svg';

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

        <!-- MITIGATION text -->
        <g v-if="$selectedLanguage.value === 'en'">
            <path
                class="mitigation-cls-3"
                d="m15.29,280.66l20.75,6.62-2.4,7.53L0,284.08l2.19-6.87,17.85-5.89-11.14-15.14,2.19-6.87,33.63,10.73-2.42,7.58-20.75-6.62,10.46,14.14-16.74,5.51Z" />
            <path
                class="mitigation-cls-3"
                d="m16.18,237.01l2.99-7.32,32.67,13.35-2.99,7.32-32.67-13.35Z" />
            <path
                class="mitigation-cls-3"
                d="m33.73,215.49l-3.89,8.11-6.81-3.27,11.28-23.48,6.81,3.27-3.94,8.2,25.01,12.01-3.44,7.17-25.01-12.01Z" />
            <path
                class="mitigation-cls-3"
                d="m39.31,187.64l3.92-6.86,30.64,17.53-3.92,6.86-30.64-17.52Z" />
            <path
                class="mitigation-cls-3"
                d="m63.15,180.85c-8.57-5.61-11.01-16.48-5.1-25.5,3.92-5.99,11.23-9.52,18.33-7.84l-4.98,7.61c-2.8.19-5.39,2.06-6.94,4.43-3.54,5.41-1.89,11.42,3.06,14.66,4.95,3.24,11.12,2.35,14.71-3.14,2.89-4.41,2.34-8.39-.77-11.44l-5.55,8.48-6.2-4.06,10.05-15.34c13.47,6.74,14.68,17.69,8.88,26.55-5.96,9.11-16.91,11.21-25.47,5.6Z" />
            <path
                class="mitigation-cls-3"
                d="m81.61,123.6l4.48-5.59,37,10.29-5.16,6.44-7.78-2.22-9.15,11.4,3.86,7.11-5.16,6.44-18.08-33.88Zm21.38,6.88l-11.07-3.2,5.53,10.11,5.54-6.9Z" />
            <path
                class="mitigation-cls-3"
                d="m109.55,102.5l-6.16,6.56-5.51-5.17,17.83-18.99,5.51,5.17-6.23,6.63,20.22,18.99-5.44,5.8-20.22-18.99Z" />
            <path
                class="mitigation-cls-3"
                d="m123.12,77.87l5.75-5.42,24.22,25.67-5.75,5.42-24.22-25.67Z" />
            <path
                class="mitigation-cls-3"
                d="m148.04,78.39c-6.33-7.8-5.17-19.3,2.67-25.66,7.8-6.33,19.33-5.13,25.66,2.67,6.33,7.8,5.12,19.33-2.67,25.66-7.83,6.36-19.33,5.13-25.66-2.67Zm22.12-17.95c-3.6-4.44-10.18-5.37-14.62-1.77-4.48,3.63-4.92,10.27-1.32,14.7,3.6,4.44,10.18,5.37,14.66,1.74,4.44-3.6,4.88-10.23,1.28-14.67Z" />
            <path
                class="mitigation-cls-3"
                d="m215.33,50.54l-26.34-8.85,11.94,18.27-6.62,4.33-19.32-29.54,5.7-3.73,26.27,8.84-11.92-18.23,6.66-4.35,19.32,29.54-5.7,3.73Z" />
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'es'"
            style="transform: translate(-3px, 15px)"
            id="mitigation-text-es"
            class="fill-grey">
            <g>
                <path
                    d="M0,289.74l1.56-6.41,18.14-7.46-12.66-14.98,1.57-6.41,34.48,8.43-1.72,7.04-22.44-5.48,11.94,14.14-17.11,7.04,22.44,5.48-1.72,7.04L0,289.74Z" />
                <path d="M46.75,252.27l-33.71-11.14,2.27-6.88,33.71,11.14-2.28,6.88Z" />
                <path
                    d="M55.16,228.55l-26.56-10.6-3.5,8.78-6.41-2.56,9.75-24.43,6.41,2.56-3.54,8.87,26.56,10.6-2.71,6.78Z" />
                <path d="M65.06,205.21l-32.12-15.13,3.09-6.56,32.11,15.13-3.09,6.56Z" />
                <path
                    d="M81.61,174.26c-2.64,4.67-6.37,7.68-11.2,9.04-4.82,1.35-9.48.76-13.98-1.79-4.5-2.54-7.42-6.22-8.76-11.03-1.34-4.81-.69-9.54,1.93-14.19,1.84-3.25,4.41-5.73,7.73-7.43,3.32-1.7,6.71-2.27,10.17-1.69l-4.08,7.23c-1.53.13-2.99.68-4.37,1.64-1.38.96-2.5,2.19-3.36,3.7-1.64,2.9-2.03,5.8-1.18,8.69.85,2.89,2.69,5.14,5.5,6.73,2.82,1.59,5.68,2.01,8.6,1.24,2.92-.76,5.22-2.62,6.89-5.58,1.39-2.47,1.9-4.79,1.51-6.99-.39-2.19-1.59-4.08-3.59-5.68l-5.34,9.45-5.92-3.35,9.03-15.98c3.27,1.39,5.95,3.12,8.04,5.18,2.09,2.06,3.49,4.25,4.19,6.56.7,2.31.9,4.69.6,7.12-.3,2.43-1.11,4.81-2.42,7.13Z" />
                <path
                    d="M91.88,155.22l-20.3-32.9,3.7-5.28,37.88,7.8-4.36,6.23-8.61-1.82-8.69,12.41,4.68,7.43-4.3,6.14ZM81.25,125.18l6.61,10.61,5.59-7.99-12.2-2.63Z" />
                <path
                    d="M127.92,108.26c-3.46,4.06-7.68,6.29-12.66,6.69-4.98.4-9.44-1.08-13.37-4.43-3.93-3.35-6.1-7.52-6.5-12.5-.4-4.98,1.13-9.5,4.59-13.56,2.62-3.07,5.86-5.07,9.73-5.99,3.88-.93,7.57-.55,11.09,1.13l-5.09,5.98c-1.77-.59-3.62-.55-5.54.11-1.92.66-3.54,1.77-4.86,3.32-2.16,2.54-3.1,5.31-2.81,8.31s1.66,5.55,4.12,7.65c2.46,2.1,5.2,3.05,8.21,2.85,3.01-.19,5.6-1.56,7.76-4.1,1.32-1.55,2.15-3.32,2.5-5.33.35-2,.09-3.83-.78-5.49l5.09-5.98c2.22,3.2,3.18,6.79,2.88,10.76-.3,3.97-1.75,7.49-4.37,10.56Z" />
                <path d="M144.84,88.76l-25.29-24.91,5.09-5.17,25.29,24.91-5.09,5.17Z" />
                <path
                    d="M176.65,52.67c-.33,5.06-2.41,9.25-6.22,12.59-3.81,3.34-8.25,4.84-13.3,4.5s-9.25-2.41-12.59-6.22c-3.34-3.81-4.84-8.25-4.5-13.3.34-5.06,2.41-9.25,6.22-12.59,3.81-3.34,8.25-4.84,13.3-4.5,5.05.34,9.25,2.41,12.59,6.22,3.34,3.81,4.84,8.25,4.5,13.3ZM143.02,37.29l-2.46-8.28,5.79-5.07.54,9.96-3.88,3.39ZM157.74,62.65c3.08.25,5.77-.63,8.08-2.65,2.31-2.02,3.54-4.57,3.7-7.66.16-3.08-.8-5.8-2.86-8.16-2.06-2.36-4.63-3.66-7.71-3.91s-5.77.63-8.08,2.65c-2.31,2.02-3.54,4.57-3.7,7.66-.16,3.08.79,5.8,2.86,8.16s4.63,3.66,7.71,3.91Z" />
                <path
                    d="M216.8,28.97l-5.1,3.61-28.23-8.37,13.38,18.89-5.91,4.19-20.52-28.97,5.1-3.61,28.23,8.37-13.38-18.89,5.92-4.19,20.52,28.97Z" />
            </g>
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'fr'"
            style="transform: translate(-10px, 18px)">
            <MitigationTextFr :viewBox="null" />
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'zh'"
            style="transform: translate(22px, 118px)">
            <MitigationTextZh :viewBox="null" />
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'ar'"
            style="transform: translate(-65px, 28px) rotate(-6deg)">
            <MitigationTextAr :viewBox="null" />
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
                    '14px'
            }"
            style="rotate: 31deg; font-family: 'EuclidCircularA-Bold', sans-serif; letter-spacing: 1.5px; text-transform: uppercase; fill: #fff;">
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
                    '14px'
            }"
            style="rotate: 31deg; font-family: 'EuclidCircularA-Bold', sans-serif; text-transform: uppercase; letter-spacing: 1.5px; fill: #fff;">
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
