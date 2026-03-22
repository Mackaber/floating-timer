import { ElectronAPI } from '@electron-toolkit/preload'

interface AppAPI {
  setWindowScale: (scale: number) => void
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: AppAPI
  }
}
