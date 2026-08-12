<script setup>
import PopoverCard from '@/components/PopoverCard.vue';
import WarmCompressIcon from '@/components/wheel/management/animated-icons/WarmCompress.vue';
</script>

<template>
    <PopoverCard
        :title="$t('_warm_compress_button')"
        class="relative z-10 mb-4 w-full max-w-none md:absolute md:left-1/2 md:top-[310px] md:z-10 md:col-span-5 md:ml-[-260px] md:max-w-lg md:w-auto">
        <template #icon>
            <WarmCompressIcon class="!-mb-8 !-mt-10 !h-40" />
        </template>

        {{ $t('_warm_compress_text') }}
    </PopoverCard>
</template>
