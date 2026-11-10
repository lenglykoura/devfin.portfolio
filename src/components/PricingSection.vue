<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, tm, rt } = useI18n();

const plans = computed(() => [
  {
    name: t("pricing.plans.standard.name"),
    price: t("pricing.plans.standard.price"),
    period: t("pricing.plans.standard.period"),
    description: t("pricing.plans.standard.desc"),
    features: tm("pricing.plans.standard.features").map((el) => rt(el)),
    icon: "fa-cube",
    accentColor: "#38bdf8",
    delay: 0,
  },
  {
    name: t("pricing.plans.sme.name"),
    price: t("pricing.plans.sme.price"),
    period: t("pricing.plans.sme.period"),
    description: t("pricing.plans.sme.desc"),
    features: tm("pricing.plans.sme.features").map((el) => rt(el)),
    popular: true,
    icon: "fa-rocket",
    accentColor: "#60a5fa",
    delay: 150,
  },
  {
    name: t("pricing.plans.enterprise.name"),
    price: t("pricing.plans.enterprise.price"),
    period: t("pricing.plans.enterprise.period"),
    description: t("pricing.plans.enterprise.desc"),
    features: tm("pricing.plans.enterprise.features").map((el) => rt(el)),
    icon: "fa-building",
    accentColor: "#c084fc",
    customPrice: true,
    delay: 300,
  },
]);
</script>

<template>
  <section
    id="pricing"
    class="py-28 bg-[#080c16] relative overflow-hidden border-t border-slate-800/60"
  >
    <!-- Background grid -->
    <div
      class="absolute inset-0 z-0 opacity-[0.07]"
      style="
        background-image: radial-gradient(#1e293b 1px, transparent 1px);
        background-size: 30px 30px;
      "
    ></div>

    <!-- Ambient glows -->
    <div
      class="absolute top-0 left-1/3 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"
    ></div>
    <div
      class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header -->
      <div class="text-center mb-20" v-scroll-reveal>
        <span
          class="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-cyan-300 uppercase bg-cyan-500/10 border border-cyan-500/20 px-5 py-2 rounded-full mb-6 backdrop-blur-sm"
        >
          <span class="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          {{ t("pricing.badge") }}
        </span>
        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
        >
          {{ t("pricing.title") }}
        </h2>
        <p
          class="mt-6 max-w-2xl text-lg md:text-xl text-slate-400 mx-auto leading-relaxed"
        >
          {{ t("pricing.subtitle") }}
        </p>
      </div>

      <!-- Pricing Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          v-scroll-reveal="{ delay: plan.delay }"
          class="relative group"
          :class="plan.popular ? 'z-10' : ''"
        >
          <!-- Glow behind popular card -->
          <div
            v-if="plan.popular"
            class="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-blue-500/50 via-blue-500/15 to-transparent pointer-events-none"
          ></div>
          <!-- Hover glow in the plan's color -->
          <div
            class="absolute -inset-4 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            :style="`background: radial-gradient(circle at 50% 0%, ${plan.accentColor}25, transparent 70%)`"
          ></div>

          <!-- Card -->
          <div
            class="relative flex flex-col h-full rounded-2xl border transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            :class="[
              plan.popular
                ? 'bg-[#0c1629] border-blue-500/30 shadow-2xl shadow-blue-900/30 md:-translate-y-4 md:hover:-translate-y-5'
                : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 shadow-xl shadow-black/20',
            ]"
          >
            <!-- Top accent bar -->
            <div
              class="h-[2px] w-full"
              :style="`background: linear-gradient(90deg, transparent, ${plan.accentColor}80, transparent)`"
            ></div>

            <div
              class="p-8 lg:p-10 flex flex-col flex-1"
              :class="plan.popular ? 'md:py-12 lg:py-14' : ''"
            >
              <!-- Popular Badge (inline) -->
              <div
                v-if="plan.popular"
                class="mb-5"
              >
                <span
                  class="inline-flex items-center gap-1.5 bg-blue-600/15 text-blue-400 text-[11px] font-bold px-3 py-1 rounded-full border border-blue-500/20 tracking-wider uppercase"
                >
                  <i class="fas fa-star text-[8px]"></i>
                  MOST POPULAR
                </span>
              </div>

              <!-- Plan icon + name -->
              <div class="flex items-center gap-3 mb-6">
                <div
                  class="w-10 h-10 rounded-xl flex items-center justify-center border"
                  :style="`background: ${plan.accentColor}10; border-color: ${plan.accentColor}20`"
                >
                  <i
                    class="fas text-sm"
                    :class="plan.icon"
                    :style="`color: ${plan.accentColor}`"
                  ></i>
                </div>
                <h3 class="text-lg font-bold text-white">
                  {{ plan.name }}
                </h3>
              </div>

              <!-- Price -->
              <div class="mb-4">
                <template v-if="plan.customPrice">
                  <span class="text-2xl font-extrabold text-white block">
                    {{ plan.price }}
                  </span>
                  <span class="text-xs text-slate-500 font-medium mt-1 block">
                    {{ plan.period }}
                  </span>
                </template>
                <template v-else>
                  <div class="flex items-baseline gap-2">
                    <span class="text-5xl font-extrabold text-white tracking-tight">
                      {{ plan.price }}
                    </span>
                    <span class="text-sm text-slate-500 font-medium">
                      {{ plan.period }}
                    </span>
                  </div>
                </template>
              </div>

              <p class="text-sm text-slate-400 leading-relaxed mb-8">
                {{ plan.description }}
              </p>

              <!-- Divider -->
              <div class="h-px bg-slate-800/80 mb-8"></div>

              <!-- Features -->
              <ul class="space-y-3.5 mb-10 flex-1">
                <li
                  v-for="(feature, fIndex) in plan.features"
                  :key="fIndex"
                  class="flex items-start gap-3 text-sm text-slate-300"
                >
                  <span
                    class="w-5 h-5 mt-0.5 rounded-full flex items-center justify-center shrink-0"
                    :style="`background: ${plan.accentColor}18`"
                  >
                    <i
                      class="fas fa-check text-[9px]"
                      :style="`color: ${plan.accentColor}`"
                    ></i>
                  </span>
                  <span>{{ feature }}</span>
                </li>
              </ul>

              <!-- CTA Button -->
              <a
                href="https://t.me/devfin_support"
                target="_blank"
                class="group/btn block w-full py-3.5 rounded-xl font-bold text-sm text-center transition-all duration-300 border"
                :class="[
                  plan.popular
                    ? 'bg-blue-600 text-white border-blue-500 hover:bg-blue-500 shadow-lg shadow-blue-600/25'
                    : 'text-white border-slate-700 bg-slate-800/80 hover:bg-slate-700 hover:border-slate-600',
                ]"
              >
                {{ t("pricing.getStarted") }}
                <i class="fas fa-arrow-right ml-2 text-xs transition-transform group-hover/btn:translate-x-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
