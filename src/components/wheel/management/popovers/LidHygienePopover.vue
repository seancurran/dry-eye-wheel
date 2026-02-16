<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import LidHygieneIcon from '@/components/wheel/management/animated-icons/LidHygiene.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_lid_hygiene_button')"
        class="absolute left-1/2 top-[280px] z-10 col-span-5 ml-[-224px] max-w-lg">
        <template #icon>
            <LidHygieneIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        {{ $t('_lid_hygiene_text') }}
    </PopoverCard>
</template>
