<script setup>
import { computed, ref, watch, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

const { t, tm, rt } = useI18n();
const features = (key) => {
  const list = tm(`projects.items.${key}.features`);
  return Array.isArray(list) ? list.map((el) => rt(el)) : [];
};

// Sectioned feature lists (title, feature items, optional reports); read leaf by leaf with t()
const GROUP_ICONS = ["fa-hand-holding-dollar", "fa-calculator", "fa-users"];
const groups = (key) => {
  const raw = tm(`projects.items.${key}.groups`);
  if (!Array.isArray(raw)) return [];
  return raw.map((g, gi) => {
    const base = `projects.items.${key}.groups.${gi}`;
    return {
      icon: GROUP_ICONS[gi] || "fa-layer-group",
      title: t(`${base}.title`),
      items: g.items.map((_, i) => ({
        name: t(`${base}.items.${i}.name`),
        detail: t(`${base}.items.${i}.detail`),
      })),
      reportsTitle: g.reports ? t(`${base}.reportsTitle`) : "",
      reports: (g.reports || []).map((_, i) => t(`${base}.reports.${i}`)),
    };
  });
};

const projects = computed(() => [
  {
    title: t("projects.items.loan.title"),
    status: t("projects.items.loan.status"),
    description: t("projects.items.loan.desc"),
    groups: groups("loan"),
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
    features: features("hotel"),
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
    features: features("pos"),
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
    features: features("school"),
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    accentColor: "#34d399",
    techStack: ["Vue.js", "Laravel", "MySQL"],
    delay: 450,
  },
]);

// Feature popup
const selected = ref(null);
const open = (project) => (selected.value = project);
const close = () => (selected.value = null);
const onKey = (e) => e.key === "Escape" && close();

watch(selected, (val) => {
  // Stop the page scrolling behind the popup
  document.body.style.overflow = val ? "hidden" : "";
  if (val) window.addEventListener("keydown", onKey);
  else window.removeEventListener("keydown", onKey);
});

onUnmounted(() => {
  document.body.style.overflow = "";
  window.removeEventListener("keydown", onKey);
});
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
          class="group relative cursor-pointer focus:outline-none"
          :style="`--accent: ${project.accentColor}; --accent-soft: ${project.accentColor}66`"
          role="button"
          tabindex="0"
          :aria-label="`${project.title}: ${t('projects.viewFeatures')}`"
          @click="open(project)"
          @keydown.enter.space.prevent="open(project)"
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

                <!-- Click hint -->
                <span
                  class="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-white/80 group-live:text-(--accent) transition-colors duration-300"
                >
                  {{ t("projects.viewFeatures") }}
                  <i class="fas fa-arrow-right text-xs transition-transform duration-300 group-live:translate-x-1"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Feature popup -->
    <Teleport to="body">
      <Transition name="popup">
        <div
          v-if="selected"
          class="fixed inset-0 z-[55] flex items-end sm:items-center justify-center sm:p-6"
          role="dialog"
          aria-modal="true"
          :aria-label="selected.title"
        >
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-slate-950/80" @click="close"></div>

          <!-- Panel -->
          <div
            class="popup-panel relative w-full max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl bg-[#0f172a] border shadow-2xl"
            :class="selected.groups?.length ? 'sm:max-w-3xl' : 'sm:max-w-2xl'"
            :style="`border-color: ${selected.accentColor}40`"
          >
            <!-- Header image -->
            <div class="relative h-44 sm:h-52">
              <img :src="selected.image" :alt="selected.title" class="absolute inset-0 w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent"></div>
              <button
                type="button"
                class="absolute top-4 right-4 w-10 h-10 rounded-xl bg-slate-950/70 border border-white/10 text-white flex items-center justify-center hover:bg-slate-800 transition-colors"
                :aria-label="t('projects.close')"
                @click="close"
              >
                <i class="fas fa-xmark"></i>
              </button>
              <span
                class="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-slate-950/70 border border-white/10 text-white"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                {{ selected.status }}
              </span>
            </div>

            <div class="px-6 sm:px-8 pb-8 -mt-6 relative">
              <h3 class="text-2xl sm:text-3xl font-bold" :style="`color: ${selected.accentColor}`">
                {{ selected.title }}
              </h3>
              <p class="mt-3 text-slate-300 leading-relaxed">{{ selected.description }}</p>

              <!-- Features -->
              <h4 class="mt-8 mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                {{ t("projects.featuresTitle") }}
              </h4>

              <!-- Sectioned features (e.g. loan system) -->
              <div v-if="selected.groups?.length" class="space-y-5">
                <section
                  v-for="(group, gi) in selected.groups"
                  :key="group.title"
                  class="popup-item rounded-2xl border border-slate-800 bg-slate-800/30 p-5"
                  :style="`animation-delay: ${120 + gi * 80}ms`"
                >
                  <div class="flex items-center gap-3 mb-4">
                    <span
                      class="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      :style="`background: ${selected.accentColor}20`"
                    >
                      <i class="fas text-sm" :class="group.icon" :style="`color: ${selected.accentColor}`"></i>
                    </span>
                    <h5 class="text-base font-bold text-white">
                      <span :style="`color: ${selected.accentColor}`">{{ gi + 1 }}.</span>
                      {{ group.title }}
                    </h5>
                  </div>

                  <ul class="space-y-2.5">
                    <li v-for="item in group.items" :key="item.name" class="flex items-start gap-3 text-sm">
                      <i class="fas fa-check text-[10px] mt-1.5 shrink-0" :style="`color: ${selected.accentColor}`"></i>
                      <span class="text-slate-300">
                        <span class="font-semibold text-white">{{ item.name }}:</span>
                        {{ item.detail }}
                      </span>
                    </li>
                  </ul>

                  <template v-if="group.reports.length">
                    <p class="mt-5 mb-3 flex items-center gap-2 text-xs font-bold text-slate-400">
                      <i class="fas fa-chart-column" :style="`color: ${selected.accentColor}`"></i>
                      {{ group.reportsTitle }}
                    </p>
                    <ul class="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                      <li
                        v-for="report in group.reports"
                        :key="report"
                        class="flex items-start gap-2 text-xs text-slate-400"
                      >
                        <span class="w-1 h-1 rounded-full mt-1.5 shrink-0" :style="`background: ${selected.accentColor}`"></span>
                        {{ report }}
                      </li>
                    </ul>
                  </template>
                </section>
              </div>

              <!-- Simple feature list -->
              <ul v-else class="grid sm:grid-cols-2 gap-3">
                <li
                  v-for="(feature, i) in selected.features"
                  :key="feature"
                  class="popup-item flex items-start gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-800 text-sm text-slate-200"
                  :style="`animation-delay: ${120 + i * 50}ms`"
                >
                  <span
                    class="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                    :style="`background: ${selected.accentColor}20`"
                  >
                    <i class="fas fa-check text-[10px]" :style="`color: ${selected.accentColor}`"></i>
                  </span>
                  <span class="pt-0.5">{{ feature }}</span>
                </li>
              </ul>

              <!-- Tech -->
              <h4 class="mt-8 mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">
                {{ t("projects.technologies") }}
              </h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in selected.techStack"
                  :key="tech"
                  class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/70 text-slate-200 border border-slate-700"
                >
                  <span class="w-1.5 h-1.5 rounded-full" :style="`background: ${selected.accentColor}`"></span>
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
/* Popup: backdrop fades, panel slides up; feature rows follow one by one */
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.3s ease;
}
.popup-enter-active .popup-panel,
.popup-leave-active .popup-panel {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}
.popup-enter-from .popup-panel,
.popup-leave-to .popup-panel {
  transform: translateY(40px) scale(0.97);
}

.popup-item {
  animation: item-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes item-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
}
</style>
