<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import DietAndDietarySupplementsIcon from '@/components/wheel/management/animated-icons/DietAndDietarySupplements.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_diet_and_dietary_supplements_button')"
        class="absolute left-1/2 top-[320px] z-10 col-span-5 ml-[-280px] max-w-lg">
        <template #icon>
            <DietAndDietarySupplementsIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        {{ $t('_diet_and_dietary_supplements_text') }}
    </PopoverCard>
</template>
