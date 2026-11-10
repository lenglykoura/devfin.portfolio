<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const steps = computed(() => [
  {
    title: t("howWeWork.steps.describe.title"),
    description: t("howWeWork.steps.describe.desc"),
    icon: "fa-pen-to-square",
    step: "01",
    color: "#38bdf8", // Sky Blue
  },
  {
    title: t("howWeWork.steps.match.title"),
    description: t("howWeWork.steps.match.desc"),
    icon: "fa-user-check",
    step: "02",
    color: "#c084fc", // Purple
  },
  {
    title: t("howWeWork.steps.connect.title"),
    description: t("howWeWork.steps.connect.desc"),
    icon: "fa-comments",
    step: "03",
    color: "#2dd4bf", // Teal
  },
  {
    title: t("howWeWork.steps.solve.title"),
    description: t("howWeWork.steps.solve.desc"),
    icon: "fa-flag-checkered",
    step: "04",
    color: "#34d399", // Emerald
  },
]);
</script>

<template>
  <section
    id="how-it-works"
    class="py-28 bg-[#080c16] relative overflow-hidden border-t border-slate-800/60"
  >
    <!-- Subtle dot grid -->
    <div
      class="absolute inset-0 z-0 opacity-[0.12]"
      style="
        background-image: radial-gradient(#1e293b 1px, transparent 1px);
        background-size: 24px 24px;
      "
    ></div>

    <!-- Ambient glows -->
    <div
      class="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-sky-600/8 blur-[150px] pointer-events-none"
    ></div>
    <div
      class="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/6 blur-[150px] pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header -->
      <div class="text-center mb-20" v-scroll-reveal>
        <span
          class="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-cyan-300 uppercase bg-cyan-500/10 border border-cyan-500/20 px-5 py-2 rounded-full mb-6 backdrop-blur-sm"
        >
          <span class="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          {{ t("howWeWork.badge") }}
        </span>
        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
        >
          {{ t("howWeWork.title") }}
        </h2>
        <p
          class="mt-6 max-w-2xl text-lg md:text-xl text-slate-400 mx-auto leading-relaxed"
        >
          {{ t("howWeWork.subtitle") }}
        </p>
      </div>

      <!-- Steps -->
      <div class="relative">
        <!-- Horizontal connector line (Desktop only) -->
        <div class="hidden lg:block absolute top-[52px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] z-0">
          <div class="w-full h-px bg-slate-700/50"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          <div
            v-for="(item, index) in steps"
            :key="index"
            v-scroll-reveal="{ delay: index * 120 }"
            class="group relative flex flex-col items-center"
          >
            <!-- Step Number Circle — sits on top of the line -->
            <div class="relative z-10 mb-8">
              <div
                class="w-[56px] h-[56px] rounded-full flex items-center justify-center text-lg font-bold border-2 transition-all duration-300 group-hover:scale-110"
                :style="`
                  border-color: ${item.color};
                  color: ${item.color};
                  background: ${item.color}10;
                  box-shadow: 0 0 0 6px #080c16, 0 0 20px ${item.color}15;
                `"
              >
                {{ item.step }}
              </div>
            </div>

            <!-- Card -->
            <div
              class="relative bg-slate-900/90 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-slate-700 shadow-lg transition-all duration-300 hover:-translate-y-1 h-full w-full text-center overflow-hidden"
            >
              <!-- Top accent line -->
              <div
                class="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] rounded-full opacity-60 group-hover:w-20 group-hover:opacity-100 transition-all duration-300"
                :style="`background-color: ${item.color}`"
              ></div>

              <!-- Icon -->
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 mx-auto border transition-all duration-300 group-hover:scale-105"
                :style="`
                  border-color: ${item.color}30;
                  background: ${item.color}08;
                `"
              >
                <i
                  class="fas text-xl"
                  :class="item.icon"
                  :style="`color: ${item.color}`"
                ></i>
              </div>

              <h3 class="text-lg font-bold text-white mb-3">
                {{ item.title }}
              </h3>

              <p class="text-slate-400 text-sm leading-relaxed">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
