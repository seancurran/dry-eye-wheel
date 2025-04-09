<script setup>
import { storeToRefs } from 'pinia';
import { watch, nextTick } from 'vue';
import { useControlsStore } from '../../stores/controlsStore.js';
import GradientButton from '../GradientButton.vue';

const controlsStore = useControlsStore();
const { sliderValue } = storeToRefs(controlsStore);

watch(sliderValue, () => {
    console.log(sliderValue.value);
    if (sliderValue.value === 0) {
        document.getElementById('scroll-me').scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    if (sliderValue.value === 50) {
        document.getElementById('scroll-me').scrollTo({
            top: 392,
            behavior: 'smooth',
        });
    }
    if (sliderValue.value === 100) {
        document.getElementById('scroll-me').scrollTo({
            top: 760,
            behavior: 'smooth',
        });
    }
});
</script>

<template>
    <div
        id="scroll-me"
        class="mx-6 flex w-full flex-col gap-3 overflow-y-hidden p-[3px]">
        <!-- Mitigation -->
        <GradientButton
            id="mitigation-area"
            @click="controlsStore.selectArea('mitigation')"
            :class="{ active: controlsStore.selectedArea === 'mitigation' }"
            class="btn-area">
            {{ $t('Mitigation') }}
        </GradientButton>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectSection('risk-factors', 'mitigation')"
                :class="{ active: controlsStore.selectedSection === 'risk-factors' }"
                class="btn-section">
                {{ $t('Risk Factors') }}
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectSection('triaging', 'mitigation')"
                :class="{ active: controlsStore.selectedSection === 'triaging' }"
                class="btn-section">
                {{ $t('Triaging') }}
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('sleep', 'risk-factors', 'mitigation')"
                :class="{ active: controlsStore.selectedItem === 'sleep' }"
                class="btn-orange">
                {{ $t('Sleep') }}
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('questionnaire', 'triaging', 'mitigation')"
                :class="{ active: controlsStore.selectedItem === 'questionnaire' }"
                class="btn-orange">
                {{ $t('History & Symptoms') }}
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('contact-lens', 'risk-factors', 'mitigation')"
                :class="{ active: controlsStore.selectedItem === 'contact-lens' }"
                class="btn-orange">
                {{ $t('Contact Lens') }}
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('differential', 'triaging', 'mitigation')"
                :class="{ active: controlsStore.selectedItem === 'differential' }"
                class="btn-silver">
                {{ $t('Differential') }}
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('eye-strain', 'risk-factors', 'mitigation')"
                :class="{ active: controlsStore.selectedItem === 'eye-strain' }"
                class="btn-orange">
                {{ $t('Eye Strain') }}
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('prophylaxis', 'triaging', 'mitigation')"
                :class="{ active: controlsStore.selectedItem === 'prophylaxis' }"
                class="btn-yellow">
                {{ $t('Prophylaxis') }}
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('environment', 'risk-factors', 'mitigation')"
                :class="{ active: controlsStore.selectedItem === 'environment' }"
                class="btn-silver">
                {{ $t('Environment') }}
            </GradientButton>
            <div>&nbsp;</div>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('hormones', 'risk-factors', 'mitigation')"
                :class="{ active: controlsStore.selectedItem === 'hormones' }"
                class="btn-silver">
                {{ $t('Hormones') }}
            </GradientButton>
            <div>&nbsp;</div>
        </div>
        <div class="mb-6 grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('medication-review', 'risk-factors', 'mitigation')"
                :class="{ active: controlsStore.selectedItem === 'medication-review' }"
                class="btn-yellow">
                {{ $t('Medication Review') }}
            </GradientButton>
            <div>&nbsp;</div>
        </div>

        <!-- Measurement -->
        <GradientButton
            id="measurement-area"
            @click="controlsStore.selectArea('measurement')"
            :class="{ active: controlsStore.selectedArea === 'measurement' }"
            class="btn-area">
            {{ $t('Measurement') }}
        </GradientButton>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectSection('diagnosis', 'measurement')"
                :class="{ active: controlsStore.selectedSection === 'diagnosis' }"
                class="btn-section">
                {{ $t('Diagnosis') }}
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectSection('sub-classification', 'measurement')"
                :class="{ active: controlsStore.selectedSection === 'sub-classification' }"
                class="btn-section">
                {{ $t('Sub-Classification') }}
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('comfort-time-after-blink-test', 'diagnosis', 'measurement')"
                :class="{ active: controlsStore.selectedItem === 'comfort-time-after-blink-test' }"
                class="btn-orange">
                {{ $t('Comfort Time After Blink Test') }}
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('blink-rate-and-completeness', 'sub-classification', 'measurement')"
                :class="{ active: controlsStore.selectedItem === 'blink-rate-and-completeness' }"
                class="btn-orange">
                {{ $t('Blink Rate & Completeness') }}
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('validated-questionnaire', 'diagnosis', 'measurement')"
                :class="{ active: controlsStore.selectedItem === 'validated-questionnaire' }"
                class="btn-orange">
                {{ $t('Validated Questionnaire') }}
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('tear-meniscus-height', 'sub-classification', 'measurement')"
                :class="{ active: controlsStore.selectedItem === 'tear-meniscus-height' }"
                class="btn-silver">
                {{ $t('Tear Meniscus Height') }}
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('fluorescein-staining', 'diagnosis', 'measurement')"
                :class="{ active: controlsStore.selectedItem === 'fluorescein-staining' }"
                class="btn-silver">
                {{ $t('Fluorescein Staining') }}
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('meibomian-gland-expression', 'sub-classification', 'measurement')"
                :class="{ active: controlsStore.selectedItem === 'meibomian-gland-expression' }"
                class="btn-silver">
                {{ $t('Meibomian Gland Expression') }}
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('non-invasive-breakup-time', 'diagnosis', 'measurement')"
                :class="{ active: controlsStore.selectedItem === 'non-invasive-breakup-time' }"
                class="btn-silver">
                {{ $t('Non-Invasive Breakup Time') }}
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('meibography', 'sub-classification', 'measurement')"
                :class="{ active: controlsStore.selectedItem === 'meibography' }"
                class="btn-yellow">
                {{ $t('Meibography') }}
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('osmolarity', 'diagnosis', 'measurement')"
                :class="{ active: controlsStore.selectedItem === 'osmolarity' }"
                class="btn-silver">
                {{ $t('Osmolarity') }}
            </GradientButton>
            <div>&nbsp;</div>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('lissamine-green-staining', 'diagnosis', 'measurement')"
                :class="{ active: controlsStore.selectedItem === 'lissamine-green-staining' }"
                class="btn-yellow">
                {{ $t('Lissamine Green Staining') }}
            </GradientButton>
            <div>&nbsp;</div>
        </div>

        <!-- Management -->
        <GradientButton
            id="management-area"
            @click="controlsStore.selectArea('management')"
            :class="{ active: controlsStore.selectedArea === 'management' }"
            class="btn-area">
            {{ $t('Management') }}
        </GradientButton>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('lid-hygiene', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'lid-hygiene' }"
                class="btn-orange">
                {{ $t('Lid Hygiene') }}
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('warm-compress', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'warm-compress' }"
                class="btn-orange">
                {{ $t('Warm Compress') }}
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('blink-exercises', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'blink-exercises' }"
                class="btn-orange">
                {{ $t('Blink Exercises') }}
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('advice', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'advice' }"
                class="btn-orange">
                {{ $t('Advice') }}
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('artificial-tears', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'artificial-tears' }"
                class="btn-orange">
                {{ $t('Artificial Tears') }}
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('diet-and-dietary-supplements', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'diet-and-dietary-supplements' }"
                class="btn-orange">
                {{ $t('Diet And Dietary Supplements') }}
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('scleral-lenses', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'scleral-lenses' }"
                class="btn-silver">
                {{ $t('Scleral Lenses') }}
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('pharmaceuticals', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'pharmaceuticals' }"
                class="btn-silver">
                {{ $t('Pharmaceuticals') }}
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('in-office-treatments', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'in-office-treatments' }"
                class="btn-silver">
                {{ $t('In-Office Treatments') }}
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('punctal-plugs', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'punctal-plugs' }"
                class="btn-yellow">
                {{ $t('Punctal Plugs') }}
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('complex-treatments', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'complex-treatments' }"
                class="btn-yellow">
                {{ $t('Complex Treatments') }}
            </GradientButton>
        </div>
        <!-- Empty space -->
        <div class="h-[600px]">
            <div class="h-[600px]">&nbsp;</div>
        </div>
    </div>
</template>
