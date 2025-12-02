<script setup>
const team = [
  {
    name: "Leng Lykoura",
    role: "Full Stack Web Developer",
    desc: "Full-stack wizard specializing in Vue and Laravel architectures.",
    image: "lenglykoura.jpg",
    delay: 0,
  },
  // {
  //   name: "Sarah Chen",
  //   role: "System Architect",
  //   desc: "Expert in .NET ecosystems and cloud server management.",
  //   image: "sarahchen.jpg", // Ensure you have this image or use a placeholder
  //   delay: 100,
  // },
  // {
  //   name: "David Ross",
  //   role: "Mobile Lead",
  //   desc: "Specializes in high-performance native iOS and Android apps.",
  //   image: "davidross.jpg", // Ensure you have this image or use a placeholder
  //   delay: 200,
  // },
  // {
  //   name: "Emily Blunt",
  //   role: "Project Manager",
  //   desc: "Ensures agile delivery and seamless client communication.",
  //   image: "emilyblunt.jpg", // Ensure you have this image or use a placeholder
  //   delay: 300,
  // },
];

// Helper function to dynamically load images from src/assets/images/
const getImageUrl = (name) => {
  // Try/Catch block to handle missing images gracefully if you don't have the files yet
  try {
    return new URL(`../assets/images/${name}`, import.meta.url).href;
  } catch (e) {
    return "[https://via.placeholder.com/150](https://via.placeholder.com/150)"; // Fallback
  }
};
</script>

<template>
  <section id="team" class="py-24 bg-[#020617] relative overflow-hidden">
    <!-- Background Decoration -->
    <div
      class="absolute inset-0 z-0 opacity-20"
      style="
        background-image: radial-gradient(#10b981 1px, transparent 1px);
        background-size: 30px 30px;
      "
    ></div>
    <div
      class="absolute right-0 top-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-devfin-500/5 blur-[100px]"
    ></div>
    <div
      class="absolute left-0 bottom-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-500/5 blur-[100px]"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-20" v-scroll-reveal>
        <span
          class="text-xs font-bold tracking-wider text-blue-100 uppercase bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-4 inline-block"
        >
          Our People
        </span>
        <h2
          class="mt-2 text-4xl md:text-5xl font-extrabold text-white tracking-tight"
        >
          Meet The Team
        </h2>
        <p
          class="mt-6 max-w-2xl text-xl text-slate-400 mx-auto leading-relaxed"
        >
          Experts committed to technical excellence and innovation.
        </p>
      </div>

      <!-- Use Flexbox instead of Grid for center alignment of variable items -->
      <div class="flex flex-wrap justify-center gap-8">
        <div
          v-for="(member, index) in team"
          :key="index"
          v-scroll-reveal="member.delay"
          class="group relative w-full sm:w-80 lg:w-72 transition-all duration-700 ease-out"
        >
          <div
            class="relative bg-slate-900 p-6 rounded-3xl shadow-xl shadow-black/30 border border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-devfin-900/10 hover:border-slate-700 h-full flex flex-col items-center"
          >
            <!-- Image Container -->
            <div
              class="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-slate-800 shadow-lg group-hover:border-devfin-500/30 transition-colors duration-300"
            >
              <img
                :src="getImageUrl(member.image)"
                :alt="member.name"
                class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <!-- Content -->
            <div class="text-center">
              <h3
                class="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors uppercase"
              >
                {{ member.name }}
              </h3>
              <p
                class="text-sm font-semibold text-white group-hover:text-blue-300 uppercase tracking-wide mb-4"
              >
                {{ member.role }}
              </p>
              <p class="text-slate-400 text-sm leading-relaxed mb-6">
                {{ member.desc }}
              </p>

              <!-- Social Links Mockup -->
              <div
                class="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
              >
                <a
                  href="#"
                  class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-devfin-500 hover:text-white transition-colors"
                  ><i class="fab fa-linkedin-in text-sm"></i
                ></a>
                <a
                  href="#"
                  class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-devfin-500 hover:text-white transition-colors"
                  ><i class="fab fa-github text-sm"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
