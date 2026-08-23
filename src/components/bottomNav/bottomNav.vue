<template>
  <!-- 底部导航容器 -->
    <footer class="footer-container">
        <!-- Logo区域 -->
        <div class="footer-logo">
            <img src="../../assets/logo3-7hO-uTOp.png" alt="橙果工作室Logo">
        </div>

        <!-- 导航列容器 -->
        <div class="footer-navs">
            <!-- 网站导航列 -->
            <div class="nav-column">
                <h3 class="column-title">网站导航</h3>
                <ul class="nav-list">
                    <li><a @click="gotoHome">主页</a></li>
                    <li><a @click="gotoLearning">学习部</a></li>
                    <li><a @click="gotoDevelop">开发部</a></li>
                    <li><a @click="gotoTransaction">事务部</a></li>
                    <li><a @click="gotoPromotion">外宣部</a></li>
                    <li><a @click="gotoVideo">短视频组</a></li>
                    <li><a @click="gotoFullstack">全栈组</a></li>
                    <li><a @click="gotoHardware">硬件组</a></li>
                    <li><a @click="gotoEmbedded">嵌入式组</a></li>
                    <li><a @click="gotoDevelopDepartment">开发组</a></li>
                    <li><a @click="gotoBigdata">大数据组</a></li>
                </ul>
            </div>

            <!-- 工作室风采列 -->
            <div class="nav-column">
                <h3 class="column-title">工作室风采</h3>
                <ul class="nav-list">
                    <li><a href="#">选购推荐</a></li>
                    <li><a href="#">活动剪影</a></li>
                    <li><a href="#">橙果新闻</a></li>
                    <li><a href="#">技术分享</a></li>
                </ul>
            </div>

            <!-- 友情链接列 -->
            <div class="nav-column">
                <h3 class="column-title">友情链接</h3>
                <ul class="nav-list">
                    <li><a href="https://www.qlu.edu.cn" target="_blank">工大官网</a></li>
                    <li><a href="https://sso.qlu.edu.cn/" target="_blank">工大教务系统</a></li>
                    <li><a href="https://jwc.qlu.edu.cn/" target="_blank">工大教务处</a></li>
                    <li><a href="https://sso.qlu.edu.cn/" target="_blank">数字工大</a></li>
                    <li><a href="http://ms.qlu.edu.cn/" target="_blank">微软正版化</a></li>
                    <li><a href="https://mail.qlu.edu.cn/" target="_blank">校园邮箱</a></li>
                </ul>
            </div>

            <!-- 加入我们列 -->
            <div class="nav-column">
                <h3 class="column-title">加入我们</h3>
                <ul class="nav-list">
                    <li><a @click="gotoRegister">在线报名</a></li>
                    <li><a @click="gotoRegistrationQuery">查询报名状态</a></li>
                </ul>
            </div>
        </div>
    </footer>

    <!-- 版权信息区域 -->
    <div class="copyright">
        <p>Copyright © 2015-2026齐鲁工业大学网络信息中心橙果工作室</p>
        <p>本站点由橙果工作室前端组提供技术支持</p>
    </div>

</template>
<script setup lang="ts">
    defineOptions({ name: 'bottomNav' })
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const gotoHome = () => {
        router.push('/');
    }

    const gotoLearning = () => {
        router.push('/orange学习部');
    }
    const gotoDevelop = () => {
        router.push('/Orange 开发');
    }
    const gotoTransaction = () => {
        router.push('/orange事务部');
    }
    const gotoPromotion = () => {
        router.push('/externalPropagandaDepartment');
    }
    const gotoVideo = () => {
        router.push('/Orange 短视频');
    }
    const gotoFullstack = () => {
        router.push('/full-stack');
    }
    const gotoHardware = () => {
        router.push('/hardware');
    }
    const gotoEmbedded = () => {
        router.push('/embedded');
    }
    const gotoDevelopDepartment = () => {
        router.push('/DevelopDepartment');
    }
    const gotoBigdata = () => {
        router.push('/data');
    }
    const gotoRegister = () => {
        router.push('/Register');
    }
    const gotoRegistrationQuery = () => {
        router.push('/student-query');
    }
</script>
<style scoped>
        /* 底部导航容器：Flex布局，左Logo + 右导航列 */
        .footer-container {
            display: flex;
            padding: 40px 80px;
            color: var(--color-text);
            background: var(--color-background);
            border-bottom: 1px solid var(--color-border);
            /* 底部分隔线 */
        }

        /* Logo区域：Flex垂直居中 */
        .footer-logo {
            display: flex;
            align-items: center;
            margin-right: 80px;
            /* 与导航列的间距 */
        }

        .footer-logo img {
            width: 150px;
            height: 140px;
            margin-right: 15px;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }

        .logo-text .logo-title {
            font-size: 20px;
            color: #22c55e;
            /* 绿色标题 */
            font-weight: bold;
        }



        /* 导航列容器：Flex平分空间 */
        .footer-navs {
            display: flex;
            flex: 1;
            /* 占满剩余宽度 */
            justify-content: space-between;
            /* 列之间均匀分布 */
        }

        /* 单个导航列 */
        .nav-column {
            min-width: 120px;
        }

        .column-title {
            font-size: 18px;
            color: var(--color-heading);
            margin-bottom: 15px;
            font-weight: 600;
        }

        .nav-list {
            list-style: none;
            padding-left: 0;
        }

        .nav-list li {
            margin-bottom: 10px;
        }

        .nav-list a {
            color: var(--color-text-secondary);
            font-size: 14px;
            text-decoration: none;
        }

        .nav-list a:hover {
            color: var(--color-heading);
            text-decoration: underline;
        }

        /* 版权信息区域 */
        .copyright {
            padding: 20px 80px;
            font-size: 14px;
            color: var(--color-text-secondary);
            display: flex;
            justify-content: space-between;
            /* 左右分布 */
            background-color: var(--color-background-soft);
        }

        @media (max-width: 600px) {
            .footer-container {
                flex-direction: column;
                padding: 32px 24px;
            }

            .footer-logo {
                margin: 0 0 24px;
                justify-content: center;
            }

            .footer-logo img {
                width: 132px;
                height: auto;
                margin: 0;
            }

            .footer-navs {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 24px 16px;
            }

            .nav-column {
                min-width: 0;
            }

            .column-title {
                font-size: 16px;
                margin-bottom: 10px;
            }

            .nav-list li {
                margin-bottom: 8px;
            }

            .copyright {
                flex-direction: column;
                gap: 4px;
                padding: 16px 24px;
                text-align: center;
            }
        }
</style>
