<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import BlinkExercisesIcon from '@/components/wheel/management/animated-icons/BlinkExercises.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_blink_exercises_button')"
        class="absolute left-1/2 top-[340px] z-10 col-span-5 ml-[-224px] max-w-lg">
        <template #icon>
            <BlinkExercisesIcon class="!-mb-8 !-mt-4 !h-40" />
        </template>

        {{ $t('_blink_exercises_text') }}
    </PopoverCard>
</template>
