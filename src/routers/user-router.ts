import express from 'express'
import { users } from '../state';
import { authorization } from '../middleware/auth.middleware';
import { getAllUsersService, findUserByIdService, findUserByUsernameAndPasswordService } from '../service/utl/users.service';


export const userRouter = express.Router()

userRouter.get('',[authorization(['finance-manager']),async (req, res)=>{
    res.json(await getAllUsersService())
}])


//Find Users By Id
userRouter.get('/:id', [authorization(['finance-manager']), async (req, res)=>{
    let id = +req.params.id//id is string by default, adding the + turns to int
    //let user = users.find((u) =>{ 
        let user = await findUserByIdService(id)
    if(user){
        res.json(user)
    } else {
        res.sendStatus(400)
    }
}])


//lets make a login endpoint
userRouter.post('/login', async (req, res)=>{
    const {username, password} = req.body
    // const user = users.find(u => u.username === username && u.password === password)
    const user = await findUserByUsernameAndPasswordService(req, username, password)
    if(user){
        req.session.user = user
        res.send(req.session)// don't send them the session
        //we send them their user object
    } else{
        res.status(400).send('Invalid Credentials Please re-enter')
    }
})


//updating a user
userRouter.patch('/:id', [authorization(['admin']), (req, res) =>{
    let id = +req.params.id
    let user = users.find((u) =>{ 
        return u.userId === id
    })
    if(user){
        let {body} = req
        for(let key in user ){//loop through all fields on user
            if(!body[key]){//if they didn't give us one
            res.status(400).send('please include all user fields')
            break;
            }else{
                user[key] = body[key]//else set new field
            }
        }
        res.json(user)
    } else {
        res.sendStatus(400)
    }
}])