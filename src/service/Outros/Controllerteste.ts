import { getRepository } from 'typeorm'
import { isExportSpecifier } from "typescript"
import AppError from '../../error/AppErro'

import teste from '../../models/teste'

class CreateGrupoProduto {
    public async execute(nome: string): Promise<teste> {
        const testeRepo = getRepository(teste);

        const checkNametesteRepo = await testeRepo.findOne({
            where: { nome }
        })

        if (checkNametesteRepo) {
            throw new AppError('Name grupo already used')
        }

        const grupoProduto = await testeRepo.create({
            nome,
        })

        await testeRepo.save(grupoProduto)

        return (grupoProduto)


    }

}
export default CreateGrupoProduto
