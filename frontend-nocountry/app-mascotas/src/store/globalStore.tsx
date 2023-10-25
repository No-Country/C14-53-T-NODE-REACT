import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface IApp {
  sidebarToggle: boolean
  isAutenticated: boolean
  user: string
  token: string
  updateUser: (newValue: string, newToken: string, newAuth: boolean) => void
  updateSession: (newValue: boolean) => void
}

export const useGlobalStore = create<IApp>()(
  devtools(set => ({
    sidebarToggle: false,
    isAutenticated: false,
    user: '',
    token: '',
    updateUser: (newValue: string, newToken: string, newAuth: boolean) => set({ user: newValue, token: newToken, isAutenticated: newAuth }),
    updateSession: (newValue: boolean) => set({ isAutenticated: newValue })
  }))
)
