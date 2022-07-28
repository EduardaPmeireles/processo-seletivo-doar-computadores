import { donationInput } from "../DTOS/donationDTO";
import { CONDITION_TYPES, DEVICE_TYPES } from "../types/deviceType";

export default class DonationBusiness {
    public registerDonation = async(donation: donationInput, res: any): Promise<void> => {
        const {
            name,
            email,
            phoneNumber, 
            cep, 
            city, 
            state, 
            streetAddress,
            number,
            complement,
            neighborhood,
            deviceCount, 
            devices
        } = donation 

        if (!name || !email || !phoneNumber || !cep || !city || !state || !streetAddress ||  !number || !neighborhood || !deviceCount || !devices.length) {
            res.statusCode = 400
            throw new Error("Todos os campos obrigatórios devem ser informados.")
        }

        if(email.includes("@") !== true || email.includes(".com") !== true) {
            res.statusCode = 400
            throw new Error("E-mail inválido.")
        }

        const devicesCounter = deviceCount

        if(devices.length !== Number(deviceCount)) {
            res.statusCode = 400
            throw new Error(`A quantidade de equipamentos ${devicesCounter} não está de acordo com a informações dos equipamentos enviados em "devices".`)
        }

        for (let index = 0; index < devices.length; index++) {
          
            if(!Object.keys(DEVICE_TYPES).includes(devices[index].type.toUpperCase())) {
               res.statusCode = 400
                throw new Error("Esse tipo de aparelho não é aceito.")
             }
             else if(!Object.keys(CONDITION_TYPES).includes(devices[index].condition.toUpperCase())) {
                res.statusCode = 400
                throw new Error("Estado de conservação inválido.")
            }
        }
    }
}