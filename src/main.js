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

// Custom Directive: v-scroll-reveal
app.directive('scroll-reveal', {
    mounted(el, binding) {
        // Parse delay — supports v-scroll-reveal="200" or v-scroll-reveal="{ delay: 200 }"
        let delay = 0;
        if (binding.value) {
            if (typeof binding.value === 'number') {
                delay = binding.value;
            } else if (typeof binding.value === 'object' && binding.value.delay) {
                delay = binding.value.delay;
            }
        }

        // Touch devices: reveal once, shorter and smaller, so fast scrolling isn't re-animating dozens of elements
        const isTouch = !window.matchMedia('(pointer: fine)').matches;
        const duration = isTouch ? 0.5 : 0.8;
        const offset = isTouch ? 16 : 30;

        // Set initial hidden state (no permanent will-change: one GPU layer per element hurts phones)
        el.style.opacity = '0';
        el.style.transform = `translateY(${offset}px)`;
        el.style.transition = `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

        let hasRevealed = false;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Entering viewport — slide up and fade in
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                    hasRevealed = true;
                    if (isTouch) observer.unobserve(el);
                } else if (hasRevealed) {
                    // Leaving viewport — determine scroll direction from boundingClientRect
                    const rect = entry.boundingClientRect;
                    if (rect.top > 0) {
                        // Element is below viewport (user scrolled up) — slide back down
                        el.style.opacity = '0';
                        el.style.transform = 'translateY(30px)';
                    } else {
                        // Element is above viewport (user scrolled down past it) — slide up
                        el.style.opacity = '0';
                        el.style.transform = 'translateY(-20px)';
                    }
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        });

        observer.observe(el);

        // Store observer for cleanup
        el._scrollRevealObserver = observer;
    },
    unmounted(el) {
        if (el._scrollRevealObserver) {
            el._scrollRevealObserver.disconnect();
        }
    }
})

// Custom Directive: v-touch-active
// Touch screens can't hover, so mark the element .is-active while it crosses the middle of the screen.
app.directive('touch-active', {
    mounted(el) {
        if (window.matchMedia('(hover: hover)').matches) return;
        const observer = new IntersectionObserver(
            ([entry]) => el.classList.toggle('is-active', entry.isIntersecting),
            { rootMargin: '-35% 0px -35% 0px' } // middle 30% of the screen
        );
        observer.observe(el);
        el._touchActiveObserver = observer;
    },
    unmounted(el) {
        el._touchActiveObserver?.disconnect();
    }
})

app.mount('#app');
