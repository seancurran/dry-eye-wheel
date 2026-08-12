<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import PharmaceuticalsIcon from '@/components/wheel/management/animated-icons/Pharmaceuticals.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_pharmaceuticals_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[240px] md:z-10 md:col-span-5 md:ml-[-224px] md:max-w-xl md:w-auto">
        <template #icon>
            <PharmaceuticalsIcon class="!-mb-6 !h-40" />
        </template>
        {{ $t('_pharmaceuticals_text') }}
    </PopoverCard>
</template>
