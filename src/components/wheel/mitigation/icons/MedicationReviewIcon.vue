<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
import MedicationReviewEs from '@/assets/svg/es/medication-review.svg';
import MedicationReviewFr from '@/assets/svg/fr/medication-review.svg';
import MedicationReviewZh from '@/assets/svg/zh/medication-review.svg';
const controlsStore = useControlsStore();
</script>

<template>
    <g :class="{ 'svg-active': controlsStore.selectedItem === 'medication-review' }"
        class="svg-fill-path"
    >
        <g v-if="$selectedLanguage.value === 'en'">
            <g>
                <g>
                    <path
                        d="m369.92,387.25c.16-.13.34-.25.49-.4,3.22-2.99,8.19-1.55,9.22,2.71.42,1.75.07,3.43-1.18,4.77-1.71,1.83-3.51,3.57-5.28,5.34-1.94,1.95-3.86,3.91-5.84,5.83-3.1,3-8.19,1.53-9.16-2.68-.19-.85-.09-1.8.03-2.67.14-.94.22-.92-.76-.92-3.9,0-7.8,0-11.7,0-1.14,0-1.34-.19-1.34-1.32,0-9.79,0-19.58,0-29.37,0-1.27.18-1.45,1.46-1.45,5.05,0,10.1,0,15.14,0,.58,0,1.01.17,1.41.58,2.27,2.29,4.55,4.56,6.84,6.83.4.39.44.85.44,1.35,0,3.51,0,7.02,0,10.53,0,.26,0,.52,0,.78l.2.1Zm-23.85-4.11c0,4.58,0,9.15-.01,13.73,0,.56.17.75.73.75,4.08-.02,8.16,0,12.25-.03.36,0,.81-.2,1.07-.45,2.52-2.47,5-4.98,7.5-7.47.37-.36.52-.74.51-1.25-.01-3.84,0-7.67,0-11.51,0-.81-.04-.84-.82-.84-1.81,0-3.61,0-5.42,0-.89,0-1.12-.25-1.12-1.15,0-1.79,0-3.57,0-5.36,0-.82-.03-.85-.81-.85-4.35,0-8.7,0-13.05,0-.82,0-.82,0-.82.82,0,4.53,0,9.07,0,13.6Zm28.52,3.74c-1.32,0-2.21.33-2.93,1.02-1.54,1.5-3.05,3.04-4.58,4.55-.27.27-.31.48-.02.77,1.59,1.57,3.17,3.15,4.74,4.74.3.3.53.29.82,0,1.5-1.52,3.04-2.99,4.5-4.54,1.16-1.22,1.37-2.7.7-4.22-.66-1.51-1.9-2.25-3.24-2.32Zm-14.98,14.63c0,1.62.88,3,2.39,3.62,1.51.63,2.94.39,4.12-.71,1.56-1.45,3.02-3.01,4.54-4.51.32-.31.34-.53.01-.86-1.55-1.52-3.09-3.06-4.61-4.61-.35-.36-.61-.37-.97,0-1.44,1.46-2.9,2.9-4.34,4.36-.73.75-1.14,1.65-1.14,2.71Zm7.05-27.05c-1.47-1.47-2.84-2.84-4.21-4.22,0,0-.07.07-.07.14-.01,1.23-.03,2.46,0,3.68,0,.14.31.36.49.38.63.05,1.27.02,1.9.02.6,0,1.21,0,1.88,0Z" />
                    <path
                        d="m355.02,395.46c-.04.19-.04.21-.05.23q-.92,1.17-1.97.13c-.84-.83-.7-.94-1.64.01-1.18,1.19-.77.98-1.88,0-.04-.04-.07-.1-.15-.23.43-.43.86-.89,1.31-1.32.31-.29.34-.57,0-.81-1.29-.89-1.58-2.13-1.47-3.63.12-1.57.04-3.16.02-4.74,0-.46.16-.62.61-.6.66.03,1.31,0,1.97.01,1.45.03,2.51,1.07,2.54,2.47.03,1.3-1.02,2.41-2.4,2.47-1.04.04-1.05-.12-1.1,1.22-.03.96.71,1.32,1.24,1.85.06.06.36-.03.47-.13.37-.33.72-.68,1.05-1.04.29-.32.54-.32.8.02.1.13.22.25.34.35.34.28.3.52,0,.81-.33.3-.63.65-.96.95-.29.27-.3.5-.01.77.45.42.9.84,1.31,1.23Zm-4.21-8.61c0,.93.05,1,.7,1,.74,0,1.15-.31,1.16-.88,0-.57-.4-.85-1.14-.9-.72-.05-.76.37-.71.78Z" />
                    <path
                        d="m352.63,376.68c-1.15,0-2.29-.03-3.44.01-.71.03-.58-.43-.6-.85-.02-.45,0-.78.62-.77,2.33.03,4.67.03,7,0,.63,0,.62.34.62.78,0,.45.05.85-.64.83-1.19-.05-2.37-.01-3.56-.01Z" />
                    <path
                        d="m351.76,373.21c-.86,0-1.72-.02-2.58,0-.47.02-.63-.17-.59-.61.02-.18-.05-.4.02-.55.09-.18.28-.42.43-.42,1.8-.03,3.61-.02,5.42-.02.35,0,.47.18.45.5-.01.18-.03.37-.01.55.03.4-.16.54-.55.54-.86-.02-1.72,0-2.58,0Z" />
                </g>
            </g>
            <g>
                <path
                    class="mitigation-cls-1"
                    d="m335.25,410.57v7.1h-1.45v-4.62l-2.18,2.99-2.18-2.99v4.62h-1.45v-7.1h1.32l2.31,3.16,2.31-3.16h1.32Z" />
                <path
                    class="mitigation-cls-1"
                    d="m341.5,410.57v1.38h-2.97v1.46h2.37v1.38h-2.37v1.5h2.97v1.38h-4.42v-7.1h4.42Z" />
                <path
                    class="mitigation-cls-1"
                    d="m345.35,410.57c1.99-.04,3.69,1.62,3.65,3.55.04,1.93-1.66,3.59-3.65,3.55h-2.34v-7.1h2.34Zm0,1.33h-.89v4.44h.89c1.29,0,2.19-.99,2.19-2.22s-.9-2.22-2.19-2.22Z" />
                <path
                    class="mitigation-cls-1"
                    d="m351.87,410.57v7.1h-1.45v-7.1h1.45Z" />
                <path
                    class="mitigation-cls-1"
                    d="m360.45,415.25c-.38,1.49-1.84,2.54-3.44,2.54-2.11.04-3.76-1.64-3.72-3.67-.04-2.03,1.61-3.71,3.72-3.67,1.6,0,3.06,1.05,3.44,2.54h-1.57c-.29-.69-1.06-1.14-1.87-1.14-1.33,0-2.26,1-2.26,2.27s.93,2.27,2.26,2.27c.81,0,1.58-.45,1.87-1.14h1.57Z" />
                <path
                    class="mitigation-cls-1"
                    d="m365.99,416.05h-3.02l-.69,1.62h-1.5l3.06-7.1h1.29l3.07,7.1h-1.52l-.69-1.62Zm-.53-1.27l-.98-2.31-.98,2.31h1.96Z" />
                <path
                    class="mitigation-cls-1"
                    d="m367.97,411.95v-1.38h5.26v1.38h-1.91v5.72h-1.46v-5.72h-1.89Z" />
                <path
                    class="mitigation-cls-1"
                    d="m375.93,410.57v7.1h-1.45v-7.1h1.45Z" />
                <path
                    class="mitigation-cls-1"
                    d="m381.01,410.45c1.98-.04,3.71,1.69,3.67,3.67.04,1.98-1.69,3.71-3.67,3.67-1.98.04-3.71-1.69-3.67-3.67-.04-1.98,1.69-3.71,3.67-3.67Zm0,1.4c-1.21-.03-2.23,1.06-2.21,2.27-.02,1.21,1,2.3,2.21,2.27,1.21.03,2.23-1.06,2.21-2.27.02-1.21-1-2.3-2.21-2.27Z" />
                <path
                    class="mitigation-cls-1"
                    d="m392.43,410.57v7.1h-1.25l-3.64-4.63v4.63h-1.45v-7.1h1.25l3.64,4.63v-4.63h1.45Z" />
                <path
                    class="mitigation-cls-1"
                    d="m345.82,427.67l-2.43-2.99h-.36v2.99h-1.45v-7.1h2.72c1.31,0,2.18.91,2.18,2.1,0,.92-.49,1.54-1.46,1.85l2.55,3.15h-1.75Zm-1.69-4.23c.55,0,.91-.29.91-.77s-.36-.77-.91-.77h-1.1v1.54h1.1Z" />
                <path
                    class="mitigation-cls-1"
                    d="m352.81,420.57v1.38h-2.97v1.46h2.37v1.38h-2.37v1.5h2.97v1.38h-4.42v-7.1h4.42Z" />
                <path
                    class="mitigation-cls-1"
                    d="m360.72,420.57l-2.94,7.1h-1.29l-2.93-7.1h1.57l2.01,4.93,1.98-4.93h1.6Z" />
                <path
                    class="mitigation-cls-1"
                    d="m363.24,420.57v7.1h-1.45v-7.1h1.45Z" />
                <path
                    class="mitigation-cls-1"
                    d="m369.48,420.57v1.38h-2.97v1.46h2.37v1.38h-2.37v1.5h2.97v1.38h-4.42v-7.1h4.42Z" />
                <path
                    class="mitigation-cls-1"
                    d="m379.64,420.57l-1.71,7.1h-1.36l-1.56-3.77-1.56,3.77h-1.36l-1.71-7.1h1.54l1.08,4.72,2.01-4.84,2.01,4.84,1.08-4.72h1.54Z" />
            </g>
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'es'"
            style="transform: translate(330px, 374px)"
        >
            <MedicationReviewEs :viewBox="null" />
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'fr'"
            style="transform: translate(330px, 374px)">
            <MedicationReviewFr :viewBox="null" />
        </g>
        <g
            v-else-if="$selectedLanguage.value === 'zh'"
            style="transform: translate(335px, 370px)">
            <MedicationReviewZh :viewBox="null" />
        </g>
    </g>
</template>
