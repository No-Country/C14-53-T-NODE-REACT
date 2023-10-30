/* eslint-disable @typescript-eslint/no-explicit-any */

import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface IApp {
  isAuth: boolean
  user: any
  token: string
  pets: any
}

type Actions = {
  setUser: (state: any, newAuth: boolean) => void
  setToken: (state: string) => void
  logout: () => void
  setPets: (state: any) => void
}

export const useGlobalStore = create<IApp & Actions>()(
  devtools(
    persist(
      set => ({
        isAuth: false,
        user: '',
        token: '',
        pets: '',
        setUser: (state: any, newAuth: boolean) => set({ user: state, isAuth: newAuth }),
        setToken: (state: string) => set({ token: state, isAuth: true }),
        logout: () => set({ token: '', user: '', isAuth: false }),
        setPets: (state: any) => set({ pets: state })
      }),
      {
        name: 'auth'
      }
    )
  )
)
