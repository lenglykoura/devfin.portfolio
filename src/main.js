import { createApp } from 'vue'
import App from './App.vue'
import './style.css' // Ensure this imports your Tailwind directives

const app = createApp(App);

// Custom Directive: v-scroll-reveal
app.directive('scroll-reveal', {
    mounted(el, binding) {
        // Set initial state
        el.classList.add('reveal-hidden');

        // Optional delay from binding value (in ms)
        if (binding.value) {
            el.style.transitionDelay = `${binding.value}ms`;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Element enters viewport: Reveal it
                    el.classList.add('reveal-visible');
                    el.classList.remove('reveal-hidden');
                } else {
                    // Element leaves viewport: Hide it (allows re-animation)
                    el.classList.remove('reveal-visible');
                    el.classList.add('reveal-hidden');
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% is visible
            rootMargin: "0px"
        });

        observer.observe(el);
    }
})

app.mount('#app');
