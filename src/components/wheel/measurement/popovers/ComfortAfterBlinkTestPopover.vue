<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import ComfortAfterBlinkTestIcon from '@/components/wheel/measurement/animated-icons/ComfortAfterBlinkTest.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_comfort_time_after_blink_test_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[160px] md:z-10 md:col-span-5 md:ml-[-224px] md:max-w-lg md:w-auto">
        <template #icon>
            <ComfortAfterBlinkTestIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        <div
            v-if="$selectedLanguage.value === 'en'"
            v-html="$t('_comfort_time_after_blink_test_text_1')" />
        <div
            v-else-if="$selectedLanguage.value === 'es'"
            v-html="$t('_comfort_time_after_blink_test_text_1')" />
        <div
            v-else-if="$selectedLanguage.value === 'fr'"
            v-html="$t('_comfort_time_after_blink_test_text_1')" />
        <div
            v-else-if="$selectedLanguage.value === 'zh'"
            v-html="$t('_comfort_time_after_blink_test_text_1')" />
        <div
            v-else
            v-html="$t('_comfort_time_after_blink_test_text_1')" />

        <div
            v-if="$selectedLanguage.value === 'en'"
            v-html="$t('_comfort_time_after_blink_test_text_2')" />
        <div
            v-else-if="$selectedLanguage.value === 'es'"
            v-html="$t('_comfort_time_after_blink_test_text_2')" />
        <div
            v-else-if="$selectedLanguage.value === 'fr'"
            v-html="$t('_comfort_time_after_blink_test_text_2')" />
        <div
            v-else-if="$selectedLanguage.value === 'zh'"
            v-html="$t('_comfort_time_after_blink_test_text_2')" />
        <div
            v-else
            v-html="$t('_comfort_time_after_blink_test_text_2')" />
    </PopoverCard>
</template>
