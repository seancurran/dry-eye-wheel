<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import ArtificialTearsIcon from '@/components/wheel/management/animated-icons/ArtificialTears.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_artificial_tears_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[260px] md:z-10 md:col-span-5 md:ml-[-200px] md:max-w-lg md:w-auto">
        <template #icon>
            <ArtificialTearsIcon class="!-mb-4 !-mt-4 !h-40" />
        </template>

        {{ $t('_artificial_tears_text') }}
    </PopoverCard>
</template>
