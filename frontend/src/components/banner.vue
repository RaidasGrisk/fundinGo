<script setup>
import { loadFull } from "tsparticles"
import { useIsMobile } from '.././utils/composables'

const isMobile = useIsMobile()

const particlesInit = async (engine) => {
  await loadFull(engine);
}

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
}
const particlesOptions = {
  "fullScreen": false,
  "particles": {
    "number": {
      "value": 60,
      // "density": {
      //   "enable": true,
      //   "value_area": 800
      // }
    },
    "color": {
      "value": "#111111"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#111111"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 0.1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.9,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 5,
      "color": "#111111",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 0.6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 0.7,
          "color": "#00B2CA",
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

</script>

<template>
  <n-el>
    <div>
      <Particles
        id="tsparticles"
        :particlesInit="particlesInit"
        :particlesLoaded="particlesLoaded"
        :options="particlesOptions"
        :style="{ height: '800px', position: 'absolute', left: '0px', top: '0px', right: '0px' }"
      />
    </div>
    <n-space :size="[0, 20]" vertical class="noselect">
      <div data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease-out-back" data-sal-duration="500">
        <n-h1 prefix="bar" type="info" style="max-width: 75vh">
          <n-text type="info" :style="isMobile ? '' : 'font-size: 120%;'">
            Do you think getting government funding is
            <n-gradient-text :gradient="{ deg: 100, from: 'var(--primary-color)', to: 'var(--success-color)' }" >overly complicated?</n-gradient-text>
            🤯
          </n-text>
        </n-h1>
      </div>
      <div data-sal="slide-up" data-sal-delay="900" data-sal-easing="ease-out-back" data-sal-duration="1000">
        <n-h3 prefix="bar" type="success" style="max-width: 75vh">
          <n-text type="info">
            We think so too and we're here to help you! 🤗
          </n-text>
        </n-h3>
      </div>
      <br>
      <div data-sal="slide-up" data-sal-delay="1000" data-sal-easing="ease-out-back" data-sal-duration="1000">
        <n-h5 prefix="bar" type="primary" style="max-width: 45vh">
          <n-text type="info" style="font-weight: 100">
            At <span style="font-weight: 600">fundin<span><n-text type="primary">Go</n-text></span></span>
            we gather all funding opportunities in one place
            and send you personalized notifications about available funding
          </n-text>
        </n-h5>
      </div>
    </n-space>
  </n-el>
</template>

<style scoped>
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>
