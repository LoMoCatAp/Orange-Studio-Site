<!-- 页面：手机号查询流程，使用 QueryForm + ProgressSteps；无说明卡片。 -->
<template>
  <main class="page">
    <section class="query-row">
      <div class="content">
        <QueryForm
          v-model="phoneNumber"
          placeholder="请输入你的手机号"
          button-text="查询"
          input-type="tel"
          input-mode="tel"
          :validate-fn="validatePhone"
          @submit="handleQuery"
        />
      </div>
    </section>

    <section class="step-row">
      <div class="content center-content wide-section">
        <ProgressSteps :steps="steps" />
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import QueryForm from '@/components/QueryForm/QueryForm.vue'
import ProgressSteps from '@/components/ProgressSteps/ProgressSteps.vue'
import { getAppointmentProcess } from '@/api/appointment'
import { ElMessage } from 'element-plus'

const phoneNumber = ref('')

const steps = ref([
  {
    title: '尚未预约，去填写预约工单',
    active: true,
  },
  {
    title: '预约成功，等待分配维修人',
    active: false,
  },
  {
    title: '维修中，请耐心等待',
    active: false,
  },
  {
    title: '维修完成，请现场确认维修结果',
    active: false,
  },
  {
    title: '维修完成，电脑确认正常',
    active: false,
  },
])

function validatePhone(value) {
  if (!/^1[3-9]\d{9}$/.test(value)) {
    return '请输入有效的手机号（11位数字）'
  }
  return null
}

async function handleQuery(value) {
  console.log('查询手机号：', value)
  try {
    const res = await getAppointmentProcess(value)
    if (res.code === 200) {
      // 假设 res.data 返回当前进度 index (0-4)
      const currentProcess = res.data.process || 0
      steps.value.forEach((step, index) => {
        step.active = index === currentProcess
      })
      ElMessage.success('查询成功')
    }
  } catch (error) {
    console.error('查询失败：', error)
  }
}
</script>

<style scoped>
.page {
  padding-top: 96px;
  min-height: 100vh;
  background: var(--color-background);
  color: var(--color-text);
}

.query-row {
  width: 100%;
  background: var(--color-surface);
  padding: 16px 0;
}

.content {
  padding: 0 16px;
  box-sizing: border-box;
}

.query-row .content {
  max-width: 2000px;
  margin: 0 auto;
}

.center-content.wide-section {
  max-width: 2000px;
  margin: 0 auto;
  width: 100%;
}

@media (max-width: 480px) {
  .content {
    padding: 0 12px;
  }
}
</style>
