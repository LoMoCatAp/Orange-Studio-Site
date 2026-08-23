<template>
  <div class="develop-department-page">
    <LxDepartment 
      :id=5
      :variable-text="variableText"
      :bottom-text="bottomText"
      :bottom-description="bottomDescription"
      :logo-image="logoImage"
      :variable-image="variableImage"
    />
  </div>
</template>

<script setup lang="ts">

import LxDepartment from '@/components/LxDepartment'

const variableText = '短视频组'
const bottomText = '短视频组简介'
const bottomDescription = [
  '一起做短视频！'
]

// 图片路径
const logoImage = new URL('@/assets/logo4-DX7cGJ5Y.png', import.meta.url).href
const variableImage = new URL('@/assets/xxb.jpg', import.meta.url).href
</script>

<style scoped>
.develop-department-page {
  width: 100%;
  min-height: 100vh;
}
</style>
