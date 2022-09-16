import app from './app.js'
import https from 'https'
import fs from 'fs'

https.createServer({
    key: fs.readFileSync('../certs/key.pem'),
    cert: fs.readFileSync('../certs/cert.pem')
}, app).listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})