/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface IApp {
  isAuth: boolean
  user: any
  token: string
}

type Actions = {
  setUser: (state: any, newAuth: boolean) => void
  setToken: (state: string) => void
  logout: () => void
}

export const useGlobalStore = create<IApp & Actions>()(
  devtools(
    persist(
      set => ({
        isAuth: false,
        user: '',
        token: '',
        setUser: (state: any, newAuth: boolean) => set({ user: state, isAuth: newAuth }),
        setToken: (state: string) => set({ token: state, isAuth: true }),
        logout: () => set({ token: '', user: '', isAuth: false })
      }),
      {
        name: 'auth'
      }
    )
  )
)
