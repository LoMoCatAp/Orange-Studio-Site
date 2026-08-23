<script setup lang="ts">
import {
  confirmRepairCompletedApi,
  getAppointmentProcess,
  submitEvaluationApi,
  submitScoreApi,
} from "@/api/appointment";
import router from "@/router";
import { ref } from "vue";

const userSteps = ref({
  step: 1,
});

const score = ref(0);
const evaluation = ref("");

const mobile = ref("");

const searchProcess = async () => {
  getAppointmentProcess(mobile.value.trim()).then((res) => {
    console.log(res);
   
    userSteps.value.step = res.data.step;
    score.value = res.data.score;
    evaluation.value = res.data.evaluation;
  });
};

const confirm = async () => {
  await confirmRepairCompletedApi(mobile.value);
  searchProcess()
};

const submitScore = async () => {
  await submitScoreApi(score.value, mobile.value);
  searchProcess()
};

const submitEvaluation = async () => {
  await submitEvaluationApi(evaluation.value, mobile.value);
  searchProcess()
};
</script>

<template>
  <div class="diagnosis-search pt-[8rem]">
    <div class="diagnosis-search__query mx-10">
      <input
        type="text"
        class="border-slate-200"
        placeholder="请输入你的手机号:"
        v-model="mobile"
      />
      <button @click="searchProcess">查询</button>
    </div>
    <div class="process-wrapper mx-10 my-10">
      <div
        class="process-card border border-slate-200 p-5 mo:p-20 mo:hidden rounded-xl hover:shadow-lg"
      >
        <a-steps :current="userSteps.step" direction="vertical">
          <a-step
            >尚未预约, 去<span
              class="text-blue-600"
              @click="router.push({ name: 'computerFreeDiagnosisAppointment' })"
              >填写预约工单</span
            ></a-step
          >
          <a-step>预约成功, 等待分配维修人</a-step>
          <a-step>维修中, 请耐心等待</a-step>
          <a-step>维修完成, 请现场确认维修结果</a-step>
          <a-step>维修完成, 电脑确认正常</a-step>
        </a-steps>
        <div class="mt-8">
          <div class="space-x-4" v-if="userSteps.step === 4">
            <a-button status="success" @click="confirm">现场确认完毕</a-button>
          </div>
          <div class="flex items-center h-12" v-if="userSteps.step === 5">
            <span class="text-base mr-4">评分:</span
            ><a-rate grading v-model="score" @change="submitScore" />
          </div>
          <div v-if="userSteps.step === 5">
            <span class="text-base">评价:</span>
            <a-textarea
              :auto-size="{
                minRows: 10,
                maxRows: 5,
              }"
              allow-clear
              v-model="evaluation"
              @change="submitEvaluation"
            />
          </div>
        </div>
      </div>
      <div
        class="process-card border border-slate-200 p-20 hidden mo:block rounded-xl hover:shadow-lg"
      >
        <a-steps :current="userSteps.step">
          <a-step
            >尚未预约, 去<span
              class="text-blue-600 cursor-pointer"
              @click="router.push({ name: 'computerFreeDiagnosisAppointment' })"
              >填写预约工单</span
            ></a-step
          >
          <a-step>预约成功, 等待分配维修人</a-step>
          <a-step>维修中, 请耐心等待</a-step>
          <a-step>维修完成, 请现场确认维修结果</a-step>
          <a-step>维修完成, 电脑确认正常</a-step>
        </a-steps>
        <div class="mt-8">
          <div class="space-x-4" v-if="userSteps.step === 4">
            <a-button status="success" @click="confirm">现场确认完毕</a-button>
          </div>
          <div class="flex items-center h-12"  v-if="userSteps.step === 5">
            <span class="text-base mr-4">评分:</span
            ><a-rate grading v-model="score" @change="submitScore" />
          </div>
          <div v-if="userSteps.step === 5">
            <span class="text-base">评价:</span>
            <a-textarea
              :auto-size="{
                minRows: 10,
                maxRows: 5,
              }"
              allow-clear
              v-model="evaluation"
              @change="submitEvaluation"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.diagnosis-search {
  min-height: 100vh;
  background: var(--color-background);
  color: var(--color-text);
}

.diagnosis-search__query input,
.diagnosis-search__query button {
  background: var(--color-input);
  color: var(--color-text);
  border-color: var(--color-input-border);
}

.process-card {
  background: var(--color-surface);
  border-color: var(--color-border);
  box-shadow: 0 2px 8px var(--color-card-shadow);
}

.process-card:hover {
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
  .diagnosis-search__query {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 16px;
  }

  .diagnosis-search__query input,
  .diagnosis-search__query button {
    width: 100%;
    min-height: 44px;
    margin: 0;
  }

  .process-wrapper {
    margin: 24px 16px;
  }
}
</style>
