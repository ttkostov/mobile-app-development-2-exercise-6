import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useName = create(
    persist((set) => ({
            name: '',
            setName: (enteredName) => set(() => ({name: enteredName})),
        }),
        {
            name: 'name-storage',
            storage: createJSONStorage(() => AsyncStorage)
        }));

export default useName;