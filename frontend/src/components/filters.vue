<script setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'

const formRef = ref(null)
const message = useMessage()

const size = ref('medium')
const model = ref({
  inputValue: null,
  textareaValue: null,
  selectValue: null,
  multipleSelectValue: null,
  datetimeValue: null,
  nestedValue: {
    path1: null,
    path2: null
  },
  switchValue: false,
  checkboxGroupValue: null,
  radioGroupValue: null,
  radioButtonGroupValue: null,
  inputNumberValue: null,
  timePickerValue: null,
  sliderValue: 0,
  transferValue: null
})


const generalOptions = ['groode', 'veli good', 'emazing', 'lidiculous'].map((v) => ({ label: v, value: v }))
const rules = {
  inputValue: {
    required: true,
    trigger: ['blur', 'input'],
    message: 'Please input inputValue'
  },
  textareaValue: {
    required: true,
    trigger: ['blur', 'input'],
    message: 'Please input textareaValue'
  },
  selectValue: {
    required: true,
    trigger: ['blur', 'change'],
    message: 'Please select selectValue'
  },
  multipleSelectValue: {
    type: 'array',
    required: true,
    trigger: ['blur', 'change'],
    message: 'Please select multipleSelectValue'
  },
  datetimeValue: {
    type: 'number',
    required: true,
    trigger: ['blur', 'change'],
    message: 'Please input datetimeValue'
  },
  nestedValue: {
    path1: {
      required: true,
      trigger: ['blur', 'input'],
      message: 'Please input nestedValue.path1'
    },
    path2: {
      required: true,
      trigger: ['blur', 'change'],
      message: 'Please input nestedValue.path2'
    }
  },
  checkboxGroupValue: {
    type: 'array',
    required: true,
    trigger: 'change',
    message: 'Please select checkboxGroupValue'
  },
  radioGroupValue: {
    required: true,
    trigger: 'change',
    message: 'Please select radioGroupValue'
  },
  radioButtonGroupValue: {
    required: true,
    trigger: 'change',
    message: 'Please select radioButtonGroupValue'
  },
  inputNumberValue: {
    type: 'number',
    required: true,
    trigger: ['blur', 'change'],
    message: 'Please input inputNumberValue'
  },
  timePickerValue: {
    type: 'number',
    required: true,
    trigger: ['blur', 'change'],
    message: 'Please input timePickerValue'
  },
  sliderValue: {
    validator (rule, value) {
      return value > 50
    },
    trigger: ['blur', 'change'],
    message: 'sliderValue should be larger tha 50'
  },
  transferValue: {
    type: 'array',
    required: true,
    trigger: 'change',
    message: 'Please input transferValue'
  }
}

</script>

