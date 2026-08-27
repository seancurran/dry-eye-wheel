<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<template>
    <div class="flex items-center gap-2">
        <span class="hidden shrink-0 text-[10px] font-euclid-circular-medium uppercase text-[#58595B] md:inline md:text-xs">
            {{ $t('Language') }}
        </span>

        <div class="relative shrink-0">
            <button
                type="button"
                @click="isOpen = !isOpen"
                class="flex h-[34px] items-center gap-1 whitespace-nowrap rounded-full border-2 border-[#E5E6E7] bg-white px-3 text-[10px] font-euclid-circular-medium uppercase leading-tight text-[#2B398F] md:px-3 md:text-xs">
                {{ $languages.find((language) => language.code === $selectedLanguage.value)?.name }}
                <span class="text-[9px]">▾</span>
            </button>

            <div
                v-if="isOpen"
                class="fixed inset-0 z-10"
                @click="isOpen = false"></div>

            <div
                v-if="isOpen"
                class="absolute end-0 z-20 mt-1 flex max-h-64 w-40 flex-col gap-1 overflow-y-auto rounded-xl border border-[#E5E6E7] bg-white p-1 shadow-lg">
                <button
                    v-for="language in $languages"
                    :key="language.code"
                    type="button"
                    @click="
                        $setLanguage(language.code);
                        isOpen = false;
                    "
                    :class="
                        language.code === $selectedLanguage.value
                            ? 'bg-[#2B398F] text-white'
                            : 'text-[#58595B]'
                    "
                    class="rounded-lg px-3 py-2 text-start text-sm capitalize">
                    {{ language.name }}
                </button>
            </div>
        </div>
    </div>
</template>
