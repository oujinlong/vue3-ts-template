<template>
  <div>
    {{data.userInfo?.name}}
  </div>
</template>

<script setup lang="ts">
import {UserInfo} from '../../types/index'
import {
  reactive,
  onMounted,
  ref,
} from "vue";
// store
import { useMainStore } from "../../store/main";
import router from "../../router/index";
const mainStore = useMainStore();

 const data = reactive({
    userInfo: null as UserInfo | null,
});

onMounted(() => {
  console.log('mainStore', mainStore);
  const userInfo = mainStore.userInfo;
  console.log(userInfo)
  data.userInfo = userInfo
});
</script>

<style lang="scss" scoped>
.home-header {
  text-align: center;
  background-color: #528cf7;
  height: 130px;

  .title {
    color: #ffffff;
    font-size: 25px;
    font-weight: bold;
    padding-top: 16px;
  }
}

.home-content {
  background-color: #ffffff;
  margin-top: -50px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  min-height: 200px;
  padding: 20px;
  height: calc(100vh - 120px);
  overflow: auto;

  .tag {
    background-color: $theme-color;
    color: #ffffff;
    width: 6px;
    height: 20px;
  }

  .text {
    margin-left: 6px;
    font-size: 16px;
    font-weight: bold;
  }
}

.pannel-content {
  margin-top: 20px;

  .btn {
    background-color: #f5f7fa;
    color: #797979;
    border-radius: 18px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 12px;
    font-weight: bold;
    height: 36px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }

  .btn.active {
    background-color: $theme-color;
    color: #ffffff;
  }
}
</style>
