<script setup>
import { storeToRefs } from 'pinia';
import { watch } from 'vue';
import { useControlsStore } from '../../stores/controlsStore.js';
import GradientButton from '../GradientButton.vue';

const controlsStore = useControlsStore();
const { sliderValue } = storeToRefs(controlsStore);

watch(sliderValue, () => {
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
            <div
                v-for="(line, index) in $t('_mitigation_button').split('|')"
                :key="index">
                {{ line }}
            </div>
        </GradientButton>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectSection('risk-factors', 'mitigation')"
                :class="{ active: controlsStore.selectedSection === 'risk-factors' }"
                class="btn-section">
                <div
                    v-for="(line, index) in $t('_risk_factors_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectSection('triaging', 'mitigation')"
                :class="{ active: controlsStore.selectedSection === 'triaging' }"
                class="btn-section">
                <div
                    v-for="(line, index) in $t('_triaging_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('sleep', 'risk-factors', 'mitigation')"
                :class="{ active: controlsStore.selectedItem === 'sleep' }"
                class="btn-orange">
                <div
                    v-for="(line, index) in $t('_sleep_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('symptom-check', 'triaging', 'mitigation')"
                :class="{ active: controlsStore.selectedItem === 'symptom-check' }"
                class="btn-orange">
                <div
                    v-for="(line, index) in $t('_symptom_check_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('environment-advice', 'risk-factors', 'mitigation')"
                :class="{ active: controlsStore.selectedItem === 'environment-advice' }"
                class="btn-orange">
                <div
                    v-for="(line, index) in $t('_environment_advice_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('differential-diagnosis', 'triaging', 'mitigation')"
                :class="{ active: controlsStore.selectedItem === 'differential-diagnosis' }"
                class="btn-orange">
                <div
                    v-for="(line, index) in $t('_differential_diagnosis_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('contact-lens', 'risk-factors', 'mitigation')"
                :class="{ active: controlsStore.selectedItem === 'contact-lens' }"
                class="btn-orange">
                <div
                    v-for="(line, index) in $t('_contact_lens_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
            <GradientButton
                @click="
                    controlsStore.selectItem('proactive-management-of-ocular-surface-disease', 'triaging', 'mitigation')
                "
                :class="{ active: controlsStore.selectedItem === 'proactive-management-of-ocular-surface-disease' }"
                class="btn-silver">
                <div
                    v-for="(line, index) in $t('_proactive_management_of_ocular_surface_disease_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('digital-eye-strain', 'risk-factors', 'mitigation')"
                :class="{ active: controlsStore.selectedItem === 'digital-eye-strain' }"
                class="btn-orange">
                <div
                    v-for="(line, index) in $t('_digital_eye_strain_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('corneal-sensitivity-assessment', 'triaging', 'mitigation')"
                :class="{ active: controlsStore.selectedItem === 'corneal-sensitivity-assessment' }"
                class="btn-silver">
                <div
                    :class="{
                        'font-euclid-circular-bold': controlsStore.selectedItem === 'corneal-sensitivity-assessment',
                    }"
                    v-for="(line, index) in $t('_corneal_sensitivity_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('previous-eye-surgery', 'risk-factors', 'mitigation')"
                :class="{ active: controlsStore.selectedItem === 'previous-eye-surgery' }"
                class="btn-silver">
                <div
                    v-for="(line, index) in $t('_previous_eye_surgery_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('prophylaxis', 'triaging', 'mitigation')"
                :class="{ active: controlsStore.selectedItem === 'prophylaxis' }"
                class="btn-yellow">
                <div
                    v-for="(line, index) in $t('_prophylaxis_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('hormones', 'risk-factors', 'mitigation')"
                :class="{ active: controlsStore.selectedItem === 'hormones' }"
                class="btn-silver">
                <div
                    v-for="(line, index) in $t('_hormones_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
            <div>&nbsp;</div>
        </div>
        <div class="mb-6 grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('medication-review', 'risk-factors', 'mitigation')"
                :class="{ active: controlsStore.selectedItem === 'medication-review' }"
                class="btn-yellow">
                <div
                    v-for="(line, index) in $t('_medication_review_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
            <div>&nbsp;</div>
        </div>

        <!-- Measurement -->
        <GradientButton
            id="measurement-area"
            @click="controlsStore.selectArea('measurement')"
            :class="{ active: controlsStore.selectedArea === 'measurement' }"
            class="btn-area">
            <div
                v-for="(line, index) in $t('_measurement_button').split('|')"
                :key="index">
                {{ line }}
            </div>
        </GradientButton>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectSection('diagnosis', 'measurement')"
                :class="{ active: controlsStore.selectedSection === 'diagnosis' }"
                class="btn-section">
                <div
                    v-for="(line, index) in $t('_diagnosis_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectSection('sub-typing', 'measurement')"
                :class="{ active: controlsStore.selectedSection === 'sub-typing' }"
                class="btn-section">
                <div
                    v-for="(line, index) in $t('_sub_typing_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('comfort-time-after-blink-test', 'diagnosis', 'measurement')"
                :class="{ active: controlsStore.selectedItem === 'comfort-time-after-blink-test' }"
                class="btn-orange">
                <div
                    v-for="(line, index) in $t('_comfort_time_after_blink_test_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('blink-rate-and-completeness', 'sub-typing', 'measurement')"
                :class="{ active: controlsStore.selectedItem === 'blink-rate-and-completeness' }"
                class="btn-orange">
                <div
                    v-for="(line, index) in $t('_blink_rate_and_completeness_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('osdi-6', 'diagnosis', 'measurement')"
                :class="{ active: controlsStore.selectedItem === 'osdi-6' }"
                class="btn-orange">
                <div
                    v-for="(line, index) in $t('_osdi_6_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('ocular-surface-misalignment', 'sub-typing', 'measurement')"
                :class="{ active: controlsStore.selectedItem === 'ocular-surface-misalignment' }"
                class="btn-silver">
                <div
                    v-for="(line, index) in $t('_ocular_surface_misalignment_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('fluorescein-staining', 'diagnosis', 'measurement')"
                :class="{ active: controlsStore.selectedItem === 'fluorescein-staining' }"
                class="btn-silver">
                <div
                    v-for="(line, index) in $t('_fluorescein_staining_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('aqueous-tear-meniscus-height', 'sub-typing', 'measurement')"
                :class="{ active: controlsStore.selectedItem === 'aqueous-tear-meniscus-height' }"
                class="btn-silver">
                <div
                    v-for="(line, index) in $t('_aqueous_tear_meniscus_height_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('osmolarity', 'diagnosis', 'measurement')"
                :class="{ active: controlsStore.selectedItem === 'osmolarity' }"
                class="btn-silver">
                <div
                    v-for="(line, index) in $t('_osmolarity_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('eyelids-anterior-blepharitis-exam', 'sub-typing', 'measurement')"
                :class="{ active: controlsStore.selectedItem === 'eyelids-anterior-blepharitis-exam' }"
                class="btn-silver">
                <div
                    v-for="(line, index) in $t('_eyelids_anterior_blepharitis_exam_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('non-invasive-breakup-time', 'diagnosis', 'measurement')"
                :class="{ active: controlsStore.selectedItem === 'non-invasive-breakup-time' }"
                class="btn-silver">
                <div
                    v-for="(line, index) in $t('_non_invasive_breakup_time_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('eyelids-meibomian-gland-expression', 'sub-typing', 'measurement')"
                :class="{ active: controlsStore.selectedItem === 'eyelids-meibomian-gland-expression' }"
                class="btn-silver">
                <div
                    v-for="(line, index) in $t('_eyelids_meibomian_gland_expression_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('lissamine-green-staining', 'diagnosis', 'measurement')"
                :class="{ active: controlsStore.selectedItem === 'lissamine-green-staining' }"
                class="btn-yellow">
                <div
                    v-for="(line, index) in $t('_lissamine_green_staining_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('meibography-and-interferometry', 'sub-typing', 'measurement')"
                :class="{ active: controlsStore.selectedItem === 'meibography-and-interferometry' }"
                class="btn-yellow">
                <div
                    v-for="(line, index) in $t('_meibography_and_interferometry_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
        </div>

        <!-- Management -->
        <GradientButton
            id="management-area"
            @click="controlsStore.selectArea('management')"
            :class="{ active: controlsStore.selectedArea === 'management' }"
            class="btn-area">
            <div
                v-for="(line, index) in $t('_management_button').split('|')"
                :key="index">
                {{ line }}
            </div>
        </GradientButton>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('artificial-tears', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'artificial-tears' }"
                class="btn-orange">
                <div
                    v-for="(line, index) in $t('_artificial_tears_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('advice', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'advice' }"
                class="btn-orange">
                <div
                    v-for="(line, index) in $t('_advice_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('blink-exercises', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'blink-exercises' }"
                class="btn-orange">
                <div
                    v-for="(line, index) in $t('_blink_exercises_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('diet-and-dietary-supplements', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'diet-and-dietary-supplements' }"
                class="btn-orange">
                <div
                    v-for="(line, index) in $t('_diet_and_dietary_supplements_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('warm-compress', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'warm-compress' }"
                class="btn-orange">
                <div
                    v-for="(line, index) in $t('_warm_compress_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('lid-hygiene', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'lid-hygiene' }"
                class="btn-orange">
                <div
                    v-for="(line, index) in $t('_lid_hygiene_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('in-office-light-heat-based-devices', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'in-office-light-heat-based-devices' }"
                class="btn-silver">
                <div
                    v-for="(line, index) in $t('_in_office_light_heat_based_devices_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('pharmaceuticals', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'pharmaceuticals' }"
                class="btn-silver">
                <div
                    v-for="(line, index) in $t('_pharmaceuticals_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('scleral-lenses', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'scleral-lenses' }"
                class="btn-silver">
                <div
                    v-for="(line, index) in $t('_scleral_lenses_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
            <GradientButton
                @click="controlsStore.selectItem('surgical-approaches', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'surgical-approaches' }"
                class="btn-yellow">
                <div
                    v-for="(line, index) in $t('_surgical_approaches_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <GradientButton
                @click="controlsStore.selectItem('complex-treatments', null, 'management')"
                :class="{ active: controlsStore.selectedItem === 'complex-treatments' }"
                class="btn-yellow">
                <div
                    v-for="(line, index) in $t('_complex_treatments_button').split('|')"
                    :key="index">
                    {{ line }}
                </div>
            </GradientButton>
        </div>
        <!-- Empty space -->
        <div class="h-[600px]">
            <div class="h-[600px]">&nbsp;</div>
        </div>
    </div>
</template>
