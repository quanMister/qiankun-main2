<template>
    <div class="app1">
        <div style="margin-bottom: 40px">
            <p>本主应用消息1：{{ mes1 }}</p>
            <button @click="sendMes1">点击向子应用发送消息1</button>
        </div>
        <div>
            <p>本主应用消息2：{{ mes2 }}</p>
            <button @click="sendMes2">点击向子应用发送消息2</button>
        </div>
        <p>接收到的消息：{{ app1Msg }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import actions from "../../actions";

const mes1 = ref(""); // 有vuex等状态管理的话可以设置为vuex里的值，并在vuex中用actions.onGlobalStateChange和store.commit改变相应的值
const mes2 = ref(0);
const app1Msg = ref(0);
const sendMes1 = () => {
    mes1.value += 1;
    actions.setGlobalState({ test: mes1.value }); //通过setGlobalState改变全局状态
};

const sendMes2 = () => {
    mes2.value += 1;
    actions.setGlobalState({ mes2: mes2.value }); //通过setGlobalState改变全局状态
};

// 数据要存入vuex的话可以在src\actions\index.js中进行监听并用store.commit改变相应的值 
actions.onGlobalStateChange((state, prev) => {
    console.log(31, "主应用监听子应用发来的信息", state, prev);
    if (state.app1Msg !== prev.app1Msg) {
        app1Msg.value = state.app1Msg;
    }
}, true);
onMounted(() => {
    console.log(10, "主应用app1地址");
});
</script>
