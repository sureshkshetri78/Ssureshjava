import { findReimbursementByStatus, findReimbursementByUser, submitReimbursement, updateReimbursement } from "../../dao/reimbursement.dao";
// import { Request } from "express-serve-static-core";






//Find Reimbursements By Status/statusId
export async function findReimbursementByStatusService(statusId:number){
    return await findReimbursementByStatus(statusId)
}


//Find Reimbursements By User/userId
export async function findReimbursementByUserService(userId:number){
    return await findReimbursementByUser(userId)
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