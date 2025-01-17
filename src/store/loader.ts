import { defineStore } from 'pinia';
import { ILoader } from '@/interfaces/store/loader';

export const useLoaderStore = defineStore({
  id: 'loader',
  state: (): ILoader => ({
    loading: false,
    global: false,
  }),
  getters: {
    isLoading: state => state.loading,
    isLoadingGlobal: state => state.loading && state.global,
  },
  actions: {
    startLoading(global = false) {
      this.$patch({
        loading: true,
        global,
      });
    },
    stopLoading() {
      this.$patch({
        loading: false,
        global: false,
      });
    },
    async awaitLoading<T = unknown>(fn: Promise<T>, global = true) {
      this.startLoading(global);
      try {
        return await fn;
      } finally {
        this.stopLoading();
      }
    },
  },
});
