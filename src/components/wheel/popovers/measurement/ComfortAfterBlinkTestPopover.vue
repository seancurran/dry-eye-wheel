<script setup>
import Card from '@/components/Card.vue';
import ComfortAfterBlinkTestIcon from '@/components/icons/ComfortAfterBlinkTest.vue';
</script>

<template>
    <Card
        :title="$t('Comfort Time After Blink Test')"
        class="absolute left-1/2 top-[160px] z-10 col-span-5 ml-[-224px] max-w-lg">
        <template #icon>
            <ComfortAfterBlinkTestIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        <div v-if="$selectedLanguage.value === 'en'" v-html="$t('_comfort_time_after_blink_test_text_1')" />
        <div v-else-if="$selectedLanguage.value === 'es'" v-html="$t('_comfort_time_after_blink_test_text_1')" />
        <div v-else-if="$selectedLanguage.value === 'fr'" v-html="$t('_comfort_time_after_blink_test_text_1')" />
        <div v-else-if="$selectedLanguage.value === 'zh'" v-html="$t('_comfort_time_after_blink_test_text_1')" />
        <div v-else v-html="$t('_comfort_time_after_blink_test_text_1')" />
        
        <div v-if="$selectedLanguage.value === 'en'" v-html="$t('_comfort_time_after_blink_test_text_2')" />
        <div v-else-if="$selectedLanguage.value === 'es'" v-html="$t('_comfort_time_after_blink_test_text_2')" />
        <div v-else-if="$selectedLanguage.value === 'fr'" v-html="$t('_comfort_time_after_blink_test_text_2')" />
        <div v-else-if="$selectedLanguage.value === 'zh'" v-html="$t('_comfort_time_after_blink_test_text_2')" />
        <div v-else v-html="$t('_comfort_time_after_blink_test_text_2')" />
    </Card>
</template>
