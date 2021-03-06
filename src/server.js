import express from 'express'
import listEndpoints from 'express-list-endpoints'
import blogPostRouter from './services/blogs/index.js'
import cors from 'cors'
import { badRequestHandler, unAuthorizedRequestHandler, notFoundHandler, genericErrorHandler } from '../errorHandler.js'

const server = express();
const port = 3008

server.use(cors())
server.use(express.json())


server.use("/post", blogPostRouter)
console.table(listEndpoints(server))

server.use(badRequestHandler)
server.use(unAuthorizedRequestHandler)
server.use(notFoundHandler)
server.use(genericErrorHandler)



server.listen(port, ()=> {
    console.log('listening on port', port);
})
