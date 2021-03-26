import { getRepository } from 'typeorm'
import { isExportSpecifier } from "typescript"
import AppError from '../../error/AppErro'

import IdDoCli_IdVenda from '../../models/IdCli_IdCaixa'

class CreateIDsRepository {
    public async execute(idCliente: number, idcaixa: number): Promise<IdDoCli_IdVenda> {
        const IdsRepository = getRepository(IdDoCli_IdVenda);

        const checkNameGrup = await IdsRepository.findOne({
            where: { idCliente }
        })

        if (checkNameGrup) {
            throw new AppError('Name grupo already used')
        }

        const grupoProduto = await IdsRepository.create({
            idCliente,
            idcaixa
        })

        await IdsRepository.save(grupoProduto)

        return (grupoProduto)


    }
    public async update(idCliente: string, idcaixa: number) {
        const IdsRepository = getRepository(IdDoCli_IdVenda)
        const idcli = Number(idCliente)
        let ids = await IdsRepository
            .createQueryBuilder().update()
            .set({ idCliente: idcli, idcaixa })
            .where({ idCliente })
            .execute()



        return ids

    }

    public async delete(id: string) {
        const grupoRepository = getRepository(IdDoCli_IdVenda)

        await grupoRepository.createQueryBuilder()
            .delete()
            .where({ idCliente: Number(id) })
            .execute()

    }
    public async getAll() {

        const estoqueRepository = await getRepository(IdDoCli_IdVenda)

        const produtos = await estoqueRepository.find()
        return produtos
    }
    public async get(id: string) {

        const estoqueRepository = await getRepository(IdDoCli_IdVenda)

        const produtos = await estoqueRepository.findOne({ where: { idCliente: Number(id) } })
        return produtos
    }

}
export default CreateIDsRepository
