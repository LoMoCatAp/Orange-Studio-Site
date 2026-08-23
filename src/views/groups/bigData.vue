<template>
    <div class="external-propaganda-page">
      <LxDepartment 
        :id=9
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
  
  // 设置外宣部相关文字内容
  const variableText = '大数据组'
  const bottomText = '大数据组简介'
  const bottomDescription = [
    '大数据组欢迎对大数据感兴趣、想学习数据分析和数据抓取的同学加入我们！我们致力于收集、处理和分析大量数据，以获取有用的信息和洞察力。大数据技术的发展为我们提供了许多有趣且具有挑战性的职业机会。',
                
               
    ' 在大数据组中，我们将共同努力学习和探讨如何处理和分析大数据，为未来的持续发展奠定坚实的基础 欢迎加入我们，一起探索大数据世界！'
  ]
  
  // 图片路径
  const logoImage = new URL('@/assets/logo4-DX7cGJ5Y.png', import.meta.url).href
  const variableImage = new URL('@/assets/bigdata.jpg', import.meta.url).href
  </script>
  
  <style scoped>
  .external-propaganda-page {
    width: 100%;
    min-height: 100vh;
  }
  </style>
