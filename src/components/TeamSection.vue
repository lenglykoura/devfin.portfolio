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

  // {
  //   name: t("team.members.theang.name"),
  //   role: t("team.members.theang.role"),
  //   desc: t("team.members.theang.desc"),
  //   image: "theang.jpg",
  //   telegram: "theang",
  //   github: "theang",
  //   delay: 100,
  // },
  {
    name: t("team.members.tela.name"),
    role: t("team.members.tela.role"),
    desc: t("team.members.tela.desc"),
    image: "tela.jpg",
    telegram: "tela",
    github: "tela",
    delay: 100,
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

// State to track which card is active (clicked) on mobile
const activeIndex = ref(null);

const toggleCard = (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = null;
  } else {
    activeIndex.value = index;
  }
};
</script>

<template>
  <section
    id="team"
    class="py-24 bg-[#020617] relative overflow-hidden border-t"
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
        <p
          class="mt-6 max-w-2xl text-xl text-slate-400 mx-auto leading-relaxed"
        >
          {{ t("team.subtitle") }}
        </p>
      </div>

      <!-- Use Flexbox instead of Grid for center alignment of variable items -->
      <div class="flex flex-wrap justify-center gap-8">
        <div
          v-for="(member, index) in team"
          :key="index"
          v-scroll-reveal="member.delay"
          class="group relative h-[420px] w-full max-w-sm sm:w-72 lg:w-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg border border-slate-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20 hover:border-blue-500/50"
          @click="toggleCard(index)"
        >
          <!-- 1. Background Image (Full Card) -->
          <div class="absolute inset-0 bg-slate-900">
            <img
              :src="getImageUrl(member.image)"
              :alt="member.name"
              class="w-full h-full object-cover transition-all duration-700"
          
            />
          </div>

          <!-- 2. White Gradient Blur Layer (Frosted Glass Effect) -->
          <!-- Creates a white-tinted blur that is heavy at the bottom and fades out -->
          <div
            class="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500 bg-white/5"
            style="
              /* backdrop-filter: blur(12px);
              -webkit-backdrop-filter: blur(12px); */
              mask-image: linear-gradient(to top, black 0%, transparent 60%);
              -webkit-mask-image: linear-gradient(
                to top,
                black 0%,
                transparent 60%
              );
            "
            :class="
              activeIndex === index ? 'opacity-0' : 'group-hover:opacity-0'
            "
          ></div>

          <!-- 3. Gradient Overlay -->
          <!-- We use a subtle black-to-transparent gradient at the very bottom to ensure white text remains readable -->
          <div
            class="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-opacity duration-300"
          ></div>

          <!-- 4. Hover Overlay (Tinting on hover or active) -->
          <div
            class="absolute inset-0 z-30 bg-white/5 transition-opacity duration-300"
            :class="
              activeIndex === index
                ? 'opacity-100'
                : 'opacity-0 group-hover:opacity-100'
            "
          ></div>

          <!-- 5. Content Container -->
          <div class="absolute inset-0 z-40 p-6 flex flex-col justify-end">
            <!-- Text Content -->
            <div
              class="transform transition-transform duration-300"
              :class="
                activeIndex === index
                  ? '-translate-y-2'
                  : 'group-hover:-translate-y-2'
              "
            >
              <h3 class="text-2xl font-bold text-white mb-1 drop-shadow-lg">
                {{ member.name }}
              </h3>
              <p
                class="text-sm font-semibold text-blue-200 uppercase tracking-wide mb-3 drop-shadow-md"
              >
                {{ member.role }}
              </p>

              <!-- Description (Hidden by default, slides in/fades in) -->
              <p
                class="text-slate-200 text-sm leading-relaxed overflow-hidden transition-all duration-500 delay-75 drop-shadow-sm"
                :class="
                  activeIndex === index
                    ? 'opacity-100 max-h-20'
                    : 'opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20'
                "
              >
                {{ member.desc }}
              </p>
              <div
                class="flex gap-3 mt-4 transform transition-all duration-500 delay-100"
              >
                <a
                  :href="`https://t.me/${member.telegram}`"
                  target="_blank"
                  @click.stop
                  class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <i class="fab fa-telegram text-lg"></i>
                </a>

                <a
                  :href="`https://github.com/${member.github}`"
                  target="_blank"
                  @click.stop
                  class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <i class="fab fa-github text-lg"></i>
                </a>
              </div>
            </div>

            <!-- Social Links (Slide up on hover or active) -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
