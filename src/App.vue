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

// Global Mouse Tracking Logic
const mouseX = ref(0);
const mouseY = ref(0);

const handleMouseMove = (event) => {
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
});
</script>

<template>
  <div class="font-sans text-slate-800 bg-slate-2000 scroll-smooth relative">
    <!-- Global Spotlight/Scope Light -->
    <!-- Fixed position ensures it covers the whole screen while scrolling -->
    <div
      class="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
      :style="`background: radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(18, 55, 100, 0.2), transparent 80%);`"
    ></div>

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