<template>
  <n-el>
    <br>
    <n-space :size="[200, 0]">
      <div>
        <n-h1 data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease-out-back" data-sal-duration="500">
          <n-text type="primary">
            Try it out!
          </n-text>
        </n-h1>
        <n-h3 data-sal="slide-up" data-sal-delay="700" data-sal-easing="ease-out-back" data-sal-duration="500">
          Fill in your info and look through the funding you want.
        </n-h3>
        <n-h1 data-sal="slide-up" data-sal-delay="1000" data-sal-easing="ease-out-back" data-sal-duration="500">
          🚀
        </n-h1>
      </div>

      <div>
        <!-- <n-radio-group
          v-model:value="size"
        >
          <n-radio-button value="small">
            Small
          </n-radio-button>
          <n-radio-button value="medium">
            Medium
          </n-radio-button>
          <n-radio-button value="large">
            Large
          </n-radio-button>
        </n-radio-group> -->
        <n-form
          ref="formRef"
          :model="model"
          :rules="rules"
          label-placement="top"
          require-mark-placement="left-hanging"
          :size="size"
          label-width="auto"
          :style="{
            maxWidth: '640px'
          }"
        >
          <n-form-item label="Input" path="inputValue">
            <n-input v-model:value="model.inputValue" placeholder="Input" />
          </n-form-item>
          <!-- <n-form-item label="Textarea" path="textareaValue">
            <n-input
              v-model:value="model.textareaValue"
              placeholder="Textarea"
              type="textarea"
              :autosize="{
                minRows: 3,
                maxRows: 5
              }"
            />
          </n-form-item> -->
          <!-- <n-form-item label="Select" path="selectValue">
            <n-select
              v-model:value="model.selectValue"
              placeholder="Select"
              :options="generalOptions"
            />
          </n-form-item> -->
          <n-form-item label="Multiple Select" path="multipleSelectValue">
            <n-select
              v-model:value="model.multipleSelectValue"
              placeholder="Select"
              :options="generalOptions"
              multiple
            />
          </n-form-item>
          <n-form-item label="Date" path="datetimeValue">
            <n-date-picker v-model:value="model.datetimeValue" type="date" />
          </n-form-item>
          <n-form-item label="Switch" path="switchValue">
            <n-switch v-model:value="model.switchValue" />
          </n-form-item>
          <n-form-item label="Checkbox Group" path="checkboxGroupValue">
            <n-checkbox-group v-model:value="model.checkboxGroupValue">
              <n-space>
                <n-checkbox value="Option 1">
                  Option 1
                </n-checkbox>
                <n-checkbox value="Option 2">
                  Option 2
                </n-checkbox>
                <n-checkbox value="Option 3">
                  Option 3
                </n-checkbox>
              </n-space>
            </n-checkbox-group>
          </n-form-item>
          <n-form-item label="Radio Group" path="radioGroupValue">
            <n-radio-group v-model:value="model.radioGroupValue" name="radiogroup1">
              <n-space>
                <n-radio value="Radio 1">
                  Radio 1
                </n-radio>
                <n-radio value="Radio 2">
                  Radio 2
                </n-radio>
                <n-radio value="Radio 3">
                  Radio 3
                </n-radio>
              </n-space>
            </n-radio-group>
          </n-form-item>
          <!-- <n-form-item label="Radio Button Group" path="radioGroupValue">
            <n-radio-group v-model:value="model.radioGroupValue" name="radiogroup2">
              <n-radio-button value="Radio 1">
                Radio 1
              </n-radio-button>
              <n-radio-button value="Radio 2">
                Radio 2
              </n-radio-button>
              <n-radio-button value="Radio 3">
                Radio 3
              </n-radio-button>
            </n-radio-group>
          </n-form-item> -->
          <!-- <n-form-item label="Input Number" path="inputNumberValue">
            <n-input-number v-model:value="model.inputNumberValue" />
          </n-form-item> -->
          <!-- <n-form-item label="Time Picker" path="timePickerValue">
            <n-time-picker v-model:value="model.timePickerValue" />
          </n-form-item> -->
          <n-form-item label="Slider" path="sliderValue">
            <n-slider v-model:value="model.sliderValue" :step="5" />
          </n-form-item>
          <n-form-item label="Transfer" path="transferValue">
            <n-transfer
              v-model:value="model.transferValue"
              :options="generalOptions"
            />
          </n-form-item>
          <n-form-item label="Nested Path" :show-feedback="false">
            <n-grid :cols="2" :x-gap="24">
              <n-form-item-gi path="nestedValue.path1">
                <n-input
                  v-model:value="model.nestedValue.path1"
                  placeholder="Nested Path 1"
                />
              </n-form-item-gi>
              <n-form-item-gi path="nestedValue.path2">
                <n-select
                  v-model:value="model.nestedValue.path2"
                  placeholder="Nested Path 2"
                  :options="generalOptions"
                />
              </n-form-item-gi>
            </n-grid>
          </n-form-item>
          <div>
            <n-button strong size="large" type="primary">
              <template #icon>
                🚀
              </template>
              Filter
            </n-button>
          </div>
        </n-form>

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
