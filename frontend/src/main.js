import { createApp } from 'vue'
import App from './App.vue'

// store
import store from './store/index'

// naive-ui
import naive from 'naive-ui'

// tailwind-css
import './index.css'

// particles
import Particles from "particles.vue3";

const app = createApp(App)
app.use(store)
app.use(naive)
app.use(Particles)
app.mount('#app')
