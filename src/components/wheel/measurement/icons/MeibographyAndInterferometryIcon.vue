<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
const controlsStore = useControlsStore();
</script>

<template>
    <g
        class="svg-icon"
        :class="{ 'svg-active': controlsStore.selectedItem === 'meibography-and-interferometry' }"
        style="transform: translate(140px, 90px)">
        <!-- Icon -->
        <g class="scale-75">
            <g>
                <path
                    :class="{ '!fill-white': controlsStore.selectedItem === 'meibography-and-interferometry' }"
                    d="m523.92,387.49c1.1-.4,2.22-1.14,2.78-2.38,1.03-2.26-1.24-6.03.61-6.25,1.33-.16,1.58.99,1.26,1.03-.26-.58-.54-1.67-.97-2.32-.2-.31-.49,0-.69-.27-.21-.07-.4-1.96-.81-1.39-.27.38-.87-.64-1-.85l.25,9.12c0,.42-.49.77-1.09.77s-1.09-.35-1.09-.77v-9.97c-.47-.33-.97-.64-1.5-.92v10.89c0,.42-.49.77-1.09.77s-1.09-.35-1.09-.77v-11.88c-.48-.18-.98-.35-1.5-.51v12.39c0,.42-.49.77-1.09.77s-1.09-.35-1.09-.77v-12.92c-.49-.09-1.01-.19-1.54-.28,0,.04.03.08.03.12v13.08c0,.42-.49.77-1.09.77s-1.09-.35-1.09-.77v-13.08c0-.1.03-.2.08-.29-.61,0-1.13,0-1.46.01-.05,0-.13,0-.2,0,.05.08.08.17.08.27v5.69c0,.42-.49.77-1.09.77s-1.09-.35-1.09-.77v-5.69s.01-.03.02-.05c-.51.06-1.01.14-1.52.23v5.51c0,.42-.49.77-1.09.77s-1.09-.35-1.09-.77v-5.05c-.52.15-1.01.33-1.5.52v11.92c0,.42-.49.77-1.09.77s-1.09-.35-1.09-.77v-10.91s-.08.04-.12.06c-.03.01-.07.02-.1.04-.47.23-.9.51-1.28.78v10.03c0,.42-.49.77-1.09.77s-1.09-.35-1.09-.77l-.32-8.75c-2.35,2.38-2.74,3.59-2.65,3.72.11.15.47-1.11,1.71-.39.82.48-.93,3.55,0,5.89.61,1.54,2.17,2.28,3.46,2.67,8.08.06,16.17.11,24.25.17Z" />
                <path
                    :class="{ '!fill-white': controlsStore.selectedItem === 'meibography-and-interferometry' }"
                    d="m517.32,395.34c1.28-1.08.94-2.49-.99-3.36-1.5-.68-3.18-.93-4.97-.94-1.78.02-3.48.25-4.96.95-1.6.76-2.1,1.79-1.52,2.73,4.02.94,8.27,1.3,12.45.62Z" />
                <path
                    :class="{ '!fill-white': controlsStore.selectedItem === 'meibography-and-interferometry' }"
                    class="measurement-cls-3"
                    d="m511.35,387.49c2.58.01,5,.38,7.17,1.33,3.27,1.45,3.38,3.94.25,5.51-3.85,1.92-10.79,1.94-14.66.04-3.27-1.6-3.25-3.98.09-5.53,2.14-.99,4.59-1.32,7.16-1.35Z" />
            </g>
            <path
                class="measurement-cls-10"
                d="m488.57,384s20.11-29.65,45.88,0c0,0-22.07,30.13-45.88,0Z" />
        </g>
        <!-- Use _lissamine_green_staining_icon translation with | as line break delimiter -->
        <text
            x="368"
            y="312"
            text-anchor="middle">
            <tspan
                v-for="(line, index) in $t('_meibography_and_interferometry_icon').split('|')"
                :key="index"
                x="368"
                :dy="index === 0 ? 0 : '1.2em'"
                :style="
                    $selectedLanguage.value === 'zh' ? 'font-size: 11px !important;' : 'font-size: 9px !important;'
                ">
                {{ line }}
            </tspan>
        </text>
    </g>
</template>

<style lang="postcss" scoped>
.cls-1 {
    stroke-width: 0.75px;
}

.cls-1,
.cls-2 {
    fill: none;
    stroke: #000;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.cls-2 {
    stroke-width: 3px;
}
</style>
