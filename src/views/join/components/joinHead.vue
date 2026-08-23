<script setup lang="ts">
import headSlogan from '@/views/join/components/headSlogan.vue'
import pcForm from '@/views/join/components/pcForm.vue'
import mobileForm from '@/views/join/components/mobileForm.vue'
import { ref } from 'vue';

const headRef = ref<any>(null);

const drop = () => {
  scrollTo({
    top: headRef.value.offsetHeight - 80,
    behavior: 'smooth'
  });
}

const isShow = ref(true);

const reload = () => {
  isShow.value = false;
  setTimeout(() => {
    isShow.value = true;
  }, 0)
}
</script>

<template>
  <div class="join-head bg-[url('@/assets/bg.png')] bg-[#6900c7] pb-[8rem]" ref="headRef">
    <div class="join-head__content pt-[10rem] md:px-[4rem] nr:px-[2rem] lg:px-[5rem] px-[1rem]">
      <div class="flex flex-col lg:flex-row justify-center align-middle py-8 xl:max-w-[1140px] mx-[auto]">
        <head-slogan :drop="drop"/>
        <pc-form v-if="isShow" :reload="reload" class="hidden mo:block"/>
        <mobile-form v-if="isShow" :reload="reload" class="block mo:hidden"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 965px) {
  .join-head__content {
    padding-top: 7rem;
  }

  .join-head {
    padding-bottom: 4rem;
  }
}
</style>

