<!-- 可复用查询表单：输入框 + 按钮，可选校验与 loading 状态。 -->
<template>
  <div class="query-form">
    <div class="query-box">
      <input
        v-model="inputValue"
        class="query-input"
        :type="inputType"
        :inputmode="inputMode"
        :placeholder="placeholder"
        @keyup.enter="onSubmit"
      />
      <button class="query-btn" :disabled="loading" @click="onSubmit">
        {{ loading ? '查询中…' : buttonText }}
      </button>
    </div>
    <p v-if="error" class="error-msg">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

defineOptions({ name: 'QueryForm' })

const props = defineProps({
  placeholder: {
    type: String,
    default: '请输入查询内容',
  },
  buttonText: {
    type: String,
    default: '查询',
  },
  inputType: {
    type: String,
    default: 'text',
  },
  inputMode: {
    type: String,
    default: 'text',
  },
  validateFn: {
    type: Function,
    default: null,
  },
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue', 'submit'])

const inputValue = ref(props.modelValue)
const loading = ref(false)
const error = ref('')

watch(inputValue, (val) => {
  emit('update:modelValue', val)
  error.value = ''
})

watch(
  () => props.modelValue,
  (val) => {
    inputValue.value = val
  },
)

async function onSubmit() {
  error.value = ''
  const val = inputValue.value.trim()

  if (!val) {
    error.value = '请输入内容'
    return
  }

  if (props.validateFn) {
    const validationError = props.validateFn(val)
    if (validationError) {
      error.value = validationError
      return
    }
  }

  loading.value = true
  try {
    await emit('submit', val)
  } catch {
    error.value = '查询失败，请稍后重试'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.query-form {
  width: 100%;
}
.query-box {
  display: flex;
  align-items: center;
  gap: 12px;
}
.query-input {
  width: 220px;
  height: 36px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid var(--color-input-border);
  background: var(--color-input);
  color: var(--color-text);
  font-size: 14px;
  outline: none;
  transition: border 0.2s ease;
}
.query-input:focus {
  border: 2px solid #2563eb;
}
.query-btn {
  height: 36px;
  padding: 0 18px;
  border-radius: 8px;
  border: 1px solid var(--color-input-border);
  background: var(--color-surface-raised);
  color: var(--color-text);
  cursor: pointer;
  font-size: 14px;
}
.query-btn:hover {
  background: var(--color-surface-muted);
}
.query-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.error-msg {
  margin-top: 10px;
  font-size: 14px;
  color: #ef4444;
}

@media (max-width: 768px) {
  .query-box {
    flex-direction: column;
    align-items: flex-start;
  }
  .query-input {
    width: 100%;
  }
  .query-btn {
    width: auto;
    align-self: flex-start;
    margin-top: 8px;
  }
}
</style>
