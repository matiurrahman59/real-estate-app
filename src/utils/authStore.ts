import { deleteItemAsync, getItem, setItem } from 'expo-secure-store';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type property = {
  id: number;
  name: string;
  rating: number;
  price: number;
  coverImage: string;
  images: string[];
  location: {
    city: string;
    address: string;
    lat: number;
    long: number;
  };
  roomFacilities: {
    id: string;
    label: string;
    value: number;
    icon: string;
  }[];
  locationFacilities: {
    id: string;
    label: string;
    value: number;
    icon: string;
  }[];
  agent: {
    name: string;
    phone: string;
    image: string;
  };
  reviews: {
    userName: string;
    userImage: string;
    rating: number;
    comment: string;
  }[];
};

type UserState = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  hasCompleteOnboarding: boolean;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
  favoriteProperties: property[];
  addToFavorites: (item: property) => void;
  removeFromFavorites: (itemID: number) => void;
  clearFavorites: () => void;
};

export const useAuthStore = create(
  persist<UserState>(
    (set) => ({
      isLoggedIn: false,
      hasCompleteOnboarding: false,
      favoriteProperties: [],
      addToFavorites: (item: property) => {
        set((state) => ({
          ...state,
          favoriteProperties: [...state.favoriteProperties, item],
        }));
      },
      removeFromFavorites: (itemID: number) => {
        set((state) => ({
          ...state,
          favoriteProperties: state.favoriteProperties.filter(
            (item) => item.id !== itemID,
          ),
        }));
      },
      clearFavorites: () => {
        set((State) => ({
          ...State,
          favoriteProperties: [],
        }));
      },
      login: () => {
        set((state) => {
          console.log('--login--');
          return {
            ...state,
            isLoggedIn: true,
          };
        });
      },
      logout: () => {
        set((state) => {
          return {
            ...state,
            isLoggedIn: false,
          };
        });
      },
      completeOnboarding: () => {
        set((state) => {
          return {
            ...state,
            hasCompleteOnboarding: true,
          };
        });
      },
      resetOnboarding: () => {
        set((state) => {
          return {
            ...state,
            hasCompleteOnboarding: false,
          };
        });
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
);
