<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
import AdviceIcon from '@/components/wheel/management/icons/AdviceIcon.vue';
import ArtificialTearsIcon from '@/components/wheel/management/icons/ArtificialTearsIcon.vue';
import BlinkExercisesIcon from '@/components/wheel/management/icons/BlinkExercisesIcon.vue';
import InOfficeTreatmentsIcon from '@/components/wheel/management/icons/InOfficeTreatmentsIcon.vue';
import LidHygieneIcon from '@/components/wheel/management/icons/LidHygieneIcon.vue';
import DietAndDietarySupplementsIcon from '@/components/wheel/management/icons/DietAndDietarySupplementsIcon.vue';
import PharmaceuticalsIcon from '@/components/wheel/management/icons/PharmaceuticalsIcon.vue';
import PunctalPlugsIcon from '@/components/wheel/management/icons/PunctalPlugsIcon.vue';
import ComplexTreatmentsIcon from '@/components/wheel/management/icons/ComplexTreatmentsIcon.vue';
import ScleralLensesIcon from '@/components/wheel/management/icons/ScleralLensesIcon.vue';
import WarmCompressIcon from '@/components/wheel/management/icons/WarmCompressIcon.vue';

import MildTextFr from '@/assets/svg/fr/mild-text.svg';
import ModerateTextFr from '@/assets/svg/fr/moderate-text.svg';
import SevereTextFr from '@/assets/svg/fr/severe-text.svg';
import ManagementTextFr from '@/assets/svg/fr/management-text.svg';
import MildTextZh from '@/assets/svg/zh/mild.svg';
import ModerateTextZh from '@/assets/svg/zh/moderate.svg';
import SevereTextZh from '@/assets/svg/zh/severe.svg';
import ManagementTextZh from '@/assets/svg/zh/management.svg';

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
        <InOfficeTreatmentsIcon />
        <LidHygieneIcon />
        <DietAndDietarySupplementsIcon />
        <PharmaceuticalsIcon />
        <PunctalPlugsIcon />
        <ComplexTreatmentsIcon />
        <ScleralLensesIcon />
        <WarmCompressIcon />

        <!-- MILD text -->
        <g v-if="$selectedLanguage.value === 'en'">
            <path
                class="management-cls-7"
                d="m185.52,592.02l5.33,7.68-1.57,1.09-3.47-5-.11,4.87-4.61-1.6,3.47,5-1.57,1.09-5.33-7.68,1.43-.99,4.87,1.68.13-5.15,1.43-.99Z" />
            <path
                class="management-cls-7"
                d="m189.07,589.55l5.33,7.68-1.57,1.09-5.33-7.68,1.57-1.09Z" />
            <path
                class="management-cls-7"
                d="m192.62,587.08l4.3,6.19,3.29-2.28,1.04,1.49-4.86,3.37-5.33-7.68,1.57-1.09Z" />
            <path
                class="management-cls-7"
                d="m199.82,582.09c2.12-1.54,5.21-1.02,6.62,1.1,1.49,2.06.9,5.13-1.28,6.58l-2.53,1.76-5.33-7.68,2.53-1.76Zm1,1.44l-.96.67,3.34,4.8.96-.67c1.4-.97,1.63-2.72.7-4.05s-2.64-1.73-4.04-.76Z" />
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'es'"
            id="mild-text-es"
            style="transform: translate(180px, 575px)"
            class="fill-white">
            <path d="M6.37,29.02L0,20.48l1.74-1.3,5.13,6.87,3.65-2.73,1.24,1.66-5.4,4.03Z" />
            <path
                d="M12.99,24.07l-6.37-8.53,5.31-3.97,1.24,1.66-3.57,2.67,1.31,1.75,2.85-2.13,1.24,1.66-2.85,2.13,1.35,1.8,3.57-2.67,1.24,1.66-5.31,3.97Z" />
            <path d="M22.43,17.02l-9.89-5.9,1.89-1.41,6.84,4.12-2.05-7.7,1.92-1.44,2.84,11.17-1.55,1.16Z" />
            <path
                d="M28.49,12.5l-6.37-8.53,5.31-3.97,1.24,1.66-3.57,2.67,1.31,1.75,2.85-2.13,1.24,1.66-2.85,2.13,1.35,1.8,3.57-2.67,1.24,1.66-5.31,3.97Z" />
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'fr'"
            style="transform: translate(180px, 572px)">
            <MildTextFr :viewBox="null" />
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'zh'"
            style="transform: translate(165px, 592px)">
            <MildTextZh :viewBox="null" />
        </g>

        <!-- MODERATE text -->
        <g v-if="$selectedLanguage.value === 'en'">
            <path
                class="management-cls-7"
                d="m273.75,516.23l5.21,7.89-1.61,1.06-3.39-5.14-.23,4.92-4.62-1.73,3.39,5.14-1.61,1.06-5.21-7.89,1.47-.97,4.89,1.82.25-5.21,1.47-.97Z" />
            <path
                class="management-cls-7"
                d="m279.32,512.37c2.17-1.5,5.36-.84,6.77,1.39,1.5,2.17.84,5.37-1.39,6.77-2.17,1.5-5.37.84-6.77-1.39-1.5-2.17-.84-5.36,1.39-6.77Zm1.03,1.56c-1.37.85-1.7,2.81-.79,4.15.86,1.36,2.8,1.82,4.12.9,1.37-.85,1.7-2.81.79-4.14-.87-1.36-2.8-1.82-4.12-.9Z" />
            <path
                class="management-cls-7"
                d="m287.66,507.05c2.18-1.5,5.29-.91,6.66,1.27,1.46,2.12.79,5.21-1.46,6.63l-2.6,1.72-5.21-7.89,2.6-1.72Zm.98,1.48l-.99.65,3.26,4.94.99-.65c1.44-.95,1.71-2.71.81-4.08s-2.63-1.81-4.06-.86Z" />
            <path
                class="management-cls-7"
                d="m298.22,500.09l1.01,1.53-3.3,2.18,1.07,1.62,2.63-1.74,1.01,1.54-2.63,1.74,1.1,1.67,3.3-2.18,1.01,1.53-4.91,3.24-5.21-7.89,4.91-3.24Z" />
            <path
                class="management-cls-7"
                d="m309.82,503.76l-4.9-1.54-.4.26,2.19,3.32-1.61,1.06-5.21-7.89,3.02-1.99c1.46-.96,3.09-.59,3.96.74.67,1.02.59,2.07-.27,3.13l5.15,1.63-1.95,1.28Zm-4.98-3.46c.61-.4.8-.99.45-1.52s-.97-.59-1.58-.19l-1.22.81,1.13,1.71,1.22-.81Z" />
            <path
                class="management-cls-7"
                d="m316.42,496.83l-3.36,2.21.42,2.31-1.67,1.1-1.8-10.14,1.43-.95,8.62,5.64-1.69,1.11-1.96-1.29Zm-1.52-1.02l-2.78-1.85.6,3.29,2.18-1.44Z" />
            <path
                class="management-cls-7"
                d="m315.62,490.81l-1.01-1.53,5.85-3.86,1.01,1.53-2.12,1.4,4.2,6.36-1.62,1.07-4.2-6.36-2.1,1.39Z" />
            <path
                class="management-cls-7"
                d="m326.77,481.26l1.01,1.53-3.3,2.18,1.07,1.62,2.64-1.74,1.01,1.54-2.64,1.74,1.1,1.67,3.3-2.18,1.01,1.53-4.91,3.24-5.21-7.89,4.91-3.24Z" />
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'es'"
            id="moderate-text-es"
            style="transform: translate(264px, 477px)"
            class="fill-white">
            <path
                d="M0,47.03l1.63-1.12,5.55,1.97.17-5.88,1.63-1.12,6.02,8.79-1.79,1.23-3.92-5.72-.16,5.55-5.23-1.85,3.92,5.72-1.79,1.23L0,47.03Z" />
            <path
                d="M23.38,42.18c-.28,1.49-1.04,2.67-2.3,3.53-1.25.86-2.63,1.15-4.12.87s-2.67-1.05-3.53-2.3c-.86-1.25-1.15-2.63-.87-4.12.28-1.49,1.05-2.67,2.3-3.53,1.25-.86,2.63-1.15,4.12-.87,1.5.28,2.67,1.05,3.53,2.3.86,1.25,1.15,2.63.87,4.12ZM17.39,44.48c.91.18,1.74.02,2.5-.5.76-.52,1.22-1.24,1.37-2.15.16-.91-.03-1.76-.56-2.53-.53-.77-1.25-1.25-2.16-1.44-.91-.18-1.74-.02-2.5.5s-1.22,1.24-1.37,2.15c-.16.91.03,1.76.56,2.53.53.78,1.25,1.26,2.16,1.44Z" />
            <path
                d="M26.96,41.47l-6.02-8.79,2.9-1.98c1.26-.86,2.62-1.17,4.08-.92,1.46.25,2.61.99,3.45,2.22.84,1.23,1.12,2.57.82,4.02-.29,1.45-1.07,2.61-2.33,3.47l-2.9,1.98ZM27.62,38.6l1.1-.75c.8-.55,1.27-1.26,1.41-2.13.14-.87-.05-1.7-.58-2.47-.53-.77-1.23-1.25-2.09-1.44s-1.7,0-2.5.55l-1.1.75,3.76,5.49Z" />
            <path
                d="M35.82,35.4l-6.02-8.79,5.47-3.75,1.17,1.71-3.68,2.52,1.24,1.81,2.93-2.01,1.17,1.71-2.93,2.01,1.27,1.86,3.68-2.52,1.17,1.71-5.47,3.75Z" />
            <path
                d="M42.85,30.59l-6.02-8.79,3.37-2.31c.8-.55,1.62-.75,2.46-.59.84.15,1.51.6,2.02,1.34.79,1.16.71,2.33-.24,3.53l5.83,1.74-2.17,1.48-5.55-1.63-.43.3,2.53,3.7-1.79,1.23ZM41.06,24.12l1.36-.93c.35-.24.56-.51.65-.82.09-.31.03-.61-.18-.91-.2-.3-.46-.46-.78-.49-.32-.03-.65.07-1,.31l-1.36.93,1.31,1.91Z" />
            <path
                d="M50,25.69l-2.23-11.38,1.6-1.09,9.82,6.19-1.88,1.29-2.23-1.42-3.75,2.57.53,2.58-1.86,1.27ZM50.18,16.13l.74,3.68,2.41-1.65-3.15-2.02Z" />
            <path
                d="M60.16,18.73l-6.02-8.79,2.9-1.98c1.26-.86,2.62-1.17,4.08-.92,1.46.25,2.61.99,3.45,2.22.84,1.23,1.12,2.57.82,4.02-.29,1.45-1.07,2.61-2.33,3.47l-2.9,1.98ZM60.83,15.86l1.1-.75c.8-.55,1.27-1.26,1.41-2.13.14-.87-.05-1.7-.58-2.47-.53-.77-1.23-1.25-2.09-1.44-.87-.18-1.7,0-2.5.55l-1.1.75,3.76,5.49Z" />
            <path
                d="M75.45,6.53c-.28,1.49-1.04,2.67-2.3,3.53-1.25.86-2.63,1.15-4.12.87-1.49-.28-2.67-1.05-3.53-2.3-.86-1.25-1.15-2.63-.87-4.12.28-1.49,1.05-2.67,2.3-3.53,1.25-.86,2.63-1.15,4.12-.87s2.67,1.05,3.53,2.3c.86,1.25,1.15,2.63.87,4.12ZM69.46,8.83c.91.18,1.74.02,2.5-.5.76-.52,1.22-1.24,1.37-2.15.16-.91-.03-1.76-.56-2.53-.53-.77-1.25-1.25-2.16-1.44-.91-.18-1.74-.02-2.5.5-.76.52-1.22,1.24-1.37,2.15-.16.91.03,1.76.56,2.53.53.78,1.25,1.26,2.16,1.44Z" />
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'fr'"
            style="transform: translate(272px, 486px)"
            class="fill-grey">
            <ModerateTextFr :viewBox="null" />
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'zh'"
            style="transform: translate(282px, 500px)"
            class="fill-grey">
            <ModerateTextZh :viewBox="null" />
        </g>

        <!-- SEVERE text -->
        <g v-if="$selectedLanguage.value === 'en'">
            <path
                class="management-cls-7"
                d="m386.14,458.22c-1.83,1.28-3.91.76-4.86-.56l1.64-1.1c.57.63,1.46.63,2.2.14.67-.45.94-1.09.6-1.59-.3-.44-.87-.54-1.72-.26l-1.03.33c-1.57.51-2.9.22-3.71-.97-.5-.74-.63-1.49-.43-2.23.2-.76.71-1.42,1.53-1.97,1.65-1.14,3.61-.64,4.48.56l-1.62,1.09c-.61-.51-1.3-.48-1.83-.12-.6.4-.84,1.01-.53,1.47s.83.53,1.64.27l1.13-.38c1.57-.51,2.91-.19,3.73,1.04.91,1.36.46,3.17-1.21,4.29Z" />
            <path
                class="management-cls-7"
                d="m390.11,443.66l1.05,1.57-3.38,2.26,1.11,1.66,2.69-1.81,1.05,1.57-2.69,1.81,1.14,1.7,3.38-2.26,1.05,1.57-5.02,3.37-5.41-8.07,5.02-3.37Z" />
            <path
                class="management-cls-7"
                d="m399.1,437.63l2.07,10.31-1.47.98-8.74-5.84,1.78-1.2,6.04,4.07-1.51-7.11,1.82-1.22Z" />
            <path
                class="management-cls-7"
                d="m405.33,433.45l1.05,1.57-3.37,2.26,1.11,1.66,2.69-1.81,1.05,1.57-2.69,1.81,1.14,1.7,3.37-2.26,1.05,1.57-5.02,3.37-5.41-8.07,5.02-3.37Z" />
            <path
                class="management-cls-7"
                d="m417.28,437.13l-5.04-1.55-.41.27,2.28,3.4-1.65,1.11-5.41-8.07,3.09-2.07c1.49-1,3.17-.63,4.08.72.7,1.04.62,2.12-.25,3.21l5.3,1.64-1.99,1.33Zm-5.14-3.52c.63-.42.81-1.02.45-1.57s-1-.6-1.62-.18l-1.25.84,1.17,1.75,1.25-.84Z" />
            <path
                class="management-cls-7"
                d="m419.81,423.73l1.05,1.57-3.38,2.26,1.11,1.66,2.69-1.81,1.05,1.57-2.69,1.81,1.14,1.7,3.38-2.26,1.05,1.57-5.02,3.37-5.41-8.07,5.02-3.37Z" />
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'es'"
            id="severe-text-es"
            style="transform: translate(371px, 426px)"
            class="fill-white">
            <path
                d="M8.19,37.01c-1,.68-2,.95-3,.79-1-.16-1.79-.61-2.34-1.35l1.79-1.23c.33.34.71.52,1.15.53.43.01.86-.12,1.27-.41.37-.25.62-.54.74-.86.12-.32.09-.61-.1-.89-.33-.49-.97-.57-1.9-.26l-1.12.36c-.86.29-1.64.35-2.34.19-.7-.16-1.28-.56-1.74-1.21-.55-.8-.71-1.62-.5-2.45s.77-1.56,1.66-2.17c.9-.62,1.81-.85,2.75-.69.93.16,1.65.57,2.17,1.25l-1.78,1.22c-.33-.28-.67-.43-1.02-.43-.35,0-.68.1-.97.3-.33.23-.55.48-.66.77-.11.29-.08.56.08.82.17.27.41.42.7.47.29.04.67-.02,1.12-.17l1.22-.42c1.8-.62,3.17-.25,4.1,1.1.52.76.67,1.58.44,2.46-.23.88-.8,1.63-1.7,2.25Z" />
            <path
                d="M12.6,33.77l-6.02-8.79,5.47-3.75,1.17,1.71-3.68,2.52,1.24,1.81,2.93-2.01,1.17,1.71-2.93,2.01,1.27,1.86,3.68-2.52,1.17,1.71-5.47,3.75Z" />
            <path d="M22.32,27.11l-9.64-6.3,1.94-1.33,6.67,4.4-1.73-7.78,1.98-1.36,2.38,11.28-1.6,1.09Z" />
            <path
                d="M28.55,22.84l-6.02-8.79,5.47-3.75,1.17,1.71-3.68,2.52,1.24,1.81,2.93-2.01,1.17,1.71-2.93,2.01,1.27,1.86,3.68-2.52,1.17,1.71-5.47,3.75Z" />
            <path
                d="M35.58,18.03l-6.02-8.79,3.37-2.31c.8-.55,1.62-.75,2.46-.59.84.15,1.51.6,2.02,1.34.79,1.16.71,2.33-.24,3.53l5.82,1.74-2.16,1.48-5.55-1.63-.43.3,2.54,3.7-1.79,1.23ZM33.79,11.56l1.36-.93c.35-.24.56-.51.65-.82.08-.31.03-.61-.18-.91-.2-.3-.46-.46-.78-.49-.32-.03-.65.07-1,.31l-1.36.93,1.3,1.91Z" />
            <path
                d="M49.84,6.53c-.28,1.49-1.05,2.67-2.3,3.53-1.25.86-2.63,1.15-4.12.87-1.5-.28-2.67-1.05-3.53-2.3-.86-1.25-1.15-2.63-.87-4.12.28-1.49,1.05-2.67,2.3-3.53,1.25-.86,2.63-1.15,4.12-.87,1.5.28,2.67,1.05,3.53,2.3.86,1.25,1.15,2.63.87,4.12ZM43.85,8.83c.91.18,1.74.02,2.5-.5.76-.52,1.22-1.24,1.37-2.15.16-.91-.03-1.76-.56-2.53-.53-.77-1.25-1.25-2.16-1.44-.91-.18-1.74-.02-2.5.5-.76.52-1.22,1.24-1.37,2.15-.16.91.03,1.76.56,2.53.53.78,1.25,1.26,2.16,1.44Z" />
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'fr'"
            style="transform: translate(371px, 428px)">
            <SevereTextFr :viewBox="null" />
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'zh'"
            style="transform: translate(390px, 430px)">
            <SevereTextZh :viewBox="null" />
        </g>

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
