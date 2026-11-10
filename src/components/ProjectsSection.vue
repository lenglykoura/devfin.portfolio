<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const projects = computed(() => [
  {
    title: t("projects.items.loan.title"),
    status: t("projects.items.loan.status"),
    description: t("projects.items.loan.desc"),
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    accentColor: "#38bdf8",
    techStack: ["Vue.js", "Laravel", "MySQL"],
    delay: 0,
  },
  {
    title: t("projects.items.hotel.title"),
    status: t("projects.items.hotel.status"),
    description: t("projects.items.hotel.desc"),
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    accentColor: "#c084fc",
    techStack: ["Vue.js", "Laravel", "MySQL"],
    delay: 150,
  },
  {
    title: t("projects.items.pos.title"),
    status: t("projects.items.pos.status"),
    description: t("projects.items.pos.desc"),
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    accentColor: "#2dd4bf",
    techStack: [".NET Core", "C#", "SQL Server"],
    delay: 300,
  },
  {
    title: t("projects.items.school.title"),
    status: t("projects.items.school.status"),
    description: t("projects.items.school.desc"),
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    accentColor: "#34d399",
    techStack: ["Vue.js", "Laravel", "MySQL"],
    delay: 450,
  },
]);
</script>

<template>
  <section
    id="projects"
    class="py-28 bg-[#0b1120] relative overflow-hidden border-t border-slate-800/60"
  >
    <!-- Background grid -->
    <div
      class="absolute inset-0 z-0 opacity-[0.07]"
      style="
        background-image: radial-gradient(#1e293b 1px, transparent 1px);
        background-size: 30px 30px;
      "
    ></div>

    <!-- Ambient Glows -->
    <div
      class="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header -->
      <div class="text-center mb-20" v-scroll-reveal>
        <span
          class="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-cyan-300 uppercase bg-cyan-500/10 border border-cyan-500/20 px-5 py-2 rounded-full mb-6 backdrop-blur-sm"
        >
          <span class="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          {{ t("projects.badge") }}
        </span>
        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
        >
          {{ t("projects.title") }}
        </h2>
        <p
          class="mt-6 max-w-2xl text-lg md:text-xl text-slate-400 mx-auto leading-relaxed"
        >
          {{ t("projects.subtitle") }}
        </p>
      </div>

      <!-- Projects 2x2 grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <!-- Wrapper takes scroll-reveal's inline transform so the card's hover transitions still work -->
        <div
          v-for="(project, index) in projects"
          :key="index"
          v-scroll-reveal="project.delay"
          v-touch-active
          class="group relative"
          :style="`--accent: ${project.accentColor}; --accent-soft: ${project.accentColor}66`"
        >
          <!-- Hover glow in the project's color -->
          <div
            class="absolute -inset-3 rounded-3xl blur-2xl opacity-0 group-live:opacity-100 transition-opacity duration-500 pointer-events-none"
            :style="`background: radial-gradient(circle at 50% 30%, ${project.accentColor}22, transparent 70%)`"
          ></div>

          <div
            class="relative h-[440px] rounded-2xl overflow-hidden border border-slate-800 group-live:border-(--accent-soft) shadow-xl shadow-black/20 group-live:shadow-2xl transition-all duration-500 group-live:-translate-y-1.5 bg-slate-900"
          >
            <!-- Photo fills the card -->
            <img
              :src="project.image"
              :alt="project.title"
              loading="lazy"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-live:scale-110"
            />

            <!-- Readability gradient (navy, not black) -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-[#0b1426]/95 from-10% via-[#0b1426]/50 via-45% to-[#0b1426]/10"
            ></div>
            <!-- Color tint on hover -->
            <div
              class="absolute inset-0 opacity-0 group-live:opacity-100 transition-opacity duration-500"
              :style="`background: linear-gradient(to top, ${project.accentColor}26, transparent 60%)`"
            ></div>

            <!-- Status -->
            <div class="absolute top-5 right-5">
              <span
                class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-md bg-slate-950/50 border border-white/10 text-white"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                {{ project.status }}
              </span>
            </div>

            <!-- Bottom content -->
            <div class="absolute inset-x-0 bottom-0 p-6 lg:p-8">
              <div class="transition-transform duration-500 ease-out group-live:-translate-y-1">
                <h3
                  class="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg group-live:text-(--accent) transition-colors duration-300"
                >
                  {{ project.title }}
                </h3>

                <!-- Description: always shown on phones, slides in on hover on larger screens -->
                <div
                  class="grid grid-rows-[1fr] opacity-100 mt-3 md:grid-rows-[0fr] md:opacity-0 md:mt-0 transition-all duration-500 ease-out md:group-live:grid-rows-[1fr] md:group-live:opacity-100 md:group-live:mt-3"
                >
                  <p class="overflow-hidden text-sm leading-relaxed text-slate-200">
                    {{ project.description }}
                  </p>
                </div>

                <!-- Tech stack -->
                <div class="flex flex-wrap gap-2 mt-5">
                  <span
                    v-for="tech in project.techStack"
                    :key="tech"
                    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-md bg-slate-950/50 text-slate-200 border border-white/10"
                  >
                    <span class="w-1.5 h-1.5 rounded-full" :style="`background: ${project.accentColor}`"></span>
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
