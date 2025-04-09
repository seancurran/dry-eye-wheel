<script setup>
import Card from '@/components/Card.vue';
import LidHygieneIcon from '@/components/icons/LidHygiene.vue';
</script>

<template>
    <Card
        :title="$t('Lid Hygiene')"
        class="absolute left-1/2 top-[280px] z-10 col-span-5 ml-[-224px] max-w-lg">
        <template #icon>
            <LidHygieneIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        {{ $t('_lid_hygiene_text') }}
    </Card>
</template>
