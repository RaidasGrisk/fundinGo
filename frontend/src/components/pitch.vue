<script setup>
</script>

<template>
  <n-el>
    <div data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease-out-back" data-sal-duration="500">
      <n-h1>
        <n-text type="primary">
          How will we help you?
        </n-text>
      </n-h1>
      <n-h3>
        <n-gradient-text :gradient="{ deg: 150, from: 'var(--primary-color)', to: 'var(--success-color)' }" >Here's what we offer:</n-gradient-text>
      </n-h3>
    </div>

    <n-steps v-model:current="current" :vertical="true" data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease-out-back" data-sal-duration="500">
      <n-step
        title="Single app for all funding sources"
        description="We go through all of them and collect it in one place"
      />
      <n-step
        title="Fill in the form and get notified"
        description="From now on, you will never miss a funding opportinity. Never!"
      />
      <n-step
        title="Interested in funding opportunity?"
        description="We're here to help and guide you from start to finish"
      />
      <n-step
        title="Get funded"
        description="💸"
      />
    </n-steps>

  </n-el>
</template>

<style scoped>
</style>
