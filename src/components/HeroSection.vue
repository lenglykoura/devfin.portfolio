<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const displayedText = ref('')
const targetText = 'Devfin.'
const typingSpeed = 150
const erasingSpeed = 100
const pauseDuration = 2000

const startTypingLoop = () => {
  let charIndex = 0
  let isDeleting = false

  const type = () => {
    if (isDeleting) {
      if (charIndex > 0) {
        charIndex--
        displayedText.value = targetText.substring(0, charIndex)
        setTimeout(type, erasingSpeed)
      } else {
        isDeleting = false
        setTimeout(type, 500) // Pause before re-typing
      }
    } else {
      if (charIndex < targetText.length) {
        charIndex++
        displayedText.value = targetText.substring(0, charIndex)
        setTimeout(type, typingSpeed)
      } else {
        isDeleting = true
        setTimeout(type, pauseDuration) // Pause at full text
      }
    }
  }

  type()
}

onMounted(() => {
  startTypingLoop()
})
</script>

<template>
  <section id="home" class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#080c16] text-white">
    <!-- Background grid -->
    <div class="absolute inset-0 z-0 opacity-[0.07]"
         style="background-image: radial-gradient(#1e293b 1px, transparent 1px); background-size: 30px 30px;">
    </div>
    <!-- Ambient glows -->
    <div class="absolute -top-20 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
    <div class="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none"></div>
    <div class="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

        <!-- Left Content -->
        <div class="text-left" v-scroll-reveal>
          <!-- Badge -->
          <span class="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-cyan-300 uppercase bg-cyan-500/10 border border-cyan-500/20 px-5 py-2 rounded-full mb-8 backdrop-blur-sm">
            <span class="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            {{ t('hero.badge') }}
          </span>

          <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-[1.15] min-h-[3.5rem] md:min-h-[4.5rem]">
            {{ t('hero.welcome') }}
            <span class="text-blue-500">{{ displayedText }}</span>
            <span class="text-blue-500 animate-pulse font-light">|</span>
          </h1>

          <p class="text-xl md:text-3xl font-medium text-slate-200 mb-6 tracking-wide">
            {{ t('hero.slogan.part1') }}
            <span class="text-blue-500">{{ t('hero.slogan.part2') }}</span>
          </p>

          <p class="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
            {{ t('hero.desc') }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#projects" class="group inline-flex justify-center items-center px-8 py-3.5 rounded-xl font-bold text-sm bg-blue-600 border border-blue-500 text-white hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5">
              {{ t('hero.workBtn') }}
              <i class="fas fa-arrow-right ml-2 text-xs transition-transform group-hover:translate-x-1"></i>
            </a>
            <a href="#services" class="inline-flex justify-center items-center px-8 py-3.5 rounded-xl font-bold text-sm border border-slate-700 bg-slate-800/60 text-white hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 hover:-translate-y-0.5">
              {{ t('hero.serviceBtn') }}
            </a>
          </div>

          <!-- Social Proof -->
          <div class="flex items-center gap-4">
            <div class="flex -space-x-3">
              <div class="w-10 h-10 rounded-full border-2 border-[#080c16] bg-blue-600 flex items-center justify-center text-xs text-white font-bold">A</div>
              <div class="w-10 h-10 rounded-full border-2 border-[#080c16] bg-cyan-600 flex items-center justify-center text-xs text-white font-bold">B</div>
              <div class="w-10 h-10 rounded-full border-2 border-[#080c16] bg-purple-600 flex items-center justify-center text-xs text-white font-bold">C</div>
              <div class="w-10 h-10 rounded-full border-2 border-[#080c16] bg-slate-800 flex items-center justify-center text-xs text-white font-bold">+</div>
            </div>
            <div class="text-sm">
              <div class="flex items-center gap-2">
                <p class="font-bold text-white">{{ t('hero.socialProof.count') }}</p>
                <span class="flex gap-0.5 text-amber-400 text-[10px]">
                  <i v-for="n in 5" :key="n" class="fas fa-star"></i>
                </span>
              </div>
              <p class="text-slate-400 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> {{ t('hero.socialProof.status') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Right Content (Terminal) -->
        <div class="relative" v-scroll-reveal="{ delay: 200 }">
          <!-- Glow behind terminal -->
          <div class="absolute -inset-6 rounded-3xl bg-gradient-to-br from-blue-600/20 via-cyan-500/5 to-purple-600/20 blur-3xl pointer-events-none"></div>

          <!-- Terminal window with gradient border -->
          <div class="relative rounded-2xl p-px bg-gradient-to-br from-blue-500/40 via-slate-700/40 to-purple-500/40 shadow-2xl shadow-blue-900/30">
            <div class="rounded-2xl overflow-hidden bg-[#0b1120]/95 backdrop-blur-sm">
              <!-- Window Bar -->
              <div class="bg-slate-900/80 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                <div class="flex space-x-2">
                  <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div class="text-xs text-slate-500 font-mono">devfin-terminal — -zsh</div>
                <div class="w-10"></div>
              </div>

              <!-- Terminal Content -->
              <div class="p-6 font-mono text-sm leading-relaxed min-h-[320px] font-medium" style="font-family: 'Fira Code', monospace">
                <div class="mb-4 text-slate-100">
                  <span class="text-cyan-400">$</span> find solution <span class="text-purple-400">--type</span> <span class="text-amber-300">"smart-system"</span>
                </div>
                <div class="mb-4 text-slate-400">
                  Analyzing requirements...<br />
                  <span class="text-emerald-400"><i class="fas fa-check text-[10px] mr-1"></i>Optimization complete. System efficiency increased by 40%.</span>
                </div>

                <div class="mb-4 text-slate-100">
                  <span class="text-cyan-400">$</span> deploy <span class="text-purple-400">--target</span> <span class="text-amber-300">"enterprise-cloud"</span>
                </div>
                <div class="mb-4 text-slate-400">
                  Connecting to secure environment...<br />
                  <span class="text-emerald-400"><i class="fas fa-check text-[10px] mr-1"></i>Deployment successful! Real solutions delivered.</span>
                </div>

                <div class="mb-2 text-slate-100">
                  <span class="text-cyan-400">$</span> init-growth <span class="text-purple-400">--mode</span> <span class="text-amber-300">"scale"</span><span class="animate-pulse text-cyan-400">_</span>
                </div>

                <div class="mt-8 flex items-center gap-2 p-3 bg-blue-600/10 border border-blue-500/20 rounded-lg text-blue-300 text-xs">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Devfin Core Online.
                </div>
              </div>
            </div>
          </div>

          <!-- Floating stat cards -->
          <div class="float-a hidden sm:flex absolute -top-6 -right-4 items-center gap-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-xl px-4 py-3 shadow-xl shadow-black/30">
            <div class="w-9 h-9 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
              <i class="fas fa-arrow-trend-up text-emerald-400 text-sm"></i>
            </div>
            <div>
              <p class="text-white font-bold text-sm leading-none">+40%</p>
              <p class="text-slate-500 text-[11px] mt-1 font-mono">efficiency</p>
            </div>
          </div>
          <div class="float-b hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-xl px-4 py-3 shadow-xl shadow-black/30">
            <div class="w-9 h-9 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center">
              <i class="fas fa-shield-halved text-blue-400 text-sm"></i>
            </div>
            <div>
              <p class="text-white font-bold text-sm leading-none">99.9%</p>
              <p class="text-slate-500 text-[11px] mt-1 font-mono">uptime</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.float-a { animation: float 5s ease-in-out infinite; }
.float-b { animation: float 6s ease-in-out infinite 1s; }
</style>
