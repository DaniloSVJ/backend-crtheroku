import { getRepository } from 'typeorm'
import { isExportSpecifier } from "typescript"
import AppError from '../../error/AppErro'

import IdDoCli_IdVenda from '../../models/IdCil_idCaixa'

class CreateIDsRepository {
    public async execute(idCli: number, idCaixa: number) {
        const IdsRepository = getRepository(IdDoCli_IdVenda);
        //console.log("ta id: " + idCli)


        const grupoProduto = await IdsRepository.create({
            idCli,
            idCaixa
        })

        await IdsRepository.save(grupoProduto)

        return (grupoProduto)


    }
    public async update(idcl: number, idcx: number) {
        const IdsRepository = getRepository(IdDoCli_IdVenda)
        const idCli = Number(idcl)
        const idCaixa = Number(idcx)
        let ids = await IdsRepository
            .createQueryBuilder().update()
            .set({ idCli, idCaixa })
            .execute()
        return ids

    }

    public async updateCaixa(idCaixa: string, idCli: number) {
        const IdsRepository = getRepository(IdDoCli_IdVenda)
        const idCai = Number(idCaixa)
        let ids = await IdsRepository
            .createQueryBuilder().update()
            .set({ idCli })
            .where({ idCaixa: idCai })
            .execute()



        return ids

    }

    public async delete(id: string) {
        const grupoRepository = getRepository(IdDoCli_IdVenda)

        await grupoRepository.createQueryBuilder()
            .delete()
            .where({ idCli: Number(id) })
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
