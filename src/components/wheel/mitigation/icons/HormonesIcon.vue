<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
import HormonesFr from '@/assets/svg/fr/hormones.svg';
import HormonesZh from '@/assets/svg/zh/hormones.svg';
const controlsStore = useControlsStore();
</script>

<template>
    <g :class="{ 'svg-active': controlsStore.selectedItem === 'hormones' }">
        <g v-if="$selectedLanguage.value === 'en'">
            <g>
                <path
                    class="mitigation-cls-1"
                    d="m236.4,430.7v2.83h3.08v-2.83h1.45v7.1h-1.45v-2.89h-3.08v2.89h-1.45v-7.1h1.45Z" />
                <path
                    class="mitigation-cls-1"
                    d="m246,430.58c1.98-.04,3.71,1.69,3.67,3.67.04,1.98-1.69,3.71-3.67,3.67-1.98.04-3.71-1.69-3.67-3.67-.04-1.98,1.69-3.71,3.67-3.67Zm0,1.4c-1.21-.03-2.23,1.06-2.21,2.27-.02,1.21,1,2.3,2.21,2.27,1.21.03,2.23-1.06,2.21-2.27.02-1.21-1-2.3-2.21-2.27Z" />
                <path
                    class="mitigation-cls-1"
                    d="m255.32,437.79l-2.43-2.99h-.36v2.99h-1.45v-7.1h2.72c1.31,0,2.18.91,2.18,2.1,0,.92-.49,1.54-1.46,1.85l2.55,3.15h-1.75Zm-1.69-4.23c.55,0,.91-.29.91-.77s-.36-.77-.91-.77h-1.1v1.54h1.1Z" />
                <path
                    class="mitigation-cls-1"
                    d="m265.15,430.7v7.1h-1.45v-4.62l-2.18,2.99-2.18-2.99v4.62h-1.45v-7.1h1.32l2.31,3.16,2.31-3.16h1.32Z" />
                <path
                    class="mitigation-cls-1"
                    d="m270.23,430.58c1.98-.04,3.71,1.69,3.67,3.67.04,1.98-1.69,3.71-3.67,3.67-1.98.04-3.71-1.69-3.67-3.67-.04-1.98,1.69-3.71,3.67-3.67Zm0,1.4c-1.21-.03-2.23,1.06-2.21,2.27-.02,1.21,1,2.3,2.21,2.27,1.21.03,2.23-1.06,2.21-2.27.02-1.21-1-2.3-2.21-2.27Z" />
                <path
                    class="mitigation-cls-1"
                    d="m281.65,430.7v7.1h-1.25l-3.64-4.63v4.63h-1.45v-7.1h1.25l3.64,4.63v-4.63h1.45Z" />
                <path
                    class="mitigation-cls-1"
                    d="m287.9,430.7v1.38h-2.97v1.46h2.37v1.38h-2.37v1.5h2.97v1.38h-4.42v-7.1h4.42Z" />
                <path
                    class="mitigation-cls-1"
                    d="m291.69,437.91c-1.63.03-2.68-1.13-2.72-2.32h1.44c.09.61.63.98,1.28.98.59,0,1.01-.28,1.01-.72,0-.39-.31-.68-.94-.86l-.76-.22c-1.16-.33-1.85-1.05-1.86-2.1,0-.65.22-1.16.65-1.53.43-.38,1.01-.57,1.73-.57,1.47-.02,2.45,1.08,2.49,2.16h-1.43c-.16-.56-.59-.82-1.06-.82-.53,0-.92.27-.92.68s.29.66.89.83l.84.23c1.16.33,1.84,1.07,1.84,2.15,0,1.2-1.01,2.11-2.48,2.11Z" />
            </g>
            <g>
                <g>
                    <polygon
                        class="mitigation-cls-10"
                        points="266.51 409.24 277.78 423.94 255.23 423.94 266.51 409.24" />
                    <circle
                        class="mitigation-cls-5"
                        cx="248.35"
                        cy="405.78"
                        r="6.16" />
                    <rect
                        x="240.92"
                        y="406.61"
                        width="49.51"
                        height="3.87"
                        rx="1.31"
                        ry="1.31"
                        transform="translate(-119.8 110.38) rotate(-19.24)" />
                    <circle
                        class="mitigation-cls-5"
                        cx="277.05"
                        cy="396.07"
                        r="6.16" />
                    <g>
                        <line
                            class="mitigation-cls-14"
                            x1="251.71"
                            y1="400.33"
                            x2="256.44"
                            y2="392.53" />
                        <g>
                            <line
                                class="mitigation-cls-9"
                                x1="251.71"
                                y1="400.33"
                                x2="254.58"
                                y2="395.6" />
                            <polygon points="256.33 397.52 256.44 392.53 252.07 394.93 256.33 397.52" />
                        </g>
                    </g>
                </g>
                <line
                    class="mitigation-cls-8"
                    x1="272.78"
                    y1="391.5"
                    x2="268.27"
                    y2="384.93" />
                <line
                    class="mitigation-cls-7"
                    x1="272.27"
                    y1="385.77"
                    x2="267.49"
                    y2="389.02" />
            </g>
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'es'"
            style="transform: translate(237px, 384px)"
            id="hormones-es">
            <defs>
                <linearGradient
                    id="linear-gradient"
                    x1="1387.23"
                    y1="261.93"
                    x2="1400.45"
                    y2="261.93"
                    gradientTransform="translate(-631.19 743.01) rotate(-58.75) scale(.69 .67)"
                    gradientUnits="userSpaceOnUse">
                    <stop
                        offset="0"
                        stop-color="#b18a12" />
                    <stop
                        offset=".1"
                        stop-color="#c49919" />
                    <stop
                        offset=".24"
                        stop-color="#d6a921" />
                    <stop
                        offset=".38"
                        stop-color="#e2b225" />
                    <stop
                        offset=".53"
                        stop-color="#e6b627" />
                    <stop
                        offset="1"
                        stop-color="#b18a12" />
                </linearGradient>
                <linearGradient
                    id="linear-gradient-2"
                    x1="2938.16"
                    y1="3018.45"
                    x2="2963.52"
                    y2="3018.45"
                    gradientTransform="translate(-275.31 1341.68) rotate(-124.46) scale(.31 .34)"
                    xlink:href="#linear-gradient" />
                <linearGradient
                    id="linear-gradient-3"
                    x1="-2725.79"
                    y1="3693.51"
                    x2="-2700.43"
                    y2="3693.51"
                    gradientTransform="translate(271.54 1450.75) rotate(145.71) scale(.23 .36)"
                    xlink:href="#linear-gradient" />
            </defs>
            <g>
                <g>
                    <g>
                        <g>
                            <polygon
                                class="cls-3"
                                points="29.92 25.31 41.2 40.01 18.65 40.01 29.92 25.31" />
                            <circle
                                class="cls-2"
                                cx="11.77"
                                cy="21.85"
                                r="6.16" />
                            <rect
                                x="4.34"
                                y="22.68"
                                width="49.51"
                                height="3.87"
                                rx="1.31"
                                ry="1.31"
                                transform="translate(-6.49 10.96) rotate(-19.24)" />
                            <circle
                                class="cls-2"
                                cx="40.47"
                                cy="12.14"
                                r="6.16" />
                            <g>
                                <line
                                    class="cls-6"
                                    x1="15.12"
                                    y1="16.39"
                                    x2="19.85"
                                    y2="8.6" />
                                <g>
                                    <line
                                        class="cls-1"
                                        x1="15.12"
                                        y1="16.39"
                                        x2="17.99"
                                        y2="11.67" />
                                    <polygon points="19.75 13.59 19.85 8.6 15.48 11 19.75 13.59" />
                                </g>
                            </g>
                        </g>
                        <line
                            class="cls-4"
                            x1="36.2"
                            y1="7.57"
                            x2="31.69"
                            y2="1" />
                        <line
                            class="cls-5"
                            x1="35.68"
                            y1="1.84"
                            x2="30.91"
                            y2="5.09" />
                    </g>
                    <g>
                        <path d="M0,54.95v-7.1h1.45v2.83h3.08v-2.83h1.45v7.1h-1.45v-2.89H1.45v2.89H0Z" />
                        <path
                            d="M13.6,54c-.72.72-1.58,1.08-2.59,1.08s-1.88-.36-2.59-1.08c-.72-.72-1.08-1.58-1.08-2.59s.36-1.88,1.08-2.6c.72-.72,1.58-1.08,2.59-1.08s1.88.36,2.59,1.08c.72.72,1.08,1.58,1.08,2.6s-.36,1.88-1.08,2.59ZM9.44,53.01c.43.44.95.67,1.57.67s1.13-.22,1.57-.67c.43-.44.64-.98.64-1.6s-.21-1.16-.64-1.6c-.43-.44-.95-.67-1.57-.67s-1.13.22-1.57.67c-.43.44-.64.98-.64,1.6s.21,1.16.64,1.6Z" />
                        <path
                            d="M16.04,54.95v-7.1h2.72c.65,0,1.17.2,1.58.6s.61.9.61,1.5c0,.93-.49,1.55-1.46,1.85l2.55,3.15h-1.75l-2.44-2.99h-.35v2.99h-1.45ZM17.49,50.72h1.1c.28,0,.5-.07.67-.21s.25-.32.25-.56-.08-.43-.25-.56-.38-.21-.67-.21h-1.1v1.54Z" />
                        <path
                            d="M22.8,47.85h1.32l2.31,3.17,2.31-3.17h1.32v7.1h-1.45v-4.62l-2.18,2.99-2.18-2.99v4.62h-1.45v-7.1Z" />
                        <path
                            d="M37.68,54c-.72.72-1.58,1.08-2.59,1.08s-1.88-.36-2.59-1.08c-.72-.72-1.08-1.58-1.08-2.59s.36-1.88,1.08-2.6c.72-.72,1.58-1.08,2.59-1.08s1.88.36,2.59,1.08c.72.72,1.08,1.58,1.08,2.6s-.36,1.88-1.08,2.59ZM33.52,53.01c.43.44.95.67,1.57.67s1.13-.22,1.57-.67c.43-.44.64-.98.64-1.6s-.21-1.16-.64-1.6c-.43-.44-.95-.67-1.57-.67s-1.13.22-1.57.67c-.43.44-.64.98-.64,1.6s.21,1.16.64,1.6Z" />
                        <path d="M46.46,54.95h-1.25l-3.64-4.63v4.63h-1.45v-7.1h1.25l3.64,4.63v-4.63h1.45v7.1Z" />
                        <path
                            d="M47.46,54.95l3.06-7.1h1.29l3.07,7.1h-1.52l-.69-1.62h-3.03l-.68,1.62h-1.5ZM51.16,49.77l-.98,2.3h1.95l-.97-2.3Z" />
                        <path
                            d="M57.92,55.08c-.81,0-1.46-.23-1.95-.7-.49-.46-.75-1-.78-1.62h1.45c.05.31.2.56.43.73s.52.25.85.25c.3,0,.54-.06.73-.19s.28-.31.28-.52c0-.39-.32-.68-.95-.86l-.75-.22c-.58-.17-1.03-.43-1.36-.78-.33-.35-.49-.79-.5-1.32,0-.65.22-1.16.65-1.53.43-.38,1.01-.57,1.73-.57s1.32.22,1.77.66.69.94.72,1.5h-1.44c-.07-.28-.21-.49-.4-.62-.19-.13-.41-.2-.65-.2-.27,0-.49.06-.66.17s-.26.28-.26.48c0,.21.06.39.21.52.15.13.37.24.68.33l.83.23c1.23.34,1.84,1.06,1.84,2.15,0,.61-.23,1.12-.68,1.52-.46.4-1.05.6-1.79.6Z" />
                    </g>
                </g> </g
        ></g>
        <g
            v-else-if="$selectedLanguage.value === 'fr'"
            style="transform: translate(237px, 384px)">
            <HormonesFr :viewBox="null" />
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'zh'"
            style="transform: translate(237px, 384px)">
            <HormonesZh :viewBox="null" />
        </g>
    </g>
</template>
<style scoped lang="postcss">
.cls-1,
.cls-2 {
    fill: none;
}

.cls-1,
.cls-2,
.cls-3,
.cls-4,
.cls-5 {
    stroke: #000;
}

.cls-1,
.cls-2,
.cls-4,
.cls-5 {
    stroke-width: 2px;
}

.cls-1,
.cls-4,
.cls-5 {
    stroke-miterlimit: 10;
}

.cls-2,
.cls-3 {
    stroke-linejoin: round;
}

.cls-2,
.cls-3,
.cls-4,
.cls-5 {
    stroke-linecap: round;
}

.cls-4 {
    fill: url(#linear-gradient-2);
}

.cls-5 {
    fill: url(#linear-gradient-3);
}

.cls-6 {
    fill: url(#linear-gradient);
}
</style>
