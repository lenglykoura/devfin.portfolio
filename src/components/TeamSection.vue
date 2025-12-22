<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Use computed property for team data to react to language changes
const team = computed(() => [
  {
    name: t("team.members.leng.name"),
    role: t("team.members.leng.role"),
    desc: t("team.members.leng.desc"),
    image: "lenglykoura.jpg",
    telegram: "lenglykoura",
    github: "lenglykoura",
    delay: 0,
  },
  // {
  //   name: t('team.members.sarah.name'),
  //   role: t('team.members.sarah.role'),
  //   desc: t('team.members.sarah.desc'),
  //   image: "sarahchen.jpg",
  //   telegram: "sarahchen",
  //   github: "sarahchen",
  //   delay: 100,
  // },
  // {
  //   name: t('team.members.david.name'),
  //   role: t('team.members.david.role'),
  //   desc: t('team.members.david.desc'),
  //   image: "davidross.jpg",
  //   telegram: "davidross",
  //   github: "davidross",
  //   delay: 200,
  // },
  // {
  //   name: t('team.members.emily.name'),
  //   role: t('team.members.emily.role'),
  //   desc: t('team.members.emily.desc'),
  //   image: "emilyblunt.jpg",
  //   telegram: "emilyblunt",
  //   github: "emilyblunt",
  //   delay: 300,
  // },
]);

// Helper function to dynamically load images from src/assets/images/
const getImageUrl = (name) => {
  // Try/Catch block to handle missing images gracefully if you don't have the files yet
  try {
    return new URL(`../assets/images/${name}`, import.meta.url).href;
  } catch (e) {
    return "https://via.placeholder.com/150"; // Fallback
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
          class="group relative w-full sm:w-80 lg:w-72 transition-all duration-700 ease-out"
        >
          <!-- Added @click to toggle state -->
          <div
            @click="toggleCard(index)"
            class="relative bg-slate-900 p-6 rounded-3xl shadow-xl shadow-black/30 border border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-600/10 hover:border-slate-700 h-full flex flex-col items-center cursor-pointer"
          >
            <!-- Image Container -->
            <div
              class="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-slate-800 shadow-lg group-hover:border-blue-600/30 transition-colors duration-300 ring-3 ring-slate-100"
            >
              <img
                :src="getImageUrl(member.image)"
                :alt="member.name"
                class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <!-- Content -->
            <div class="text-center">
              <h3 class="text-xl font-bold text-white mb-1 transition-colors">
                {{ member.name }}
              </h3>
              <p
                class="text-sm font-semibold text-blue-100 uppercase tracking-wide mb-4"
              >
                {{ member.role }}
              </p>
              <p class="text-slate-400 text-sm leading-relaxed mb-6">
                {{ member.desc }}
              </p>

              <!-- Social Links Mockup -->
              <div
                class="flex justify-center space-x-4 transition-all duration-300 transform"
                :class="
                  activeIndex === index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
                "
              >
                <!-- FIXED LINKS HERE -->
                <a
                  :href="`https://t.me/${member.telegram}`"
                  target="_blank"
                  class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <i class="fab fa-telegram text-sm"></i>
                </a>

                <a
                  :href="`https://github.com/${member.github}`"
                  target="_blank"
                  class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <i class="fab fa-github text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
