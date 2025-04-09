<script setup>
import Card from '@/components/Card.vue';
import LissamineGreenStainingIcon from '@/components/icons/LissamineGreenStaining.vue';
</script>

<template>
    <Card
        :title="$t('Lissamine Green Staining')"
        class="absolute left-1/2 top-[340px] z-10 col-span-5 ml-[-260px] max-w-lg">
        <template #icon>
            <LissamineGreenStainingIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        <div
            class="contents"
            v-html="$t('_lissamine_green_staining_text')" />
    </Card>
</template>
