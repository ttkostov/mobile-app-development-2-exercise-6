import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useCounter = create(
    persist(
        (set) => ({
            count: 0,
            incrementCounter: () => set((state) => ({ count: state.count + 1 })),
            decrementCounter: () => set((state) => ({ count: state.count - 1 })),
            resetCounter: () => set({ count: 0 }),
        }),
        {
            name: 'counter-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);

export default useCounter;