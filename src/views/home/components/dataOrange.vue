<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import ali from '@/assets/company/alibaba-logo.svg';
import aliZh from '@/assets/company/alibaba-zh-logo.svg';
import chaosuan from '@/assets/company/chaosuan-icon.svg';
import beikuang from '@/assets/company/beikuang-logo.png';
import xiaomi from '@/assets/company/xiaomi.png';
import jingdong from '@/assets/company/jingdong-logo.svg';
import zijie from '@/assets/company/zijie-logo.svg';

const dataOrangeRoot = ref<HTMLElement | null>(null)
let logoRevealObserver: IntersectionObserver | undefined

onMounted(() => {
  const revealItems = dataOrangeRoot.value?.querySelectorAll<HTMLElement>(
    '.data-stat-reveal, .company-reveal',
  ) ?? []
  const reveal = (element: HTMLElement) => element.classList.add('is-visible')

  if ('IntersectionObserver' in window) {
    logoRevealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement)
            logoRevealObserver?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )
    revealItems.forEach((item) => logoRevealObserver?.observe(item))
  } else {
    revealItems.forEach(reveal)
  }
})

onUnmounted(() => logoRevealObserver?.disconnect())
</script>

<template>
  <div ref="dataOrangeRoot" class="data-orange flex flex-row flex-wrap">
    <div class="px-16 max-w-[720px] md:max-w-[1140px] mx-[auto]">
      <div class="mt-[2rem] mb-10">
        <!-- <div class="flex justify-center text-4xl">
          <h2 class="border-b-2 border-black p-6">数据橙果</h2>
        </div> -->
      </div>
      <div class="flex flex-col item-center space-y-4 space-x-0 mb-16 nr:flex-row nr:space-y-0 nr:justify-around nr:space-x-4">
        <div class="data-stat-reveal nr:w-[33%] text-center">
          <h1 class="text-4xl font-bold mb-2 text-blue-500">600+</h1>
          <p class="text-base mb-2">往届与当届橙果工作室成员总数</p>
          <p class="data-detail text-sm">橙果工作室自2015年起在学校网络信息中心成立, 经过数年的发展, 至今已经有总约400余名工作室成员。</p>
        </div>
        <div class="data-stat-reveal nr:w-[33%] text-center">
          <h1 class="text-4xl font-bold mb-2 text-orange-500">20+</h1>
          <p class="text-base mb-2">认可工作室成员的企事业单位</p>
          <p class="data-detail text-sm">我们的优秀成员得到了多家知名企业的认可, 如字节跳动, 阿里巴巴, 水滴筹, 浪潮集团等。</p>
        </div>
        <div class="data-stat-reveal nr:w-[33%] text-center">
          <h1 class="text-4xl font-bold mb-2 text-green-500">45+</h1>
          <p class="text-base mb-2">工作室成员服务过的校院系部门</p>
          <p class="data-detail text-sm">工作室的服务面向全校师生, 我们已为校内众多院系部门负责过计算机安装维修, 官网更新维护等工作。</p>
        </div>
      </div>
      <div class="flex flex-col items-center space-y-4 space-x-0 mb-16 nr:flex-row nr:space-y-0 nr:justify-around nr:space-x-4">
        <div class="company-logo-slot company-reveal nr:w-[50%] mb-8 nr:mb-0">
          <div class="alibaba-brand" role="img" aria-label="阿里巴巴">
            <img class="alibaba-brand-en" :src="ali" alt="">
            <img class="alibaba-brand-zh" :src="aliZh" alt="">
          </div>
        </div>
        <div class="company-logo-slot company-reveal nr:w-[50%]">
          <div class="chaosuan-brand" role="img" aria-label="济南超级计算技术研究院">
            <span
              class="chaosuan-brand-icon"
              :style="{ '--chaosuan-icon': `url(${chaosuan})` }"
              aria-hidden="true"
            ></span>
            <span class="chaosuan-brand-text">
              <strong>济南超级计算技术研究院</strong>
              <small>JINAN INSTITUTE OF SUPERCOMPUTING TECHNOLOGY</small>
            </span>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center space-y-4 space-x-0 mb-16 nr:flex-row nr:space-y-0 nr:justify-around nr:space-x-4">
        <div class="company-logo-slot company-reveal nr:w-[50%]">
          <div class="beikuang-brand" role="img" aria-label="北矿智云科技（北京）有限公司">
            <img class="beikuang-brand-icon" :src="beikuang" alt="" aria-hidden="true">
            <span class="beikuang-brand-text">
              <strong>北矿智云科技（北京）有限公司</strong>
              <small>BGRIMM Smart &amp; Cloud Technology (Beijing) LTD. Co.</small>
            </span>
          </div>
        </div>
        <div class="company-logo-slot company-reveal nr:w-[50%]">
          <img class="company-logo" :src="xiaomi" alt="小米">
        </div>
      </div>
      <div class="flex flex-col items-center space-y-4 space-x-0 nr:flex-row nr:space-y-0 nr:justify-around nr:space-x-4">
        <div class="company-logo-slot company-reveal nr:w-[50%]">
          <img class="company-logo company-logo-compact company-logo-jingdong" :src="jingdong" alt="京东">
        </div>
        <div class="company-logo-slot company-reveal nr:w-[50%]">
          <img class="company-logo company-logo-compact" :src="zijie" alt="字节跳动">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.data-orange {
  width: 100%;
  color: var(--color-heading);
  background: var(--color-background);
}

