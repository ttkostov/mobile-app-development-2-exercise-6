import {create} from 'zustand'


const useName = create((set) => ({
    name: '',
    setName: (enteredName) => set(() => ({name: enteredName})),
}))

export default useName;