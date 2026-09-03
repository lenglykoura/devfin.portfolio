<script setup>
import { ref, computed } from "vue";
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

// State to track which card is active (tapped) on mobile / touch devices
const activeIndex = ref(null);

const toggleCard = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <section
    id="team"
    class="py-24 bg-[#020617] relative overflow-hidden border-t border-slate-800"
  >
    <!-- Background Decoration -->
    <div
      class="absolute inset-0 z-0 opacity-20"
      style="
        background-image: radial-gradient(#123764 1px, transparent 1px);
        background-size: 30px 30px;
      "
    ></div>
    <div
      class="absolute right-0 top-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-600/5 blur-[100px]"
    ></div>
    <div
      class="absolute left-0 bottom-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-500/5 blur-[100px]"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-20" v-scroll-reveal>
        <span
          class="text-xs font-bold tracking-wider text-blue-100 uppercase bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-4 inline-block"
        >
          {{ t("team.badge") }}
        </span>
        <h2
          class="mt-2 text-4xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          {{ t("team.title") }}
        </h2>
        <p class="mt-6 max-w-2xl text-xl text-slate-400 mx-auto leading-relaxed">
          {{ t("team.subtitle") }}
        </p>
      </div>

      <!-- Flexbox keeps a partial last row centered -->
      <div class="flex flex-wrap justify-center gap-8">
        <div
          v-for="(member, index) in team"
          :key="index"
          v-scroll-reveal="member.delay"
          class="group relative h-[460px] w-full max-w-sm sm:w-72 lg:w-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg border border-slate-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/30 hover:border-blue-500/50"
          :class="{ 'is-active': activeIndex === index }"
          @click="toggleCard(index)"
        >
          <!-- Portrait -->
          <img
            :src="getImageUrl(member.image)"
            :alt="member.name"
            class="absolute inset-0 w-full h-full object-cover object-top bg-slate-900 transition-transform duration-700 ease-out group-hover:scale-105 group-[.is-active]:scale-105"
          />

          <!-- Readability gradient: soft, bottom-anchored -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/95 from-5% via-black/40 via-35% to-transparent to-60%"
          ></div>

          <!-- Extra darkening behind the text block, deepens on reveal -->
          <div
            class="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100 group-[.is-active]:opacity-100"
          ></div>

          <!-- Subtle brand tint on reveal -->
          <div
            class="absolute inset-0 bg-blue-600/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-[.is-active]:opacity-100"
          ></div>

          <!-- Content -->
          <div class="absolute inset-x-0 bottom-0 z-10 p-6">
            <div
              class="transition-transform duration-500 ease-out group-hover:-translate-y-1 group-[.is-active]:-translate-y-1"
            >
              <h3 class="text-2xl font-bold text-white drop-shadow-lg">
                {{ member.name }}
              </h3>
              <p
                class="mt-1 text-xs font-semibold text-blue-300 uppercase tracking-widest drop-shadow"
              >
                {{ member.role }}
              </p>

              <!-- Description: revealed on hover / tap -->
              <div
                class="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-3 group-[.is-active]:grid-rows-[1fr] group-[.is-active]:opacity-100 group-[.is-active]:mt-3"
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
                  class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-colors duration-300 hover:-translate-y-1"
                >
                  <i class="fab fa-telegram text-lg"></i>
                </a>
                <a
                  :href="`https://github.com/${member.github}`"
                  target="_blank"
                  rel="noopener"
                  @click.stop
                  class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-colors duration-300 hover:-translate-y-1"
                >
                  <i class="fab fa-github text-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
