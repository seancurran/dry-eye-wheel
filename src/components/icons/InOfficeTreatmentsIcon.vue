<script setup>
import LottieAnimation from '@/lib/LottieAnimation.vue';
import inOfficeTreatmentsJson from '@/assets/json/in-office-treatments.json';

const props = defineProps({
    targetId: {
        type: String,
        default: 'inOfficeTreatmentsAnimation',
    },
});
</script>

<template>
    <LottieAnimation
        :json="inOfficeTreatmentsJson"
        :loop="true"
        :autoPlay="true" />
</template>
