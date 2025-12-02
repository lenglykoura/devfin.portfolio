<script setup>
import { ref, onMounted } from "vue";

const displayedText = ref("");
const targetText = "Devfin.";
const typingSpeed = 150;
const erasingSpeed = 100;
const pauseDuration = 2000;

const startTypingLoop = () => {
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
    if (isDeleting) {
      if (charIndex > 0) {
        charIndex--;
        displayedText.value = targetText.substring(0, charIndex);
        setTimeout(type, erasingSpeed);
      } else {
        isDeleting = false;
        setTimeout(type, 500); // Pause before re-typing
      }
    } else {
      if (charIndex < targetText.length) {
        charIndex++;
        displayedText.value = targetText.substring(0, charIndex);
        setTimeout(type, typingSpeed);
      } else {
        isDeleting = true;
        setTimeout(type, pauseDuration); // Pause at full text
      }
    }
  };

  type();
};

onMounted(() => {
  startTypingLoop();
});
</script>

<template>
  <section
    id="home"
    class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#020617] text-white"
  >
    <!-- Background Effects -->
    <!-- Constellation pattern (using brand color for grid dots) -->
    <div
      class="absolute inset-0 z-0 opacity-20"
      style="
        background-image: radial-gradient(#123764 1px, transparent 1px);
        background-size: 30px 30px;
      "
    ></div>
    <!-- Ambient Glows -->
    <div
      class="absolute top-0 right-0 w-[600px] h-[600px] bg-devfin-600/10 rounded-full blur-[120px]"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <!-- Left Content -->
        <div class="text-left" v-scroll-reveal>
          <!-- Badge -->
          <div
            class="inline-flex items-center px-3 py-1.5 rounded-full bg-devfin-600/10 border border-devfin-600/20 text-blue-200 text-xs font-semibold mb-8 tracking-wide"
          >
            <span
              class="flex h-2 w-2 rounded-full bg-devfin-500 mr-2 animate-pulse"
            ></span>
            Now accepting new enterprise clients
          </div>

          <h1
            class="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-[1.15] min-h-[3.5rem] md:min-h-[4.5rem]"
          >
            Welcome to
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400"
              >{{ displayedText }}</span
            >
            <span class="text-blue-500 animate-pulse font-light">|</span>
          </h1>

          <p
            class="text-xl md:text-3xl font-medium text-slate-200 mb-6 tracking-wide"
          >
            Smart Systems. <span class="text-blue-500">Real Solutions.</span>
          </p>

          <p class="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            We bridge the gap between finance and technology. Delivering robust
            system management, innovative mobile applications, and
            enterprise-grade tech services.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#projects"
              class="inline-flex justify-center items-center px-8 py-3.5 rounded-lg font-bold bg-blue-600 text-white hover:bg-blue-500 transition-all shadow-lg shadow-devfin-600/20 hover:-translate-y-0.5"
            >
              View Our Work <i class="fas fa-arrow-right ml-2"></i>
            </a>
            <a
              href="#services"
              class="inline-flex justify-center items-center px-8 py-3.5 rounded-lg font-bold border border-slate-700 bg-slate-800/50 text-white hover:bg-slate-800 transition-all hover:-translate-y-0.5"
            >
              Our Services
            </a>
          </div>

          <!-- Social Proof -->
          <div class="flex items-center gap-4">
            <div class="flex -space-x-3">
              <!-- Placeholder Avatars -->
              <div
                class="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-xs text-slate-300 font-bold"
              >
                A
              </div>
              <div
                class="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-600 flex items-center justify-center text-xs text-slate-300 font-bold"
              >
                B
              </div>
              <div
                class="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-500 flex items-center justify-center text-xs text-slate-300 font-bold"
              >
                C
              </div>
              <div
                class="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs text-white font-bold"
              >
                +
              </div>
            </div>
            <div class="text-sm">
              <p class="font-bold text-white">50+ Clients.</p>
              <p class="text-slate-400 flex items-center gap-2">
                <span
                  class="w-2 h-2 rounded-full bg-devfin-600 animate-pulse"
                ></span>
                Already Used.
              </p>
            </div>
          </div>
        </div>

        <!-- Right Content (Terminal) -->
        <div class="relative" v-scroll-reveal="{ delay: 200 }">
          <!-- Terminal Window -->
          <div
            class="rounded-xl overflow-hidden bg-[#0f172a] border border-slate-800 shadow-2xl shadow-devfin-600/20 backdrop-blur-sm bg-opacity-90"
          >
            <!-- Window Bar -->
            <div
              class="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800"
            >
              <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div class="text-xs text-slate-500 font-mono">
                devfin-terminal — -zsh
              </div>
              <div class="w-10"></div>
              <!-- Spacer -->
            </div>

            <!-- Terminal Content -->
            <div
              class="p-6 font-mono text-sm leading-relaxed min-h-[320px] font-medium"
              style="font-family: 'Fira Code', monospace"
            >
              <div class="mb-4">
                <span class="text-blue-500">$</span> find solution --type
                "smart-system"
              </div>
              <div class="mb-4 text-slate-300">
                Analyzing requirements...<br />
                <span class="text-blue-500"
                  >Optimization complete. System efficiency increased by
                  40%.</span
                >
              </div>

              <div class="mb-4">
                <span class="text-blue-500">$</span> deploy --target
                "enterprise-cloud"
              </div>
              <div class="mb-4 text-slate-300">
                Connecting to secure environment...<br />
                Deployment successful! Real solutions delivered.
              </div>

              <div class="mb-2">
                <span class="text-blue-500">$</span> init-growth --mode
                "scale"<span class="animate-pulse text-blue-500">_</span>
              </div>

              <div
                class="mt-8 p-3 bg-blue-600/10 border border-blue-600/20 rounded text-blue-500 text-xs"
              >
                > Devfin Core Online.
              </div>
            </div>
          </div>

          <!-- Decorative Elements behind terminal -->
          <div
            class="absolute -z-10 top-1/2 right-[-50px] w-24 h-24 bg-devfin-600/20 rounded-full blur-2xl"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
