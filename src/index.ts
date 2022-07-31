import { AddressInfo } from 'net'
import express, { Response, Request } from 'express'
import cors from 'cors'
import { CONDITION_TYPES, DEVICE_TYPES } from './types/deviceType'
import { donationInput } from './DTOS/donationDTO'

const app = express()
app.use(express.json())
app.use(cors())

app.post("/donation", (req: Request, res: Response) => {
    try{
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
        }: donationInput = req.body 

        if (!name || !email || !phoneNumber || !cep || !city || !state || !streetAddress ||  !number || !neighborhood || !deviceCount || !devices) {
            res.statusCode = 400
            throw new Error("Todos os campos obrigatórios devem ser informados.")
        }

        if(email.includes("@") !== true || email.includes(".com") !== true) {
            res.statusCode = 400
            throw new Error("E-mail inválido.")
        }


        if(devices.length !== Number(deviceCount)) {
            res.statusCode = 400
            throw new Error(`A quantidade de equipamentos em deviceCount não está de acordo com a informações dos equipamentos enviados em "devices".`)
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

        res.status(200).send({success: true})
        
    } catch(error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: error.message })
        } else {
            res.status(res.statusCode).send({ message: error.message })
        }
    }
})

const server = app.listen(3003, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.log(`Failure upon starting server.`)
    }
})

export default app