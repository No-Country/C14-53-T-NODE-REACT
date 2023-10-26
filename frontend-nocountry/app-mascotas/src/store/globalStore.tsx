import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface IApp {
  sidebarToggle: boolean
  session: boolean
  updateSession: (newValue: boolean) => void
}

export const useGlobalStore = create<IApp>()(
  devtools(set => ({
    sidebarToggle: false,
    session: false,
    updateSession: (newValue: boolean) => set({ session: newValue })
  }))
)
