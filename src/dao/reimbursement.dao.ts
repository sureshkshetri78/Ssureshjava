import { PoolClient } from "pg";
import { connectionPool } from ".";
import { sqlReimbursementTojsReimbursement } from "../util/reimbursement-converter";




//Find Reimbursements By Status/statusId
export async function findReimbursementByStatus(statusid:number){
    let client:PoolClient

    try{
        client = await connectionPool.connect()//await cause this is async
        //this is how to write a paramaterized query
        //we use $1, $2 ... to represent params
        //we put all those params in an array and use it as the second argument
        let result = await client.query(`SELECT * FROM "reim_api".reimbursement_status
                                        WHERE status_id = $1`, [statusid])
        return sqlReimbursementTojsReimbursement(result.rows[0])
    } catch(err){//check for what kind of error and send back appropriate custom error
        console.log(err)
        return '500'
    } finally {
        client && client.release()
    }
}


//Find Reimbursements By User/userId
export async function findReimbursementByUser(userid:number){
    let client:PoolClient

    try{
        client = await connectionPool.connect()//await cause this is async
        //this is how to write a paramaterized query
        //we use $1, $2 ... to represent params
        //we put all those params in an array and use it as the second argument
        let result = await client.query(`SELECT * FROM "reim_api".reimbursement 
                                        WHERE reimbursement_id = $1`, [userid])
        return sqlReimbursementTojsReimbursement(result.rows[0])
    } catch(err){//check for what kind of error and send back appropriate custom error
        console.log(err)
        return '500'
    } finally {
        client && client.release()
    }
}



//Submit Reimbursement
export async function submitReimbursement(body){
    let client:PoolClient

    try{
        client = await connectionPool.connect()//await cause this is async
        //this is how to write a paramaterized query
        //we use $1, $2 ... to represent params
        //we put all those params in an array and use it as the second argument
        let result = await client.query(`INSERT INTO "reim_api".reimbursement 
        (author, amount, date_submitted, date_resolved, description, resolver, status,type, reimbursement_id) 
        values ($1, $2, $3, $4, $5, $6, $7, $8,$9) returning *`, 
        [body.author, body.amount, body.date_submitted, body.date_resolved, body.description, 
        body.resolver, body.status, body.type, body.reimbursement_id])
        return sqlReimbursementTojsReimbursement(result.rows[0])
    } catch(err){//check for what kind of error and send back appropriate custom error
        console.log(err)
        return '500'
    } finally {
        client && client.release()
    }
}



//Update Reimbursement
export async function updateReimbursement(reimbursementid:number, author: number, amount: number, 
    date_submitted: number, date_resolved: number, description: string, resolver: number,
    status: number, type: number){
    let client:PoolClient

    try{
        client = await connectionPool.connect()//await cause this is async
       
        let result = await client.query(`UPDATE "reim_api".reimbursement SET author = $1, amount = $2,
        date_submitted = $3, date_resolved = $4, description = $5, resolver = $6, status = $7, type = $8
        WHERE reimbursement_id = $9 returning author, amount, date_submitted, date_resolved, description,
        resolver, status,type, reimbursement_id`,
        [author, amount, date_submitted, date_resolved, description, resolver, status, type, reimbursementid])
        return sqlReimbursementTojsReimbursement(result.rows[0])
    } catch(err){//check for what kind of error and send back appropriate custom error
        console.log(err)
        return '500'
    } finally {
        client && client.release()
    }
}