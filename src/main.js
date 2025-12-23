import { createApp } from 'vue'
import { createI18n } from 'vue-i18n' // Requires: npm install vue-i18n
import App from './App.vue'
import './style.css' // Ensure this imports your Tailwind directives
import { messages } from './translate'

const app = createApp(App);

const i18n = createI18n({
    legacy: false,
    locale: 'km', // Default to Khmer first
    fallbackLocale: 'en', // Fallback to English
    messages,
})
app.use(i18n)

// --- ADD THIS FUNCTION ---
async function detectLocation() {
    try {
        // Fetch user data from free API
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        // Check Country Code (KH is Cambodia)
        if (data.country_code !== 'KH') {
            // If NOT Cambodia, switch to English
            i18n.global.locale.value = 'en';
        } else {
            // If it IS Cambodia, ensure it is Khmer
            i18n.global.locale.value = 'km';
        }
    } catch (error) {
        console.error("Could not detect location, staying with default:", error);
    }
}

// Call the function
detectLocation();
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
