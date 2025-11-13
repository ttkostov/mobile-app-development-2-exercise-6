import {create} from 'zustand'


const useName = create((set) => ({
    name: '',
    setName: (enteredName) => set((state) => ({name: enteredName})),
}))

export default useName;