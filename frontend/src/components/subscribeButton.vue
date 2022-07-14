<script setup>
import { useMessage, useLoadingBar } from 'naive-ui'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const message = useMessage()
const loadingBar = useLoadingBar()

const button = ref()
const showModal = ref(false)
const email = ref('')
const isLoading = ref(false)

const subscribeClick = async () => {
  isLoading.value = true
  loadingBar.start()
  console.log(email.value)
  await axios({
    method: 'post',
    url: 'https://fundingo-backend.vercel.app/subscribe',
    data: {
      email: email.value, // This is the body part
    }
  }).then((res) => {
    console.log('success')
    message.success('Thank you for subscribing! 🤗')
    message.success('We will contact you when the product is ready.', { duration: 8000 })
    isLoading.value = false
    loadingBar.finish()
    showModal.value = false
  })
  .catch((error) => {
    console.log(error)
    message.error(error.response.data)
    isLoading.value = false
    loadingBar.error()
  })
}

// button waving
const sleep = m => new Promise(r => setTimeout(r, m))

const buttonWave = async () => {
  for (let i = 0; i < 10000; i++) {
    await sleep(1000)
    button.value.waveElRef.play()
    await sleep(500)
    button.value.waveElRef.play()
  }
}

onMounted(() => {
  loadingBar.loadingBarRef.value.cssVars['--n-height'] = "5px"
  buttonWave()
})


</script>

<template>
  <div data-sal="slide-up" data-sal-delay="1000" data-sal-easing="ease-out-back" data-sal-duration="1000">
    <n-button type="primary" size="large" style="--n-text-color: #222222; --n-height: 60px; --n-border:2px solid #0CCE6B; --n-border-radius:4px;" ref="button" strong @click="showModal = true">
      📝 Subscribe
    </n-button>
  </div>
  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      title="Subscribe for newsletter"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        <div style="font-size: 25px">📝</div>
      </template>
      We'll notify you once the services are ready
      <br><br>
      <n-input-group>
        <n-button type="primary" size="large" style="--n-text-color: #222222; margin-right: 1px;" @click="subscribeClick" :loading="isLoading">
          Subscribe
        </n-button>
        <n-input :style="{ width: '25vh' }" placeholder="your email" v-model:value="email"/>
      </n-input-group>
      <template #footer>
        <!-- Footer -->
      </template>
    </n-card>
  </n-modal>
</template>

<style scoped>
</style>
