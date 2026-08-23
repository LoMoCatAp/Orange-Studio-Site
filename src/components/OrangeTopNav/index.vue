<template>
  <header class="navbar">
    <div class="nav-container">
      <div class="nav-left" @click="goHome">
        <img :src="logo" alt="橙果工作室" class="logo" />
      </div>

      <nav class="nav-right" v-if="!isMobile">
        <a class="nav-item" @click="goHome">官网主页</a>

        <div class="nav-item dropdown" @mouseenter="openMenu('dept')" @mouseleave="scheduleMenuClose">
          <span @click="goToDepartments">工作部门</span>
          <div v-if="active === 'dept'" class="dropdown-menu" @click.stop>
            <div class="menu-item" @click="jump('/orange学习部')">
              <strong>学习部</strong>
              <p>指定学习计划 / 储备资源 / 培训基础 / 组织考核</p>
            </div>
            <div class="menu-item" @click="jump('/orange事务部')">
              <strong>事务部</strong>
              <p>社团管理 / 策划活动 / 整理记录 / 协助服务</p>
          
            </div>
            <div class="menu-item" @click="jump('/externalPropagandaDepartment')">
              <strong>外宣部</strong>
              <p>对外宣传 / 承办活动 / 外联商企 / 内联学校</p>
            </div>
            <div class="menu-item" @click="jump('/DevelopDepartment')">
              <strong>开发部</strong>
              <p>学习结合实践，增长项目经验</p>
            </div>
          </div>
        </div>

        <div class="nav-item dropdown" @mouseenter="openMenu('group')" @mouseleave="scheduleMenuClose">
          <span>学习小组</span>
          <div v-if="active === 'group'" class="dropdown-menu">
            <div class="menu-item" @click="jump('/full-stack')">
              <strong>全栈组</strong>
              <p>码出梦想，码出未来</p>
            </div>
            <div class="menu-item" @click="jump('/hardware')">
              <strong>硬件组</strong>
              <p>我们可不仅仅是修电脑的</p>
            </div>
            <div class="menu-item" @click="jump('/data')">
              <strong>大数据组</strong>
              <p>精于数据分析，提前洞察先机</p>
            </div>
            <div class="menu-item" @click="jump('/embedded')">
              <strong>嵌入式组</strong>
              <p>用芯编织代码，让幻想的羽翼在现实世界翱翔</p>
            </div>
            <div class="menu-item" @click="jump('/Orange 短视频')">
              <strong>短视频组</strong>
              <p>制作宣传视频 / 视觉传播 / 剪辑精彩</p>
            </div>
            <div class="menu-item" @click="jump('/Orange 开发')">
              <strong>开发组</strong>
              <p>学习结合实践，增长项目经验</p>
            </div>
          </div>
        </div>

        <div class="nav-item dropdown" @mouseenter="openMenu('base')" @mouseleave="scheduleMenuClose">
          <span>橙果基建</span>
          <div v-if="active === 'base'" class="dropdown-menu align-right">
            <div class="menu-item" @click="jump('/Register')">在线报名</div>
            <div class="menu-item" @click="jump('/student-query')">查询报名状态</div>
            <div class="menu-item" @click="jump('/infra/repair-book')">电脑义诊预约</div>
            <div class="menu-item" @click="jump('/phone-query')">电脑义诊查询</div>
            <div class="menu-item" @click="jump('http://oa.orangestudio.cn/login')">极橙大后台</div>
            <div class="menu-item" @click="jump('https://gitlab.orangestudio.cn/')">橙果 GitLab</div>
          </div>
        </div>
      </nav>

      <div class="hamburger" v-if="isMobile" @click="toggleMobile">
        <span></span><span></span><span></span>
      </div>

      <div class="mobile-menu" v-if="isMobile && mobileOpen">
        <div class="mobile-item" @click="goHome">官网主页</div>
        <div class="mobile-item" @click="toggle('dept')">工作部门</div>
        <div v-if="active === 'dept'" class="mobile-sub">
          <div @click="jump('/orange学习部')">学习部</div>
          <div @click="jump('/orange事务部')">事务部</div>
          <div @click="jump('/externalPropagandaDepartment')">外宣部</div>
          <div @click="jump('/DevelopDepartment')">开发部</div>
        </div>
        <div class="mobile-item" @click="toggle('group')">学习小组</div>
        <div v-if="active === 'group'" class="mobile-sub">
          <div @click="jump('/full-stack')">全栈组</div>
          <div @click="jump('/hardware')">硬件组</div>
          <div @click="jump('/data')">大数据组</div>
          <div @click="jump('/embedded')">嵌入式组</div>
          <div @click="jump('/Orange 短视频')">短视频组</div>
          <div @click="jump('/Orange 开发')">开发组</div>
        </div>
        <div class="mobile-item" @click="toggle('base')">橙果基建</div>
        <div v-if="active === 'base'" class="mobile-sub">
          <div @click="jump('/Register')">在线报名</div>
          <div @click="jump('/student-query')">查询报名状态</div>
          <div @click="jump('/infra/repair-book')">电脑义诊预约</div>
          <div @click="jump('/phone-query')">电脑义诊查询</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineOptions({ name: 'OrangeTopNav' })
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import logo from '@/assets/logo.png'

const active = ref('')
let menuLeaveTimer: ReturnType<typeof setTimeout> | null = null

function openMenu(key: string) {
  if (menuLeaveTimer) {
    clearTimeout(menuLeaveTimer)
    menuLeaveTimer = null
  }
  active.value = key
}

