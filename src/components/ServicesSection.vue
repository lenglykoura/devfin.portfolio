<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const services = computed(() => [
  {
    title: t("services.items.web.title"),
    description: t("services.items.web.desc"),
    icon: "fa-laptop-code",
    color: "#38bdf8", // Sky Blue
    delay: 0,
  },
  {
    title: t("services.items.mobile.title"),
    description: t("services.items.mobile.desc"),
    icon: "fa-mobile-screen",
    color: "#c084fc", // Purple
    delay: 100,
  },
  {
    title: t("services.items.db.title"),
    description: t("services.items.db.desc"),
    icon: "fa-server",
    color: "#2dd4bf", // Teal
    delay: 200,
  },
]);
</script>

<template>
  <!-- Dark Theme Services Section -->
  <section id="services" class="py-24 bg-[#0b1120] relative overflow-hidden border-t">
    <!-- Decorative Background Glows -->
    <div
      class="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 rounded-full bg-blue-600/10 blur-[100px]"
    ></div>
    <div
      class="absolute bottom-0 right-0 -mr-20 -mb-20 w-96 h-96 rounded-full bg-blue-500/10 blur-[100px]"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-20" v-scroll-reveal>
        <span
          class="text-xs font-bold tracking-wider text-blue-100 uppercase bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-4 inline-block"
        >
          {{ t("services.badge") }}
        </span>
        <h2
          class="mt-2 text-4xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          {{ t("services.title") }}
        </h2>
        <p
          class="mt-6 max-w-2xl text-xl text-slate-400 mx-auto leading-relaxed"
        >
          {{ t("services.subtitle") }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          v-scroll-reveal="service.delay"
          class="group relative bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-300 hover:-translate-y-2"
        >
          <!-- Icon Container (Tech Stack Style) -->
          <div
            class="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-slate-900 border border-slate-700 shadow-lg group-hover:scale-110 transition-all duration-300 relative group-hover:border-opacity-50"
            :style="`border-color: ${service.color}40`"
          >
            <!-- 40 is hex for 25% opacity -->

            <!-- Inner Glow on Hover -->
            <div
              class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              :style="`background-color: ${service.color}`"
            ></div>

            <!-- The Icon -->
            <i
              class="fas text-3xl transition-colors duration-300"
              :class="service.icon"
              :style="`color: ${service.color}`"
            ></i>
          </div>

          <h3
            class="text-2xl font-bold text-white mb-4 group-hover:text-blue-500 transition-colors"
          >
            {{ service.title }}
          </h3>

          <p
            class="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors"
          >
            {{ service.description }}
          </p>

          <!-- Learn More Link -->
          <a
            href="#"
            class="inline-flex items-center text-sm font-semibold text-white group-hover:text-blue-500 transition-colors"
          >
            {{ t("services.learnMore") }}
            <i
              class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"
            ></i>
          </a>

          <!-- Decoration on hover -->
          <div
            class="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"
          >
            <i
              class="fas text-9xl -mr-6 -mt-6"
              :class="service.icon"
              :style="`color: ${service.color}`"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
