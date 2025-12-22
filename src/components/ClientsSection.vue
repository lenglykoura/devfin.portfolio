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
    iconColor: 'text-amber-500',
    rating: 5
  },
  {
    company: t('clients.reviews.r2.company'),
    author: t('clients.reviews.r2.author'),
    role: t('clients.reviews.r2.role'),
    text: t('clients.reviews.r2.text'),
    icon: 'fa-user',
    iconColor: 'text-orange-400',
    rating: 5
  },
  {
    company: t('clients.reviews.r3.company'),
    author: t('clients.reviews.r3.author'),
    role: t('clients.reviews.r3.role'),
    text: t('clients.reviews.r3.text'),
    icon: 'fa-user',
    iconColor: 'text-blue-400',
    rating: 5
  },
  {
    company: t('clients.reviews.r4.company'),
    author: t('clients.reviews.r4.author'),
    role: t('clients.reviews.r4.role'),
    text: t('clients.reviews.r4.text'),
    icon: 'fa-user',
    iconColor: 'text-emerald-500',
    rating: 5
  },
  {
    company: t('clients.reviews.r5.company'),
    author: t('clients.reviews.r5.author'),
    role: t('clients.reviews.r5.role'),
    text: t('clients.reviews.r5.text'),
    icon: 'fa-user',
    iconColor: 'text-pink-500',
    rating: 4.5
  },
  {
    company: t('clients.reviews.r6.company'),
    author: t('clients.reviews.r6.author'),
    role: t('clients.reviews.r6.role'),
    text: t('clients.reviews.r6.text'),
    icon: 'fa-user',
    iconColor: 'text-indigo-400',
    rating: 5
  },
  {
    company: t('clients.reviews.r7.company'),
    author: t('clients.reviews.r7.author'),
    role: t('clients.reviews.r7.role'),
    text: t('clients.reviews.r7.text'),
    icon: 'fa-user',
    iconColor: 'text-cyan-400',
    rating: 5
  },
  {
    company: t('clients.reviews.r8.company'),
    author: t('clients.reviews.r8.author'),
    role: t('clients.reviews.r8.role'),
    text: t('clients.reviews.r8.text'),
    icon: 'fa-user',
    iconColor: 'text-purple-500',
    rating: 4.5
  }
])
</script>

<template>
  <section id="clients" class="py-24 pb-12 bg-[#020617] relative overflow-hidden border-t border-slate-800">
    <!-- Background Decor -->
    <div class="absolute inset-0 z-0 opacity-20"
         style="background-image: radial-gradient(#123764 1px, transparent 1px); background-size: 30px 30px;">
    </div>

    <div class="relative z-10 w-full">
      
      <!-- Section Header -->
      <div class="text-center mb-16 px-4" v-scroll-reveal>
        <span class="text-xs font-bold tracking-wider text-blue-100 uppercase bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-4 inline-block">
          {{ t('clients.badge') }}
        </span>
        <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-6">
          {{ t('clients.title') }}
        </h2>
      </div>

      <!-- Infinite Scroll Marquee -->
      <!-- The wrapper handles the fade effect on edges -->
      <div class="relative w-full overflow-hidden">
          <!-- Left Fade -->
          <div class="absolute left-0 top-0 bottom-0 w-20 z-20 bg-gradient-to-r from-[#020617] to-transparent"></div>
          <!-- Right Fade -->
          <div class="absolute right-0 top-0 bottom-0 w-20 z-20 bg-gradient-to-l from-[#020617] to-transparent"></div>

          <!-- The Scrolling Container -->
          <!-- We duplicate the list to create a seamless loop -->
          <div class="flex animate-marquee hover:pause-animation">
              
              <!-- First Set -->
              <div class="flex gap-8 px-4">
                  <div v-for="(review, index) in reviews" :key="`a-${index}`"
                       class="w-[400px] flex-shrink-0 bg-slate-900 p-8 rounded-3xl border border-slate-800 relative group hover:border-devfin-600/30 transition-all duration-300">
                       
                       <!-- Quote Icon -->
                       <div class="absolute top-6 right-8 text-6xl text-slate-800 opacity-50 font-serif">"</div>

                       <div class="flex items-center gap-4 mb-6">
                          <div class="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-xl" :class="review.iconColor">
                              <!-- CHANGED FROM fab TO fas (Solid Icons) -->
                              <i class="fas" :class="review.icon"></i>
                          </div>
                          <div>
                              <h4 class="text-white font-bold text-sm">{{ review.author }}</h4>
                              <p class="text-slate-500 text-xs uppercase tracking-wide">{{ review.company }}</p>
                          </div>
                       </div>

                       <!-- Rating -->
                       <div class="flex gap-1 mb-4 text-yellow-500 text-xs">
                           <i v-for="n in 5" :key="n" class="fas" :class="n <= Math.round(review.rating) ? 'fa-star' : 'fa-star text-slate-700'"></i>
                       </div>

                       <p class="text-slate-400 text-sm leading-relaxed relative z-10">
                          {{ review.text }}
                       </p>
                  </div>
              </div>

              <!-- Duplicate Set (For smooth looping) -->
              <div class="flex gap-8 px-4" aria-hidden="true">
                  <div v-for="(review, index) in reviews" :key="`b-${index}`"
                       class="w-[400px] flex-shrink-0 bg-slate-900 p-8 rounded-3xl border border-slate-800 relative group hover:border-devfin-600/30 transition-all duration-300">
                       
                       <div class="absolute top-6 right-8 text-6xl text-slate-800 opacity-50 font-serif">"</div>

                       <div class="flex items-center gap-4 mb-6">
                          <div class="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-xl" :class="review.iconColor">
                              <!-- CHANGED FROM fab TO fas (Solid Icons) -->
                              <i class="fas" :class="review.icon"></i>
                          </div>
                          <div>
                              <h4 class="text-white font-bold text-sm">{{ review.author }}</h4>
                              <p class="text-slate-500 text-xs uppercase tracking-wide">{{ review.company }}</p>
                          </div>
                       </div>

                       <div class="flex gap-1 mb-4 text-yellow-500 text-xs">
                           <i v-for="n in 5" :key="n" class="fas" :class="n <= Math.round(review.rating) ? 'fa-star' : 'fa-star text-slate-700'"></i>
                       </div>

                       <p class="text-slate-400 text-sm leading-relaxed relative z-10">
                          {{ review.text }}
                       </p>
                  </div>
              </div>

          </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%); /* Move half the width (one full set) */
  }
}

.animate-marquee {
  animation: scroll 60s linear infinite; /* Adjust time for speed */
  width: max-content;
}

.pause-animation:hover {
  animation-play-state: paused;
}
</style>