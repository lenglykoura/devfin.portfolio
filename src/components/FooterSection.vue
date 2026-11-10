<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

// Khmer copy uses Khmer digits for the year
const year = computed(() => {
  const y = String(new Date().getFullYear());
  return locale.value === "km" ? y.replace(/\d/g, (d) => "០១២៣៤៥៦៧៨៩"[d]) : y;
});

const services = computed(() => [
  t("footer.items.web"),
  t("footer.items.mobile"),
  t("footer.items.db"),
]);

const quickLinks = computed(() => [
  { label: t("nav.home"), href: "#home" },
  { label: t("nav.work"), href: "#projects" },
  { label: t("nav.pricing"), href: "#pricing" },
  { label: t("nav.team"), href: "#team" },
]);

const socials = [
  { icon: "fa-telegram", href: "https://t.me/lenglykoura", label: "Telegram", hover: "hover:bg-[#229ED9] hover:border-[#229ED9]" },
  { icon: "fa-facebook-f", href: "https://facebook.com/devfintech", label: "Facebook", hover: "hover:bg-[#1877F2] hover:border-[#1877F2]" },
  { icon: "fa-google", href: "#", label: "Google", hover: "hover:bg-[#EA4335] hover:border-[#EA4335]" },
];
</script>

<template>
  <footer class="relative bg-[#080c16] text-slate-400 pt-20 pb-10 border-t border-slate-800/60 overflow-hidden">
    <!-- Background grid -->
    <div
      class="absolute inset-0 z-0 opacity-[0.07]"
      style="background-image: radial-gradient(#1e293b 1px, transparent 1px); background-size: 30px 30px;"
    ></div>
    <!-- Ambient glow -->
    <div class="absolute -top-40 left-1/4 w-[500px] h-[400px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-12 gap-10">
        <!-- Brand Column -->
        <div class="col-span-2 md:col-span-5">
          <a href="#home" class="inline-flex items-center gap-2 mb-5">
            <img src="/src/assets/images/logo-white.png" alt="Devfin Logo" width="46" />
            <span class="text-2xl font-bold text-white">Devfin.</span>
          </a>
          <p class="text-slate-400 max-w-sm leading-relaxed text-sm">
            {{ t("footer.desc") }}
          </p>

          <!-- Socials -->
          <div class="flex gap-3 mt-8">
            <a
              v-for="s in socials"
              :key="s.label"
              :href="s.href"
              target="_blank"
              rel="noopener"
              :aria-label="s.label"
              class="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:-translate-y-1"
              :class="s.hover"
            >
              <i class="fab" :class="s.icon"></i>
            </a>
          </div>
        </div>

        <!-- Services -->
        <div class="md:col-span-3 md:col-start-7">
          <h4 class="text-white font-bold mb-6 uppercase text-xs tracking-widest">{{ t("footer.services") }}</h4>
          <ul class="space-y-3 text-sm">
            <li v-for="item in services" :key="item">
              <a href="#services" class="group inline-flex items-center gap-2 hover:text-white transition-colors duration-300">
                <i class="fas fa-chevron-right text-[8px] text-blue-500 transition-transform duration-300 group-hover:translate-x-1"></i>
                {{ item }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div class="md:col-span-3">
          <h4 class="text-white font-bold mb-6 uppercase text-xs tracking-widest">{{ t("footer.company") }}</h4>
          <ul class="space-y-3 text-sm">
            <li v-for="link in quickLinks" :key="link.href">
              <a :href="link.href" class="group inline-flex items-center gap-2 hover:text-white transition-colors duration-300">
                <i class="fas fa-chevron-right text-[8px] text-blue-500 transition-transform duration-300 group-hover:translate-x-1"></i>
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="mt-16 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>{{ t("footer.copyright", { year }) }}</p>
        <a href="#home" class="group inline-flex items-center gap-2 hover:text-white transition-colors duration-300">
          {{ t("footer.backToTop") }}
          <span class="w-7 h-7 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:-translate-y-0.5">
            <i class="fas fa-arrow-up text-[10px]"></i>
          </span>
        </a>
      </div>
    </div>
  </footer>
</template>
