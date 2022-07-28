import DonationBusiness from "../Business/DonationBusiness";
import { Request, Response } from "express"
import { donationInput } from "../DTOS/donationDTO";

export default class DonationController {
    constructor(
        private donationBusiness: DonationBusiness
    ){}

    public registerDonation = async(req: Request, res: Response): Promise<void> => {
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
            } = req.body 

            const donation: donationInput = {
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
            }

           

            const response: Response = res

            await this.donationBusiness.registerDonation(donation, response)

            res.status(200).send({success: true})

        } catch(error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.message })
            }
        }
    }
} 