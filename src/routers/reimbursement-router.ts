import express from 'express'

// import { reimbursements } from '../state';
import { authorization } from '../middleware/auth.middleware';
//import { Reimbursement } from '../models/reimbursement';
import { findReimbursementByStatusService, findReimbursementByUserService, 
    submitReimbursementService, updateReimbursementService } from '../service/utl/reimbursements.service';


export const reimbursementsRouter = express.Router()


//Find Reimbursements By Status
reimbursementsRouter.get('/status/:statusId',[authorization(['finance-manager']), async (req, res)=>{

    
    let id = +req.params.statusId//id is string by default, adding the + turns to int

if(isNaN(id)){
    res.sendStatus(400)
}else {
    let reimbursement = await findReimbursementByStatusService(id)
    if(reimbursement){
        res.json(reimbursement)
     } else {
        res.sendStatus(400)
    }
}

}])



//Find Reimbursements By User
reimbursementsRouter.get('/author/userId/:userId', [authorization(['finance-manager', 'employee']), 
async (req, res)=>{

    
    let id = +req.params.userId//id is string by default, adding the + turns to int

if(isNaN(id)){
    res.sendStatus(400)
}else {
    let reimbursement = await findReimbursementByUserService(id)
    if(reimbursement){
        res.json(reimbursement)
     } else {
        res.sendStatus(400)
    }
}

}])



//Update Reimbursement
reimbursementsRouter.patch('/:id', [authorization(['finance-manager']), async (req, res) =>{
 
const { reimbursement_id, author, amount, 
    dateSubmitted, dateResolved, description, resolver, status, reimbursement_type_num} = req.body

if(isNaN(reimbursement_id)){
    res.sendStatus(400)
}else{
    let reimbursement:any = await updateReimbursementService(reimbursement_id, author, amount, 
        dateSubmitted, dateResolved, description, resolver, status, reimbursement_type_num)
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
}

}])



reimbursementsRouter.post('', async (req, res)=>{
    let {body} = req //destructuring
    let checks = {
        author: '',
        amount: '',
        datesubmitted: '' ,
        dateresolved: '' ,
        description: '' ,
        resolver: '',
        status: '',
        reimbursement_type_num: ''
    }
    
    for(let key in checks ){//loop through all fields on user
       
        key
    }
    if(!res.finished){
        let newReimbursement:any = await submitReimbursementService(body)
        // reimbursements.push(newReimbursement)//add user to state
        res.json(newReimbursement)//send back new user
    }
})