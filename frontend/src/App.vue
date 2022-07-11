<script setup>

// vue
import { onMounted, reactive, ref } from 'vue'
import { useStore } from 'vuex'

// naive-ui
import { lightTheme } from 'naive-ui'
import { NConfigProvider, NGlobalStyle, NMessageProvider, NNotificationProvider, NLoadingBarProvider } from 'naive-ui'

// sal
import sal from "sal.js"
import "/node_modules/sal.js/dist/sal.css"

// components
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/header.vue'
import Banner from './components/banner.vue'
import Pitch from './components/pitch.vue'
// import Filters from './components/filters.vue'
import Footer from './components/footer.vue'

const store = useStore()

onMounted(() => {
  sal({ threshold: 0.01, once: true, disabled: false })
})


// drawer colors
const activeDrawer = ref(false)

</script>

<template>

  <n-config-provider :theme="store.getters['theme/getTheme']">
    <n-loading-bar-provider>
      <n-message-provider placement="top-right">
        <n-notification-provider>
          <n-layout style="height: 100vh" :native-scrollbar="false">
            <n-layout-header class="py-4 px-8 md:py-4 md:px-16" bordered>
              <Header />
            </n-layout-header>
            <n-layout-content>
              <n-layout>
                <n-thing class="py-16 px-8 md:py-44 md:px-32" style="height: 86vh">
                  <Banner />
                </n-thing>
              </n-layout>
              <n-divider style="margin-top: 0px;"/>
              <n-thing class="py-8 px-8 md:py-16 md:px-32">
                <Pitch />
              </n-thing>
              <!-- <n-divider style="margin: 0px;"/>
              <n-thing class="py-24 px-8 md:py-32 md:px-32">
                <Filters />
              </n-thing> -->
            </n-layout-content>
            <n-layout-footer bordered>
              <n-thing class="py-8 px-8 md:py-32 md:px-32">
                <Footer />
              </n-thing>
            </n-layout-footer>
          </n-layout>
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<style>
#app {
  /* text-align: center; */
}
</style>
