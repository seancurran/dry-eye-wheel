<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
import BlinkRateAndCompletenessFr from '@/assets/svg/fr/blink-rate-and-completeness.svg';
import BlinkRateAndCompletenessZh from '@/assets/svg/zh/blink-rate-and-completeness.svg';
const controlsStore = useControlsStore();
</script>

<template>
    <g
        :class="{ 'svg-active': controlsStore.selectedItem === 'blink-rate-and-completeness' }"
        class="svg-fill-path">
        <g v-if="$selectedLanguage.value === 'en'">
            <g>
                <path
                    class="measurement-cls-12"
                    d="m738.37,428.04c1.17,0,2.11.94,2.11,2.06,0,.52-.19.94-.56,1.27.64.31,1.05.91,1.05,1.68,0,1.17-.94,2.09-2.2,2.09h-3v-7.1h2.6Zm-.14,1.32h-1.01v1.59h1.01c.49,0,.84-.34.84-.79s-.35-.8-.84-.8Zm.44,2.82h-1.45v1.63h1.45c.53,0,.89-.34.89-.81s-.36-.82-.89-.82Z" />
                <path
                    class="measurement-cls-12"
                    d="m743.81,428.04v5.72h3.04v1.38h-4.49v-7.1h1.45Z" />
                <path
                    class="measurement-cls-12"
                    d="m749.57,428.04v7.1h-1.45v-7.1h1.45Z" />
                <path
                    class="measurement-cls-12"
                    d="m757.74,428.04v7.1h-1.25l-3.64-4.63v4.63h-1.45v-7.1h1.25l3.64,4.63v-4.63h1.45Z" />
                <path
                    class="measurement-cls-12"
                    d="m764.09,435.13l-3.08-3.23v3.23h-1.44v-7.1h1.44v3l2.56-3h1.79l-2.92,3.41,3.53,3.69h-1.88Z" />
                <path
                    class="measurement-cls-12"
                    d="m773.23,435.13l-2.43-2.99h-.36v2.99h-1.45v-7.1h2.72c1.31,0,2.18.91,2.18,2.1,0,.92-.49,1.54-1.46,1.85l2.55,3.15h-1.75Zm-1.69-4.23c.55,0,.91-.29.91-.77s-.36-.77-.91-.77h-1.1v1.54h1.1Z" />
                <path
                    class="measurement-cls-12"
                    d="m780.23,433.51h-3.02l-.69,1.62h-1.5l3.06-7.1h1.29l3.07,7.1h-1.52l-.69-1.62Zm-.53-1.27l-.98-2.31-.98,2.31h1.96Z" />
                <path
                    class="measurement-cls-12"
                    d="m782.21,429.41v-1.38h5.26v1.38h-1.91v5.72h-1.46v-5.72h-1.89Z" />
                <path
                    class="measurement-cls-12"
                    d="m793.14,428.04v1.38h-2.97v1.46h2.37v1.38h-2.37v1.5h2.97v1.38h-4.42v-7.1h4.42Z" />
                <path
                    class="measurement-cls-12"
                    d="m802.34,435.13l-.86-.83c-.69.65-1.32.94-2.13.94-1.52,0-2.36-.94-2.36-2.13,0-.87.47-1.44,1.26-1.93-.48-.48-.77-.92-.77-1.49,0-.95.86-1.78,2.01-1.78s1.98.86,1.98,1.77c0,.79-.44,1.27-1.21,1.7l1.16,1.13.67-.81h1.64l-1.41,1.67,1.82,1.76h-1.8Zm-3.2-3.09c-.54.33-.81.7-.81,1.11,0,.57.48.88,1.01.88.43,0,.82-.18,1.26-.58l-1.46-1.41Zm.28-1.45h.02c.49-.25.68-.46.68-.85s-.28-.67-.65-.67-.68.24-.68.63c0,.31.16.48.63.89Z" />
                <path
                    class="measurement-cls-12"
                    d="m736.26,442.71c-.38,1.49-1.84,2.54-3.44,2.54-2.11.04-3.76-1.64-3.72-3.67-.04-2.03,1.61-3.71,3.72-3.67,1.6,0,3.06,1.05,3.44,2.54h-1.57c-.29-.69-1.06-1.14-1.87-1.14-1.33,0-2.26,1-2.26,2.27s.93,2.27,2.26,2.27c.81,0,1.58-.45,1.87-1.14h1.57Z" />
                <path
                    class="measurement-cls-12"
                    d="m740.81,437.91c1.98-.04,3.71,1.69,3.67,3.67.04,1.98-1.69,3.71-3.67,3.67-1.98.04-3.71-1.69-3.67-3.67-.04-1.98,1.69-3.71,3.67-3.67Zm0,1.4c-1.21-.03-2.23,1.06-2.21,2.27-.02,1.21,1,2.3,2.21,2.27,1.21.03,2.23-1.06,2.21-2.27.02-1.21-1-2.3-2.21-2.27Z" />
                <path
                    class="measurement-cls-12"
                    d="m753.15,438.04v7.1h-1.45v-4.62l-2.18,2.99-2.18-2.99v4.62h-1.45v-7.1h1.32l2.31,3.16,2.31-3.16h1.32Z" />
                <path
                    class="measurement-cls-12"
                    d="m756.43,442.81v2.32h-1.45v-7.1h2.36c1.43,0,2.49,1.04,2.49,2.39s-1.06,2.39-2.49,2.39h-.91Zm0-3.42v2.06h.89c.65,0,1.1-.44,1.1-1.03s-.45-1.03-1.1-1.03h-.89Z" />
                <path
                    class="measurement-cls-12"
                    d="m762.59,438.04v5.72h3.04v1.38h-4.49v-7.1h1.45Z" />
                <path
                    class="measurement-cls-12"
                    d="m771.32,438.04v1.38h-2.97v1.46h2.37v1.38h-2.37v1.5h2.97v1.38h-4.42v-7.1h4.42Z" />
                <path
                    class="measurement-cls-12"
                    d="m772.25,439.41v-1.38h5.26v1.38h-1.91v5.72h-1.46v-5.72h-1.89Z" />
                <path
                    class="measurement-cls-12"
                    d="m783.18,438.04v1.38h-2.97v1.46h2.37v1.38h-2.37v1.5h2.97v1.38h-4.42v-7.1h4.42Z" />
                <path
                    class="measurement-cls-12"
                    d="m791.03,438.04v7.1h-1.25l-3.64-4.63v4.63h-1.45v-7.1h1.25l3.64,4.63v-4.63h1.45Z" />
                <path
                    class="measurement-cls-12"
                    d="m797.28,438.04v1.38h-2.97v1.46h2.37v1.38h-2.37v1.5h2.97v1.38h-4.42v-7.1h4.42Z" />
                <path
                    class="measurement-cls-12"
                    d="m801.07,445.25c-1.63.03-2.68-1.13-2.72-2.32h1.44c.09.61.63.98,1.28.98.59,0,1.01-.28,1.01-.72,0-.39-.31-.68-.94-.86l-.76-.22c-1.16-.33-1.85-1.05-1.86-2.1,0-.65.22-1.16.65-1.53.43-.38,1.01-.57,1.73-.57,1.47-.02,2.45,1.08,2.49,2.16h-1.43c-.16-.56-.59-.82-1.06-.82-.53,0-.92.27-.92.68s.29.66.89.83l.84.23c1.16.33,1.84,1.07,1.84,2.15,0,1.2-1.01,2.11-2.48,2.11Z" />
                <path
                    class="measurement-cls-12"
                    d="m807.26,445.25c-1.63.03-2.68-1.13-2.72-2.32h1.44c.09.61.63.98,1.28.98.59,0,1.01-.28,1.01-.72,0-.39-.31-.68-.94-.86l-.76-.22c-1.16-.33-1.85-1.05-1.86-2.1,0-.65.22-1.16.65-1.53.43-.38,1.01-.57,1.73-.57,1.47-.02,2.45,1.08,2.49,2.16h-1.43c-.16-.56-.59-.82-1.06-.82-.53,0-.92.27-.92.68s.29.66.89.83l.84.23c1.16.33,1.84,1.07,1.84,2.15,0,1.2-1.01,2.11-2.48,2.11Z" />
            </g>
            <g
                id="Pc4Sao-2"
                data-name="Pc4Sao">
                <g>
                    <path
                        d="m780.24,387.59c.01-5.94,3.79-11.35,9.35-13.31.8-.28,1.63-.44,2.46-.64.18-.04.27-.11.26-.29,0-.04,0-.08,0-.12.08-.56-.1-.93-.58-1.32-1.31-1.07-1.74-2.51-1.34-4.15.4-1.61,1.45-2.64,3.07-3.03,2.76-.67,5.36,1.58,5.1,4.41-.12,1.26-.69,2.28-1.74,3-.21.15-.32.3-.29.56.03.28-.06.65.09.83.14.17.51.14.79.2,3.19.71,5.84,2.32,7.93,4.83,1.61,1.93,2.62,4.15,3.03,6.62.64,3.88-.21,7.44-2.49,10.65-1.81,2.54-4.25,4.24-7.2,5.2-5.77,1.88-12.34-.35-15.81-5.34-1.25-1.8-2.06-3.78-2.41-5.94-.12-.72-.14-1.45-.2-2.17Zm25.3-.02c0-6.17-4.99-11.16-11.14-11.16-6.11,0-11.14,5.02-11.14,11.11,0,6.19,4.98,11.19,11.15,11.19,6.14,0,11.13-5,11.13-11.14Zm-11.13-16.9c.6,0,1.2.02,1.8-.01.15,0,.35-.11.44-.23.58-.77.72-1.64.41-2.55-.37-1.09-1.16-1.74-2.29-1.88-1.21-.15-2.19.33-2.79,1.4-.58,1.03-.48,2.07.19,3.05.11.16.25.23.45.23.6-.01,1.2,0,1.8,0Z" />
                    <path
                        d="m803.63,375.08c.7-.69,1.4-1.38,2.11-2.07.04-.04.22.01.28.08.71.69,1.4,1.39,2.1,2.08.34.34.67.68,1.02,1.01.12.12.13.21,0,.32-.64.64-1.29,1.28-1.93,1.92-.1.11-.19.12-.3,0-1.06-1.07-2.13-2.13-3.2-3.19-.03-.03-.05-.08-.09-.17Z" />
                    <path
                        d="m785.25,375.17c-.35.33-.69.62-1.01.93-.76.75-1.52,1.5-2.26,2.27-.18.18-.28.17-.45,0-.59-.61-1.19-1.2-1.8-1.8-.16-.15-.16-.26,0-.42,1.03-1.03,2.07-2.06,3.09-3.09.12-.12.2-.12.32,0,.67.68,1.35,1.35,2.11,2.11Z" />
                    <path
                        d="m794.42,391.01c-1.67,0-3.13-1.22-3.4-2.78-.29-1.69.59-3.38,2.33-3.94,1.17-.38,2.27-.16,3.25.61.19.15.33.17.57.1,1.82-.59,3.65-1.17,5.48-1.74.12-.04.25-.06.38-.06.34,0,.6.19.69.47.08.29-.03.63-.32.8-.65.38-1.3.73-1.96,1.1-1.1.61-2.2,1.21-3.31,1.81-.16.09-.25.19-.26.39-.1,1.83-1.61,3.24-3.44,3.24Z" />
                </g>
            </g>
            <g>
                <path
                    d="m756.78,390.9c-7.09.05-12.88,2.33-18.02,6.13-1.35.99-2.58,2.12-3.85,3.19-.56.47-1.14.57-1.68.04-.5-.49-.4-1.02.09-1.48,4.55-4.25,9.73-7.56,16.12-9.04,6.4-1.48,12.62-.79,18.67,1.46,3.77,1.4,7.23,3.31,10.37,5.68.26.2.52.39.75.61.45.44.55.94.09,1.42-.46.48-1.03.46-1.55.1-.7-.49-1.34-1.05-2.04-1.54-4.72-3.3-9.94-5.57-15.87-6.35-.33-.04-.66-.08-1-.1-.82-.05-1.64-.1-2.08-.12Z" />
                <path
                    d="m766.91,405.08c1.03,1.14,2.27,1.99,3.87,2.59.24.09.5.17.74.26.58.21.83.53.56.95-.28.44-.85.5-1.4.33-.68-.21-1.34-.47-1.96-.75-1.41-.64-2.55-1.48-3.42-2.49-.27-.31-.52-.42-1.07-.32-1.09.21-2.2.38-3.32.5-.65.07-.82.26-.73.69.2.92.35,1.84.52,2.75.03.13.07.27.08.4.05.56-.27.91-.9.93-.73.03-1.04-.28-1.13-.74-.18-.99-.34-1.99-.54-2.99-.2-.98-.05-.8-1.34-.82-.77-.01-1.75-.24-2.25,0-.48.24-.4.99-.7,1.47-.57.9-1.2,1.78-1.88,2.63-.37.47-1.03.56-1.54.33-.5-.23-.55-.66-.11-1.12.92-.96,1.56-1.99,1.91-3.12.12-.38,0-.57-.58-.65-.81-.12-1.61-.27-2.4-.45-.48-.11-.73-.04-.98.28-1.21,1.56-3,2.71-5.25,3.51-.55.2-1.13.19-1.46-.21-.33-.41-.17-.78.47-1.02.27-.1.53-.21.79-.32,1.43-.6,2.57-1.39,3.45-2.38.11-.13.21-.27.36-.47-1.23-.43-2.43-.85-3.64-1.24-.11-.04-.39.09-.52.19-1.92,1.49-4.35,2.28-7.17,2.53-.14.01-.27.03-.41.03-.77.03-1.3-.22-1.31-.65,0-.5.46-.66,1.1-.77,1.23-.2,2.5-.37,3.64-.73.98-.3,1.8-.85,2.83-1.35-.97-.48-1.72-.87-2.51-1.21-.14-.06-.49,0-.65.07-2.43,1.25-5.24,1.59-8.16,1.64-.84.01-1.37-.28-1.31-.72.06-.53.57-.7,1.27-.7,1.99,0,3.92-.22,5.72-.83.41-.14.78-.33,1.22-.52-.47-.37-.86-.66-1.23-.97-.39-.33-.42-.69.06-.98.5-.3,1-.23,1.47.08,4.68,3.12,10.16,5.18,16.55,6,4.98.64,9.69-.1,14.2-1.56,2.14-.7,4.16-1.52,6.06-2.48,1.12-.57,2.2-1.18,3.24-1.83.14-.09.29-.25.44-.25.43-.01.96-.07,1.28.08.47.21.43.61.08.92-.28.24-.61.46-.96.64-.47.24-.45.47-.15.78,1.45,1.5,3.52,2.3,6.01,2.65.19.03.39.04.57.08.58.12.9.39.78.82-.12.43-.56.63-1.16.57-3.09-.35-5.74-1.25-7.63-3.06-.15-.14-.29-.28-.43-.42-.03-.03-.09-.05-.21-.11-.94.45-1.9.91-2.93,1.4,1.32,1.25,2.94,2.11,4.9,2.66.28.08.58.14.86.22.55.17.77.53.51.85-.18.23-.71.44-1.08.44-.53,0-1.06-.19-1.57-.35-2-.6-3.64-1.53-5-2.71-.35-.3-.6-.35-1.09-.17-1.09.4-2.22.76-3.44,1.16Z" />
                <path
                    d="m747.78,413.59c-.93,1.27-2.06,2.23-3.52,2.9-.22.1-.45.19-.67.29-.53.23-.75.59-.51,1.07.25.49.77.56,1.28.37.62-.24,1.22-.52,1.78-.84,1.28-.72,2.31-1.66,3.1-2.79.24-.34.47-.47.97-.35.99.23,2,.42,3.02.56.59.08.75.29.66.78-.18,1.02-.32,2.06-.48,3.08-.02.15-.06.3-.07.45-.05.63.24,1.02.82,1.04.66.03.95-.31,1.03-.83.17-1.11.31-2.23.49-3.34.18-1.09.05-.89,1.22-.92.7-.01,1.59-.27,2.05,0,.44.27.36,1.1.64,1.64.52,1,1.09,1.99,1.71,2.95.34.53.93.63,1.4.37.45-.25.5-.74.1-1.26-.84-1.07-1.42-2.23-1.73-3.49-.11-.43,0-.63.52-.73.74-.13,1.47-.31,2.18-.51.44-.12.67-.05.89.31,1.09,1.75,2.72,3.03,4.77,3.93.5.22,1.03.22,1.32-.24.3-.46.15-.88-.43-1.14-.24-.11-.48-.24-.72-.36-1.29-.67-2.34-1.56-3.13-2.66-.1-.15-.19-.3-.32-.52,1.12-.48,2.2-.95,3.31-1.39.1-.04.36.1.47.21,1.75,1.67,3.95,2.56,6.51,2.84.12.01.25.03.37.04.7.04,1.18-.25,1.19-.73,0-.56-.41-.74-1-.86-1.12-.22-2.27-.42-3.31-.82-.89-.34-1.64-.95-2.57-1.51.88-.54,1.57-.97,2.28-1.36.13-.07.44-.01.59.08,2.21,1.4,4.76,1.78,7.41,1.83.77.02,1.24-.31,1.19-.81-.06-.59-.52-.78-1.15-.78-1.8,0-3.56-.24-5.2-.93-.37-.16-.71-.37-1.11-.58.42-.41.78-.74,1.11-1.08.36-.37.38-.77-.06-1.09-.46-.34-.91-.26-1.34.09-4.25,3.5-9.23,5.8-15.03,6.72-4.52.72-8.8-.11-12.9-1.75-3.1-1.24-5.91-2.86-8.44-4.83-.13-.1-.26-.27-.4-.28-.39-.02-.87-.07-1.16.09-.43.24-.4.69-.07,1.03.25.27.55.51.87.71.42.27.41.53.14.87-1.32,1.68-3.2,2.58-5.46,2.97-.17.03-.35.04-.52.09-.53.14-.81.44-.71.92.1.48.51.71,1.05.63,2.81-.39,5.21-1.4,6.93-3.43.13-.16.26-.32.39-.47.03-.03.08-.05.19-.12.85.5,1.73,1.02,2.66,1.57-1.19,1.4-2.67,2.36-4.45,2.98-.26.09-.53.15-.78.25-.5.19-.7.59-.46.95.17.25.65.5.98.49.48,0,.96-.22,1.42-.39,1.81-.68,3.31-1.72,4.54-3.03.32-.34.55-.39.99-.19.99.45,2.02.85,3.12,1.3Z" />
                <path
                    class="measurement-cls-2"
                    d="m733.58,400.62c.03,1.55,1.32,5.35,3.81,6.47" />
                <path
                    class="measurement-cls-2"
                    d="m778.01,400.62s.33,2.37-2.13,5.74c-.82,1.12-.33,1.08-1.88,2.37" />
            </g>
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'es'"
            style="transform: translate(710px, 365px)">
            <g>
                <g id="Pc4Sao">
                    <g>
                        <path
                            d="M70.21,22.98c.01-5.94,3.79-11.35,9.35-13.31.8-.28,1.63-.44,2.46-.64.18-.04.27-.11.26-.29,0-.04,0-.08,0-.12.08-.56-.1-.93-.58-1.32-1.31-1.07-1.74-2.51-1.34-4.15.4-1.61,1.45-2.64,3.07-3.03,2.76-.67,5.36,1.58,5.1,4.41-.12,1.26-.69,2.28-1.74,3-.21.15-.32.3-.29.56.03.28-.06.65.09.83.14.17.51.14.79.2,3.19.71,5.84,2.32,7.93,4.83,1.61,1.93,2.62,4.15,3.03,6.62.64,3.88-.21,7.44-2.49,10.65-1.81,2.54-4.25,4.24-7.2,5.2-5.77,1.88-12.34-.35-15.81-5.34-1.25-1.8-2.06-3.78-2.41-5.94-.12-.72-.14-1.45-.2-2.17ZM95.51,22.96c0-6.17-4.99-11.16-11.14-11.16-6.11,0-11.14,5.02-11.14,11.11,0,6.19,4.98,11.19,11.15,11.19,6.14,0,11.13-5,11.13-11.14ZM84.38,6.06c.6,0,1.2.02,1.8-.01.15,0,.35-.11.44-.23.58-.77.72-1.64.41-2.55-.37-1.09-1.16-1.74-2.29-1.88-1.21-.15-2.19.33-2.79,1.4-.58,1.03-.48,2.07.19,3.05.11.16.25.23.45.23.6-.01,1.2,0,1.8,0Z" />
                        <path
                            d="M93.6,10.47c.7-.69,1.4-1.38,2.11-2.07.04-.04.22.01.28.08.71.69,1.4,1.39,2.1,2.08.34.34.67.68,1.02,1.01.12.12.13.21,0,.32-.64.64-1.29,1.28-1.93,1.92-.1.11-.19.12-.3,0-1.06-1.07-2.13-2.13-3.2-3.19-.03-.03-.05-.08-.09-.17Z" />
                        <path
                            d="M75.21,10.56c-.35.33-.69.62-1.01.93-.76.75-1.52,1.5-2.26,2.27-.18.18-.28.17-.45,0-.59-.61-1.19-1.2-1.8-1.8-.16-.15-.16-.26,0-.42,1.03-1.03,2.07-2.06,3.09-3.09.12-.12.2-.12.32,0,.67.68,1.35,1.35,2.11,2.11Z" />
                        <path
                            d="M84.38,26.39c-1.67,0-3.13-1.22-3.4-2.78-.29-1.69.59-3.38,2.33-3.94,1.17-.38,2.27-.16,3.25.61.19.15.33.17.57.1,1.82-.59,3.65-1.17,5.48-1.74.12-.04.25-.06.38-.06.34,0,.6.19.69.47.08.29-.03.63-.32.8-.65.38-1.3.73-1.96,1.1-1.1.61-2.2,1.21-3.31,1.81-.16.09-.25.19-.26.39-.1,1.83-1.61,3.24-3.44,3.24Z" />
                    </g>
                </g>
                <g>
                    <path
                        d="M46.75,26.29c-7.09.05-12.88,2.33-18.02,6.13-1.35.99-2.58,2.12-3.85,3.19-.56.47-1.14.57-1.68.04-.5-.49-.4-1.02.09-1.48,4.55-4.25,9.73-7.56,16.12-9.04,6.4-1.48,12.62-.79,18.67,1.46,3.77,1.4,7.23,3.31,10.37,5.68.26.2.52.39.75.61.45.44.55.94.09,1.42-.46.48-1.03.46-1.55.1-.7-.49-1.34-1.05-2.04-1.54-4.72-3.3-9.94-5.57-15.87-6.35-.33-.04-.66-.08-1-.1-.82-.05-1.64-.1-2.08-.12Z" />
                    <path
                        d="M56.88,40.47c1.03,1.14,2.27,1.99,3.87,2.59.24.09.5.17.74.26.58.21.83.53.56.95-.28.44-.85.5-1.4.33-.68-.21-1.34-.47-1.96-.75-1.41-.64-2.55-1.48-3.42-2.49-.27-.31-.52-.42-1.07-.32-1.09.21-2.2.38-3.32.5-.65.07-.82.26-.73.69.2.92.35,1.84.52,2.75.03.13.07.27.08.4.05.56-.27.91-.9.93-.73.03-1.04-.28-1.13-.74-.18-.99-.34-1.99-.54-2.99-.2-.98-.05-.8-1.34-.82-.77-.01-1.75-.24-2.25,0-.48.24-.4.99-.7,1.47-.57.9-1.2,1.78-1.88,2.63-.37.47-1.03.56-1.54.33-.5-.23-.55-.66-.11-1.12.92-.96,1.56-1.99,1.91-3.12.12-.38,0-.57-.58-.65-.81-.12-1.61-.27-2.4-.45-.48-.11-.73-.04-.98.28-1.21,1.56-3,2.71-5.25,3.51-.55.2-1.13.19-1.46-.21-.33-.41-.17-.78.47-1.02.27-.1.53-.21.79-.32,1.43-.6,2.57-1.39,3.45-2.38.11-.13.21-.27.36-.47-1.23-.43-2.43-.85-3.64-1.24-.11-.04-.39.09-.52.19-1.92,1.49-4.35,2.28-7.17,2.53-.14.01-.27.03-.41.03-.77.03-1.3-.22-1.31-.65,0-.5.46-.66,1.1-.77,1.23-.2,2.5-.37,3.64-.73.98-.3,1.8-.85,2.83-1.35-.97-.48-1.72-.87-2.51-1.21-.14-.06-.49,0-.65.07-2.43,1.25-5.24,1.59-8.16,1.64-.84.01-1.37-.28-1.31-.72.06-.53.57-.7,1.27-.7,1.99,0,3.92-.22,5.72-.83.41-.14.78-.33,1.22-.52-.47-.37-.86-.66-1.23-.97-.39-.33-.42-.69.06-.98.5-.3,1-.23,1.47.08,4.68,3.12,10.16,5.18,16.55,6,4.98.64,9.69-.1,14.2-1.56,2.14-.7,4.16-1.52,6.06-2.48,1.12-.57,2.2-1.18,3.24-1.83.14-.09.29-.25.44-.25.43-.01.96-.07,1.28.08.47.21.43.61.08.92-.28.24-.61.46-.96.64-.47.24-.45.47-.15.78,1.45,1.5,3.52,2.3,6.01,2.65.19.03.39.04.57.08.58.12.9.39.78.82-.12.43-.56.63-1.16.57-3.09-.35-5.74-1.25-7.63-3.06-.15-.14-.29-.28-.43-.42-.03-.03-.09-.05-.21-.11-.94.45-1.9.91-2.93,1.4,1.32,1.25,2.94,2.11,4.9,2.66.28.08.58.14.86.22.55.17.77.53.51.85-.18.23-.71.44-1.08.44-.53,0-1.06-.19-1.57-.35-2-.6-3.64-1.53-5-2.71-.35-.3-.6-.35-1.09-.17-1.09.4-2.22.76-3.44,1.16Z" />
                    <path
                        d="M37.75,48.97c-.93,1.27-2.06,2.23-3.52,2.9-.22.1-.45.19-.67.29-.53.23-.75.59-.51,1.07.25.49.77.56,1.28.37.62-.24,1.22-.52,1.78-.84,1.28-.72,2.31-1.66,3.1-2.79.24-.34.47-.47.97-.35.99.23,2,.42,3.02.56.59.08.75.29.66.78-.18,1.02-.32,2.06-.48,3.08-.02.15-.06.3-.07.45-.05.63.24,1.02.82,1.04.66.03.95-.31,1.03-.83.17-1.11.31-2.23.49-3.34.18-1.09.05-.89,1.22-.92.7-.01,1.59-.27,2.05,0,.44.27.36,1.1.64,1.64.52,1,1.09,1.99,1.71,2.95.34.53.93.63,1.4.37.45-.25.5-.74.1-1.26-.84-1.07-1.42-2.23-1.73-3.49-.11-.43,0-.63.52-.73.74-.13,1.47-.31,2.18-.51.44-.12.67-.05.89.31,1.09,1.75,2.72,3.03,4.77,3.93.5.22,1.03.22,1.32-.24.3-.46.15-.88-.43-1.14-.24-.11-.48-.24-.72-.36-1.29-.67-2.34-1.56-3.13-2.66-.1-.15-.19-.3-.32-.52,1.12-.48,2.2-.95,3.31-1.39.1-.04.36.1.47.21,1.75,1.67,3.95,2.56,6.51,2.84.12.01.25.03.37.04.7.04,1.18-.25,1.19-.73,0-.56-.41-.74-1-.86-1.12-.22-2.27-.42-3.31-.82-.89-.34-1.64-.95-2.57-1.51.88-.54,1.57-.97,2.28-1.36.13-.07.44-.01.59.08,2.21,1.4,4.76,1.78,7.41,1.83.77.02,1.24-.31,1.19-.81-.06-.59-.52-.78-1.15-.78-1.8,0-3.56-.24-5.2-.93-.37-.16-.71-.37-1.11-.58.42-.41.78-.74,1.11-1.08.36-.37.38-.77-.06-1.09-.46-.34-.91-.26-1.34.09-4.25,3.5-9.23,5.8-15.03,6.72-4.52.72-8.8-.11-12.9-1.75-3.1-1.24-5.91-2.86-8.44-4.83-.13-.1-.26-.27-.4-.28-.39-.02-.87-.07-1.16.09-.43.24-.4.69-.07,1.03.25.27.55.51.87.71.42.27.41.53.14.87-1.32,1.68-3.2,2.58-5.46,2.97-.17.03-.35.04-.52.09-.53.14-.81.44-.71.92.1.48.51.71,1.05.63,2.81-.39,5.21-1.4,6.93-3.43.13-.16.26-.32.39-.47.03-.03.08-.05.19-.12.85.5,1.73,1.02,2.66,1.57-1.19,1.4-2.67,2.36-4.45,2.98-.26.09-.53.15-.78.25-.5.19-.7.59-.46.95.17.25.65.5.98.49.48,0,.96-.22,1.42-.39,1.81-.68,3.31-1.72,4.54-3.03.32-.34.55-.39.99-.19.99.45,2.02.85,3.12,1.3Z" />
                    <path
                        class="cls-1"
                        d="M23.55,36.01c.03,1.55,1.32,5.35,3.81,6.47" />
                    <path
                        class="cls-1"
                        d="M67.98,36.01s.33,2.37-2.13,5.74c-.82,1.12-.33,1.08-1.88,2.37" />
                </g>
                <g>
                    <path d="M14.91,69.84v-7.1h4.32v1.38h-2.87v1.47h2.25v1.38h-2.25v2.87h-1.45Z" />
                    <path
                        d="M20.53,69.84v-7.1h2.72c.65,0,1.17.2,1.58.6s.61.9.61,1.5c0,.93-.49,1.55-1.46,1.85l2.55,3.15h-1.75l-2.44-2.99h-.35v2.99h-1.45ZM21.98,65.61h1.1c.28,0,.5-.07.67-.21s.25-.32.25-.56-.08-.43-.25-.56-.38-.21-.67-.21h-1.1v1.54Z" />
                    <path d="M27.29,69.84v-7.1h4.42v1.38h-2.97v1.46h2.37v1.38h-2.37v1.5h2.97v1.38h-4.42Z" />
                    <path
                        d="M36.3,69.96c-1.07,0-1.95-.35-2.66-1.06-.71-.71-1.06-1.58-1.06-2.61s.35-1.9,1.06-2.61c.71-.71,1.59-1.06,2.66-1.06.81,0,1.53.24,2.18.71.64.47,1.06,1.08,1.26,1.83h-1.57c-.14-.35-.38-.62-.73-.83-.35-.21-.73-.31-1.14-.31-.67,0-1.21.22-1.63.65s-.63.97-.63,1.62.21,1.19.63,1.62c.42.43.96.65,1.63.65.41,0,.79-.1,1.14-.31.35-.21.59-.48.73-.83h1.57c-.2.75-.62,1.36-1.26,1.83-.64.47-1.37.71-2.18.71Z" />
                    <path
                        d="M43.8,69.96c-.86,0-1.56-.27-2.09-.8-.53-.53-.8-1.24-.8-2.12v-4.3h1.45v4.32c0,.47.13.83.39,1.1.26.27.61.4,1.05.4s.79-.13,1.05-.4c.26-.27.39-.63.39-1.1v-4.32h1.45v4.3c0,.87-.27,1.58-.81,2.11s-1.23.81-2.08.81Z" />
                    <path d="M48.39,69.84v-7.1h4.42v1.38h-2.97v1.46h2.37v1.38h-2.37v1.5h2.97v1.38h-4.42Z" />
                    <path d="M60.61,69.84h-1.25l-3.64-4.63v4.63h-1.45v-7.1h1.25l3.64,4.63v-4.63h1.45v7.1Z" />
                    <path
                        d="M65.7,69.96c-1.07,0-1.95-.35-2.66-1.06-.71-.71-1.06-1.58-1.06-2.61s.35-1.9,1.06-2.61c.71-.71,1.59-1.06,2.66-1.06.81,0,1.53.24,2.18.71.64.47,1.06,1.08,1.26,1.83h-1.57c-.14-.35-.38-.62-.73-.83-.35-.21-.73-.31-1.14-.31-.67,0-1.21.22-1.63.65s-.63.97-.63,1.62.21,1.19.63,1.62c.42.43.96.65,1.63.65.41,0,.79-.1,1.14-.31.35-.21.59-.48.73-.83h1.57c-.2.75-.62,1.36-1.26,1.83-.64.47-1.37.71-2.18.71Z" />
                    <path d="M70.39,69.84v-7.1h1.45v7.1h-1.45Z" />
                    <path
                        d="M72.84,69.84l3.06-7.1h1.29l3.07,7.1h-1.52l-.69-1.62h-3.03l-.68,1.62h-1.5ZM76.54,64.65l-.98,2.3h1.95l-.97-2.3Z" />
                    <path
                        d="M83.42,69.84v-7.1h2.34c1.02,0,1.88.34,2.59,1.03.71.69,1.06,1.53,1.06,2.52s-.35,1.83-1.06,2.52c-.71.69-1.57,1.03-2.59,1.03h-2.34ZM84.87,68.51h.89c.65,0,1.17-.21,1.58-.64.41-.43.61-.95.61-1.58s-.2-1.15-.61-1.58-.93-.64-1.58-.64h-.89v4.44Z" />
                    <path d="M90.78,69.84v-7.1h4.42v1.38h-2.97v1.46h2.37v1.38h-2.37v1.5h2.97v1.38h-4.42Z" />
                    <path
                        d="M4.14,73.42c.47.46.71,1.02.71,1.71s-.24,1.25-.71,1.71c-.47.46-1.07.69-1.78.69h-.91v2.32H0v-7.1h2.36c.71,0,1.31.23,1.78.69ZM3.14,75.87c.2-.19.3-.44.3-.74s-.1-.55-.3-.74c-.2-.19-.47-.29-.8-.29h-.89v2.06h.89c.33,0,.6-.1.8-.29Z" />
                    <path
                        d="M4.88,79.84l3.06-7.1h1.29l3.07,7.1h-1.52l-.69-1.62h-3.03l-.68,1.62h-1.5ZM8.58,74.65l-.98,2.3h1.95l-.97-2.3Z" />
                    <path
                        d="M13.29,79.84v-7.1h2.72c.65,0,1.17.2,1.58.6s.61.9.61,1.5c0,.93-.49,1.55-1.46,1.85l2.55,3.15h-1.75l-2.44-2.99h-.35v2.99h-1.45ZM14.74,75.61h1.1c.28,0,.5-.07.67-.21s.25-.32.25-.56-.08-.43-.25-.56-.38-.21-.67-.21h-1.1v1.54Z" />
                    <path
                        d="M24.19,73.42c.47.46.71,1.02.71,1.71s-.24,1.25-.71,1.71c-.47.46-1.07.69-1.78.69h-.91v2.32h-1.45v-7.1h2.36c.71,0,1.31.23,1.78.69ZM23.19,75.87c.2-.19.3-.44.3-.74s-.1-.55-.3-.74c-.2-.19-.47-.29-.8-.29h-.89v2.06h.89c.33,0,.6-.1.8-.29Z" />
                    <path
                        d="M24.93,79.84l3.06-7.1h1.29l3.07,7.1h-1.52l-.69-1.62h-3.03l-.68,1.62h-1.5ZM28.63,74.65l-.98,2.3h1.95l-.97-2.3Z" />
                    <path
                        d="M33.34,79.84v-7.1h2.34c1.02,0,1.88.34,2.59,1.03.71.69,1.06,1.53,1.06,2.52s-.35,1.83-1.06,2.52c-.71.69-1.57,1.03-2.59,1.03h-2.34ZM34.79,78.51h.89c.65,0,1.17-.21,1.58-.64.41-.43.61-.95.61-1.58s-.2-1.15-.61-1.58-.93-.64-1.58-.64h-.89v4.44Z" />
                    <path d="M40.7,79.84v-7.1h4.42v1.38h-2.97v1.46h2.37v1.38h-2.37v1.5h2.97v1.38h-4.42Z" />
                    <path
                        d="M52.24,78.88c-.72.72-1.58,1.08-2.59,1.08s-1.88-.36-2.59-1.08c-.72-.72-1.08-1.58-1.08-2.59s.36-1.88,1.08-2.6c.72-.72,1.58-1.08,2.59-1.08s1.88.36,2.59,1.08c.72.72,1.08,1.58,1.08,2.6s-.36,1.88-1.08,2.59ZM48.08,77.89c.43.44.95.67,1.57.67s1.13-.22,1.57-.67c.43-.44.64-.98.64-1.6s-.21-1.16-.64-1.6c-.43-.44-.95-.67-1.57-.67s-1.13.22-1.57.67c-.43.44-.64.98-.64,1.6s.21,1.16.64,1.6Z" />
                    <path
                        d="M60.47,79.96c-1.07,0-1.95-.35-2.66-1.06-.71-.71-1.06-1.58-1.06-2.61s.35-1.9,1.06-2.61c.71-.71,1.59-1.06,2.66-1.06.81,0,1.53.24,2.18.71.64.47,1.06,1.08,1.26,1.83h-1.57c-.14-.35-.38-.62-.73-.83-.35-.21-.73-.31-1.14-.31-.67,0-1.21.22-1.63.65s-.63.97-.63,1.62.21,1.19.63,1.62c.42.43.96.65,1.63.65.41,0,.79-.1,1.14-.31.35-.21.59-.48.73-.83h1.57c-.2.75-.62,1.36-1.26,1.83-.64.47-1.37.71-2.18.71Z" />
                    <path
                        d="M71,78.88c-.72.72-1.58,1.08-2.59,1.08s-1.88-.36-2.59-1.08c-.72-.72-1.08-1.58-1.08-2.59s.36-1.88,1.08-2.6c.72-.72,1.58-1.08,2.59-1.08s1.88.36,2.59,1.08c.72.72,1.08,1.58,1.08,2.6s-.36,1.88-1.08,2.59ZM66.84,77.89c.43.44.95.67,1.57.67s1.13-.22,1.57-.67c.43-.44.64-.98.64-1.6s-.21-1.16-.64-1.6c-.43-.44-.95-.67-1.57-.67s-1.13.22-1.57.67c-.43.44-.64.98-.64,1.6s.21,1.16.64,1.6Z" />
                    <path
                        d="M73.44,72.74h1.32l2.31,3.17,2.31-3.17h1.32v7.1h-1.45v-4.62l-2.18,2.99-2.18-2.99v4.62h-1.45v-7.1Z" />
                    <path
                        d="M86.62,73.42c.47.46.71,1.02.71,1.71s-.24,1.25-.71,1.71c-.47.46-1.07.69-1.78.69h-.91v2.32h-1.45v-7.1h2.36c.71,0,1.31.23,1.78.69ZM85.62,75.87c.2-.19.3-.44.3-.74s-.1-.55-.3-.74c-.2-.19-.47-.29-.8-.29h-.89v2.06h.89c.33,0,.6-.1.8-.29Z" />
                    <path d="M88.59,79.84v-7.1h1.45v5.72h3.04v1.38h-4.49Z" />
                    <path d="M94.3,79.84v-7.1h4.42v1.38h-2.97v1.46h2.37v1.38h-2.37v1.5h2.97v1.38h-4.42Z" />
                    <path d="M101.49,79.84v-5.72h-1.89v-1.38h5.26v1.38h-1.91v5.72h-1.46Z" />
                    <path
                        d="M111.61,78.88c-.72.72-1.58,1.08-2.59,1.08s-1.88-.36-2.59-1.08c-.72-.72-1.08-1.58-1.08-2.59s.36-1.88,1.08-2.6c.72-.72,1.58-1.08,2.59-1.08s1.88.36,2.59,1.08c.72.72,1.08,1.58,1.08,2.6s-.36,1.88-1.08,2.59ZM107.45,77.89c.43.44.95.67,1.57.67s1.13-.22,1.57-.67c.43-.44.64-.98.64-1.6s-.21-1.16-.64-1.6c-.43-.44-.95-.67-1.57-.67s-1.13.22-1.57.67c-.43.44-.64.98-.64,1.6s.21,1.16.64,1.6Z" />
                </g>
            </g>
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'fr'"
            style="transform: translate(710px, 365px)"
        >
            <BlinkRateAndCompletenessFr :viewBox="null" />
        </g>
        <g v-else-if="$selectedLanguage.value === 'zh'" style="transform: translate(710px, 365px)">
            <BlinkRateAndCompletenessZh :viewBox="null" />
        </g>
    </g>
</template>

<style lang="postcss" scoped>
.cls-1 {
    fill: none;
    stroke: #000;
    stroke-linecap: round;
    stroke-miterlimit: 10;
    stroke-width: 1.5px;
}
</style>
