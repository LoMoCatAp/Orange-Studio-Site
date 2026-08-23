<template>
  <div class="join-body relative pt-24">
    <div class="mx-[auto] max-w-[1140px] px-4 sm:px-12 pb-[6rem]">
      <div class="mb-12 px-4 sm:px-0">
        <h2 class="join-body__title text-2xl leading-[1.2] font-medium mb-2">A better way to improve yourself</h2>
        <h2 class="join-body__subtitle text-xl leading-[1.5] font-normal mb-4">橙果工作室让你发现更好的自己!</h2>
      </div>
      <div>
        <div class="flex flex-col mb-12 mo:flex-row">
          <div class="px-6 flex-1 mb-12 mo:mb-0">
            <div class="join-body__card flex flex-col p-12 rounded-lg h-full">
              <div
                class="h-[5rem] w-[5rem] text-3xl inline-flex justify-center items-center rounded-full text-[#6900c7] bg-[#d4c2ef] mb-6">
                <i class="fa fa-archive" aria-hidden="true"></i>
              </div>
              <div>
                <h5 class="join-body__card-title text-lg font-medium leading-[1.2] mb-2">硬件设施充足</h5>
              </div>
              <div>
                <p class="join-body__card-text font-normal leading-[1.5]">工作室拥有舒适的工作学习环境, 全年空调开放, 存有纸质、电子版资料众多, 配备工作室专属校园网专线,
                  我们力争为工作室成员提供更好的基础硬件设施。</p>
              </div>
            </div>
          </div>
          <div class="px-6 flex-1">
            <div class="join-body__card flex flex-col p-12 rounded-lg h-full">
              <div
                class="h-[5rem] w-[5rem] text-3xl inline-flex justify-center items-center rounded-full text-[#00ac69] bg-[#bfe5dc] mb-6">
                <i class="fa fa-check" aria-hidden="true"></i>
              </div>
              <div>
                <h5 class="join-body__card-title text-lg font-medium leading-[1.2] mb-2">优秀团队带领</h5>
              </div>
              <div>
                <p class="join-body__card-text font-normal leading-[1.5]">依托校网络信息中心, 工作室拥有多名优秀指导教师带领, 往届学长学姐积累了满满的干货, 只等你来深入学习,
                  并将橙果技术与精神继续传递下去。</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col mb-12 mo:flex-row">
          <div class="px-6 flex-1 mb-12 mo:mb-0">
            <div class="join-body__card flex flex-col p-12 rounded-lg h-full">
              <div
                class="h-[5rem] w-[5rem] text-3xl inline-flex justify-center items-center rounded-full text-[#0061f2] bg-[#bfd6f8] mb-6">
                <i class="fa fa-crosshairs" aria-hidden="true"></i>
              </div>
              <div>
                <h5 class="join-body__card-title text-lg font-medium leading-[1.2] mb-2">聚焦技术热点</h5>
              </div>
              <div>
                <p class="join-body__card-text font-normal leading-[1.5]">摒弃旧课本上的“老掉牙”, 工作室的学习内容与时俱进, 直击当前主流需求, 让工作室成员能够熟练上手,
                  学以致用, 为以后考研、就业等打下坚实技术基础。</p>
              </div>
            </div>
          </div>
          <div class="px-6 flex-1">
            <div class="join-body__card flex flex-col p-12 rounded-lg h-full">
              <div
                class="h-[5rem] w-[5rem] text-3xl inline-flex justify-center items-center rounded-full text-[#f4a100] bg-[#f0e3c7] mb-6">
                <i class="fa fa-smile-o" aria-hidden="true"></i>
              </div>
              <div>
                <h5 class="join-body__card-title text-lg font-medium leading-[1.2] mb-2">气氛轻松和谐</h5>
              </div>
              <div>
                <p class="join-body__card-text font-normal leading-[1.5]">工作室是一个轻松欢乐的地方, 这里没有什么条条框框的繁杂限制, 杜绝官僚主义与形式主义等大学组织弊病,
                  大家能在一起开心的学习就是我们的目标。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="join-body__wave absolute bottom-0 w-full h-[3rem]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"
        class="h-[3rem] w-full">
        <path d="M144.54,17.34H0V0h544.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.join-body {
  background: var(--color-surface-muted);
}

.join-body__title,
.join-body__card-title {
  color: var(--color-heading);
}

.join-body__subtitle,
.join-body__card-text {
  color: var(--color-text-secondary);
}

.join-body__card {
  background: var(--color-surface);
  box-shadow: 0 0.15rem 1.75rem var(--color-card-shadow);
}

.join-body__wave {
  color: var(--color-surface);
}
</style>
