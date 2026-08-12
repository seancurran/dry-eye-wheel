<script setup>
import { useControlsStore } from '@/stores/controlsStore.js';
import MainManagementSvg from '@/components/wheel/management/MainManagementSvg.vue';
import MainMitigationSvg from '@/components/wheel/mitigation/MainMitigationSvg.vue';
import MainMeasurementSvg from '@/components/wheel/measurement/MainMeasurementSvg.vue';
import MitigationPopovers from '@/components/wheel/mitigation/popovers/MitigationPopovers.vue';
import MeasurementPopovers from '@/components/wheel/measurement/popovers/MeasurementPopovers.vue';
import ManagementPopovers from '@/components/wheel/management/popovers/ManagementPopovers.vue';

const controlsStore = useControlsStore();
</script>

<template>
    <div class="relative w-full md:h-full">
        <!-- Pinch-to-zoom hint: mobile only, the wheel is small enough that icons/text benefit from zooming in -->
        <div class="mb-2 flex items-center justify-center gap-1.5 text-[11px] text-gray-500 tablet:hidden">
            <svg
                class="h-4 w-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9 3L5 7M5 7H8M5 7V4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                <path
                    d="M15 21L19 17M19 17H16M19 17V20"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round" />
                <path
                    d="M8.5 8.5L4 4"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round" />
                <path
                    d="M15.5 15.5L20 20"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round" />
            </svg>
            <span>{{ $t('Pinch to zoom in') }}</span>
        </div>

        <!-- Wheel visual: square on mobile, fills the desktop wheel area -->
        <div class="relative aspect-square w-full md:aspect-auto md:h-full">
            <MainMitigationSvg
                :class="controlsStore.mitigationAreaClasses"
                class="mitigation-svg absolute w-full transition-all duration-300 md:h-[800px] md:w-[800px]" />

            <MainMeasurementSvg
                :class="controlsStore.measurementAreaClasses"
                class="measurement-svg absolute w-full transition-all duration-300 md:h-[800px] md:w-[800px]" />

            <MainManagementSvg
                :class="controlsStore.managementAreaClasses"
                class="management-svg absolute w-full md:h-[800px] md:w-[800px]" />

            <!-- Grayscale class needs to exist in a template to build in Tailwind -->
            <span class="hidden grayscale"></span>
        </div>

        <!-- Key Area: full-width single row under the wheel on mobile, tucked bottom-right on desktop -->
        <div
            class="mb-4 mt-2 flex w-full items-center justify-between gap-1 border-2 border-[#E5E6E7] p-1.5 font-euclid-circular-medium text-[9px] md:mb-0 md:mt-0 md:absolute md:bottom-0 md:end-0 md:w-auto md:flex-col md:items-stretch md:justify-start md:gap-2 md:border-4 md:p-3 md:text-sm">
            <div class="flex items-center gap-1 md:gap-2">
                <img
                    class="h-3 w-3 md:h-5 md:w-5"
                    src="@/assets/svg/orange-dot.svg?url" />
                <div>{{ $t('Simple Treatment') }}</div>
            </div>
            <div class="flex items-center gap-1 md:gap-2">
                <img
                    class="h-3 w-3 md:h-5 md:w-5"
                    src="@/assets/svg/silver-dot.svg?url" />
                <div>{{ $t('Moderate Treatment') }}</div>
            </div>
            <div class="flex items-center gap-1 md:gap-2">
                <img
                    class="h-3 w-3 md:h-5 md:w-5"
                    src="@/assets/svg/yellow-dot.svg?url" />
                <div>{{ $t('Complex Treatment') }}</div>
            </div>
        </div>

        <!-- Selected-item content: flows below the wheel on mobile; on desktop it overlays the wheel at each popover's own tuned position -->
        <div class="relative md:absolute md:inset-0">
            <MitigationPopovers />
            <MeasurementPopovers />
            <ManagementPopovers />
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.mitigation-svg {
    top: 0px;
    left: 0px;
    animation: mitigation-slide-in 300ms ease-in-out 1 alternate;

    &.active {
        top: -20px;
        left: -40px;
        animation: mitigation-slide-out 300ms ease-in-out 1 alternate;
    }
}

