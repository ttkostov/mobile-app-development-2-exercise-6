import {create} from 'zustand'


 const useCounter = create((set) => ({
    count: 0,
    incrementCounter: () => set((state) => ({count: state.count + 1})),
    decrementCounter: () => set((state) => ({count: state.count - 1})),
    resetCounter: () => set(() => ({count: 0})),
}))

export default useCounter;