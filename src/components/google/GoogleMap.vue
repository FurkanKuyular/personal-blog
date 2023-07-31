<script>
/* eslint-disable no-undef */
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'
import { useGeolocation } from '@/objects/google/GoogleMapLoader'
import { Loader } from '@googlemaps/js-api-loader'

const GOOGLE_MAPS_API_KEY = 'AIzaSyDLjaYFtRs507chIw-TF-72Me_jRaHMh1w'

export default {
  name: 'App',
  setup() {
    const { coords } = useGeolocation()

    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude
    }))
    const otherPos = ref(null)

    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY })
    const mapDiv = ref(null)
    let map = ref(null)
    let clickListener = null
    onMounted(async () => {
      await loader.load()
      map.value = new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 7
      })
      clickListener = map.value.addListener(
          'click',
          ({ latLng: { lat, lng } }) =>
              (otherPos.value = { lat: lat(), lng: lng() })
      )
    })
    onUnmounted(async () => {
      if (clickListener) clickListener.remove()
    })

    return { mapDiv }
  }
}
</script>

<template>
  <div ref="mapDiv" style="width: 300px; height: 350px" />
</template>