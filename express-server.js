import express from 'express';
import fs from 'fs';
const server = express()
server.use(express.json())
server.get('/write', (req, res) => {
    try {
      fs.writeFileSync(`fs-files/${Date.now().toString()}.txt`,
    new Date().toISOString())
    res.send("file created successfully")
    } catch(error) {
       res.status(500).send(error)
    }
})

server.get('/read', (req, res) => {
    try {
       const data = fs.readdirSync('fs-files','utf-8')
       res.send(data) 
    } catch (error) {
        res.status(500).send(error)
    }
})

const port = 6000;
server.listen(port, () => {
    console.log('port is running at' + port)
})
