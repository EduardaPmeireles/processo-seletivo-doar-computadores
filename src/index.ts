import { AddressInfo } from 'net'
import app from './server'
import { donationRouter } from './routes/donationRoute'

app.use("/donation", donationRouter)

const server = app.listen(3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.log(`Failure upon starting server.`)
    }
})