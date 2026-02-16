<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import ArtificialTearsIcon from '@/components/wheel/management/animated-icons/ArtificialTears.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_artificial_tears_button')"
        class="absolute left-1/2 top-[260px] z-10 col-span-5 ml-[-200px] max-w-lg">
        <template #icon>
            <ArtificialTearsIcon class="!-mb-4 !-mt-4 !h-40" />
        </template>

        {{ $t('_artificial_tears_text') }}
    </PopoverCard>
</template>
