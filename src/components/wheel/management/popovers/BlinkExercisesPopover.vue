<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import BlinkExercisesIcon from '@/components/wheel/management/animated-icons/BlinkExercises.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_blink_exercises_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[340px] md:z-10 md:col-span-5 md:ml-[-224px] md:max-w-lg md:w-auto">
        <template #icon>
            <BlinkExercisesIcon class="!-mb-8 !-mt-4 !h-40" />
        </template>

        {{ $t('_blink_exercises_text') }}
    </PopoverCard>
</template>
