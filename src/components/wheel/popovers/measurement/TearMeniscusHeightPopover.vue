<script setup>
import Card from '@/components/Card.vue';
import TearMeniscusHeightIcon from '@/components/icons/TearMeniscusHeight.vue';
</script>

<template>
    <Card
        :title="$t('Tear Meniscus Height')"
        class="absolute left-1/2 top-[340px] z-10 col-span-5 ml-[-340px] max-w-lg">
        <template #icon>
            <TearMeniscusHeightIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        <div
            class="contents"
            v-html="$t('_tear_meniscus_height_text')" />
    </Card>
</template>
