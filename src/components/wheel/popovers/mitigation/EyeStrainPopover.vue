<script setup>
import Card from '@/components/Card.vue';
import EyeStrainIcon from '@/components/icons/EyeStrain.vue';
</script>

<template>
    <Card
        :title="$t('Eye Strain')"
        class="absolute left-1/2 top-[240px] z-10 col-span-5 ml-[-224px] max-w-lg">
        <template #icon>
            <EyeStrainIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_eye_strain_text') }}
    </Card>
</template>
