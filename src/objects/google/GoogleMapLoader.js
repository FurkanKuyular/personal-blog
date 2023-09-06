import {onUnmounted, onMounted, ref} from "vue";

export function useGeolocation() {
    const coords = ref({ latitude: 41.02868400188612, longitude: 28.955820485658993 })
    const isSupported = 'navigator' in window && 'geolocation' in navigator
    return { coords, isSupported }
}