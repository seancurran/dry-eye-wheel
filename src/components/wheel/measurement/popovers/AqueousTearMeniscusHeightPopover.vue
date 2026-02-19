<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import AqueousTearMeniscusHeightIcon from '@/components/wheel/measurement/animated-icons/AqueousTearMeniscusHeight.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_aqueous_tear_meniscus_height_button')"
        class="absolute left-1/2 top-[360px] z-10 col-span-5 ml-[-340px] max-w-lg">
        <template #icon>
            <AqueousTearMeniscusHeightIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        <div
            class="contents"
            v-html="$t('_aqueous_tear_meniscus_height_text')" />
    </PopoverCard>
</template>
