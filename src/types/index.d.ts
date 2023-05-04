import { type AppConfig } from "@0xsquid/widget/widget/core/types/config"

export type Widget = {
  id: number
  name: string
  description: string
  config: AppConfig
}