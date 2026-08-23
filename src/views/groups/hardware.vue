<template>
    <div class="develop-department-page">
      <LxDepartment 
        :id=8
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
  
  const variableText = '硬件组'
  const bottomText = '硬件组简介'
  const bottomDescription = [
    '硬件组是一个氛围轻松的小组。在这里,你可以学习到各种基础的硬件知识,无论是简单的接网线、装机,还是复杂的路由器配置等,学长们会一步步带你上手。另外我们会关注科技圈的最新动态,不仅能让你自主选择合适的电脑和手机,还能亲自动手解决设备上的小问题。'  
 , '而如果你想更进一步,我们还会传授服务器和运维方面的专业知识,打开硬件的大门。欢迎有相同兴趣的小伙伴加入我们这个热烈的大家庭。让我们相互讨论和学习,在这个充满可能的组织里成长'
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
