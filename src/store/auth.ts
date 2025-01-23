import { defineStore } from 'pinia';
import { auth } from '@/firebase/config';
import type { Router } from 'vue-router';
import { User } from '@/interfaces/user';
import { FirebaseError } from 'firebase/app';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

export const useAuthStore = defineStore('auth', {
  persist: true,
  state: () => ({
    user: null as User | null,
    loading: false,
    error: null as string | null,
  }),

  getters: {
    isAuthenticated: state => !!state.user,
  },

  actions: {
    async loginWithGoogle(router: Router) {
      try {
        this.loading = true;
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        this.user = result.user as User;
        router.push({ name: 'Home' });
      } catch (error) {
        if (error instanceof FirebaseError) {
          this.error = error.message;
        } else {
          this.error = 'Erro desconhecido durante o login';
        }
      } finally {
        this.loading = false;
      }
    },

    async logout(router: Router) {
      this.loading = true;
      try {
        await signOut(auth);
        this.user = null;
        router.push({ name: 'Login' });
      } catch (error) {
        if (error instanceof FirebaseError) {
          this.error = error.message;
        } else {
          this.error = 'Erro desconhecido durante o logout';
        }
      } finally {
        this.loading = false;
      }
    },

    setUser(user: User | null) {
      this.user = user;
    },
  },
});
