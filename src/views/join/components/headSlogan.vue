<script setup lang="ts">
defineProps(['drop']);
</script>


<template>
  <div class="head-slogan mx-4 sm:mx-16 flex flex-col items-start flex-1 justify-center">
    <div class="text-[#6900c7] bg-[#d4c2ef] rounded-[20px] py-1 px-4 text-xs mb-4 inline-block">加入我们, 一起成长吧! </div>
    <h1 class="font-normal text-white text-5xl leading-[1.2]">在橙果,</h1>
    <h1 class="font-normal text-white text-5xl leading-[1.2]">发掘你的潜力,</h1>
    <h1 class="font-normal text-white text-5xl leading-[1.2] mb-2">智慧与才能。</h1>
    <p class="font-normal text-[hsla(0,0%,100%,.75)] text-lg mb-4">工作室在每年新生入学后进行大规模纳新, 面向新同学, 同时也欢迎想要加入工作室的高年级同学,
      一起为工作室的发展添砖加瓦, 贡献自己的一份力量!</p>
    <p class="font-normal text-[hsla(0,0%,100%,.75)] text-lg mb-4">成功提交报名表后, 你将收到一份邮件提示,
      请按照短信内注明的时间和地点按时参加初次面试。面试通过者将进入复试, 通过者将加入橙果工作室, 享受工作室提供的专属资源。</p>
    <div class="font-normal text-[hsla(0,0%,100%,.75)] text-lg mb-4 cursor-pointer inline-block" @click="drop">
      <i class="fa fa-arrow-down mr-2 bounce" aria-hidden="true"></i>下拉可查看更多信息
    </div>
  </div>
</template>
<style scoped>
h1 {
  margin: 0;
}

@media (max-width: 600px) {
  .head-slogan h1 {
    font-size: 2.25rem;
  }

  .head-slogan p,
  .head-slogan > div:last-child {
    font-size: 1rem;
  }
}

.bounce {
  animation-name: bounce;
  animation-duration: 2s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
    animation-timing-function: ease-in;
  }

  15% {
    transform: translateY(-12px);
    animation-timing-function: ease-out;
  }

  30% {
    transform: translateY(0px);
    animation-timing-function: ease-in;
  }

  35% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-8px);
    animation-timing-function: ease-out;
  }

  65% {
    transform: translateY(0px);
    animation-timing-function: ease-in;
  }
}
</style>
