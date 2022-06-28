<script setup>

// vue
import { onMounted } from 'vue'

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
import Filters from './components/filters.vue'
import Footer from './components/footer.vue'

onMounted(() => {
  sal({ threshold: 0.01, once: true, disabled: false })
})

// set colors
const theme = lightTheme
theme.common.primaryColor = '#0CCE6B' // 0CCE6B 0CCE6B
theme.common.primaryColorHover = '#0CCE6B'
theme.common.successColor = '#00B2CA' // F7E733 00B2CA
theme.common.warningColor = '#F7F7F9'
theme.common.infoColor = '#000000'

</script>

<template>

  <n-config-provider :theme="theme">
    <n-loading-bar-provider>
      <n-message-provider placement="top-right">
        <n-notification-provider>
          <n-layout>
            <n-layout-header class="pt-4 pb-4 pr-16 pl-16" bordered>
              <Header />
            </n-layout-header>
            <n-layout-content >
              <n-layout bordered>
                <n-thing class="pt-32 pb-32 pr-32 pl-32">
                  <Banner />
                </n-thing>
              </n-layout>
              <n-divider />
              <n-thing class="pt-32 pb-32 pr-32 pl-32">
                <Pitch />
              </n-thing>
              <n-thing class="pt-4 pb-4 pr-32 pl-32">
                <Filters />
              </n-thing>
            </n-layout-content>
            <n-layout-footer bordered>
              <n-thing class="pt-16 pb-16 pr-32 pl-32">
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
