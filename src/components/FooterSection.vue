<template>
  <!-- Dark Theme Footer -->
  <footer class="bg-[#020617] text-slate-400 py-12 border-t border-slate-800">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8"
    >
      <!-- Brand Column -->
      <div class="col-span-1 md:col-span-2">
        <div class="flex items-center gap-2 mb-4">
          <img
            src="/src/assets/images/logo-white.png"
            alt="Devfin Logo"
            width="46"
          />
          <span class="text-2xl font-bold text-white">Devfin.</span>
        </div>
        <p class="text-slate-500 max-w-sm leading-relaxed">
          Innovating technology solutions for the financial and retail sectors.
          Building systems that scale with your vision.
        </p>
      </div>

      <!-- Services Links -->
      <div>
        <h4 class="text-white font-bold mb-6 uppercase text-xs tracking-widest">
          Services
        </h4>
        <ul class="space-y-3 text-sm">
          <li>
            <a
              href="#services"
              class="hover:text-blue-400 transition-colors duration-300"
              >Web Development</a
            >
          </li>
          <li>
            <a
              href="#services"
              class="hover:text-blue-400 transition-colors duration-300"
              >Mobile Development</a
            >
          </li>
          <li>
            <a
              href="#services"
              class="hover:text-blue-400 transition-colors duration-300"
              >Database Solutions</a
            >
          </li>
          <!-- <li>
            <a
              href="#"
              class="hover:text-blue-400 transition-colors duration-300"
              >UI/UX Design</a
            >
          </li> -->
        </ul>
      </div>

      <!-- Connect Column -->
      <div>
        <h4 class="text-white font-bold mb-6 uppercase text-xs tracking-widest">
          Connect
        </h4>
        <div class="flex space-x-4 mb-6">
          <a
            :href="`https://t.me/lenglykoura`"
            target="_blank"
            class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-devfin-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
          >
            <i class="fab fa-telegram"></i>
          </a>
          <a
            :href="`https://facebook.com/devfintech`"
            target="_blank"
            class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-devfin-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
          >
            <i class="fab fa-facebook"></i>
          </a>
          <a
            href="#"
            class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-devfin-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
          >
            <i class="fab fa-google"></i>
          </a>
        </div>
        <!-- <a href="#" class="hover:text-blue-400 transition-colors duration-300">
          info@devfin.cc
        </a> -->
      </div>
    </div>

    <!-- Copyright -->
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800/50 text-center text-xs text-slate-600"
    >
      &copy; 2025 Devfin. Technology Solutions. All rights reserved.
    </div>
  </footer>
</template>
