import express from "express"
import DonationController from "../Controller/DonationController"
import DonationBusiness from "../Business/DonationBusiness"

const donationController = new DonationController(
    new DonationBusiness()
)

export const donationRouter = express.Router()

donationRouter.post("/", donationController.registerDonation)