<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import DietAndDietarySupplementsIcon from '@/components/wheel/management/animated-icons/DietAndDietarySupplements.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_diet_and_dietary_supplements_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[320px] md:z-10 md:col-span-5 md:ml-[-280px] md:max-w-lg md:w-auto">
        <template #icon>
            <DietAndDietarySupplementsIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        {{ $t('_diet_and_dietary_supplements_text') }}
    </PopoverCard>
</template>
