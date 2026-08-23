<template>
  <div class="develop-department-page">
    <LxDepartment 
      :id=6
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

// 设置开发部相关文字内容
const variableText = '开发部'
const bottomText = '开发部简介'
const bottomDescription = [
  '开发部是橙果工作室负责项目开发的部门，承担网络信息中心及学校的开发任务。',
  '开发部由橙果工作室各个小组、部门中有一定技术水平的成员组成，涵盖前端、后端、运维等各个技术点。部门中提供丰富的学习资料和生产资源，便于组员完成开发任务及进行自身发展。'
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
