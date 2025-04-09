<script setup>
import Card from '@/components/Card.vue';
import ContactLensIcon from '@/components/icons/ContactLens.vue';
</script>

<template>
    <Card :title="$t('Contact Lens')" class="absolute left-1/2 top-[280px] z-10 col-span-5 ml-[-224px] max-w-lg">
        <template #icon>
            <ContactLensIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_contact_lens_text') }}
    </Card>
</template>
