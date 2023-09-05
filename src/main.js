import { createApp } from 'vue'
import App from './App.vue'
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

window.Pusher = Pusher;
window.LaravelEcho = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_KEY,
    cluster: import.meta.env.VITE_PUSHER_CLUSTER,
    encrypted: true,
});

const app = createApp(App);
app.use(ToastPlugin).mount('#app');