@keyframes mitigation-slide-in {
    0% {
        top: -20px;
        left: -40px;
    }
    100% {
        top: 0px;
        left: 0px;
    }
}

@keyframes mitigation-slide-out {
    0% {
        top: 0px;
        left: 0px;
    }
    100% {
        top: -20px;
        left: -40px;
    }
}

.measurement-svg {
    top: 0px;
    left: 0px;
    animation: measurement-slide-in 300ms ease-in-out 1 alternate;

    &.active {
        top: -20px;
        left: 40px;
        animation: measurement-slide-out 300ms ease-in-out 1 alternate;
    }
}

@keyframes measurement-slide-in {
    0% {
        top: -20px;
        left: 40px;
    }
    100% {
        top: 0px;
        left: 0px;
    }
}

@keyframes measurement-slide-out {
    0% {
        top: 0px;
        left: 0px;
    }
    100% {
        top: -20px;
        left: 40px;
    }
}

.management-svg {
    top: 0px;
    animation: management-slide-in 300ms ease-in-out 1 alternate;

    &.active {
        top: 45px;
        animation: management-slide-out 300ms ease-in-out 1 alternate;
    }
}

@keyframes management-slide-in {
    0% {
        top: 45px;
    }
    100% {
        top: 0px;
    }
}

@keyframes management-slide-out {
    0% {
        top: 0px;
    }
    100% {
        top: 45px;
    }
}

/* The wheel is much smaller on mobile, so the same pixel offsets used on desktop push the rings
   too far apart relative to the wheel's own size and off the edge of the visual. Scale them down,
   including the animation keyframes so the sweep doesn't overshoot past the smaller resting position. */
@media (max-width: 767px) {
    .mitigation-svg.active {
        top: -8px;
        left: -16px;
    }

    .measurement-svg.active {
        top: -8px;
        left: 16px;
    }

    .management-svg.active {
        top: 18px;
    }

    @keyframes mitigation-slide-in {
        0% {
            top: -8px;
            left: -16px;
        }
        100% {
            top: 0px;
            left: 0px;
        }
    }

    @keyframes mitigation-slide-out {
        0% {
            top: 0px;
            left: 0px;
        }
        100% {
            top: -8px;
            left: -16px;
        }
    }

    @keyframes measurement-slide-in {
        0% {
            top: -8px;
            left: 16px;
        }
        100% {
            top: 0px;
            left: 0px;
        }
    }

    @keyframes measurement-slide-out {
        0% {
            top: 0px;
            left: 0px;
        }
        100% {
            top: -8px;
            left: 16px;
        }
    }

    @keyframes management-slide-in {
        0% {
            top: 18px;
        }
        100% {
            top: 0px;
        }
    }

    @keyframes management-slide-out {
        0% {
            top: 0px;
        }
        100% {
            top: 18px;
        }
    }
}

/* Desktop: the wheel area is much wider than the fixed 800px wheel graphic (it stretches to fill
   the leftover space between the sidebar and the language buttons), so the wheel needs to be
   explicitly centered in that space instead of pinned to the left edge. */
@media (min-width: 1450px) {
    .mitigation-svg,
    .measurement-svg,
    .management-svg {
        left: calc(50% - 400px);
    }

    .mitigation-svg.active {
        left: calc(50% - 440px);
    }

    .measurement-svg.active {
        left: calc(50% - 360px);
    }

    @keyframes mitigation-slide-in {
        0% {
            top: -20px;
            left: calc(50% - 440px);
        }
        100% {
            top: 0px;
            left: calc(50% - 400px);
        }
    }

    @keyframes mitigation-slide-out {
        0% {
            top: 0px;
            left: calc(50% - 400px);
        }
        100% {
            top: -20px;
            left: calc(50% - 440px);
        }
    }

    @keyframes measurement-slide-in {
        0% {
            top: -20px;
            left: calc(50% - 360px);
        }
        100% {
            top: 0px;
            left: calc(50% - 400px);
        }
    }

    @keyframes measurement-slide-out {
        0% {
            top: 0px;
            left: calc(50% - 400px);
        }
        100% {
            top: -20px;
            left: calc(50% - 360px);
        }
    }
}

</style>
