<script setup>
const services = [
  {
    title: "Web Development",
    description:
      "Building responsive, scalable, and high-performance web applications using modern frameworks and best practices.",
    icon: "fa-laptop-code", // Updated to a more detailed icon
    gradientClass: "from-blue-500 to-cyan-400",
    shadowClass: "shadow-blue-500/20",
    delay: 0,
  },
  {
    title: "Mobile Development",
    description:
      "Creating seamless native and cross-platform mobile experiences for iOS and Android that engage users on the go.",
    icon: "fa-mobile-screen", // Updated to a sharper mobile icon
    gradientClass: "from-purple-500 to-pink-400",
    shadowClass: "shadow-purple-500/20",
    delay: 100,
  },
  {
    title: "Database Solutions",
    description:
      "Designing robust data architectures and efficient storage systems to ensure data integrity, security, and speed.",
    icon: "fa-server", // Updated to 'server' for a more robust look
    gradientClass: "from-devfin-600 to-devfin-500",
    shadowClass: "shadow-devfin-600/20",
    delay: 200,
  },
];
</script>

<template>
  <!-- Dark Theme Services Section -->
  <section id="services" class="py-24 bg-[#0b1120] relative overflow-hidden">
    <!-- Decorative Background Glows -->
    <div
      class="absolute top-0 left-0 -ml-20 -mt-20 w-96 h-96 rounded-full bg-devfin-600/10 blur-[100px]"
    ></div>
    <div
      class="absolute bottom-0 right-0 -mr-20 -mb-20 w-96 h-96 rounded-full bg-blue-500/10 blur-[100px]"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-20" v-scroll-reveal>
        <span
          class="text-xs font-bold tracking-wider text-blue-100 uppercase bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-4 inline-block"
        >
          What We Do
        </span>
        <h2
          class="mt-2 text-4xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          Our Services
        </h2>
        <p
          class="mt-6 max-w-2xl text-xl text-slate-400 mx-auto leading-relaxed"
        >
          Comprehensive technology solutions tailored to scale your business
          with precision and efficiency.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          v-scroll-reveal="service.delay"
          class="group relative bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-devfin-600/10 transition-all duration-300 hover:-translate-y-2"
        >
          <!-- Icon Container with Gradient -->
          <div
            class="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-white text-3xl shadow-lg transform group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br"
            :class="[service.gradientClass, service.shadowClass]"
          >
            <i class="fas" :class="service.icon"></i>
          </div>

          <h3
            class="text-2xl font-bold text-white mb-4  transition-colors"
          >
            {{ service.title }}
          </h3>

          <p
            class="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors"
          >
            {{ service.description }}
          </p>

          <!-- Learn More Link -->
          <a
            href="#"
            class="inline-flex items-center text-sm font-semibold text-white transition-colors"
          >
            Learn more
            <i
              class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"
            ></i>
          </a>

          <!-- Decoration on hover -->
          <div
            class="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
          >
            <i
              class="fas text-9xl -mr-6 -mt-6 text-slate-800"
              :class="service.icon"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
