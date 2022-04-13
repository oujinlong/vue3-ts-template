import { defineStore } from "pinia";
import { UserInfo } from '../types/index'
export const useMainStore = defineStore({
  id: "mian",
  state: () => ({
    user_info: {} as UserInfo
  }),
  getters: {
    userInfo: state => state.user_info
  },
  actions: {
    async setUserInfo(data: UserInfo) {
      console.log({ data })
      this.user_info = data;
    },
  },
});
