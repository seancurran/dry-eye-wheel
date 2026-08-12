<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import ContactLensIcon from '@/components/wheel/mitigation/animated-icons/ContactLens.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_contact_lens_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[280px] md:z-10 md:col-span-5 md:ml-[-224px] md:max-w-lg md:w-auto">
        <template #icon>
            <ContactLensIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>
        {{ $t('_contact_lens_text') }}
    </PopoverCard>
</template>
