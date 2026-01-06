<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Use computed property for team data to react to language changes
const team = computed(() => [
  {
    name: t('team.members.leng.name'),
    role: t('team.members.leng.role'),
    desc: t('team.members.leng.desc'),
    // Ideally use high-res portrait images
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
  try {
    return new URL(`../assets/images/${name}`, import.meta.url).href
  } catch (e) {
    return 'https://via.placeholder.com/400x600' // Fallback to portrait size
  }
}

// State to track which card is active (clicked) on mobile
const activeIndex = ref(null)

const toggleCard = (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = null
  } else {
    activeIndex.value = index
  }
}
</script>

<template>
  <section id="team" class="py-24 bg-[#020617] relative overflow-hidden">
    <!-- Background Decoration -->
    <div class="absolute inset-0 z-0 opacity-20" 
         style="background-image: radial-gradient(#123764 1px, transparent 1px); background-size: 30px 30px;">
    </div>
    <div class="absolute right-0 top-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-600/5 blur-[100px]"></div>
    <div class="absolute left-0 bottom-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-500/5 blur-[100px]"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-20" v-scroll-reveal>
        <span class="text-xs font-bold tracking-wider text-blue-500 uppercase bg-blue-600/10 border border-blue-600/20 px-4 py-1.5 rounded-full mb-4 inline-block shadow-sm">
            {{ t('team.badge') }}
        </span>
        <h2 class="mt-2 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          {{ t('team.title') }}
        </h2>
        <p class="mt-6 max-w-2xl text-xl text-slate-400 mx-auto leading-relaxed">
          {{ t('team.subtitle') }}
        </p>
      </div>

      <!-- Use Flexbox instead of Grid for center alignment of variable items -->
      <div class="flex flex-wrap justify-center gap-8">
        <div
          v-for="(member, index) in team"
          :key="index"
          v-scroll-reveal="member.delay"
          class="group relative h-[420px] w-full max-w-sm sm:w-72 lg:w-80 rounded-3xl overflow-hidden cursor-pointer shadow-lg border border-slate-800"
          @click="toggleCard(index)"
        >
          <!-- 1. Background Image (Full Card) -->
          <div class="absolute inset-0 bg-slate-900">
             <!-- Active state triggers full color, Hover state triggers same. Removed opacity-80 to make it brighter. -->
             <img 
               :src="getImageUrl(member.image)" 
               :alt="member.name" 
               class="w-full h-full object-cover transition-all duration-700"
               :class="activeIndex === index ? 'grayscale-0 scale-110' : 'grayscale group-hover:grayscale-0 group-hover:scale-110'"
             />
          </div>

          <!-- 2. Dark Overlay Gradient (Reduced opacity for better image visibility) -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent opacity-70 transition-opacity duration-300"></div>

          <!-- 3. Hover Overlay (Additional darkening/tint on hover or active) -->
          <div 
            class="absolute inset-0 bg-blue-900/20 transition-opacity duration-300"
            :class="activeIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'"
          ></div>

          <!-- 4. Content Container -->
          <div class="absolute inset-0 p-6 flex flex-col justify-end">
             
             <!-- Text Content -->
             <div 
                class="transform transition-transform duration-300"
                :class="activeIndex === index ? '-translate-y-2' : 'group-hover:-translate-y-2'"
             >
                <h3 class="text-2xl font-bold text-white mb-1 drop-shadow-md">{{ member.name }}</h3>
                <p class="text-sm font-semibold text-blue-500 uppercase tracking-wide mb-3 drop-shadow-sm">{{ member.role }}</p>
                
                <!-- Description (Hidden by default, slides in/fades in) -->
                <p 
                  class="text-slate-300 text-sm leading-relaxed overflow-hidden transition-all duration-500 delay-75"
                  :class="activeIndex === index ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20'"
                >
                  {{ member.desc }}
                </p>
             </div>

             <!-- Social Links (Slide up on hover or active) -->
             <div 
                class="flex gap-3 mt-4 transform transition-all duration-500 delay-100"
                :class="activeIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'"
             >
                <a 
                  :href="`https://t.me/${member.telegram}`" 
                  target="_blank"
                  @click.stop
                  class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-500 transition-colors"
                >
                  <i class="fab fa-telegram text-lg"></i>
                </a>
                
                <a 
                  :href="`https://github.com/${member.github}`" 
                  target="_blank"
                  @click.stop
                  class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-slate-800 hover:border-slate-600 transition-colors"
                >
                  <i class="fab fa-github text-lg"></i>
                </a>
             </div>

          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>