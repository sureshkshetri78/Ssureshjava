import { User } from "./models/user";

import { Role } from "./models/role";
import { Reimbursement } from "./models/reimbursement";
import { ReimbursementStatus } from "./models/reimbursementStatus";

export let users:User[] = [
    {
    userId: 1,
	username: 'ram',
	password: 'r123',
	firstName: 'Ram',
	lastName: 'Thapa',
	email: 'r@gmail.com',
    role: ['admin'] 
    }, 
    {
        userId: 2,
        username: 'hari',
        password: 'h123',
        firstName: 'Hari',
        lastName: 'Thapa',
        email: 'h@gmail.com',
        role: ['employee'] 
        },
        {
            userId: 3,
            username: 'suresh',
            password: 's123',
            firstName: 'Suresh',
            lastName: 'Basnet',
            email: 's@gmail.com',
            role: ['finance-manager'] 
            }

]

export let roles:Role[] = [{
    roleId: 1,
    role: ['finance-manager']
},{
    roleId: 2 ,
    role: ['employee'] 
},{
    roleId: 3 ,
    role: ['admin'] 
}
]

export let reimbursements: Reimbursement[] = [{
    reimbursementId: 0, 
	author: 1, 
	amount: 100,  
    dateSubmitted: 1, 
    dateResolved: 1, 
    description: '1', 
    resolver: 1,
    status: 1, 
    type: 1
},
{
    reimbursementId: 1, 
	author: 2, 
	amount: 200,  
    dateSubmitted: 2, 
    dateResolved: 2, 
    description: '2', 
    resolver: 2,
    status: 2, 
    type: 2
},
{
    reimbursementId: 2, 
	author: 3, 
	amount: 200,  
    dateSubmitted: 2, 
    dateResolved: 2, 
    description: '2', 
    resolver: 2,
    status: 3, 
    type: 2
}
]


export let reimbursementStatuss:ReimbursementStatus[] = [{
    statusId: 1,
    status: 'Pending'
},{
    statusId: 2,
    status: 'Approved'
},{
    statusId: 3,
    status: 'Denied'
}
]