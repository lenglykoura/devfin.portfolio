import { createApp } from 'vue'
import { createI18n } from 'vue-i18n' // Requires: npm install vue-i18n
import App from './App.vue'
import './style.css' // Ensure this imports your Tailwind directives
import { messages } from './messages'

const app = createApp(App);

const i18n = createI18n({
    legacy: false, // Must be set to 'false' to use Composition API
    locale: 'km', // Default locale
    fallbackLocale: 'km',
    messages,
})
app.use(i18n) // Use i18n
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
