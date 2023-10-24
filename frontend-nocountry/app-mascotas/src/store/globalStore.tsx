import create from 'zustand'

interface IApp {
  sidebarToggle: boolean
}

export const globalStore = create<IApp>(() => ({
  sidebarToggle: false
}))
