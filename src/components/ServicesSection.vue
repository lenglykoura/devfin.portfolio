<script setup>
import { computed, ref, watch, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

const { t, tm, rt } = useI18n();
const features = (key) => {
  const list = tm(`services.items.${key}.features`);
  return Array.isArray(list) ? list.map((el) => rt(el)) : [];
};

const services = computed(() => [
  {
    title: t("services.items.web.title"),
    description: t("services.items.web.desc"),
    features: features("web"),
    icon: "fa-laptop-code",
    color: "#38bdf8", // Sky Blue
    gradient: "from-sky-500/20 via-sky-400/5 to-transparent",
    glowColor: "sky",
    delay: 0,
  },
  {
    title: t("services.items.mobile.title"),
    description: t("services.items.mobile.desc"),
    features: features("mobile"),
    icon: "fa-mobile-screen",
    color: "#c084fc", // Purple
    gradient: "from-purple-500/20 via-purple-400/5 to-transparent",
    glowColor: "purple",
    delay: 150,
  },
  {
    title: t("services.items.db.title"),
    description: t("services.items.db.desc"),
    features: features("db"),
    icon: "fa-server",
    color: "#2dd4bf", // Teal
    gradient: "from-teal-500/20 via-teal-400/5 to-transparent",
    glowColor: "teal",
    delay: 300,
  },
]);

// "Learn more" popup
const selected = ref(null);
const open = (service) => (selected.value = service);
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
  <!-- Services Section -->
  <section
    id="services"
    class="py-28 bg-[#0b1120] relative overflow-hidden border-t border-slate-800/60"
  >
    <!-- Background grid pattern -->
    <div
      class="absolute inset-0 z-0 opacity-[0.07]"
      style="
        background-image: radial-gradient(#38bdf8 1px, transparent 1px);
        background-size: 32px 32px;
      "
    ></div>

    <!-- Decorative Background Glows -->
    <div
      class="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-sky-600/8 blur-[140px] pointer-events-none"
    ></div>
    <div
      class="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-purple-500/8 blur-[140px] pointer-events-none"
    ></div>
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-500/5 blur-[180px] pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-20" v-scroll-reveal>
        <span
          class="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-cyan-300 uppercase bg-cyan-500/10 border border-cyan-500/20 px-5 py-2 rounded-full mb-6 backdrop-blur-sm"
        >
          <span class="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          {{ t("services.badge") }}
        </span>
        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
        >
          {{ t("services.title") }}
        </h2>
        <p
          class="mt-6 max-w-2xl text-lg md:text-xl text-slate-400 mx-auto leading-relaxed"
        >
          {{ t("services.subtitle") }}
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          v-scroll-reveal="service.delay"
          v-touch-active
          class="group relative cursor-pointer focus:outline-none"
          role="button"
          tabindex="0"
          :aria-label="`${service.title}: ${t('services.learnMore')}`"
          @click="open(service)"
          @keydown.enter.space.prevent="open(service)"
        >
          <!-- Animated border glow on hover -->
          <div
            class="absolute -inset-[1px] rounded-3xl opacity-0 group-live:opacity-100 transition-opacity duration-500 blur-[1px]"
            :style="`background: linear-gradient(135deg, ${service.color}30, transparent 50%, ${service.color}15)`"
          ></div>

          <!-- Card -->
          <div
            class="relative bg-slate-900/80 backdrop-blur-sm p-8 lg:p-10 rounded-3xl border border-slate-800/80 shadow-xl shadow-black/20 group-live:shadow-2xl transition-all duration-500 group-live:-translate-y-2 h-full flex flex-col overflow-hidden"
          >
            <!-- Gradient overlay on hover -->
            <div
              class="absolute inset-0 bg-gradient-to-br opacity-0 group-live:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
              :class="service.gradient"
            ></div>

            <!-- Content -->
            <div class="relative z-10 flex flex-col h-full">
              <!-- Icon Container -->
              <div
                class="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border shadow-lg group-live:scale-110 group-live:shadow-xl transition-all duration-500 relative overflow-hidden"
                :style="`
                  border-color: ${service.color}25;
                  background: linear-gradient(135deg, ${service.color}10, transparent);
                `"
              >
                <!-- Inner glow on hover -->
                <div
                  class="absolute inset-0 rounded-2xl opacity-0 group-live:opacity-30 transition-opacity duration-500"
                  :style="`background: radial-gradient(circle, ${service.color}40, transparent 70%)`"
                ></div>

                <!-- The Icon -->
                <i
                  class="fas text-2xl transition-all duration-500 group-live:scale-110"
                  :class="service.icon"
                  :style="`color: ${service.color}`"
                ></i>
              </div>

              <h3
                class="text-xl lg:text-2xl font-bold text-white mb-3 transition-colors duration-300"
                :style="`--hover-color: ${service.color}`"
              >
                {{ service.title }}
              </h3>

              <p
                class="text-slate-400 leading-relaxed mb-8 group-live:text-slate-300 transition-colors duration-300 flex-grow text-[15px]"
              >
                {{ service.description }}
              </p>

              <!-- Learn More Link -->
              <span
                class="inline-flex items-center text-sm font-semibold transition-all duration-300 group-live:gap-3 gap-2"
                :style="`color: ${service.color}`"
              >
                {{ t("services.learnMore") }}
                <i
                  class="fas fa-arrow-right text-xs transform group-live:translate-x-1.5 transition-transform duration-300"
                ></i>
              </span>
            </div>

            <!-- Large decorative icon -->
            <div
              class="absolute -bottom-4 -right-4 opacity-[0.03] group-live:opacity-[0.07] transition-all duration-700 group-live:scale-110 pointer-events-none"
            >
              <i
                class="fas text-[140px]"
                :class="service.icon"
                :style="`color: ${service.color}`"
              ></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom decoration: subtle horizontal line -->
      <div class="flex justify-center mt-16">
        <div
          class="w-20 h-1 rounded-full bg-gradient-to-r from-sky-500/40 via-purple-500/40 to-teal-500/40"
        ></div>
      </div>
    </div>

    <!-- "Learn more" popup -->
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
            class="popup-panel relative w-full sm:max-w-xl max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-2xl bg-[#0f172a] border shadow-2xl p-6 sm:p-8"
            :style="`border-color: ${selected.color}40`"
          >
            <button
              type="button"
              class="absolute top-4 right-4 w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 text-white flex items-center justify-center hover:bg-slate-700 transition-colors"
              :aria-label="t('services.close')"
              @click="close"
            >
              <i class="fas fa-xmark"></i>
            </button>

            <!-- Header -->
            <div
              class="w-14 h-14 rounded-2xl flex items-center justify-center border mb-5"
              :style="`border-color: ${selected.color}30; background: ${selected.color}15`"
            >
              <i class="fas text-2xl" :class="selected.icon" :style="`color: ${selected.color}`"></i>
            </div>
            <h3 class="text-2xl sm:text-3xl font-bold text-white pr-12">{{ selected.title }}</h3>
            <p class="mt-3 text-slate-300 leading-relaxed">{{ selected.description }}</p>

            <!-- What's included -->
            <h4 class="mt-8 mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">
              {{ t("services.includedTitle") }}
            </h4>
            <ul class="grid sm:grid-cols-2 gap-3">
              <li
                v-for="(feature, i) in selected.features"
                :key="feature"
                class="popup-item flex items-start gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-800 text-sm text-slate-200"
                :style="`animation-delay: ${120 + i * 50}ms`"
              >
                <span
                  class="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                  :style="`background: ${selected.color}20`"
                >
                  <i class="fas fa-check text-[10px]" :style="`color: ${selected.color}`"></i>
                </span>
                <span class="pt-0.5">{{ feature }}</span>
              </li>
            </ul>

            <!-- CTA -->
            <a
              href="#pricing"
              class="group/btn mt-8 flex w-full items-center justify-center py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 border border-blue-500 hover:bg-blue-500 shadow-lg shadow-blue-600/25 transition-all duration-300"
              @click="close"
            >
              {{ t("services.seePricing") }}
              <i class="fas fa-arrow-right ml-2 text-xs transition-transform group-hover/btn:translate-x-1"></i>
            </a>
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
