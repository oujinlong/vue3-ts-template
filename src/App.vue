<script setup lang="ts">
import { useMainStore } from './store/main'

const userInfo = {
  name: 'ouda',
  age: 0,
}
const mainStore = useMainStore()
mainStore.setUserInfo(userInfo)

</script>

<template>
  <Suspense>
    <router-view ></router-view>
  </Suspense>
</template>

<style lang="scss">
#app {
}
</style>
