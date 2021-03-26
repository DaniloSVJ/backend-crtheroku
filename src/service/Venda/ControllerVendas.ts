import { getRepository } from 'typeorm'
import { isExportSpecifier } from "typescript"
import AppError from '../../error/AppErro'

import Vendas from '../../models/vendas'

class ContreollerVenda {
    public async execute(id_cliente: number, vendedor: string): Promise<Vendas> {
        const vendaRepository = getRepository(Vendas);

        const vendaProduto = await vendaRepository.create({
            vendaidcliente: id_cliente,
            vendavendedor: vendedor,
        })

        await vendaRepository.save(vendaProduto)

        return (vendaProduto)


    }
    public async update(id: string, id_cliente: number, vendedor: string) {
        const repositoryVenda = getRepository(Vendas)
        const checkCliente = await repositoryVenda.findOne({ where: { vendaid: Number(id) } })
        let venda

        if (checkCliente) {
            console.log(checkCliente.vendaid)
            venda = await repositoryVenda
                .createQueryBuilder().update()
                .set({ vendavendedor: vendedor, vendaidcliente: Number(id_cliente) })
                .where({ vendaid: Number(id) })
                .execute()

        }

        return venda

    }

    public async delete(id: string) {
        const deleteVendas = getRepository(Vendas)

        await deleteVendas.createQueryBuilder()
            .delete()
            .where({ vendaid: Number(id) })
            .execute()

    }
    public async getAll() {

        const estoqueRepository = await getRepository(Vendas)

        const produtos = await estoqueRepository.find()
        return produtos
    }
    public async get(id: string) {

        const estoqueRepository = await getRepository(Vendas)

        const produtos = await estoqueRepository.findOne({ where: { vendaid: Number(id) } })
        return produtos
    }








}
export default ContreollerVenda
