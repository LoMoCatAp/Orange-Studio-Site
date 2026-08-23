<template>
  <div class="develop-department-page">
    <LxDepartment 
      :id=10
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

const variableText = '嵌入式组'
const bottomText = '嵌入式组简介'
const bottomDescription = [
  '嵌入式组是橙果工作室负责嵌入式开发的部门，承担网络信息中心及学校的嵌入式开发任务。嵌入式学习使用单片机和操作系统来开发和实现实际的硬件驱动和设备控制',
  '通过学习，你可以造手机、造电脑、造机器人、让万物互联，远程控制机器，打造属于你自己的智能家居系统，让生活更加舒适。'
]

// 图片路径
const logoImage = new URL('@/assets/logo4-DX7cGJ5Y.png', import.meta.url).href
const variableImage = new URL('@/assets/program.jpg', import.meta.url).href
</script>

<style scoped>
.develop-department-page {
  width: 100%;
  min-height: 100vh;
}
</style>
