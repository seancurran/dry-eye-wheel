<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import ContactLensIcon from '@/components/wheel/mitigation/animated-icons/ContactLens.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_contact_lens_button')"
        class="absolute left-1/2 top-[280px] z-10 col-span-5 ml-[-224px] max-w-lg">
        <template #icon>
            <ContactLensIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_contact_lens_text') }}
    </PopoverCard>
</template>
