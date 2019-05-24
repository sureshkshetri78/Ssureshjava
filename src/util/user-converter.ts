import { User } from "../models/user";
import { UserDTO } from "../dtos/user.dto";
//import { roles } from './../state'

export function sqlUsertojsUSer(sqluser:UserDTO):User{
    return new User(sqluser.user_id, sqluser.username, sqluser.password, sqluser.first_name,
        sqluser.last_name, sqluser.email, sqluser.role.split(','))
}
