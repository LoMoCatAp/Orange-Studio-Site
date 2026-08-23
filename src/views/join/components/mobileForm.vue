<script setup lang="ts">
import { postJoinForm } from '@/api/join';
import { reactive } from 'vue';

const props = defineProps(['reload']);
const reload = props.reload;

const enrolment = reactive({
  name: '',
  studentId: '',
  email: '',
  className: '',
  qq: '',
  sex: 'male',
  group: 'notSelect',
  department: 'notSelect',
  introduce: ''
});

const handleSubmit = async ({ values, errors }: any) => {
  if (!errors) {
    await postJoinForm(enrolment);
    reload()
  }
}

</script>

<template>
  <div class="form-card mx-4 sm:mx-[4rem] rounded-md">
    <div class="form-card__header px-4 py-6 font-semibold">请在下方填写你的报名信息</div>
    <div class="form-card__body p-5 flex flex-col">
      <a-form ref="formRef" layout="vertical" :model="enrolment" @submit="handleSubmit">
        <a-form-item field="name" label="姓名" :rules="[{ required: true, message: '必填' }]">
          <a-input v-model="enrolment.name" placeholder="请输入你的姓名" />
        </a-form-item>
        <a-form-item field="studentId" label="学号"
          :rules="[{ required: true, message: '必填' }, { length: 12, message: '格式错误' }]">
          <a-input v-model="enrolment.studentId" placeholder="请输入你的学号" />
        </a-form-item>
        <a-form-item field="email" label="邮箱" :rules="[{ required: true, message: '必填' }]">
          <a-input v-model="enrolment.email" placeholder="请输入你的邮箱" />
        </a-form-item>
        <a-form-item field="className" label="专业班级" :rules="[{ required: true, message: '必填' }]">
          <a-input v-model="enrolment.className" placeholder="请输入你的专业班级" />
        </a-form-item>
        <a-form-item field="qq" label="QQ号" :rules="[{ required: true, message: '必填' }]">
          <a-input v-model="enrolment.qq" placeholder="请输入你的qq号" />
        </a-form-item>
        <a-form-item field="sex" label="性别" :rules="[{ required: true, message: '必填' }]">
          <a-select placeholder="请选择你的性别" v-model="enrolment.sex">
            <a-option value="male">男</a-option>
            <a-option value="female">女</a-option>
          </a-select>
        </a-form-item>
        <a-form-item field="group" label="意向小组(参考)">
          <a-select placeholder="请选择你的意向小组" v-model="enrolment.group">
            <a-option value="notSelect">未选择</a-option>
            <!-- <a-option value="网站组">网站组</a-option>
            <a-option value="程序设计组">程序设计组</a-option> -->
            <a-option value="全栈组">全栈组</a-option>
            <a-option value="硬件组">硬件组</a-option>
            <a-option value="大数据组">大数据组</a-option>
            <a-option value="嵌入式组">嵌入式组</a-option>
          </a-select>
        </a-form-item>
        <a-form-item field="department" label="意向部门(参考)">
          <a-select placeholder="请选择你的意向部门" v-model="enrolment.department">
            <a-option value="notSelect">未选择</a-option>
            <a-option value="事务部">事务部</a-option>
            <a-option value="外宣部">外宣部</a-option>
            <a-option value="学习部">学习部</a-option>
            <a-option value="开发部">开发部</a-option>

          </a-select>
        </a-form-item>
        <a-form-item field="introduce" label="用一段简短的文字介绍自己" :rules="[{ required: true, message: '必填' }]">
          <a-textarea v-model="enrolment.introduce" :auto-size="{
            minRows: 10,
            maxRows: 5
          }" allow-clear />
        </a-form-item>
        <!-- <button disabled class="bg-blue-400 py-4 text-white font-bold rounded-full cursor-not-allowed">2023年纳新已经结束, 我们下次再见</button> -->
        <button class="blue-action-cta bg-blue-500 py-4 text-white font-bold rounded-full" html-type="submit">提交报名表</button>
      </a-form>
    </div>
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
  border: solid 1px #F56C6C;
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
  border: solid 1px #F56C6C;
  background-color: var(--color-danger-soft);
}

.arco-form:deep(.arco-textarea-error):hover {
  background-color: var(--color-danger-soft-hover);
}
</style>
