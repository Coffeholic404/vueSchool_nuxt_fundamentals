export const useUser = defineStore("User", {
  state: () => {
    return {
      isLoggedIn: false
    };
  },
  getters: {},
  actions: {},
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot));
}
