<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import EyelidsAnteriorBlepharitisExamIcon from '@/components/wheel/measurement/animated-icons/EyelidsAnteriorBlepharitisExam.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_eyelids_anterior_blepharitis_exam_button')"
        class="absolute left-1/2 top-[110px] z-10 col-span-5 ml-[-360px] max-w-lg">
        <template #icon>
            <EyelidsAnteriorBlepharitisExamIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_eyelids_anterior_blepharitis_exam_text') }}
    </PopoverCard>
</template>
