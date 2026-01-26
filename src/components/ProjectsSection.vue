<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const projects = computed(() => [
  {
    title: t("projects.items.loan.title"),
    status: t("projects.items.loan.status"),
    statusClass: "bg-devfin-500/10 text-blue-100 border-devfin-500/20",
    description: t("projects.items.loan.desc"),
    // image: loanImg, // Use imported image
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800", // Placeholder
    icon: "fa-hand-holding-dollar",
    gradient: "bg-gradient-to-br from-slate-800 to-slate-900",
    techStack: [
      {
        name: "Vue.js",
        class: "bg-devfin-500/10 text-blue-200 border-devfin-500/20",
      },
      {
        name: "Laravel",
        class: "bg-red-500/10 text-red-400 border-red-500/20",
      },
      {
        name: "MySQL",
        class: "bg-orange-500/10 text-orange-400 border-orange-500/20",
      },
    ],
    delay: 0,
  },
  {
    title: t("projects.items.hotel.title"),
    status: t("projects.items.hotel.status"),
    statusClass: "bg-devfin-500/10 text-blue-100 border-devfin-500/20",
    description: t("projects.items.hotel.desc"),
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800", // Placeholder
    icon: "fa-hotel",
    gradient: "bg-gradient-to-br from-indigo-900 to-slate-900",
    techStack: [
      {
        name: "Vue.js",
        class: "bg-devfin-500/10 text-blue-200 border-devfin-500/20",
      },
      {
        name: "Laravel",
        class: "bg-red-500/10 text-red-400 border-red-500/20",
      },
      {
        name: "MySQL",
        class: "bg-orange-500/10 text-orange-400 border-orange-500/20",
      },
    ],
    delay: 100,
  },
  {
    title: t("projects.items.pos.title"),
    status: t("projects.items.pos.status"),
    statusClass: "bg-devfin-500/10 text-blue-100 border-devfin-500/20",
    description: t("projects.items.pos.desc"),
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800", // Placeholder
    icon: "fa-cash-register",
    gradient: "bg-gradient-to-br from-indigo-900 to-slate-900",
    techStack: [
      {
        name: ".NET Core",
        class: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      },
      {
        name: "C#",
        class: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      },
      {
        name: "SQL Server",
        class: "bg-slate-700/50 text-slate-300 border-slate-600/50",
      },
    ],
    delay: 200,
  },
]);
</script>

<template>
  <section
    id="projects"
    class="py-24 bg-[#0b1120] relative overflow-hidden border-t"
  >
    <!-- Background Decoration -->
    <div
      class="absolute inset-0 z-0 opacity-20"
      style="
        background-image: radial-gradient(#1e293b 1px, transparent 1px);
        background-size: 30px 30px;
      "
    ></div>

    <!-- Ambient Glows -->
    <div
      class="absolute top-1/4 right-0 w-[500px] h-[500px] bg-devfin-500/5 rounded-full blur-[120px]"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-20" v-scroll-reveal>
        <span
          class="text-xs font-bold tracking-wider text-blue-100 uppercase bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-4 inline-block"
        >
          {{ t("projects.badge") }}
        </span>
        <h2
          class="mt-2 text-4xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          {{ t("projects.title") }}
        </h2>
        <p
          class="mt-6 max-w-2xl text-xl text-slate-400 mx-auto leading-relaxed"
        >
          {{ t("projects.subtitle") }}
        </p>
      </div>

      <!-- Changed from grid-cols-2 to grid-cols-3 to accommodate 3 items -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          v-scroll-reveal="project.delay"
          class="group flex flex-col bg-slate-900 rounded-3xl overflow-hidden shadow-xl shadow-black/30 border border-slate-800 hover:border-slate-700 transition-all duration-500 hover:-translate-y-2"
        >
          <div class="h-52 relative overflow-hidden bg-slate-800/50">
            <img
              :src="project.image"
              :alt="project.title"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"
            ></div>

            <div class="absolute top-6 right-6">
              <span
                class="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm border backdrop-blur-md"
                :class="project.statusClass"
              >
                {{ project.status }}
              </span>
            </div>
          </div>

          <!-- Content Area -->
          <div class="p-8 flex-1 flex flex-col">
            <div class="mb-4">
              <h3
                class="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors uppercase"
              >
                {{ project.title }}
              </h3>
              <p class="text-slate-400 leading-relaxed text-sm">
                {{ project.description }}
              </p>
            </div>

            <div class="mt-auto pt-6 border-t border-slate-800">
              <div class="flex items-center justify-between mb-4">
                <h4
                  class="text-xs font-bold text-slate-500 uppercase tracking-wider"
                >
                  {{ t("projects.technologies") }}
                </h4>
              </div>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.techStack"
                  :key="tech.name"
                  class="px-3 py-1.5 rounded-lg text-xs font-bold border transition-transform hover:scale-105 cursor-default"
                  :class="tech.class"
                >
                  {{ tech.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
