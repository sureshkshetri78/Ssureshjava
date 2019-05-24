import express from 'express'

import bodyParser from 'body-parser'
import { loggingMiddleware } from './middleware/logging.middleware';
import { sessionMiddleware } from './middleware/session.middleware';
import { userRouter } from './routers/user-router'
import { reimbursementsRouter } from './routers/reimbursement-router';



const app = express()

app.use(loggingMiddleware)

app.use(bodyParser.json())

app.use(sessionMiddleware)
app.get('/', (req, res)=>{
    res.json('Try making a request to project 0')
})


app.use('/users', userRouter)
app.use('/reimbursements', reimbursementsRouter)


app.listen(3000, ()=>{
    console.log('Project 0 started');  
})