function scheduleMenuClose() {
  menuLeaveTimer = setTimeout(() => {
    active.value = ''
    menuLeaveTimer = null
  }, 120)
}
const isMobile = ref(false)
const mobileOpen = ref(false)

const toggle = (key: string) => {
  active.value = active.value === key ? '' : key
}

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value
  if (!mobileOpen.value) active.value = ''
}

import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const goHome = () => {
  active.value = ''
  mobileOpen.value = false
  
  if (route.path === '/') {
    // 如果已经在首页，滚动到顶部（hero 区域）
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else {
    // 如果不在首页，跳转到首页（覆盖当前界面）
    router.replace({ path: '/' }).then(() => {
      // 等待页面渲染完成后再滚动
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 100)
    }).catch((err) => {
      console.error('路由跳转失败:', err)
      // 如果跳转失败，使用 push 重试
      router.push('/')
    })
  }
}

const goToDepartments = () => {
  if (route.path === '/') {
    // 如果已经在首页，滚动到工作部门区域
    const element = document.getElementById('departments')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  } else {
    // 如果不在首页，跳转到首页并滚动到工作部门区域（覆盖当前界面）
    router.replace('/').then(() => {
      setTimeout(() => {
        const element = document.getElementById('departments')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    })
  }
  active.value = ''
  mobileOpen.value = false
}

const jump = (path: string) => {
  active.value = ''
  mobileOpen.value = false// 新增外部链接判断
  if (path.startsWith('http')) {
    window.open(path, '_blank')
    return
  }
  nextTick(() => {
    router.replace(path)
  })
}

const handleResize = () => {
  isMobile.value = window.innerWidth < 900
  if (!isMobile.value) {
    mobileOpen.value = false
    active.value = ''
  }
}

const handleClickOutside = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  if (target && !target.closest('.navbar')) {
    active.value = ''
    mobileOpen.value = false
  }
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  if (menuLeaveTimer) clearTimeout(menuLeaveTimer)
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 96px;
  background: linear-gradient(135deg, #FFA500 0%, #32CD32 100%);
  z-index: 999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.nav-container {
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
}

.nav-left {
  cursor: pointer;
}


.logo {
  height: 90px;
  cursor: pointer;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.nav-right {
  display: flex;
  gap: 40px;
  font-size: 16px;
  margin-left: auto;
}

.nav-item {
  position: relative;
  cursor: pointer;
  color: #ffffff;
  line-height: 96px;
  transition: color 0.15s ease, text-shadow 0.15s ease;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.nav-item:hover {
  color: #fff;
  text-shadow:
    0 0 8px rgba(255, 255, 255, 0.55),
    0 2px 4px rgba(0, 0, 0, 0.26);
}

.nav-item::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 18px;
  width: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 1px;
  transition: width 0.15s ease;
  box-shadow: 0 1px 3px rgba(255, 255, 255, 0.5);
}

.nav-item:hover::after {
  width: 100%;
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-background);
  color: var(--color-text);
  min-width: 300px;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  border: 1px solid var(--color-border);
  padding: 8px 0;
  z-index: 1000;
  animation: slideDown 0.16s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    translate: 0 -10px;
  }
  to {
    opacity: 1;
    translate: 0;
  }
}

.dropdown-menu.align-right {
  right: 0;
  left: auto;
  transform: none;
}

.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid var(--color-background);
}

.dropdown-menu.align-right::before {
  right: 32px;
  left: auto;
  transform: translateX(50%);
}

.dropdown-menu.align-right .menu-item {
  color: var(--color-heading);
  font-size: 15px;
  font-weight: 600;
}

.menu-item {
  padding: 12px 20px;
  line-height: 1.4;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, padding-left 0.15s ease;
  border-left: 3px solid transparent;
}

.menu-item:hover {
  background: linear-gradient(90deg, rgba(255, 165, 0, 0.1) 0%, rgba(50, 205, 50, 0.1) 100%);
  border-left-color: #FFA500;
  padding-left: 24px;
}

.menu-item strong {
  display: block;
  color: var(--color-heading);
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 4px;
}

.menu-item p {
  margin: 0;
  font-size: 12px;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.hamburger {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  cursor: pointer;
  padding: 0;
}

.hamburger span {
  width: 24px;
  height: 3px;
  background: #fff;
  border-radius: 2px;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.mobile-menu {
  position: fixed;
  top: 96px;
  left: 0;
  width: 100%;
  background: linear-gradient(135deg, #FFA500 0%, #32CD32 100%);
  color: #fff;
  padding: 12px 16px;
  z-index: 998;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  animation: slideDown 0.3s ease;
}

.mobile-item {
  min-height: 44px;
  display: flex;
  align-items: center;
  padding: 10px 0;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.2s ease;
}

.mobile-item:hover {
  padding-left: 8px;
  background: rgba(255, 255, 255, 0.1);
}

.mobile-sub {
  padding-left: 20px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  background: rgba(0, 0, 0, 0.1);
  animation: slideDown 0.2s ease;
}

.mobile-sub div {
  min-height: 44px;
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;
}

.mobile-sub div:hover {
  padding-left: 8px;
  color: #fff;
}

@media (max-width: 900px) {
  .nav-right {
    display: none;
  }
  
  .hamburger {
    display: flex;
  }
}

@media (max-width: 600px) {
  .navbar {
    height: 80px;
  }
  
  .logo {
    height: 32px;
  }
  
  .mobile-menu {
    top: 80px;
  }
}
</style>
