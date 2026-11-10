<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <section
    class="py-28 pt-16 bg-[#080c16] relative overflow-hidden flex items-center"
  >
    <!-- Background Decor -->
    <div
      class="absolute inset-0 z-0 opacity-[0.07]"
      style="
        background-image: radial-gradient(#1e293b 1px, transparent 1px);
        background-size: 30px 30px;
      "
    ></div>
    <div
      class="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left Content -->
        <div class="text-left" v-scroll-reveal>
          <span
            class="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-cyan-300 uppercase bg-cyan-500/10 border border-cyan-500/20 px-5 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <span class="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            {{ t("clientMessages.badge") }}
          </span>
          <h2
            class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight"
          >
            {{ t("clientMessages.title.line1") }}<br />
            {{ t("clientMessages.title.line2") }}
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400"
              >{{ t("clientMessages.title.highlight") }}</span
            >
          </h2>

          <p class="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-lg">
            {{ t("clientMessages.desc") }}
          </p>

          <a
            href="#how-it-works"
            class="inline-flex items-center px-8 py-3.5 rounded-xl bg-blue-600 border border-blue-500 text-white font-bold text-sm hover:bg-blue-500 shadow-lg shadow-blue-600/25 transition-all duration-300"
          >
            {{ t("clientMessages.btn") }}
            <i class="fas fa-arrow-right ml-2 text-xs"></i>
          </a>
        </div>

        <!-- Right Animation (Floating Notifications) -->
        <div
          class="relative h-[400px] flex items-center justify-center lg:justify-end perspective-1000 w-full"
        >
          <!-- Notification 1 -->
          <div
            class="animate-cycle-1 absolute right-0 bg-slate-900/90 backdrop-blur-md p-5 rounded-2xl shadow-2xl shadow-black/30 flex items-center gap-4 border border-slate-800 w-full max-w-md z-30 origin-bottom"
          >
            <div
              class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-900/20"
            >
              <i class="fas fa-check-circle text-white text-xl"></i>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex justify-between items-baseline mb-1">
                <h4 class="font-bold text-white text-sm">
                  {{ t("clientMessages.notifications.deploy.title") }}
                </h4>
                <span class="text-xs text-slate-500">{{
                  t("clientMessages.notifications.deploy.time")
                }}</span>
              </div>
              <p class="text-slate-400 text-sm truncate">
                {{ t("clientMessages.notifications.deploy.msg") }}
              </p>
            </div>
          </div>

          <!-- Notification 2 -->
          <div
            class="animate-cycle-2 absolute right-0 bg-slate-900/90 backdrop-blur-md p-5 rounded-2xl shadow-2xl shadow-black/30 flex items-center gap-4 border border-slate-800 w-full max-w-md z-20 origin-bottom"
          >
            <div
              class="w-12 h-12 rounded-xl bg-gradient-to-br from-devfin-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-900/20"
            >
              <i class="fas fa-bolt text-white text-xl"></i>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex justify-between items-baseline mb-1">
                <h4 class="font-bold text-white text-sm">
                  {{ t("clientMessages.notifications.update.title") }}
                </h4>
                <span class="text-xs text-slate-500">{{
                  t("clientMessages.notifications.update.time")
                }}</span>
              </div>
              <p class="text-slate-400 text-sm truncate">
                {{ t("clientMessages.notifications.update.msg") }}
              </p>
            </div>
          </div>

          <!-- Notification 3 -->
          <div
            class="animate-cycle-3 absolute right-0 bg-slate-900/90 backdrop-blur-md p-5 rounded-2xl shadow-2xl shadow-black/30 flex items-center gap-4 border border-slate-800 w-full max-w-md z-10 origin-bottom"
          >
            <div
              class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-900/20"
            >
              <i class="fas fa-chart-line text-white text-xl"></i>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex justify-between items-baseline mb-1">
                <h4 class="font-bold text-white text-sm">
                  {{ t("clientMessages.notifications.analytics.title") }}
                </h4>
                <span class="text-xs text-slate-500">{{
                  t("clientMessages.notifications.analytics.time")
                }}</span>
              </div>
              <p class="text-slate-400 text-sm truncate">
                {{ t("clientMessages.notifications.analytics.msg") }}
              </p>
            </div>
          </div>

          <!-- Notification 4 -->
          <div
            class="animate-cycle-4 absolute right-0 bg-slate-900/90 backdrop-blur-md p-5 rounded-2xl shadow-2xl shadow-black/30 flex items-center gap-4 border border-slate-800 w-full max-w-md z-0 origin-bottom"
          >
            <div
              class="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-900/20"
            >
              <i class="fas fa-user-plus text-white text-xl"></i>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex justify-between items-baseline mb-1">
                <h4 class="font-bold text-white text-sm">
                  {{ t("clientMessages.notifications.user.title") }}
                </h4>
                <span class="text-xs text-slate-500">{{
                  t("clientMessages.notifications.user.time")
                }}</span>
              </div>
              <p class="text-slate-400 text-sm truncate">
                {{ t("clientMessages.notifications.user.msg") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes stack-cycle {
  /* Phase 1: Enter & Active (Front) */
  0% {
    opacity: 0;
    transform: translateY(60px) scale(0.9);
    z-index: 30;
  }
  5% {
    opacity: 1;
    transform: translateY(0) scale(1);
    z-index: 30;
  }
  25% {
    opacity: 1;
    transform: translateY(0) scale(1);
    z-index: 30;
  }

  /* Phase 2: Move to Stack 1 */
  28% {
    opacity: 0.8;
    transform: translateY(-15px) scale(0.95);
    z-index: 20;
  }
  50% {
    opacity: 0.8;
    transform: translateY(-15px) scale(0.95);
    z-index: 20;
  }

  /* Phase 3: Move to Stack 2 */
  53% {
    opacity: 0.6;
    transform: translateY(-30px) scale(0.9);
    z-index: 10;
  }
  75% {
    opacity: 0.6;
    transform: translateY(-30px) scale(0.9);
    z-index: 10;
  }

  /* Phase 4: Exit */
  80% {
    opacity: 0;
    transform: translateY(-45px) scale(0.85);
    z-index: 0;
  }
  100% {
    opacity: 0;
    transform: translateY(-45px) scale(0.85);
    z-index: 0;
  }
}

.animate-cycle-1 {
  animation: stack-cycle 16s ease-in-out infinite 0s;
  opacity: 0;
}

.animate-cycle-2 {
  animation: stack-cycle 16s ease-in-out infinite 4s;
  opacity: 0;
}

.animate-cycle-3 {
  animation: stack-cycle 16s ease-in-out infinite 8s;
  opacity: 0;
}

.animate-cycle-4 {
  animation: stack-cycle 16s ease-in-out infinite 12s;
  opacity: 0;
}
</style>
