<script setup>
import Card from '@/components/Card.vue';
import DietAndDietarySupplementsIcon from '@/components/icons/DietAndDietarySupplements.vue';
</script>

<template>
    <Card
        :title="$t('Diet And Dietary Supplements')"
        class="absolute left-1/2 top-[320px] z-10 col-span-5 ml-[-280px] max-w-lg">
        <template #icon>
            <DietAndDietarySupplementsIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        {{ $t('_diet_and_dietary_supplements_text') }}
    </Card>
</template>
