import { findReimbursementByStatus, findReimbursementByUser, submitReimbursement, updateReimbursement } from "../../dao/reimbursement.dao";
// import { Request } from "express-serve-static-core";






//Find Reimbursements By Status/statusId
export async function findReimbursementByStatusService(status_id:number){
    return await findReimbursementByStatus(status_id)
}


//Find Reimbursements By User/userId
export async function findReimbursementByUserService(user_id:number){
    return await findReimbursementByUser(user_id)
}

//Submit Reimbursement
export async function submitReimbursementService(body:any){
    return await submitReimbursement(body)
}


//Update Reimbursement
export async function updateReimbursementService(reimbursementid:number, author: number, amount: number, 
    dateSubmitted: number, dateResolved: number, description: string, resolver: number, status: number, type: number){
    return await updateReimbursement(reimbursementid, author, amount, dateSubmitted, dateResolved, 
                                     description, resolver, status, type)
}