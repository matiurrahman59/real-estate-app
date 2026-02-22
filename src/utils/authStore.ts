import { deleteItemAsync, getItem, setItem } from 'expo-secure-store'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type UserState = {
  isLoggedIn: boolean
  login: () => void
  logout: () => void
  hasCompleteOnboarding: boolean
  completeOnboarding: () => void
  resetOnboarding: () => void
}

export const useAuthStore = create(
  persist<UserState>(
    (set) => ({
      isLoggedIn: false,
      hasCompleteOnboarding: false,
      login: () => {
        set((state) => {
          return {
            ...state,
            isLoggedIn: true,
          }
        })
      },
      logout: () => {
        set((state) => {
          return {
            ...state,
            isLoggedIn: false,
          }
        })
      },
      completeOnboarding: () => {
        set((state) => {
          return {
            ...state,
            hasCompleteOnboarding: true,
          }
        })
      },
      resetOnboarding: () => {
        set((state) => {
          return {
            ...state,
            hasCompleteOnboarding: false,
          }
        })
      },
    }),
    {
      name: 'auth-store',
      storage: createJSONStorage(() => ({
        getItem,
        setItem,
        removeItem: deleteItemAsync,
      })),
    },
  ),
)
