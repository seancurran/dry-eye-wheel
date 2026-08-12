<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
</script>

<template>
    <PopoverCard
        :title="$t('Management')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[120px] md:z-10 md:col-span-5 md:ml-[-224px] md:max-w-md md:w-auto">
        <!-- TODO: Is display: contents supported widely enough? -->
        <span
            style="display: contents"
            v-html="$t('_management_text')" />
    </PopoverCard>
</template>
