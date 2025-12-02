<script setup>
const steps = [
  {
    title: "Describe Your Need",
    description:
      "Tell us what you need help with, whether it’s an urgent fix, a new feature, or a complete project.",
    icon: "fa-pen-to-square",
    step: "01",
  },
  {
    title: "Get Matched",
    description:
      "Our system instantly matches you with the perfect expert for your specific technology and requirements.",
    icon: "fa-user-check",
    step: "02",
  },
  {
    title: "Connect & Collaborate",
    description:
      "Connect with your expert via chat, video, or screen sharing to explain your needs in detail.",
    icon: "fa-comments",
    step: "03",
  },
  {
    title: "Problem Solved",
    description:
      "Your expert delivers the solution, whether it’s fixing a bug, implementing a feature, or providing guidance.",
    icon: "fa-flag-checkered",
    step: "04",
  },
];
</script>

<template>
  <section
    id="how-we-works"
    class="py-24 bg-[#080c16] relative overflow-hidden"
  >
    <!-- Decorative Background Elements -->
    <div
      class="absolute inset-0 z-0 opacity-20"
      style="
        background-image: radial-gradient(#1e293b 1px, transparent 1px);
        background-size: 20px 20px;
      "
    ></div>

    <!-- Connected Line (Desktop) -->
    <div
      class="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-devfin-600/30 to-transparent -translate-y-12 z-0"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header -->
      <div class="text-center mb-20" v-scroll-reveal>
        <span
          class="text-xs font-bold tracking-wider text-blue-100 uppercase bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-4 inline-block"
        >
          Process
        </span>
        <h2
          class="mt-2 text-4xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          How We Work
        </h2>
        <p
          class="mt-6 max-w-2xl text-xl text-slate-400 mx-auto leading-relaxed"
        >
          Getting expert help is quick and easy with our streamlined process.
        </p>
      </div>

      <!-- Steps Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(item, index) in steps"
          :key="index"
          v-scroll-reveal="{ delay: index * 100 }"
          class="group relative"
        >
          <!-- Step Card -->
          <div
            class="relative bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-devfin-600/50 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col items-center text-center backdrop-blur-sm"
          >
            <!-- Step Number Badge -->
            <div
              class="absolute -top-5 bg-slate-900 border border-slate-700 text-white font-bold text-sm py-1 px-3 rounded-full shadow-lg z-20"
            >
              Step {{ item.step }}
            </div>

            <!-- Icon -->
            <div
              class="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center text-2xl text-white mb-6 shadow-lg group-hover:from-devfin-600 group-hover:to-devfin-500 group-hover:border-transparent transition-all duration-300"
            >
              <i class="fas" :class="item.icon"></i>
            </div>

            <h3 class="text-xl font-bold text-white mb-4">{{ item.title }}</h3>

            <p class="text-slate-400 text-sm leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
