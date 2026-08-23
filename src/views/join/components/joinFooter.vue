<script setup lang="ts">
const backToTop = () => {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <div class="join-footer mt-12 xl:mx-[18rem] lg:mx-[8rem] nr:mx-[6rem] mx-[3rem] flex flex-col mo:flex-row mo:justify-between">
    <div class="mb-6 mo:mb-0">
      <h1 class="join-footer__title mb-2 font-medium leading-[1.2] text-[1.2rem]">准备好了吗? </h1>
      <h1 class="join-footer__text text-[1.1rem] font-normal leading-[1.5]">点击填写你的报名表吧! </h1>
    </div>
    <div>
      <button class="bg-blue-500 px-6 py-3 rounded-full text-[0.9rem] font-bold text-white" @click="backToTop">点击填写</button>
    </div>
  </div>
</template>

<style scoped>
.join-footer__title {
  color: #2563eb;
}

.join-footer__text {
  color: var(--color-text-secondary);
}
</style>
