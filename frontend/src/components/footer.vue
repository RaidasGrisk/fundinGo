<script setup>
import { LinkedinFilled, TwitterSquareFilled } from '@vicons/antd'
</script>

<template>
  <n-el>
  <n-h1 prefix="bar" type="success" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-out-back" data-sal-duration="500">
    <n-text type="info">
      <n-gradient-text :gradient="{ deg: 100, from: 'var(--success-color)', to: 'var(--primary-color)' }" >Contact us</n-gradient-text>
    </n-text>
    ❤️
  </n-h1>


<n-space data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease-out-back" data-sal-duration="500">
  <n-button size="large">
    <template #icon>
      <n-icon :component="LinkedinFilled"/>
    </template>
  </n-button>
  <n-button size="large">
    <template #icon>
      <n-icon :component="TwitterSquareFilled"/>
    </template>
  </n-button>
</n-space>

<n-divider />
<span style="font-size: 2em;">💸</span>
<span style="font-weight: 600"> fundin<span><n-text type="primary">Go</n-text></span></span>
<br>
</n-el>
</template>

<style scoped>
</style>
