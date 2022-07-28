import { device } from "../types/deviceType";

export default class DonationModel {
    constructor(
        private name: string,
        private email: string,
        private phoneNumber: string,
        private cep: number,
        private city: string,
        private state: string,
        private streetAddress: string,
        private number: string,
        private neighborhood: string,
        private deviceCount: number,
        private devices: device[],
        private complement? : string
    ){}

    public getName = (): string => {
        return this.name
    }

    public getEmail = (): string => {
        return this.email
    }

    public getPhoneNumber = (): string => {
        return this.phoneNumber
    }

    public getZipCode = (): number => {
        return this.cep
    }

    public getCity = (): string => {
        return this.city
    }

    public getState = (): string => {
        return this.state
    }

    public getStreetAddress = (): string => {
        return this.streetAddress
    }

    public getHouseNumber = (): string => {
        return this.number
    }

    public getComplement = (): string | undefined => {
        return this.complement
    } 

    public getNeighborhood = (): string => {
        return this.neighborhood
    }

    public getDevicesCount = (): number => {
        return this.deviceCount
    }

    public getDevicesList =(): device[] | [] => {
        return this.devices
    }
}