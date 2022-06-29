import { createStore } from "vuex"
import themeModule from './modules/theme'

const store = createStore({
  modules:{
    theme: themeModule,
  }
})

export default store
