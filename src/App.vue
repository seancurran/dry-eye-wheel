<script setup>
import { onMounted, onBeforeUnmount, nextTick, ref, watch } from 'vue';
import WheelSvg from '@/components/wheel/MainSvg.vue';
import VerticalSlider from '@/components/VerticalSlider.vue';
import PopoverCard from '@/components/PopoverCard.vue';
import MainNavigation from '@/components/layout/MainNavigation.vue';
import GradientButton from '@/components/GradientButton.vue';
import AreaTabs from '@/components/layout/AreaTabs.vue';
import LanguageDropdown from '@/components/layout/LanguageDropdown.vue';
import { useControlsStore } from '@/stores/controlsStore.js';
// import TestOutput from '@/components/TestOutput.vue';

const controlsStore = useControlsStore();

// At tablet width the wheel and sidebar sit side by side, so a fully collapsed sidebar is much
// shorter than the wheel next to it and leaves an odd empty gap. Open Mitigation by default there.
// Phone (stacked, no gap issue) keeps every area collapsed; desktop keeps its neutral starting state.
onMounted(() => {
    if (window.matchMedia('(min-width: 1000px) and (max-width: 1449px)').matches) {
        controlsStore.selectArea('mitigation');
    }
});

// At tablet width the sidebar is capped to the wheel column's own rendered height (and scrolls
// internally past that) so the two columns line up - the wheel's height isn't a fixed value, it's
// driven by its width via aspect-square (plus whichever popover is currently showing under it), so
// it has to be measured rather than hardcoded. Inline styles aren't breakpoint-scoped, so this only
// gets applied while actually inside tablet range - otherwise it would wrongly clip the sidebar on
// phone or fight desktop's own fixed height.
const wheelColumnRef = ref(null);
const wheelColumnHeight = ref(0);
const isTabletWidth = ref(false);
let tabletMediaQuery;

const updateIsTabletWidth = (event) => {
    isTabletWidth.value = event.matches;
};

const measureWheelColumn = () => {
    if (wheelColumnRef.value) {
        wheelColumnHeight.value = wheelColumnRef.value.offsetHeight;
    }
};

onMounted(async () => {
    tabletMediaQuery = window.matchMedia('(min-width: 1000px) and (max-width: 1449px)');
    isTabletWidth.value = tabletMediaQuery.matches;
    tabletMediaQuery.addEventListener('change', updateIsTabletWidth);

    window.addEventListener('resize', measureWheelColumn);
    await nextTick();
    measureWheelColumn();
});

// Re-measure whenever the wheel column's own content changes height (a popover appearing/disappearing
// under the wheel, or switching area/language) - flush: 'post' waits for the DOM update to land first.
watch(
    () => [controlsStore.selectedArea, controlsStore.selectedItem, controlsStore.selectedSection],
    () => nextTick(measureWheelColumn),
    { flush: 'post' },
);

onBeforeUnmount(() => {
    window.removeEventListener('resize', measureWheelColumn);
    tabletMediaQuery?.removeEventListener('change', updateIsTabletWidth);
});
</script>

<template>
    <div class="p-6">
        <!-- Mobile-only header: area tabs + language switcher (desktop uses the slider + stacked pills below).
             Area tabs drop out at tablet width, since the sidebar's own area pills sit right next to the wheel
             there and duplicate the same control. -->
        <div class="mb-4 flex items-center justify-end gap-2 md:hidden">
            <AreaTabs class="grow tablet:hidden" />
            <LanguageDropdown />
        </div>

        <div
            class="relative flex flex-col tablet:grid tablet:grid-cols-[384px_1fr] tablet:items-start tablet:gap-8 md:flex md:h-[800px] md:flex-row md:items-stretch md:gap-0">
            <!-- Vetical Slider/Menu Area -->
            <div
                class="order-2 flex flex-col tablet:order-1 tablet:overflow-y-auto tablet:rounded-2xl tablet:border tablet:border-gray-400 tablet:p-6 tablet:shadow-lg md:order-none md:h-[700px] md:w-96 md:flex-row md:overflow-visible md:rounded-none md:border-0 md:p-0 md:shadow-none rtl:md:mr-40"
                :style="isTabletWidth && wheelColumnHeight ? { maxHeight: wheelColumnHeight + 'px' } : {}">
                <VerticalSlider class="hidden md:flex" />
                <MainNavigation />
            </div>

            <!-- Wheel Area -->
            <div
                ref="wheelColumnRef"
                class="order-1 w-full tablet:order-2 md:order-none md:w-auto md:grow md:mr-[140px]">
                <WheelSvg />
                <!-- <TestOutput /> -->
            </div>

            <div class="absolute right-8 top-8 hidden flex-col gap-3 md:flex">
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

        <div class="my-5 grid grid-cols-1 gap-5 md:grid-cols-12">
            <!-- The Wheel -->
            <PopoverCard
                :title="$t('The Wheel')"
                theme="card"
                class="max-w-none md:col-span-5">
                {{ $t('_the_wheel_text') }}
            </PopoverCard>

            <!-- The Rings -->
            <PopoverCard
                :title="$t('The Rings')"
                theme="card"
                class="max-w-none md:col-span-7">
                <span v-html="$t('_the_rings_text')" />
            </PopoverCard>
        </div>

        <!-- Footer -->
        <div class="mt-5 text-center text-[10px] text-gray-600 md:text-xs">
            <p>Spanish Translation provided by: Colegio Federación Colombiana de Optómetras - Fedopto</p>
            <p>French translation provided by: Association des Optométristes de France (AOF)</p>
            <p>Chinese translation provided by: Alcon Professional Education Team, China</p>
        </div>
    </div>
</template>
