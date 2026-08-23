<script setup lang="ts">
import { getJoinProcess } from "@/api/join";
import { ref } from "vue";

const process = ref([
  {
    title: "报名 成功/未报名",
    description1:
      "一只满怀好奇的小橙子在“橙果工作室”的门口看了看。报名呢？还是不报名呢？",
    description2:
      "报名的话会找到一群志同道合的人, 一起完成心中的梦想, 会收获温馨、热爱、友谊……好多好多~冲鸭!",
  },
  {
    title: "初试 通过/未通过",
    description1: "来了来了了, “无情的“的第一次面试~",
    description2:
      "初试考察的是“第一印象”, 大家通过自我介绍来向面试官展示自己个性和优势。可以说专业知识, 也可以说人格修养、兴趣爱好等等。内容不限。面试时长为3min/人。",
  },
  {
    title: "复试 通过/未通过",
    description1: "经过”无情的“第一次面试同学将迎来一次长跑——第二次面试。",
    description2:
      "面试为期一周左右, 大家会收到由小组发出的学习任务, 经行为期一周的自学之后会对大家学习内容进行一次考核以检验大家的学习能力。",
  },
  {
    title: "最终结果 录取/未录取",
    description1:
      "到此, 大家已经完成了全部面试, 你的学识和能力已经得到了我们的考验, 橙果工作室欢迎你的加入。",
    description2:
      "未录取的同学也不要灰心，我们只是暂时错过，期待二次纳新时遇见崭新的你。",
  },
]);

const userSteps = ref({
  step: 1,
  firstStatus: "未进行",
  secondStatus: "未进行",
  finalStatus: "未进行"
});

const studentId = ref('');

const searchProcess = async () => {
  getJoinProcess(studentId.value).then(
    (res) => {
      userSteps.value = res.data;
    }
  )
}
</script>

<template>
  <div class="join-search pt-[8rem]">
    <div class="join-search__query mx-10">
      <input
        type="text"
        class="border-slate-200"
        placeholder="请输入你的学号:"
        v-model="studentId"
      />
      <button @click="searchProcess">查询</button>
    </div>
    <div class="process-wrapper mx-10 my-10">
      <div
        class="process-card border border-slate-200 p-5 mo:p-20 mo:hidden rounded-xl hover:shadow-lg"
      >
        <a-steps :current="userSteps.step" direction="vertical">
          <a-step description="请关注录取进程">还没报名, 快去填写报名表</a-step>
          <a-step description="请关注录取进程">小橙子, 恭喜你报名成功</a-step>
          <a-step :description="`状态 ${userSteps.firstStatus}`">初试</a-step>
          <a-step :description="`状态 ${userSteps.secondStatus}`">复试</a-step>
          <a-step :description="`${userSteps.finalStatus}`">最终结果</a-step>
        </a-steps>
      </div>
      <div
        class="process-card border border-slate-200 p-20 hidden mo:block rounded-xl hover:shadow-lg"
      >
        <a-steps :current="userSteps.step">
          <a-step description="请关注录取进程">还没报名, 快去填写报名表</a-step>
          <a-step description="请关注录取进程">小橙子, 恭喜你报名成功</a-step>
          <a-step :description="`状态 ${userSteps.firstStatus}`">初试</a-step>
          <a-step :description="`状态 ${userSteps.secondStatus}`">复试</a-step>
          <a-step :description="`${userSteps.finalStatus}`">最终结果</a-step>
        </a-steps>
      </div>
    </div>
    <div
      class="process-wrapper mx-10 my-10 bg-[url('@/assets/logo/bg.webp')] object-cover bg-cover bg-right-bottom rounded-xl"
    >
      <div
        class="process-description border border-slate-200 p-10 rounded-xl hover:shadow-lg text-xs font-normal"
      >
        <div>这里让大家熟悉纳新流程</div>
        <div class="mt-6" v-for="item in process">
          <div class="font-bold text-base mb-2">{{ item.title }}</div>
          <div>{{ item.description1 }}</div>
          <div>{{ item.description2 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.join-search {
  min-height: 100vh;
  background: var(--color-background);
  color: var(--color-text);
}

.join-search__query input,
.join-search__query button {
  background: var(--color-input);
  color: var(--color-text);
  border-color: var(--color-input-border);
}

.process-card,
.process-description {
  border-color: var(--color-border);
  box-shadow: 0 2px 8px var(--color-card-shadow);
}

.process-card {
  background: var(--color-surface);
}

.process-description {
  background-color: rgba(24, 24, 24, 0.34);
  color: #ffffff;
}

.process-card:hover,
.process-description:hover {
  box-shadow: 0 8px 24px var(--color-card-shadow);
  border-color: var(--color-border-hover);
}

input {
  border-radius: 8px;
  padding: 10px;
  border: 1px solid var(--color-input-border);
  margin-right: 30px;
}
button {
  border-radius: 8px;
  padding: 10px;
  border: 1px solid var(--color-input-border);
}

@media (max-width: 768px) {
  .join-search__query {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 16px;
  }

  .join-search__query input,
  .join-search__query button {
    width: 100%;
    min-height: 44px;
    margin: 0;
  }

  .process-wrapper {
    margin: 24px 16px;
  }
}
</style>
