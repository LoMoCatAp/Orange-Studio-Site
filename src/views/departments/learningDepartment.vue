<template>
  <div class="develop-department-page">
      <LxDepartment 
      :id=2
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
import { getWebsiteDate } from '@/api/content'
import { ref } from 'vue'

const variableText = '学习部'
const bottomText = '学习部简介'
const bottomDescription = [
  '学习部是橙果工作室负责学习相关事务的核心部门。在这个部门中，我们管理丰富多样的学习资源，同时也策划并推动各类学习活动。我们的使命还包括监督工作室成员的学习进展，确保他们能够高效地管理自己的学习。',
  '在学习部，我们致力于营造一个积极的学习氛围，激发成员的学习热情。通过不断创新和改进，我们努力推动工作室成员在各自领域的不断成长和进步。'
]

// 图片路径
const logoImage = new URL('@/assets/logo4-DX7cGJ5Y.png', import.meta.url).href
const variableImage = new URL('@/assets/xxb.jpg', import.meta.url).href

let da = ref();
const getAllData = async () => {
  const data = (await getWebsiteDate(2)).data;
  da.value = data;
}
getAllData();

</script>

<style scoped>
.develop-department-page {
  width: 100%;
  min-height: 100vh;
}
</style>
