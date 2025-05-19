<template>
  <div ref="globeContainer" class="absolute -top-20 sm:-top-24 w-full h-[375px] pointer-events-none"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, watchEffect} from 'vue'
import { useData } from 'vitepress'
const { isDark } = useData()

const globeContainer = ref<HTMLElement | null>(null)
let Globe: any
let globeInstance: any = null

// Function to update globe texture
const updateGlobeTexture = () => {
  if (globeInstance) {
    const newTextureUrl = isDark.value
      ? '//unpkg.com/three-globe/example/img/earth-night.jpg'
      : '//unpkg.com/three-globe/example/img/earth-day.jpg';
    globeInstance.globeImageUrl(newTextureUrl);
  } else {
    console.warn('globeInstance is not initialized yet.');
  }
}

// Import Globe.gl dynamically only on client-side
onMounted(async () => {
  Globe = (await import('globe.gl')).default;
  initGlobe();
  updateGlobeTexture();
  watch(isDark, () => {
    updateGlobeTexture();
  });
});

// Constants for arc animation
const ARC_REL_LEN = 0.4
const FLIGHT_TIME = 1000
const NUM_RINGS = 3
const RINGS_MAX_R = 5
const RING_PROPAGATION_SPEED = 5
const NUM_ACTIVE_ARCS = 8
const MIN_TIME_BETWEEN_ARCS = 500

// Define your locations
const LOCATIONS = [
  { lat: 37.7749, lng: -122.4194 }, // San Francisco
  { lat: 40.7128, lng: -74.0060 },  // New York
  { lat: 51.5074, lng: -0.1278 },   // London
  { lat: 35.6762, lng: 139.6503 },  // Tokyo
  { lat: 22.3193, lng: 114.1694 },  // Hong Kong
  { lat: 1.3521, lng: 103.8198 },   // Singapore
  { lat: -33.8688, lng: 151.2093 }, // Sydney
  { lat: 48.8566, lng: 2.3522 },    // Paris
]

type ArcSource = {
  lat: number
  lng: number
  lastEmitTime: number
}

// Initialize arc sources with starting positions
const initializeArcSources = (): ArcSource[] => {
  // Get random starting positions
  const startingIndices = new Set<number>()
  while (startingIndices.size < NUM_ACTIVE_ARCS) {
    startingIndices.add(Math.floor(Math.random() * LOCATIONS.length))
  }
  
  return Array.from(startingIndices).map(index => ({
    lat: LOCATIONS[index].lat,
    lng: LOCATIONS[index].lng,
    lastEmitTime: 0
  }))
}

// Initialize arc sources
const prevCoordsList = ref<ArcSource[]>(initializeArcSources())

const emitArc = (sourceIndex: number) => {
  const currentTime = Date.now()
  const prevCoords = prevCoordsList.value[sourceIndex]
  
  // Check if enough time has passed since last emission
  if (currentTime - prevCoords.lastEmitTime < MIN_TIME_BETWEEN_ARCS) {
    return
  }

  // Find a valid target location
  let targetLocation
  do {
    const randomIdx = Math.floor(Math.random() * LOCATIONS.length)
    targetLocation = LOCATIONS[randomIdx]
  } while (
    targetLocation.lat === prevCoords.lat && 
    targetLocation.lng === prevCoords.lng
  )

  const { lat: startLat, lng: startLng } = prevCoords
  const { lat: endLat, lng: endLng } = targetLocation

  // Update previous coordinates and emission time
  setTimeout(() => {
    if (prevCoordsList.value[sourceIndex]) {
      prevCoordsList.value[sourceIndex] = {
        lat: endLat,
        lng: endLng,
        lastEmitTime: currentTime
      }
    }
  }, FLIGHT_TIME)

  // Add and remove arc
  const arc = { 
    startLat, 
    startLng, 
    endLat, 
    endLng,
    color: `rgba(255,100,50,${0.75 + (sourceIndex * 0.05)})`
  }
  
  if (globeInstance) {
    globeInstance.arcsData([...globeInstance.arcsData(), arc])
    setTimeout(() => {
      if (globeInstance) {
        globeInstance.arcsData(globeInstance.arcsData().filter(d => d !== arc))
      }
    }, FLIGHT_TIME * 2)

    // Add and remove start rings
    const srcRing = { lat: startLat, lng: startLng }
    globeInstance.ringsData([...globeInstance.ringsData(), srcRing])
    setTimeout(() => {
      if (globeInstance) {
        globeInstance.ringsData(globeInstance.ringsData().filter(r => r !== srcRing))
      }
    }, FLIGHT_TIME * ARC_REL_LEN)

    // Add and remove target rings
    setTimeout(() => {
      if (globeInstance) {
        const targetRing = { lat: endLat, lng: endLng }
        globeInstance.ringsData([...globeInstance.ringsData(), targetRing])
        setTimeout(() => {
          if (globeInstance) {
            globeInstance.ringsData(globeInstance.ringsData().filter(r => r !== targetRing))
          }
        }, FLIGHT_TIME * ARC_REL_LEN)
      }
    }, FLIGHT_TIME)
  }
}

const initGlobe = () => {
  if (!globeContainer.value) return
  // @ts-ignore
  globeInstance = new Globe()
    .globeImageUrl(isDark.value
      ? '//unpkg.com/three-globe/example/img/earth-night.jpg'
      : '//unpkg.com/three-globe/example/img/earth-day.jpg')
    .backgroundColor('rgba(0,0,0,0)')
    .width(globeContainer.value.offsetWidth)
    .height(globeContainer.value.offsetHeight)
    .arcColor('color')
    .arcDashLength(ARC_REL_LEN)
    .arcDashGap(2)
    .arcDashInitialGap(1)
    .arcDashAnimateTime(FLIGHT_TIME)
    .arcsTransitionDuration(0)
    .ringColor(() => (t: number) => `rgba(255,100,50,${1-t})`)
    .ringMaxRadius(RINGS_MAX_R)
    .ringPropagationSpeed(RING_PROPAGATION_SPEED)
    .ringRepeatPeriod(FLIGHT_TIME * ARC_REL_LEN / NUM_RINGS)

  globeInstance(globeContainer.value)

  // Auto-rotate
  globeInstance.controls().autoRotate = true
  globeInstance.controls().autoRotateSpeed = 0.7
  globeInstance.controls().enableZoom = false

  // Emit arcs from multiple sources
  const emitArcs = () => {
    for (let i = 0; i < NUM_ACTIVE_ARCS; i++) {
      emitArc(i)
    }
  }

  // Initial emission
  emitArcs()

  // Regular emission interval
  const interval = setInterval(emitArcs, FLIGHT_TIME * 1.5)
  globeInstance.__interval = interval
}

onUnmounted(() => {
  if (globeInstance) {
    if (globeInstance.__interval) {
      clearInterval(globeInstance.__interval)
    }
    globeInstance._destructor()
  }
})
</script>
