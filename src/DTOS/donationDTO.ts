import { device } from "../types/deviceType"

export interface donationInput {
    name: string
    email: string
    phoneNumber: string
    cep: string
    city: string
    state: string
    streetAddress: string
    number: string
    complement: string | undefined
    neighborhood: string
    deviceCount: string
    devices: device[]
}