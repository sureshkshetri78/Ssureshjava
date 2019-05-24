import { User } from "./models/user";

import { Role } from "./models/role";
import { Reimbursement } from "./models/reimbursement";
import { ReimbursementStatus } from "./models/reimbursementStatus";

 export let users:User[] = [
    {
    user_id: 1,
	username: 'ram',
	password: 'r123',
	first_name: 'Ram',
	last_name: 'Thapa',
	email: 'r@gmail.com',
    role: ['admin'] 
    }, 
    {
        user_id: 2,
        username: 'hari',
        password: 'h123',
        first_name: 'Hari',
        last_name: 'Thapa',
        email: 'h@gmail.com',
        role: ['employee'] 
        },
        {
            user_id: 3,
            username: 'suresh',
            password: 's123',
            first_name: 'Suresh',
            last_name: 'Basnet',
            email: 's@gmail.com',
            role: ['finance-manager'] 
            }

]

export let roles:Role[] = [{
    role_id: 1,
    role: ['finance-manager']
},{
    role_id: 2 ,
    role: ['employee'] 
},{
    role_id: 3 ,
    role: ['admin'] 
}
]

export let reimbursements: Reimbursement[] = [{
    reimbursement_id: 0, 
	author: 1, 
	amount: 100,  
    date_submitted: 1, 
    date_resolved: 1, 
    description: '1', 
    resolver: 1,
    status: 1, 
    type: 1
},
{
    reimbursement_id: 1, 
	author: 2, 
	amount: 200,  
    date_submitted: 2, 
    date_resolved: 2, 
    description: '2', 
    resolver: 2,
    status: 2, 
    type: 2
},
{
    reimbursement_id: 2, 
	author: 3, 
	amount: 200,  
    date_submitted: 2, 
    date_resolved: 2, 
    description: '2', 
    resolver: 2,
    status: 3, 
    type: 2
}
]


export let reimbursementStatuss:ReimbursementStatus[] = [{
    status_id: 1,
    status: 'Pending'
},{
    status_id: 2,
    status: 'Approved'
},{
    status_id: 3,
    status: 'Denied'
}
] 
