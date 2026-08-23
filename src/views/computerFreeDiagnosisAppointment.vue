<script setup lang="ts" name="computerFreeDiagnosisAppointment">
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { postAppointmentForm } from '@/api/appointment';
    import { ElMessage } from 'element-plus';

    const router = useRouter();

    const form = ref({
        name: '',
        phone: '',
        model: '',
        service: '请选择你的需求',
        email: '',
        date: ''
    });

    const submitAppointment = async (e: Event) => {
        e.preventDefault();
        
        // 简单校验
        if (!form.value.name || !form.value.phone || !form.value.model || form.value.service === '请选择你的需求') {
            ElMessage.warning('请填写完整的预约信息');
            return;
        }

        try {
            const res = await postAppointmentForm(form.value);
            if (res.code === 200) {
                ElMessage.success('提交预约成功！');
                router.push('/');
            }
        } catch (error) {
            console.error('提交预约失败：', error);
        }
    }
</script>

<template>
    <div class="page-container">
        <div class="nei">
            <div class="top">
                <p>请在下方填写你的预约工单</p>
            </div>
            <div class="bottom">
                <form @submit="submitAppointment">
                    <div class="name kong">
                        <div><label for="name"><span>*</span>姓名</label></div>
                        <div><input v-model="form.name" class="inp" type="text" id="name" name="name" required placeholder="请输入你的名字"></div>
                    </div>

                    <div class="phone kong">
                        <div><label for="phone"><span>*</span>手机号</label></div>
                        <div><input v-model="form.phone" class="inp" type="tel" id="phone" name="phone" required placeholder="请输入你的手机号"></div>
                    </div>

                    <div class="com kong">
                        <div><label for="model"><span>*</span>电脑型号</label></div>
                        <div><input v-model="form.model" class="inp" type="text" id="model" name="model" required placeholder="请输入你的电脑型号"></div>
                    </div>

                    <div class="ser kong">
                        <div><label for="service"><span>*</span>服务需求(若有其他需求可直接输入)</label></div>
                        <div>
                            <select v-model="form.service" class="inp" name="service" id="service">
                                <option value="请选择你的需求">请选择你的需求</option>
                                <option value="清灰换硅脂">清灰换硅脂</option>
                                <option value="重装系统">重装系统</option>
                                <option value="加装硬盘(自备)">加装硬盘(自备)</option>
                                <option value="软件问题">软件问题</option>
                            </select>
                        </div>
                    </div>

                    <div class="ema kong">
                        <div><label for="email">邮箱</label></div>
                        <div><input v-model="form.email" class="inp" type="email" id="email" name="email" required placeholder="请输入你的邮箱(仅用于接受邮箱提醒)"></div>
                    </div>

                    <div class="date kong">
                        <div><label for="date">预约日期</label></div>
                        <!-- 日期输入框容器，用于定位占位符 -->
                        <div class="date-input-wrapper">
                            <input 
                                type="date" 
                                id="date" 
                                name="date" 
                                required 
                                v-model="form.date" 
                            >
                        </div>
                    </div>

                    <div class="notice kong">
                        <p>注意事项：</p>
                        <ol>
                            <li>来之前请给电脑充好电</li>
                            <li>来维修请记得带好充电器</li>
                            <li>未过保机器发生损坏请优先选择售后，以防拒保</li>
                            <li>若您的电脑散热采用液金，我们无法提供清灰换硅脂服务，请到售后处理</li>
                        </ol>
                    </div>
                    
                    <div class="bo kong">
                        <button type="submit">提交预约工单</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<!-- 添加非scoped样式块来覆盖全局样式 -->
<style>
/* 强制覆盖所有可能的全局样式
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html, body, #app {
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    height: 100% !important;
    min-height: 100vh !important;
    max-width: none !important;
    display: block !important;
    overflow-x: hidden !important;
} */
</style>

<!-- 组件scoped样式 -->
<style scoped>
    /* 页面容器，设置全屏背景色 */
    .page-container {
        background-color: var(--color-background);
        color: var(--color-text);
        min-height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
    }
    
    /* 表单容器 */
    .nei {
        width: 1200px;
        max-width: calc(100% - 40px);
        background-color: var(--color-surface);
        border-radius: 10px;
        box-shadow: 0 4px 20px var(--color-card-shadow);
        overflow: hidden;
    }
    
    .top {
        height: 50px;
        background-color: var(--color-accent-soft);
        padding-left: 2em;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    
    .top p {
        line-height: 50px;
        font-size: 16px;
        color: rgb(0, 97, 242);
        font-weight: 700;
    }
    
    .bottom {
        padding: 20px 30px;
    }
    
    .kong {
        margin: 15px 0;
    }
    
    .kong span {
        color: red;
    }
    
    /* 通用输入框样式 */
    .inp {
        height: 30px;
        width: 100%;
        line-height: 30px;
        font-size: 16px;
        border: 1px solid var(--color-input-border);
        background-color: var(--color-input);
        color: var(--color-text);
        border-radius: 15px;
        padding-left: 1em;
        margin-top: 5px;
        outline: none;
    }
    
    .inp:focus {
        border: 1px solid #52b0db;
        box-shadow: 5px 5px 15px 3px var(--color-card-shadow);
    }
    
    /* 日期输入框样式 */
    .date-input-wrapper {
        position: relative;
        display: inline-block;
    }
    
    .date div input {
        height: 40px;
        width: 200px;
        line-height: 40px;
        border: 1px solid var(--color-input-border);
        background-color: var(--color-input);
        color: var(--color-text);
        border-radius: 5px;
        padding: 0 10px;
        font-size: 14px;
    }
    
    .notice p {
        color: red;
        font-size: 16px;
    }
    
    .notice ol {
        padding-left: 1em;
        font-size: 14px;
        font-weight: 400;
        color: var(--color-text-secondary);
    }
    
    .bo {
        padding: 0 10px;
    }
    
    .bo button {
        height: 50px;
        width: 100%;
        background-color: rgb(59, 130, 246);
        border: 0;
        border-radius: 25px;
        font-size: 18px;
        color: #fff;
        line-height: 50px;
        text-align: center;
        font-weight: 700;
        cursor: pointer;
    }
    
    .bo input:hover {
        background-color: rgb(45, 105, 200);
    }
    
    /* 响应式设计 */
    @media (max-width: 1280px) {
        .nei {
            width: auto;
        }
    }
</style>
