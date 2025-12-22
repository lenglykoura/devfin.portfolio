<script setup>
import { ref } from "vue";

const isMobileMenuOpen = ref(false);
const menuItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Team", href: "#team" },
];

const toggleMenu = () => (isMobileMenuOpen.value = !isMobileMenuOpen.value);
const closeMenu = () => (isMobileMenuOpen.value = false);
</script>

<template>
  <!-- Dark Theme Navbar to match Hero -->
  <nav
    class="fixed w-full z-50 bg-[#020617]/90 backdrop-blur-md border-b border-slate-800 shadow-lg transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <img src="/src/assets/images/logo-white.png" alt="" width="34px" />
          <span class="font-bold text-xl tracking-tight text-white ml-2"
            >Devfin.</span
          >
        </div>

        <div class="hidden md:flex space-x-8 items-center">
          <a
            v-for="item in menuItems"
            :key="item.name"
            :href="item.href"
            class="text-slate-300 hover:text-white font-medium transition text-sm uppercase tracking-wide"
          >
            {{ item.name }}
          </a>
        </div>
        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8 items-center">
          <!-- devfin CTA Button -->
          <a
            :href="`https://t.me/lenglykoura`"
            target="_blank"
            class="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-bold transition shadow-lg shadow-blue-600/20 text-sm flex items-center gap-2"
          >
            Contact Us
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button
            @click="toggleMenu"
            class="text-slate-300 hover:text-white focus:outline-none"
          >
            <i
              class="fas"
              :class="isMobileMenuOpen ? 'fa-times' : 'fa-bars'"
            ></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Panel -->
    <div
      v-show="isMobileMenuOpen"
      class="md:hidden bg-[#0f172a] border-t border-slate-800 absolute w-full shadow-xl"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          v-for="item in menuItems"
          :key="item.name"
          :href="item.href"
          @click="closeMenu"
          class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>
