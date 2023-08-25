import { createApp } from 'vue'
import App from './App.vue'
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;
window.LaravelEcho = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_KEY,
    cluster: import.meta.env.VITE_PUSHER_CLUSTER,
    encrypted: true,
});

createApp(App).mount('#app')
