<!-- 可复用进度步骤：横/竖自适应，悬停带阴影提升。 -->
<template>
  <div class="progress-steps">
    <div class="steps-container">
      <div class="steps">
        <div v-for="(step, index) in steps" :key="index" :class="['step', { active: step.active }]">
          <span class="circle">{{ index + 1 }}</span>
          <div class="info">
            <div class="title">{{ step.title }}</div>
            <div class="desc">{{ step.desc }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({ name: 'ProgressSteps' })

defineProps({
  steps: {
    type: Array,
    required: true,
    default: () => [],
  },
})
</script>

<style scoped>
.progress-steps {
  margin-top: 16px;
}
.steps-container {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 55px 20px;
  min-height: 180px; /* 强制统一高度 */
  background: var(--color-surface);
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 2px 8px var(--color-card-shadow);
  transition:
    box-shadow 0.2s ease,
    border-color 0.2s ease,
    transform 0.08s ease;
}
.steps-container:hover {
  box-shadow: 0 8px 24px var(--color-card-shadow);
  border-color: var(--color-border-hover);
  transform: translateY(-2px);
}
.steps {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  margin: 0 auto;
}
.steps::before {
  content: '';
  position: absolute;
  top: 14px;
  left: 30px;
  right: 30px;
  height: 1px;
  background: var(--color-border);
  z-index: 1;
}
.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--color-text-secondary);
  position: relative;
  z-index: 2;
  text-align: center;
}
.step.active {
  color: #2563eb;
}
.circle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  margin-bottom: 4px;
}
.step.active .circle {
  background: #2563eb;
  color: #fff;
}
.info .title {
  font-size: 14px;
  text-align: center;
}
.info .desc {
  font-size: 12px;
  text-align: center;
}

@media (max-width: 768px) {
  .steps {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  .steps::before {
    content: '';
    position: absolute;
    top: 14px;
    bottom: 14px;
    left: 14px;
    width: 1px;
    height: auto;
    background: var(--color-border);
    z-index: 1;
  }
  .step {
    flex-direction: row;
    align-items: center;
    text-align: left;
    width: 100%;
    gap: 12px;
  }
  .circle {
    flex: 0 0 28px;
    min-width: 28px;
    min-height: 28px;
  }
  .info .title,
  .info .desc {
    text-align: left;
  }
}

@media (max-width: 480px) {
  .steps-container {
    padding: 40px;
  }
}
</style>
