import { getRepository } from 'typeorm'
import { isExportSpecifier } from "typescript"
import AppError from '../../error/AppErro'

import GrupoProduto from '../../models/subgrupoProdutos'

class CreateGrupoProduto {
    public async execute(nome: string, idgrupo: number): Promise<GrupoProduto> {
        const grupoRepository = getRepository(GrupoProduto);

        const checkNameGrup = await grupoRepository.findOne({
            where: { subgrupopronome: nome }
        })

        if (checkNameGrup) {
            throw new AppError('Name grupo already used')
        }

        const grupoProduto = await grupoRepository.create({
            subgrupopronome: nome,
            subgrupoproidgrupopro: idgrupo,
        })

        await grupoRepository.save(grupoProduto)

        return (grupoProduto)


    }
    public async update(id: string, idgrupo: number, nome: string) {
        const repositoryGrupoProduto = getRepository(GrupoProduto)
        const checkNameGrup = await repositoryGrupoProduto.findOne({ where: { grupoproid: Number(id) } })
        let grupo

        if (checkNameGrup) {

            grupo = await repositoryGrupoProduto
                .createQueryBuilder().update()
                .set({ subgrupopronome: nome, subgrupoproidgrupopro: Number(idgrupo) })
                .where({ subgrupoproid: Number(id) })
                .execute()

        }

        return grupo

    }

    public async delete(id: string) {
        const grupoRepository = getRepository(GrupoProduto)

        await grupoRepository.createQueryBuilder()
            .delete()
            .where({ subgrupoproid: Number(id) })
            .execute()

    }
    public async getAll() {

        const estoqueRepository = await getRepository(GrupoProduto)

        const produtos = await estoqueRepository.find()
        return produtos
    }
    public async get(id: string) {

        const estoqueRepository = await getRepository(GrupoProduto)

        const produtos = await estoqueRepository.findOne({ where: { subgrupoproid: Number(id) } })
        return produtos
    }

}
export default CreateGrupoProduto
