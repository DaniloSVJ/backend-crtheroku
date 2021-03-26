import { getRepository, getConnection } from 'typeorm'


import ItemVendas from '../../models/itemVenda'

interface Request {

    id_vendas: number,
    ordem: number,
    id_produtos: number,
    qtdvendido: number,
    valor_vendido: number,
    nome_produto: string,
    codigo_produto: string,
    status: number,
    isAtivado: boolean,
}

class ItemVendasController {
    public async execute({ id_vendas, ordem, codigo_produto, nome_produto, id_produtos, qtdvendido, valor_vendido, status }: Request): Promise<ItemVendas> {
        const vendaRepository = getRepository(ItemVendas);

        const itemvenda = await vendaRepository.create({
            itvidvendas: id_vendas,
            itvordem: ordem,
            itvnomeproduto: nome_produto,
            itvidprodutos: id_produtos,
            itvqtdvendido: qtdvendido,
            itvvalorvendido: valor_vendido,
            itvcodigoproduto: codigo_produto,
            itvstatus: status

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
                itvqtdvendido: qtdvendido,
                itvvalorvendido: valor_vendido,
            })
            .where({ itvid: Number(id) })
            .execute();

        const itemvenda = repositoryItemVenda.findOne({ itvid: Number(id) })

        return itemvenda

    }
    public async updatePorCodigo(

        codigo_produto: string,
        qtdvendido: number,
        valor_vendido: number,

    ) {

        const vendaRepository = getRepository(ItemVendas);

        let checkProduto = await vendaRepository.findOne({ where: { itvcodigoproduto: codigo_produto } })
        let produto

        if (checkProduto) {


            checkProduto.itvcodigoproduto = codigo_produto
            checkProduto.itvqtdvendido = qtdvendido
            checkProduto.itvvalorvendido = valor_vendido
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
            .where({ itvid: Number(id) })
            .execute()

    }
    public async getAll() {

        const itemVendaRepository = await getRepository(ItemVendas)
        const itemVenda = await itemVendaRepository.find()

        return itemVenda
    }

    public async getAllStatus() {
        const itemVendaRepository = await getRepository(ItemVendas)

        const itemVenda = await itemVendaRepository
            .createQueryBuilder()
            .where({ itvstatus: "2" })
            .getMany();

        let itens = [itemVenda]
        return itemVenda

    }

    public async get(id: string) {

        const itemRepository = await getRepository(ItemVendas)
        const itemVendas = await itemRepository.findOne({ where: { itvid: Number(id) } })

        return itemVendas
    }

    public async getVercodigo(codigo_produto: string) {

        const itemRepository = await getRepository(ItemVendas)
        const itemVendas = await itemRepository.findOne({ where: { itvcodigoproduto: codigo_produto } })

        return itemVendas
    }

    public async soma(id: string) {
        const somaPorVenda = getRepository(ItemVendas)

        const { sum } = await somaPorVenda.createQueryBuilder()
            .select("SUM (itvvalorvendido)", "sum")
            .where({ itvidvendas: Number(id) })
            .getRawOne();
        return sum
    }

}
export default ItemVendasController
