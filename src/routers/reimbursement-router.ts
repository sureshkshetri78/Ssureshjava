import express from 'express'

import { reimbursements } from '../state';
import { authorization } from '../middleware/auth.middleware';
import { Reimbursement } from '../models/reimbursement';



export const reimbursementsRouter = express.Router()


reimbursementsRouter.get('', (req, res, next) => {

    res.send("Sending request to Reimbursement router");

})


//Find Reimbursements By Status
reimbursementsRouter.get('/status/:statusId',[authorization(['finance-manager','employee']), (req, res)=>{

    console.log(req.params)// statusId should be from the :statusId 
    let id = +req.params.statusId//id is string by default, adding the + turns to int
    let reimbursement = reimbursements.find((u) =>{ 
        return u.status===id
    })
    if(reimbursement){
        res.json(reimbursement)
    } else {
        res.sendStatus(400)
    }
}])


//Find Reimbursements By User
reimbursementsRouter.get('/author/userId/:userId', [authorization(['finance-manager', 'employee','admin']), (req, res)=>{

    console.log(req.params)// statusId should be from the :statusId 
    let id = +req.params.userId//id is string by default, adding the + turns to int
    let reimbursement = reimbursements.find((u) =>{ 
        return u.author===id
    })
    if(reimbursement){
        res.json(reimbursement)
    } else {
        res.sendStatus(400)
    }
}])


//Update Reimbursement
reimbursementsRouter.patch('/:id', [authorization(['finance-manager']), (req, res) =>{
    let id = +req.params.id
    let reimbursement = reimbursements.find((u) =>{ 
        return u.reimbursementId===id
    })
    if(reimbursement){
        let {body} = req
        for(let key in reimbursement ){//loop through all fields on user
            if(!body[key]){//if they didn't give us one
              
            }else{
                reimbursement[key] = body[key]//else set new field
            }
        }
        res.json(reimbursement)
    } else {
        res.sendStatus(400)
    }
}])



//Submit Reimbursement
// reimbursementsRouter.post('/', (req, res)=>{
//     res.status(201).send('Create Reimbursement')
//     res.json(reimbursements)
// })

//Submit Reimbursement(Create a new Reimbursement)
reimbursementsRouter.post('', [authorization(['employee']),(req, res)=>{
    let {body} = req //destructuring
    
    let newReimbursement = new Reimbursement(1, 2, 3, 4, 5, '6', 7, 8, 9)// make a new user
    for(let key in newReimbursement ){//loop through all fields on user
        if(!body[key]){//if they didn't give us one
            res.status(400).send('please include all user fields')//fail
            break;
        }else{
            newReimbursement[key] = body[key]//else set new field
        }
    }
    if(!res.finished){
        reimbursements.push(newReimbursement)//add user to state
        res.json(newReimbursement)//send back new user
    }
}])