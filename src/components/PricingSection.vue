<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

// 1. Destructure tm (translate multiple) and rt (resolve translation)
const { t, tm, rt } = useI18n();

const plans = computed(() => [
  {
    name: t("pricing.plans.standard.name"),
    price: t("pricing.plans.standard.price"),
    period: t("pricing.plans.standard.period"),
    description: t("pricing.plans.standard.desc"),
    // 2. Use tm() to get the array, then map with rt() to resolve strings
    features: tm("pricing.plans.standard.features").map((el) => rt(el)),
    color: "text-blue-400",
    borderColor: "border-slate-800 hover:border-blue-500/50",
    buttonClass:
      "bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white",
    delay: 0,
  },
  {
    name: t("pricing.plans.sme.name"),
    price: t("pricing.plans.sme.price"),
    period: t("pricing.plans.sme.period"),
    description: t("pricing.plans.sme.desc"),
    features: tm("pricing.plans.sme.features").map((el) => rt(el)),
    popular: true,
    color: "text-blue-500",
    borderColor: "border-blue-600/50",
    buttonClass: "bg-blue-600 text-white hover:bg-blue-500",
    delay: 100,
  },
  {
    name: t("pricing.plans.enterprise.name"),
    price: t("pricing.plans.enterprise.price"),
    period: t("pricing.plans.enterprise.period"),
    description: t("pricing.plans.enterprise.desc"),
    features: tm("pricing.plans.enterprise.features").map((el) => rt(el)),
    color: "text-purple-400",
    borderColor: "border-slate-800 hover:border-purple-500/50",
    buttonClass:
      "bg-purple-500/10 text-purple-400 hover:bg-purple-500 hover:text-white",
    delay: 200,
  },
]);
</script>

<template>
  <section id="pricing" class="py-24 bg-[#080c16] relative overflow-hidden border-t border-slate-800">
    <!-- Background Decoration -->
    <div
      class="absolute inset-0 z-0 opacity-20"
      style="
        background-image: radial-gradient(#1e293b 1px, transparent 1px);
        background-size: 30px 30px;
      "
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-20" v-scroll-reveal>
        <span
          class="text-xs font-bold tracking-wider text-blue-100 uppercase bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-4 inline-block"
        >
          {{ t("pricing.badge") }}
        </span>
        <h2
          class="mt-2 text-4xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          {{ t("pricing.title") }}
        </h2>
        <p
          class="mt-6 max-w-2xl text-xl text-slate-400 mx-auto leading-relaxed"
        >
          {{ t("pricing.subtitle") }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          v-scroll-reveal="{ delay: plan.delay }"
          class="relative flex flex-col p-8 bg-slate-900 rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50"
          :class="[
            plan.borderColor,
            plan.popular ? 'shadow-xl shadow-devfin-900/20 scale-105 z-10' : '',
          ]"
        >
          <!-- Popular Badge -->
          <div
            v-if="plan.popular"
            class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-devfin-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg tracking-wider"
          >
            MOST POPULAR
          </div>

          <div class="mb-6">
            <h3 class="text-lg font-bold text-white mb-2">{{ plan.name }}</h3>
            <div class="flex items-baseline gap-1">
              <span class="text-4xl font-extrabold text-white">{{
                plan.price
              }}</span>
              <span class="text-sm text-slate-500 font-medium">{{
                plan.period
              }}</span>
            </div>
            <p class="mt-4 text-sm text-slate-400 leading-relaxed">
              {{ plan.description }}
            </p>
          </div>

          <ul class="space-y-4 mb-8 flex-1">
            <li
              v-for="(feature, fIndex) in plan.features"
              :key="fIndex"
              class="flex items-start text-sm text-slate-300"
            >
              <i class="fas fa-check mt-1 mr-3 text-xs" :class="plan.color"></i>
              <span>{{ feature }}</span>
            </li>
          </ul>

          <a
            href="https://t.me/devfin_support"
            target="_blank"
            class="w-full py-3 rounded-xl font-bold text-sm text-center transition-all duration-300 shadow-lg"
            :class="plan.buttonClass"
          >
            {{ t("pricing.getStarted") }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
