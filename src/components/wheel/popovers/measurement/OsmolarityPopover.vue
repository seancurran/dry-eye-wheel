<script setup>
import Card from '@/components/Card.vue';
import OsmolarityIcon from '@/components/icons/Osmolarity.vue';
</script>

<template>
    <Card
        :title="$t('Osmolarity')"
        class="absolute left-1/2 top-[300px] z-10 col-span-5 ml-[-260px] max-w-lg">
        <template #icon>
            <OsmolarityIcon class="!-mb-12 !-mt-14 !h-40" />
        </template>
        <div
            class="contents"
            v-html="$t('_osmolarity_text')" />
    </Card>
</template>
