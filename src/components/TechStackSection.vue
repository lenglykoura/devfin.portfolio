<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const tools = [
  { name: "Vue.js", icon: "fab fa-vuejs", color: "#42b883", angle: 0 },
  { name: "Laravel", icon: "fab fa-laravel", color: "#F05340", angle: 45 },
  { name: "Docker", icon: "fab fa-docker", color: "#2496ED", angle: 90 },
  { name: "MySQL", icon: "fas fa-database", color: "#4479A1", angle: 135 }, // Uses 'fas' (Solid)
  { name: "PHP", icon: "fab fa-php", color: "#777BB4", angle: 180 },
  { name: ".NET", icon: "fab fa-windows", color: "#512BD4", angle: 225 },
  { name: "JavaScript", icon: "fab fa-js", color: "#F0DB4F", angle: 270 },
  { name: "Node.js", icon: "fab fa-node-js", color: "#339933", angle: 315 },
];
</script>

<template>
  <section
    id="tech-stack"
    class="py-24 bg-[#050a14] relative overflow-hidden flex items-center justify-center"
  >
    <!-- Background Decor -->
    <div
      class="absolute inset-0 z-0 opacity-20"
      style="
        background-image: radial-gradient(#123764 1px, transparent 1px);
        background-size: 30px 30px;
      "
    ></div>
    <div
      class="absolute inset-0 z-0 bg-radial-gradient from-devfin-900/20 to-transparent"
    ></div>

    <div class="relative z-10 text-center w-full max-w-4xl mx-auto px-4">
      <div class="mb-16" v-scroll-reveal>
        <span
          class="text-xs font-bold tracking-wider text-blue-100 uppercase bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-4 inline-block"
        >
          {{ t("techStack.badge") }}
        </span>
        <h2
          class="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4"
        >
          {{ t("techStack.title") }}
        </h2>
        <p class="text-slate-400 max-w-xl mx-auto">
          {{ t("techStack.subtitle") }}
        </p>
      </div>

      <!-- Network Graphic Container -->
      <div
        class="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] mx-auto flex items-center justify-center"
      >
        <!-- Rotating Outer Rings -->
        <div
          class="absolute inset-0 border border-slate-800/50 rounded-full animate-spin-slow"
        ></div>
        <div
          class="absolute inset-[50px] border border-slate-800/30 rounded-full animate-spin-reverse-slow"
        ></div>

        <!-- Connecting Lines (SVG) -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none z-0">
          <line
            v-for="(tool, i) in tools"
            :key="i"
            x1="50%"
            y1="50%"
            :x2="`${50 + 40 * Math.cos((tool.angle * Math.PI) / 180)}%`"
            :y2="`${50 + 40 * Math.sin((tool.angle * Math.PI) / 180)}%`"
            stroke="url(#gradient-line)"
            stroke-width="1.5"
            class="opacity-20"
          />
          <defs>
            <linearGradient
              id="gradient-line"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stop-color="#123764" />
              <stop offset="100%" stop-color="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>

        <!-- Center Logo -->
        <div
          class="absolute z-20 w-24 h-24 md:w-32 md:h-32 bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(18,55,100,0.3)] animate-float"
        >
          <div class="text-center flex flex-col items-center justify-center">
            <img
              src="/src/assets/images/logo-white.png"
              alt="Devfin"
              class="w-10 md:w-14 mb-1"
            />
            <span
              class="text-[10px] md:text-xs font-bold text-slate-300 tracking-wider"
              >DEVFIN</span
            >
          </div>
        </div>

        <!-- Orbiting Icons -->
        <div
          v-for="(tool, i) in tools"
          :key="i"
          class="absolute w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-slate-900 border border-slate-700 rounded-xl shadow-lg hover:scale-110 hover:border-devfin-500 transition-all duration-300 z-10 cursor-default group"
          :style="`transform: translate(-50%, -50%); left: ${
            50 + 40 * Math.cos((tool.angle * Math.PI) / 180)
          }%; top: ${50 + 40 * Math.sin((tool.angle * Math.PI) / 180)}%;`"
        >
          <!-- Note: 'fab' or 'fas' is now included in tool.icon data -->
          <i
            class="text-xl md:text-3xl transition-colors duration-300"
            :class="tool.icon"
            :style="`color: ${tool.color}`"
          ></i>

          <!-- Tooltip -->
          <div
            class="absolute -bottom-8 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-700"
          >
            {{ tool.name }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}

@keyframes spin-reverse-slow {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
.animate-spin-reverse-slow {
  animation: spin-reverse-slow 25s linear infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>
