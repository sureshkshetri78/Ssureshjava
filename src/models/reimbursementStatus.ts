export class ReimbursementStatus {
    status_id: number // primary key
    status: string // not null, unique

    constructor(status_id: number, status: string = ''){
       this.status_id = status_id;
       this.status = status;
    }
}