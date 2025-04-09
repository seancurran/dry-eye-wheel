<script setup>
import Card from '@/components/Card.vue';
import BlinkExercisesIcon from '@/components/icons/BlinkExercises.vue';
</script>

<template>
    <Card
        :title="$t('Blink Exercises')"
        class="absolute left-1/2 top-[340px] z-10 col-span-5 ml-[-224px] max-w-lg">
        <template #icon>
            <BlinkExercisesIcon class="!-mb-8 !-mt-4 !h-40" />
        </template>

        {{ $t('_blink_exercises_text') }}
    </Card>
</template>
