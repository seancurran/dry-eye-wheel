<script setup>
import WheelSvg from '@/components/wheel/MainSvg.vue';
import VerticalSlider from '@/components/VerticalSlider.vue';
import PopoverCard from '@/components/PopoverCard.vue';
import MainNavigation from '@/components/layout/MainNavigation.vue';
import GradientButton from '@/components/GradientButton.vue';
// import TestOutput from '@/components/TestOutput.vue';
</script>

<template>
    <div class="p-6">
        <div class="flex h-[800px]">
            <!-- Vetical Slider/Menu Area -->
            <div class="flex h-[700px] w-96 rtl:mr-40">
                <VerticalSlider />
                <MainNavigation />
            </div>

            <!-- Wheel Area -->
            <!-- Need to shift down at small screen sizes. -->
            <div class="grow pt-20 lg:pt-0">
                <WheelSvg />
                <!-- <TestOutput /> -->
            </div>

            <div class="absolute right-8 top-8 flex flex-col gap-3">
                <GradientButton
                    :key="$language.code"
                    v-for="$language in $languages"
                    @click="$setLanguage($language.code)"
                    class="btn btn-section"
                    :class="{ active: $language.code === $selectedLanguage.value }">
                    {{ $language.name }}
                </GradientButton>
            </div>
        </div>

        <div class="my-5 grid grid-cols-12 gap-5">
            <!-- The Wheel -->
            <PopoverCard
                :title="$t('The Wheel')"
                theme="card"
                class="col-span-5 max-w-none">
                {{ $t('_the_wheel_text') }}
            </PopoverCard>

            <!-- The Rings -->
            <PopoverCard
                :title="$t('The Rings')"
                theme="card"
                class="col-span-7 max-w-none">
                <span v-html="$t('_the_rings_text')" />
            </PopoverCard>
        </div>

        <!-- Footer -->
        <div class="mt-5 text-center text-xs text-gray-600">
            <p>Spanish Translation provided by: Colegio Federación Colombiana de Optómetras - Fedopto</p>
            <p>French translation provided by: Association des Optométristes de France (AOF)</p>
            <p>Chinese translation provided by: Alcon Professional Education Team, China</p>
        </div>
    </div>
</template>
