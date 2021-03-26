import { getRepository, getConnection } from 'typeorm'
import { isExportSpecifier } from "typescript"
import AppError from '../../error/AppErro'

import ItemVendas from '../../models/itemVendaAcessoria'

interface Request {

    id_vendas: number,
    ordem: number,
    id_produtos: number,
    qtdvendido: number,
    valor_vendido: number,
    nome_produto: string,
    codigo_produto: string
}

class ItemVendasController {
    public async execute({ id_vendas, ordem, codigo_produto, nome_produto, id_produtos, qtdvendido, valor_vendido }: Request): Promise<ItemVendas> {
        const vendaRepository = getRepository(ItemVendas);

        const itemvenda = await vendaRepository.create({
            id_vendas,
            ordem,
            nome_produto,
            id_produtos,
            qtdvendido,
            valor_vendido,
            codigo_produto

        })

        await vendaRepository.save(itemvenda)

        return itemvenda


    }
    public async update(

        id: string,
        qtdvendido: number,
        valor_vendido: number,

    ) {
        const repositoryItemVenda = getRepository(ItemVendas)


        const checkItemVenda = await repositoryItemVenda.createQueryBuilder()
            .update()
            .set({
                qtdvendido: qtdvendido,
                valor_vendido: valor_vendido,

            })
            .where({ id: Number(id) })

            .execute();

        const itemvenda = repositoryItemVenda.findOne({ id: Number(id) })

        return itemvenda

    }
    public async updatePorCodigo(

        codigo_produto: string,
        qtdvendido: number,
        valor_vendido: number,

    ) {

        const vendaRepository = getRepository(ItemVendas);

        let checkProduto = await vendaRepository.findOne({ where: { codigo_produto } })
        let produto

        if (checkProduto) {


            checkProduto.codigo_produto = codigo_produto
            checkProduto.qtdvendido = qtdvendido
            checkProduto.valor_vendido = valor_vendido
            vendaRepository.save(checkProduto)
            console.log(checkProduto)
        }

        produto = checkProduto
        return checkProduto

    }
    public async delete(id: string) {
        const deleteItemVendas = getRepository(ItemVendas)

        await deleteItemVendas.createQueryBuilder()
            .delete()
            .where({ id: Number(id) })
            .execute()

    }
    public async deleteAll() {
        const deleteItemVendas = getRepository(ItemVendas)

        await deleteItemVendas.createQueryBuilder()
            .delete()
            .execute()

    }
    public async getAll() {

        const itemVendaRepository = await getRepository(ItemVendas)
        const itemVenda = await itemVendaRepository.find()

        return itemVenda
    }
    public async get(id: string) {

        const itemRepository = await getRepository(ItemVendas)
        const itemVendas = await itemRepository.findOne({ where: { id: Number(id) } })

        return itemVendas
    }
    public async getVercodigo(codigo_produto: string) {

        const itemRepository = await getRepository(ItemVendas)
        const itemVendas = await itemRepository.findOne({ where: { codigo_produto } })

        return itemVendas
    }
    public async soma(id: string) {
        const somaPorVenda = getRepository(ItemVendas)

        const { sum } = await somaPorVenda.createQueryBuilder()
            .select("SUM (valor_vendido)", "sum")
            .where({ id_vendas: Number(id) })
            .getRawOne();
        return sum
    }

}
export default ItemVendasController
