<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import AqueousTearMeniscusHeightIcon from '@/components/wheel/measurement/animated-icons/AqueousTearMeniscusHeight.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_aqueous_tear_meniscus_height_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[360px] md:z-10 md:col-span-5 md:ml-[-340px] md:max-w-lg md:w-auto">
        <template #icon>
            <AqueousTearMeniscusHeightIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        <div
            class="contents"
            v-html="$t('_aqueous_tear_meniscus_height_text')" />
    </PopoverCard>
</template>