.data-orange > div {
  flex: 0 1 100%;
  width: 100%;
}

.data-detail {
  color: var(--color-text-secondary);
}

.data-stat-reveal {
  opacity: 0;
  transform: translate3d(0, 28px, 0);
  will-change: opacity, transform;
}

.data-stat-reveal.is-visible {
  animation: dataStatReveal 880ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.data-stat-reveal:nth-child(2) {
  animation-delay: 180ms;
}

.data-stat-reveal:nth-child(3) {
  animation-delay: 360ms;
}

.company-logo-slot {
  min-height: 104px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  transition: transform 0.24s ease;
}

.company-reveal {
  opacity: 0;
  transform: translateY(18px);
}

.company-reveal.is-visible {
  animation: companyReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.company-reveal:nth-child(2) {
  animation-delay: 280ms;
}

.company-logo-slot.is-visible:hover {
  transform: translateY(-3px);
}

@keyframes companyReveal {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes dataStatReveal {
  from {
    opacity: 0;
    transform: translate3d(0, 28px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.company-logo {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 88px;
  object-fit: contain;
}

.company-logo-compact {
  max-width: 360px;
  max-height: 72px;
}

.company-logo-jingdong {
  forced-color-adjust: none;
}

.alibaba-brand {
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
}

.alibaba-brand-en {
  display: block;
  width: 260px;
  height: auto;
}

.alibaba-brand-zh {
  display: block;
  width: 112px;
  height: auto;
}

.chaosuan-brand {
  width: 100%;
  max-width: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  color: #003894;
}

.chaosuan-brand-icon {
  width: 72px;
  height: 72px;
  flex: 0 0 72px;
  background-color: currentColor;
  mask: var(--chaosuan-icon) center / contain no-repeat;
  -webkit-mask: var(--chaosuan-icon) center / contain no-repeat;
}

.chaosuan-brand-text {
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.2;
  text-align: center;
}

.chaosuan-brand-text strong {
  font-size: 22px;
  font-weight: 700;
  white-space: nowrap;
}

.chaosuan-brand-text small {
  margin-top: 5px;
  font-size: 8px;
  font-weight: 600;
  white-space: nowrap;
}

.beikuang-brand {
  width: 100%;
  max-width: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  color: #3f47cc;
}

.beikuang-brand-icon {
  width: 60px;
  height: 60px;
  flex: 0 0 60px;
  object-fit: contain;
}

.beikuang-brand-text {
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.25;
  text-align: center;
}

.beikuang-brand-text strong {
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
}

.beikuang-brand-text small {
  margin-top: 5px;
  font-size: 8px;
  white-space: nowrap;
}

@media (prefers-color-scheme: dark) {
  .company-logo {
    filter:
      drop-shadow(0 0 1px rgba(255, 255, 255, 0.35))
      drop-shadow(0 4px 12px rgba(0, 0, 0, 0.35));
  }

  .beikuang-brand {
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.35));
  }

  .alibaba-brand,
  .chaosuan-brand {
    filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.35));
  }

  .company-logo-jingdong {
    filter: none;
  }

}

@media (max-width: 600px) {
  .company-logo-slot {
    min-height: 88px;
  }

  .company-logo {
    max-height: 72px;
  }

  .alibaba-brand-en {
    width: min(260px, 100%);
  }

  .alibaba-brand-zh {
    width: 104px;
  }

  .chaosuan-brand {
    gap: 10px;
  }

  .chaosuan-brand-icon {
    width: 56px;
    height: 56px;
    flex-basis: 56px;
  }

  .chaosuan-brand-text strong {
    font-size: 15px;
  }

  .chaosuan-brand-text small {
    margin-top: 3px;
    font-size: 5px;
  }

  .beikuang-brand {
    gap: 10px;
  }

  .beikuang-brand-icon {
    width: 56px;
    height: 56px;
    flex-basis: 56px;
  }

  .beikuang-brand-text strong {
    font-size: 14px;
  }

  .beikuang-brand-text small {
    font-size: 8px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .data-stat-reveal,
  .data-stat-reveal.is-visible,
  .company-reveal,
  .company-reveal.is-visible {
    animation: none;
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
