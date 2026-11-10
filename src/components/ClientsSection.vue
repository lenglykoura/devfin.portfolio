<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Expanded to 8 Khmer Clients with Ratings (Computed for translation)
const reviews = computed(() => [
  {
    company: t('clients.reviews.r1.company'),
    author: t('clients.reviews.r1.author'),
    role: t('clients.reviews.r1.role'),
    text: t('clients.reviews.r1.text'),
    icon: 'fa-user',
    accentColor: '#f59e0b',
    rating: 5
  },
  {
    company: t('clients.reviews.r2.company'),
    author: t('clients.reviews.r2.author'),
    role: t('clients.reviews.r2.role'),
    text: t('clients.reviews.r2.text'),
    icon: 'fa-user',
    accentColor: '#fb923c',
    rating: 5
  },
  {
    company: t('clients.reviews.r3.company'),
    author: t('clients.reviews.r3.author'),
    role: t('clients.reviews.r3.role'),
    text: t('clients.reviews.r3.text'),
    icon: 'fa-user',
    accentColor: '#60a5fa',
    rating: 5
  },
  {
    company: t('clients.reviews.r4.company'),
    author: t('clients.reviews.r4.author'),
    role: t('clients.reviews.r4.role'),
    text: t('clients.reviews.r4.text'),
    icon: 'fa-user',
    accentColor: '#10b981',
    rating: 5
  },
  {
    company: t('clients.reviews.r5.company'),
    author: t('clients.reviews.r5.author'),
    role: t('clients.reviews.r5.role'),
    text: t('clients.reviews.r5.text'),
    icon: 'fa-user',
    accentColor: '#ec4899',
    rating: 4.5
  },
  {
    company: t('clients.reviews.r6.company'),
    author: t('clients.reviews.r6.author'),
    role: t('clients.reviews.r6.role'),
    text: t('clients.reviews.r6.text'),
    icon: 'fa-user',
    accentColor: '#818cf8',
    rating: 5
  },
  {
    company: t('clients.reviews.r7.company'),
    author: t('clients.reviews.r7.author'),
    role: t('clients.reviews.r7.role'),
    text: t('clients.reviews.r7.text'),
    icon: 'fa-user',
    accentColor: '#22d3ee',
    rating: 5
  },
  {
    company: t('clients.reviews.r8.company'),
    author: t('clients.reviews.r8.author'),
    role: t('clients.reviews.r8.role'),
    text: t('clients.reviews.r8.text'),
    icon: 'fa-user',
    accentColor: '#a855f7',
    rating: 4.5
  }
])
</script>

<template>
  <section id="clients" class="py-28 pb-12 bg-[#080c16] relative overflow-hidden border-t border-slate-800/60">
    <!-- Background grid -->
    <div class="absolute inset-0 z-0 opacity-[0.07]"
         style="background-image: radial-gradient(#1e293b 1px, transparent 1px); background-size: 30px 30px;">
    </div>

    <!-- Ambient glows -->
    <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>
    <div class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="relative z-10 w-full">
      <!-- Header -->
      <div class="text-center mb-20 px-4" v-scroll-reveal>
        <span class="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-cyan-300 uppercase bg-cyan-500/10 border border-cyan-500/20 px-5 py-2 rounded-full mb-6 backdrop-blur-sm">
          <span class="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          {{ t('clients.badge') }}
        </span>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          {{ t('clients.title') }}
        </h2>
      </div>

      <!-- Infinite Scroll Marquee -->
      <div class="relative w-full overflow-hidden py-4">
        <div class="absolute left-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-r from-[#080c16] to-transparent pointer-events-none"></div>
        <div class="absolute right-0 top-0 bottom-0 w-32 z-20 bg-gradient-to-l from-[#080c16] to-transparent pointer-events-none"></div>

        <div class="flex animate-marquee hover:pause-animation">
          <!-- Two identical sets for a seamless loop -->
          <div v-for="set in 2" :key="set" class="flex gap-6 px-3" :aria-hidden="set === 2">
            <div v-for="(review, index) in reviews" :key="`${set}-${index}`"
                 class="w-[380px] flex-shrink-0 flex flex-col rounded-2xl border bg-slate-900/80 border-slate-800 hover:border-slate-700 shadow-xl shadow-black/20 overflow-hidden transition-all duration-300 hover:-translate-y-1">
              <div class="p-8 flex flex-col flex-1">
                <!-- Author -->
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-10 h-10 rounded-xl flex items-center justify-center border"
                       :style="`background: ${review.accentColor}10; border-color: ${review.accentColor}20`">
                    <i class="fas text-sm" :class="review.icon" :style="`color: ${review.accentColor}`"></i>
                  </div>
                  <div class="min-w-0">
                    <h4 class="text-white font-bold">{{ review.author }}</h4>
                    <p class="text-slate-500 text-xs">{{ review.company }}</p>
                  </div>
                  <i class="fas fa-quote-right ml-auto text-xl" :style="`color: ${review.accentColor}30`"></i>
                </div>

                <p class="text-sm text-slate-300 leading-relaxed flex-1">
                  {{ review.text }}
                </p>

                <div class="h-px bg-slate-800/80 my-6"></div>

                <!-- Rating -->
                <div class="flex items-center justify-between">
                  <div class="flex gap-1 text-[11px]">
                    <i v-for="n in 5" :key="n" class="fas fa-star"
                       :class="n <= Math.round(review.rating) ? 'text-amber-400' : 'text-slate-700'"></i>
                  </div>
                  <span class="text-xs font-bold text-slate-500">{{ review.rating.toFixed(1) }}</span>
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
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); /* one full set */ }
}

.animate-marquee {
  animation: scroll 60s linear infinite;
  width: max-content;
}

.pause-animation:hover {
  animation-play-state: paused;
}
</style>
