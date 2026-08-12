<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import LidHygieneIcon from '@/components/wheel/management/animated-icons/LidHygiene.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_lid_hygiene_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[280px] md:z-10 md:col-span-5 md:ml-[-224px] md:max-w-lg md:w-auto">
        <template #icon>
            <LidHygieneIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        {{ $t('_lid_hygiene_text') }}
    </PopoverCard>
</template>
