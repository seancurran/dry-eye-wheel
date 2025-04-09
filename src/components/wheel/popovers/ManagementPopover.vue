<script setup>
import Card from '@/components/Card.vue';
</script>

<template>
    <Card
        :title="$t('Management')"
        class="absolute left-1/2 top-[120px] z-10 col-span-5 ml-[-224px] max-w-md">
        <!-- TODO: Is display: contents supported widely enough? -->
        <span
            style="display: contents"
            v-html="$t('_management_text')" />
    </Card>
</template>
