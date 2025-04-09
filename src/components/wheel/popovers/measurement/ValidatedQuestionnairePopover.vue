<script setup>
import Card from '@/components/Card.vue';
import ValidatedQuestionnaireIcon from '@/components/icons/ValidatedQuestionnaire.vue';
</script>

<template>
    <Card
        :title="$t('Validated Questionnaire')"
        class="absolute left-1/2 top-[220px] z-10 col-span-5 ml-[-240px] max-w-lg">
        <template #icon>
            <ValidatedQuestionnaireIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        <div
            class="contents"
            v-html="$t('_validated_questionnaire_text')" />
    </Card>
</template>
