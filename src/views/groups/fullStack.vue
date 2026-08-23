<template>
    <div class="develop-department-page">
      <LxDepartment 
        :id=7
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
  
  const variableText = '全栈组'
  const bottomText = '全栈组简介'
  const bottomDescription = [
    '全栈组是一个氛围轻松的小组。在这里,你可以学习到各种基础的编程知识,无论是简单的静态页面,还是复杂小游戏等,学长们会一步步带你上手。另外我们会关注科技与编码生态的最新动态,尽量做到步伐紧跟市场,眼光长于市场。'  
 , '如果你想更进一步的学习,在这里成员们不仅能够提升技术水平，还能通过组织的各种活动分享知识、结交志同道合的朋友。无论你是初学者还是有一定基础，我们都欢迎你的加入，共同探索代码的世界'
  ]
  
  // 图片路径
  const logoImage = new URL('@/assets/logo4-DX7cGJ5Y.png', import.meta.url).href
  const variableImage = new URL('@/assets/hardware.jpg', import.meta.url).href
  </script>
  
  <style scoped>
  .develop-department-page {
    width: 100%;
    min-height: 100vh;
  }
  </style>
