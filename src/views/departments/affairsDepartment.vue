<template>
  <div class="develop-department-page">
    <LxDepartment 
      :id=3
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

const variableText = '事务部'
const bottomText = '事务部简介'
const bottomDescription = [
  '事务部是一个非常重要的部门，其职责涵盖了各个方面，包括活动记录、人事管理和财务管理等。这些职责使得事务部成为了组织中的核心力量，对于保证组织的顺利运转和决策的准确性起到了至关重要的作用。中提供丰富的学习资料和生产资源，便于组员完成开发任务及进行自身发展',
  '同时，事务部还要负责沟通和协调各个部门，确保信息的及时传递和工作的顺利协调。这样的职责使得事务部成为了工作室的参谋和副手，为组织的决策和发展提供了重要的支持和帮助。'
]

// 图片路径
const logoImage = new URL('@/assets/logo4-DX7cGJ5Y.png', import.meta.url).href
const variableImage = new URL('@/assets/affairsdepartment.jpg', import.meta.url).href
</script>

<style scoped>
.develop-department-page {
  width: 100%;
  min-height: 100vh;
}
</style>
