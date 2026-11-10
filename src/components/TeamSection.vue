<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Use computed property for team data to react to language changes
const team = computed(() => [
  {
    name: t("team.members.lykoura.name"),
    role: t("team.members.lykoura.role"),
    desc: t("team.members.lykoura.desc"),
    // Ideally use high-res portrait images
    image: "koura.jpg",
    telegram: "lenglykoura",
    github: "lenglykoura",
    delay: 0,
  },

  {
    name: t("team.members.theang.name"),
    role: t("team.members.theang.role"),
    desc: t("team.members.theang.desc"),
    image: "theang.jpg",
    telegram: "theang",
    github: "theang",
    delay: 100,
  },
  {
    name: t("team.members.tela.name"),
    role: t("team.members.tela.role"),
    desc: t("team.members.tela.desc"),
    image: "tela.jpg",
    telegram: "Y_NotMe",
    github: "TLAR2411",
    delay: 200,
  },
]);

// Helper function to dynamically load images from src/assets/images/
const getImageUrl = (name) => {
  // Try/Catch block to handle missing images gracefully if you don't have the files yet
  try {
    return new URL(`../assets/images/${name}`, import.meta.url).href;
  } catch (e) {
    return "https://via.placeholder.com/400x600"; // Fallback to portrait size
  }
};

</script>

<template>
  <section
    id="team"
    class="py-28 bg-[#080c16] relative overflow-hidden border-t border-slate-800/60"
  >
    <!-- Background Decoration -->
    <div
      class="absolute inset-0 z-0 opacity-[0.07]"
      style="
        background-image: radial-gradient(#1e293b 1px, transparent 1px);
        background-size: 30px 30px;
      "
    ></div>
    <div
      class="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[150px] pointer-events-none"
    ></div>
    <div
      class="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[150px] pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-20" v-scroll-reveal>
        <span
          class="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-cyan-300 uppercase bg-cyan-500/10 border border-cyan-500/20 px-5 py-2 rounded-full mb-6 backdrop-blur-sm"
        >
          <span class="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          {{ t("team.badge") }}
        </span>
        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
        >
          {{ t("team.title") }}
        </h2>
        <p class="mt-6 max-w-2xl text-lg md:text-xl text-slate-400 mx-auto leading-relaxed">
          {{ t("team.subtitle") }}
        </p>
      </div>

      <!-- Flexbox keeps a partial last row centered -->
      <div class="flex flex-wrap justify-center gap-8">
        <!-- Wrapper takes scroll-reveal's inline transform so the card's hover transitions still work -->
        <div
          v-for="(member, index) in team"
          :key="index"
          v-scroll-reveal="member.delay"
          v-touch-active
          class="group relative w-full max-w-sm sm:w-72 lg:w-80"
        >
          <!-- Hover / tap glow behind the card -->
          <div
            class="absolute -inset-3 rounded-3xl blur-2xl opacity-0 group-live:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-blue-500/20 via-cyan-500/10 to-purple-500/20"
          ></div>
        <div
          class="shine relative h-[460px] w-full rounded-2xl overflow-hidden shadow-xl shadow-black/20 border border-slate-800 transition-all duration-500 group-live:-translate-y-2 group-live:shadow-2xl group-live:shadow-blue-900/40 group-live:border-blue-400/40"
        >
          <!-- Portrait -->
          <img
            :src="getImageUrl(member.image)"
            :alt="member.name"
            class="absolute inset-0 w-full h-full object-cover object-top bg-slate-900 transition-transform duration-700 ease-out group-live:scale-105"
          />

          <!-- Readability gradient: soft, bottom-anchored -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#0b1426]/85 from-5% via-[#0b1426]/30 via-35% to-transparent to-60%"
          ></div>

          <!-- Extra darkening behind the text block, deepens on reveal -->
          <div
            class="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0b1426]/60 to-transparent opacity-40 transition-opacity duration-500 group-live:opacity-100"
          ></div>

          <!-- Subtle brand tint on reveal -->
          <div
            class="absolute inset-0 bg-blue-600/10 opacity-0 transition-opacity duration-500 group-live:opacity-100"
          ></div>

          <!-- Glass edge -->
          <div
            class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none"
          ></div>

          <!-- Content -->
          <div class="absolute inset-x-0 bottom-0 z-10 p-6">
            <div
              class="transition-transform duration-500 ease-out group-live:-translate-y-1"
            >
              <h3 class="text-2xl font-bold text-white drop-shadow-lg">
                {{ member.name }}
              </h3>
              <span
                class="mt-2 inline-flex items-center gap-2 bg-blue-600/20 text-blue-300 text-[11px] font-bold px-3 py-1 rounded-full border border-blue-500/30 tracking-wider uppercase backdrop-blur-sm"
              >
                <span class="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                {{ member.role }}
              </span>

              <!-- Description: revealed on hover / tap -->
              <div
                class="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-live:grid-rows-[1fr] group-live:opacity-100 group-live:mt-3"
              >
                <p
                  class="overflow-hidden text-sm leading-relaxed text-slate-200 drop-shadow-sm"
                >
                  {{ member.desc }}
                </p>
              </div>

              <!-- Social Links -->
              <div class="mt-4 flex gap-3">
                <a
                  :href="`https://t.me/${member.telegram}`"
                  target="_blank"
                  rel="noopener"
                  @click.stop
                  class="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
                >
                  <i class="fab fa-telegram text-lg"></i>
                </a>
                <a
                  :href="`https://github.com/${member.github}`"
                  target="_blank"
                  rel="noopener"
                  @click.stop
                  class="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:bg-slate-700 hover:border-slate-500 transition-all duration-300 hover:-translate-y-1"
                >
                  <i class="fab fa-github text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Light sweep across the photo on hover */
.shine::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  background: linear-gradient(
    115deg,
    transparent 30%,
    rgba(255, 255, 255, 0.18) 50%,
    transparent 70%
  );
  transform: translateX(-120%);
}
.group:hover .shine::after,
.group.is-active .shine::after {
  transform: translateX(120%);
  transition: transform 0.9s ease;
}
</style>
