<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import HowWeWorkSection from "./components/HowWeWorkSection.vue"; // Import new component
import ServicesSection from "./components/ServicesSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import TeamSection from "./components/TeamSection.vue";
import FooterSection from "./components/FooterSection.vue";
import ClientsSection from "./components/ClientsSection.vue"; // Import new component
import TechStackSection from "./components/TechStackSection.vue";
import ClientMessageSection from "./components/ClientMessageSection.vue";
import PricingSection from "./components/PricingSection.vue";

// Ring cursor: dot sits on the pointer, ring eases after it; writes styles directly to skip Vue re-renders
const dotEl = ref(null);
const ringEl = ref(null);
const cursorVisible = ref(false);
const cursorHover = ref(false);
let targetX = 0, targetY = 0, x = 0, y = 0;
let rafId = null;

const HOVER_TARGETS = 'a, button, [role="button"], .cursor-pointer, input, select, textarea, label';

const tick = () => {
  x += (targetX - x) * 0.18;
  y += (targetY - y) * 0.18;
  if (ringEl.value) ringEl.value.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  rafId = Math.abs(targetX - x) + Math.abs(targetY - y) > 0.3 ? requestAnimationFrame(tick) : null;
};

const handleMouseMove = (event) => {
  targetX = event.clientX;
  targetY = event.clientY;
  if (dotEl.value) dotEl.value.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
  if (!cursorVisible.value) {
    // Jump straight to the cursor when it (re)enters
    x = targetX;
    y = targetY;
    cursorVisible.value = true;
  }
  if (!rafId) rafId = requestAnimationFrame(tick);
};

const handleMouseOver = (event) => {
  cursorHover.value = !!event.target.closest?.(HOVER_TARGETS);
};

const hideCursor = () => (cursorVisible.value = false);

onMounted(() => {
  // Mouse only: phones and tablets keep their normal behaviour
  if (!window.matchMedia("(pointer: fine)").matches) return;
  document.documentElement.classList.add("has-ring-cursor");
  window.addEventListener("mousemove", handleMouseMove, { passive: true });
  window.addEventListener("mouseover", handleMouseOver, { passive: true });
  document.documentElement.addEventListener("mouseleave", hideCursor);
});

onUnmounted(() => {
  document.documentElement.classList.remove("has-ring-cursor");
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("mouseover", handleMouseOver);
  document.documentElement.removeEventListener("mouseleave", hideCursor);
  if (rafId) cancelAnimationFrame(rafId);
});
</script>

<template>
  <div class="font-sans text-slate-800 bg-[#020617] scroll-smooth relative">
    <!-- Ring cursor (mouse devices only) -->
    <div
      class="pointer-events-none fixed inset-0 z-[60] transition-opacity duration-300"
      :class="cursorVisible ? 'opacity-100' : 'opacity-0'"
    >
      <div ref="ringEl" class="cursor-pos">
        <div class="cursor-ring" :class="{ 'is-hover': cursorHover }"></div>
      </div>
      <div ref="dotEl" class="cursor-pos">
        <div class="cursor-dot" :class="{ 'is-hover': cursorHover }"></div>
      </div>
    </div>

    <NavBar />
    <HeroSection />

    <ServicesSection />
    <!-- <TechStackSection /> -->
    <HowWeWorkSection />
    <ProjectsSection />
    <PricingSection />
    <ClientsSection />
    <ClientMessageSection />
    <TeamSection />
    <FooterSection />
  </div>
</template>

<style scoped>
.cursor-pos {
  position: fixed;
  top: 0;
  left: 0;
  will-change: transform;
}
.cursor-dot,
.cursor-ring {
  position: absolute;
  border-radius: 9999px;
  transform: translate(-50%, -50%);
}
.cursor-dot {
  width: 6px;
  height: 6px;
  background: #22d3ee;
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.8);
  transition: width 0.2s, height 0.2s, opacity 0.2s;
}
.cursor-dot.is-hover {
  opacity: 0;
}
.cursor-ring {
  width: 34px;
  height: 34px;
  border: 1.5px solid rgba(96, 165, 250, 0.6);
  box-shadow: 0 0 16px rgba(59, 130, 246, 0.25);
  transition: width 0.3s ease, height 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
}
.cursor-ring.is-hover {
  width: 56px;
  height: 56px;
  background-color: rgba(59, 130, 246, 0.12);
  border-color: rgba(34, 211, 238, 0.8);
}

/* Hide the system cursor only when the ring cursor is active */
:global(html.has-ring-cursor),
:global(html.has-ring-cursor *) {
  cursor: none !important;
}
</style>
