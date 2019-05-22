import { User } from "../models/user";
import { UserDTO } from "../dtos/user.dto";
import { roles } from './../state'

export function sqlUsertojsUSer(sqluser:UserDTO):User{
    let role = sqluser.role_id - 1
    return new User(sqluser.user_id,sqluser.username, sqluser.password,sqluser.firstName,sqluser.lastName, sqluser.email, roles[role].role)
}