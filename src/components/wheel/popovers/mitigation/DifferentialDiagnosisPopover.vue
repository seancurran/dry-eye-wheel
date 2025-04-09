<script setup>
import Card from '@/components/Card.vue';
import DifferentialDiagnosisIcon from '@/components/icons/DifferentialDiagnosis.vue';
import GradientBorderBox from '@/components/layout/GradientBorderBox.vue';
</script>

<template>
    <Card
        :title="$t('Differential')"
        class="absolute left-1/2 top-[240px] z-10 col-span-5 ml-[-224px] max-w-xl">
        <template #icon>
            <DifferentialDiagnosisIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        <!-- TODO: English and Spanish could be converted to translations. -->
        <!-- TODO: Add a list-marker-class as a translation. -->
        <template v-if="$selectedLanguage.value === 'en'">
            <div>
                Dry eye disease is just one of many ocular surface diseases. Differential diagnosis helps ensure there
                aren't other underlying conditions, such as ocular allergy or infection, responsible for the patient's
                presenting symptoms. Treat co-morbid conditions before tackling any residual dry eye disease, to
                increase the chances of successful outcomes for patients. The TFOS DEWS II triaging checklist quickly
                and easily helps narrow down the diagnosis and avoid unnecessary clinical visits.
            </div>
            <GradientBorderBox>
                <ul class="mx-1 list-inside list-disc text-left text-xs">
                    <li>How severe is the eye discomfort?</li>
                    <li>Do you have any mouth dryness or swollen glands?</li>
                    <li>How long have your symptoms lasted and was there any triggering event?</li>
                    <li>Is your vision affected and does it clear on blinking?</li>
                    <li>Are the symptoms or any redness much worse in one eye than the other?</li>
                    <li>Do the eyes itch, appear swollen or crusty, or have they given off any discharge?</li>
                    <li>Do you wear contact lenses?</li>
                    <li>
                        Have you been diagnosed with any general health conditions (including recent respiratory
                        infections) or are you taking any medications?
                    </li>
                </ul>
                <div class="text-xs font-bold text-[#2B398F]">
                    + Detailed anterior eye examination differential diagnosis where indicated by answers.
                </div>
            </GradientBorderBox>
        </template>
        <template v-else-if="$selectedLanguage.value === 'es'">
            <div>
                La enfermedad del ojo seco es solo una de las muchas patologías que pueden afectar la superficie ocular.
                El diagnóstico diferencial es esencial para garantizar que no haya otras afecciones subyacentes, como
                alergias o infecciones oculares, que sean responsables de los síntomas del paciente. Tratar las
                condiciones comórbidas antes de abordar cualquier enfermedad residual del ojo seco aumenta las
                posibilidades de éxito del tratamiento. La lista de comprobación de triaje TFOS DEWS II facilita de
                manera rápida y sencilla el diagnóstico preciso, evitando visitas clínicas innecesarias.
            </div>
            <GradientBorderBox>
                <ul class="list-marker-spanish mx-1 list-inside text-left text-xs">
                    <li>Cuál es la gravedad de sus molestias oculares?</li>
                    <li>Presenta sequedad bucal o inflamación de los ganglios linfáticos?</li>
                    <li>Cuánto tiempo han durado sus síntomas y hubo algún acontecimiento desencadenante?</li>
                    <li>Está afectada su visión y se aclara al parpadear?</li>
                    <li>Son sus síntomas o el enrojecimiento mucho peores en un ojo que en el otro?</li>
                    <li>Tiene picazón, hinchazón, costras en los ojos o secreciones?</li>
                    <li>Usa lentes de contacto?</li>
                    <li>
                        Le han diagnosticado alguna enfermedad general (incluidas infecciones respiratorias recientes) o
                        está tomando algún medicamento?
                    </li>
                </ul>
                <div class="text-xs font-bold text-[#2B398F]">
                    + Además, se debe realizar un diagnóstico diferencial detallado del examen ocular anterior según lo
                    indiquen las respuestas.
                </div>
            </GradientBorderBox>
        </template>
        <template v-else>
            <div v-html="$t('_differential_header')" />
            <GradientBorderBox>
                <ul class="mx-1 list-inside list-disc text-left text-xs" v-html="$t('_differential_list')" />
                <div class="text-xs font-bold text-[#2B398F]" v-html="$t('_differential_footer')"></div>
            </GradientBorderBox>
        </template>
    </Card>
</template>

<style lang="postcss" scoped>
.list-marker-spanish {
    list-style-type: none; /* Remove the default list style */
}

.list-marker-spanish li {
    position: relative;
    padding-left: 1.25rem;
}

.list-marker-spanish li::before {
    content: '¿ '; /* Use an upside-down question mark */
    font-weight: bold; /* Customize as needed */
    color: inherit; /* Ensures it takes the list's color */
    position: absolute;
    left: 0;
}
</style>
