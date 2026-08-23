<script setup lang="ts">
import { postAppointmentForm } from "@/api/appointment";
import { computed, reactive, ref } from "vue";

const props = defineProps(["reload"]);
const reload = props.reload;

const appointment = reactive({
  name: "",
  mobile: "",
  model: "",
  requirement: [],
  email: "",
  appointmentTime: ""
});

const visible = ref(false);
const handleOk = async () => {
  await postAppointmentForm(appointment);
  reload();
};

const cTime = ref<string>("10");
let timer: any = null;
const handleSubmit = async ({ values, errors }: any) => {
  if (!errors) {
    visible.value = true;
    cTime.value = "10";
    timer = setInterval(() => {
      if (cTime.value === "1") {
        cTime.value = "";
        clearInterval(timer);
      } else {
        cTime.value = String(parseInt(cTime.value) - 1);
      }
    }, 1000);
  }
};

const handelClose = () => {
  visible.value = false;
  clearInterval(timer);
};

const modelWidth = computed(() => document.documentElement.clientWidth * 0.8);


</script>

<template>
  <div class="form-card mx-4 sm:mx-[4rem] rounded-md">
    <div class="form-card__header px-4 py-6 font-semibold">
      请在下方填写你的预约工单
    </div>
    <div class="form-card__body p-5 flex flex-col">
      <a-form ref="formRef" layout="vertical" :model="appointment" @submit="handleSubmit">
        <a-form-item field="name" label="姓名" :rules="[{ required: true, message: '必填' }]">
          <a-input v-model="appointment.name" placeholder="请输入你的姓名" />
        </a-form-item>
        <a-form-item field="mobile" label="手机号" :rules="[
          { required: true, message: '必填' },
          { length: 11, message: '格式错误' },
        ]">
          <a-input v-model="appointment.mobile" placeholder="请输入你的手机号" />
        </a-form-item>
        <a-form-item field="model" label="电脑型号" :rules="[{ required: true, message: '必填' }]">
          <a-input v-model="appointment.model" placeholder="请输入你的电脑型号" />
        </a-form-item>
        <a-form-item field="requirement" label="服务需求(若有其他需求可直接输入)" :rules="[{ required: true, message: '必填' }]">
          <a-select placeholder="请选择你的需求" v-model="appointment.requirement" multiple allow-create>
            <a-option>清灰换硅脂</a-option>
            <a-option>重装系统</a-option>
            <a-option>加装硬盘(自备)</a-option>
            <a-option>软件问题</a-option>
          </a-select>
        </a-form-item>
        <a-form-item field="email" label="邮箱">
          <a-input v-model="appointment.email" placeholder="请输入你的邮箱(仅用于接受邮件提醒)" />
        </a-form-item>
        <a-form-item field="appointmentTime" label="预约日期">

          <!-- <a-date-picker style="width: 200px;" /> -->
          <a-date-picker v-model="appointment.appointmentTime" style="width: 200px;" />

        </a-form-item>
        <a-form-item>
          <div>
            <p class="font-extrabold text-red-500">注意事项:</p>
            <p>1.来之前请给电脑充好电</p>
            <p>2.来维修请记得带好充电器</p>
            <p>3.未过保机器发生损坏请优先选择售后，以防拒保</p>
            <p>
              4.若您的电脑散热采用液金，我们无法提供清灰换硅脂服务，请到售后处理
            </p>
            <!-- <p>5.时间为周四,周六15:00-17:00,周日9:00-12:00,13:00-17:00,可多次预约,每天预约上限5人
            </p> -->
          </div>
        </a-form-item>
        <button class="blue-action-cta bg-blue-500 py-4 text-white font-bold rounded-full" html-type="submit">
          提交预约工单
        </button>
      </a-form>
    </div>
    <a-modal v-model:visible="visible" :width="modelWidth" :maskClosable="false">
      <template #title> 免责协议 </template>
      <div class="space-y-4">
        <p>
          数据备份：在进行系统重装之前，乙方应自行备份所有重要数据。甲方不对因系统重装导致的数据丢失或损坏承担任何责任。乙方应确保在系统重装前已备份所有需要保留的数据。
        </p>
        <p>
          维修结果确认：乙方应在维修完成后当场确认维修结果。一旦乙方确认维修结果，甲方将不再对维修后出现的任何问题承担责任，除非该问题是由甲方在维修过程中的错误操作导致的。
        </p>
        <p>
          难以避免的微损：在维修过程中，甲方可能需要拆开电脑的背盖。在此过程中，难免有可能会发生卡扣断裂、脱落等情况。这种难以避免且不影响使用的微损，甲方不承担责任。
        </p>
        <p>
          免责声明：本协议的签订即表示乙方已充分了解并同意上述条款。如有任何疑问，乙方应在签署本协议前向甲方咨询。一旦签署本协议，乙方将被视为已接受上述条款，并同意免除甲方因上述原因可能产生的责任。
        </p>
      </div>
      <template #footer>
        <div class="flex justify-around">
          <a-button status="success" :disabled="cTime !== ''" @click="handleOk">同意
            <span v-show="cTime !== ''">(</span>
            {{ cTime }}
            <span v-show="cTime !== ''">)</span></a-button>
          <a-button status="danger" @click="handelClose">不同意</a-button>
        </div>
      </template>
    </a-modal>
  </div>
</template>

<style scoped>
.form-card {
  background: var(--color-surface);
  color: var(--color-text);
  box-shadow: 0 0.15rem 1.75rem var(--color-card-shadow);
}

.form-card__header {
  color: #2563eb;
  background: var(--color-accent-soft);
}

.form-card__body {
  color: var(--color-text-secondary);
}

.arco-form:deep(.arco-form-item-label-col > .arco-form-item-label) {
  color: var(--color-text);
}

.arco-form:deep(.arco-input-wrapper) {
  border-radius: 24px;
  border: solid 1px var(--color-input-border);
  background-color: var(--color-input);
}

.arco-form:deep(.arco-input),
.arco-form:deep(.arco-input::placeholder),
.arco-form:deep(.arco-select-view-value),
.arco-form:deep(.arco-select-view-placeholder) {
  color: var(--color-text-secondary);
}

.arco-form:deep(.arco-input-error) {
  border: solid 1px #f56c6c;
  background-color: var(--color-danger-soft);
}

.arco-form:deep(.arco-input-error):hover {
  background-color: var(--color-danger-soft-hover);
}

.arco-form:deep(.arco-select) {
  border-radius: 24px;
  border: solid 1px var(--color-input-border);
  background-color: var(--color-input);
}

.arco-form:deep(.arco-textarea-wrapper) {
  border-radius: 12px;
  border: solid 1px var(--color-input-border);
  background-color: var(--color-input);
}

.arco-form:deep(.arco-textarea-error) {
  border: solid 1px #f56c6c;
  background-color: var(--color-danger-soft);
}

.arco-form:deep(.arco-textarea-error):hover {
  background-color: var(--color-danger-soft-hover);
}
</style>
