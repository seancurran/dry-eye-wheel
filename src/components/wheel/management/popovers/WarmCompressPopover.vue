<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import WarmCompressIcon from '@/components/wheel/management/animated-icons/WarmCompress.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_warm_compress_button')"
        class="absolute left-1/2 top-[310px] z-10 col-span-5 ml-[-260px] max-w-lg">
        <template #icon>
            <WarmCompressIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        {{ $t('_warm_compress_text') }}
    </PopoverCard>
</template>
