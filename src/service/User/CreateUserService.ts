import { getRepository } from "typeorm"
import { isExportSpecifier } from "typescript"
import {hash} from 'bcryptjs'
import User from '../../models/user'
import AppError from '../../error/AppErro'
interface Request {
    name:string;
    email:string;
    password:string;
}


class CreateUserService {

    public async execute({name,email,password}:Request) : Promise<User> {
        const userRepository = getRepository(User)

        const checkUserExist = await userRepository.findOne({
            where:{email}
        })

        if(checkUserExist){
            throw new AppError('Email  address already used',401);
        }

        const hashedPassword = await hash(password,8)
        const user = userRepository.create({
            name,
            email,
            password:hashedPassword
        })


        await userRepository.save(user)

        return user;

    }

}

export default CreateUserService
