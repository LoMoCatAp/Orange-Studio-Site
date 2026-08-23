<template>
  <div class="external-propaganda-page">
    <LxDepartment
      :id=4
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
const variableText = '外宣部'
const bottomText = '外宣部简介'
const bottomDescription = [
  '外宣部是橙果学生组织中负责外部宣传和沟通的重要部门。分为外联和宣传两个板块，宣传方向主要职责包括宣传策划、媒体传播、社交媒体管理、宣传物料制作、摄影摄像；外联方向是主要致力于与校外企业和公司建立合作关系，争取赞助支持，同时加强与其他学校的合作与联络。',
  '加入外宣部将为您提供丰富多样的学习和锻炼机会，包括参与宣传活动的策划和执行、学习宣传策略和技巧、积累宝贵的宣传和传媒经验。无论您对宣传、设计、摄影、媒体传播还是社交媒体运营以及与相关团体灵活沟通感兴趣，我们都欢迎您的加入，共同为橙果的发展做出贡献。'
]

// 图片路径
const logoImage = new URL('@/assets/logo4-DX7cGJ5Y.png', import.meta.url).href
const variableImage = new URL('@/assets/externalPropagandaDepartment.jpg', import.meta.url).href
</script>

<style scoped>
.external-propaganda-page {
  width: 100%;
  min-height: 100vh;
}
</style>
