import {create} from 'zustand'

const useHamStore = create((set) => ({
    hamburgerOpen: false,
    
    actionChange: () => set((state) => ({hamburgerOpen: !state.hamburgerOpen}))
}))


export default useHamStore;