<script setup>
import Card from '@/components/Card.vue';
import GradientBorderBox from '@/components/layout/GradientBorderBox.vue';
</script>

<template>
    <!-- TODO: Consider using translations from Spanish and Englush. -->
    <!-- TODO: Consider using a list-marker-class as a translation. -->
    <Card :title="$t('Measurement')" class="absolute left-1/2 top-[340px] z-10 col-span-5 ml-[-460px] max-w-lg">
        <template v-if="$selectedLanguage.value === 'en'">
            <div>Diagnosis needs to be a standardised process in order for:</div>
            <GradientBorderBox>
                <ul class="mx-1 list-inside list-disc text-left text-xs">
                    <li>Patients to have certainty of their disease and trust in clinicians.</li>
                    <li>Clinicians to have consistency of approach.</li>
                    <li>Authorities to receive robust epidemiological data to plan resource allocation.</li>
                </ul>
            </GradientBorderBox>
            <div>
                Advanced technology is not required for an indicative diagnosis, which can be achieved with a
                standardised questionnaire and the simple comfort time after blink test. Diagnosis can be aided with an
                ocular surface damage assessment with ophthalmic stains and assessment of tear film stability and
                osmolarity.
            </div>
            <div>
                Likewise, sub-classification to aid the choice of management can be investigated with blinking
                (rate/completeness), tear volume, and meibomian gland expression, as well as meibomian gland imaging.
            </div>
        </template>
        <template v-else-if="$selectedLanguage.value === 'es'">
            <div>El diagnóstico debe ser un proceso estandarizado para que:</div>
            <GradientBorderBox>
                <ul class="mx-1 list-inside list-disc text-left text-xs">
                    <li>Los pacientes tengan certeza de su enfermedad y confianza en los clínicos.</li>
                    <li>Los profesionales adopten un enfoque coherente.</li>
                    <li>
                        Las autoridades reciban datos epidemiológicos sólidos para planificar la asignación de recursos.
                    </li>
                </ul>
            </GradientBorderBox>

            <div>
                No se requiere tecnología avanzada para un diagnóstico indicativo, que puede lograrse mediante un
                cuestionario estandarizado y la sencilla prueba del tiempo de confort tras el parpadeo. El diagnóstico
                puede complementarse con una evaluación del daño en la superficie ocular utilizando las tinciones
                vitales y evaluaciones de la estabilidad y osmolaridad de la película lagrimal.
            </div>
            <div>
                Además, la subclasificación para seleccionar el tratamiento adecuado puede investigarse observando el
                parpadeo (velocidad/completitud), el volumen lagrimal y la expresión de las glándulas de Meibomio, así
                como mediante el analisis de las imágenes de las glándulas de Meibomio.
            </div>
        </template>
        <template v-else>
            <div v-html="$t('_measurement_header')" />
            <GradientBorderBox>
                <ul class="mx-1 list-inside list-disc text-left text-xs" v-html="$t('_measurement_list')" />
            </GradientBorderBox>
            <div v-html="$t('_measurement_text_1')" />
            <div v-html="$t('_measurement_text_2')" />
        </template>
    </Card>
</template>
