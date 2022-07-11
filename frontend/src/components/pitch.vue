<script setup>
import { ref, onMounted, watch } from 'vue'
import { CrownOutlined, ExceptionOutlined, SmileOutlined, RocketFilled } from '@vicons/antd'

// https://stackoverflow.com/questions/57280413/how-to-trigger-function-on-viewport-visible-with-vue-viewport-plugin

// steps
// const currentStatus = ref("process")
// const current = ref(1)
// const sleep = (ms) => {
//   return new Promise(resolve => setTimeout(resolve, ms))
// }

// trigger animation
// const offsetTop = ref(0)
// const isElementInViewport = (el) => {
//   var rect = el.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   )
// },
//
// watch(offsetTop, (currentValue, oldValue) => {
//   moveThroughSteps()
// });
//
// const moveThroughSteps = async () => {
//   current.value = 1
//   currentStatus.value = 'process'
//   await sleep(2000)
//   console.log('A')
//   current.value = 2
//   currentStatus.value = 'process'
//   await sleep(2000)
//   console.log('A')
//   current.value = 3
//   currentStatus.value = 'process'
//   await sleep(2000)
//   console.log('A')
//   current.value = 4
//   currentStatus.value = 'process'
//   await sleep(2000)
//   console.log('A')
//   current.value = undefined
// }
//
// onMounted(() => {
//   moveThroughSteps()
// })

</script>

<template>
  <n-el>

    <n-card
      :segmented="{
        content: true,
        footer: 'soft'
      }"
      style="max-width: 70vh;"
      hoverable
    >
      <n-space justify="space-between" horizontal>
        <div data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease-out-back" data-sal-duration="500">
          <n-h1>
            <n-text type="primary">
              <n-gradient-text :gradient="{ deg: 150, from: 'var(--primary-color)', to: 'var(--success-color)' }" >How will we help you?</n-gradient-text>

            </n-text>
          </n-h1>
        </div>
        <div data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease-out-back" data-sal-duration="500">
          <n-h1>
            🤔
          </n-h1>
        </div>
      </n-space>
      <n-divider style="margin-top: 10px;"/>

      <div data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease-out-back" data-sal-duration="500">
        <n-h2>
          Here's what we offer:
        </n-h2>
      </div>

      <!-- :current="current"
      :status="currentStatus" -->
      <n-steps
        :vertical="true"
        data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease-out-back" data-sal-duration="500"
      >
        <n-step
          title="Single app for all funding sources"
          description="We go through all of them and collect it in one place"
          status="process"
        >
        <template #icon>
          <n-icon :component="CrownOutlined"/>
        </template>
      </n-step>
        <n-step
          title="Fill-in basic info about your company"
          description="From now on, you will never miss a funding opportinity. We'll notify you the moment it arrives"
        >
          <template #icon>
            <n-icon :component="ExceptionOutlined"/>
          </template>
        </n-step>
        <n-step
          title="Interested in funding opportunity?"
          description="We're here to help and guide you from start to finish"
        >
          <template #icon>
            <n-icon :component="SmileOutlined"/>
          </template>
        </n-step>
        <n-step
          title="Get funded"
          description="🚀"
        >
          <template #icon>
            <n-icon :component="RocketFilled"/>
          </template>
        </n-step>
      </n-steps>

      <!-- <template #footer>
        #footer
      </template> -->
      <template #action>
        <n-divider style="margin-top: -20px;"/>
        <n-input-group>
          <n-button type="primary" size="large" style="--n-text-color: #222222; margin-right: 1px;">
            Subscribe
          </n-button>
          <n-input :style="{ width: '25vh' }" placeholder="your email"/>
        </n-input-group>
      </template>
    </n-card>

  </n-el>
</template>

<style scoped>
</style>
