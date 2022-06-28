<script setup>
// import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import { MenuOutlined } from '@vicons/antd'

const message = useMessage()
const handleBack = () => { message.info('[onBack]') }
</script>

<template>
  <n-page-header>
    <template #avatar>
      <a href="" style="text-decoration: none; color: inherit" class="floating">
        <span style="font-size: 3em;">
          💸
        </span>
      </a>
    </template>
    <template #header>
    </template>
    <template #title>
      <div class="noselect" data-sal="slide-left" data-sal-delay="300" data-sal-easing="ease-out-back" data-sal-duration="500">
        <span style="font-size: 1.5em; font-weight: 1000">
          fundin<span><n-text type="primary">Go</n-text></span>
        </span>
        <br>
        <span style="font-size: 0.8em; font-weight: 250;">
          Simplify how you get funding
        </span>
      </div>
    </template>
    <template #subtitle>
    </template>

    <template #extra>
      <n-button size="large">
        <template #icon>
          <n-icon :depth="2" :component="MenuOutlined"></n-icon>
        </template>
      </n-button>
    </template>
    <template #footer>
    </template>
  </n-page-header>
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

.floating {
    animation-name: floating;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}
@keyframes floating {
    0% { transform: translate(0,  -10px); }
    50%  { transform: translate(0, 0px); }
    100%   { transform: translate(0, -10px); }
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

</style>
