import { response, Router } from "express"
import ControllerItemVendas from '../service/ItemVenda/ControllerItemVendas'

const ItemvendaRoutes = Router()

ItemvendaRoutes.post('/', async (request, response) => {

    const { id_vendas, ordem, codigo_produto, nome_produto, id_produtos, qtdvendido, valor_vendido, status, isAtivado } = request.body

    const createVenda = new ControllerItemVendas();

    const venda = await createVenda.execute({

        id_vendas,
        ordem,
        codigo_produto,
        nome_produto,
        id_produtos,
        qtdvendido,
        valor_vendido,
        status,
        isAtivado
    })

    return response.json(venda)

})
ItemvendaRoutes.put('/:id', async (request, response) => {

    const { id } = request.params

    const { qtdvendido, valor_vendido, } = request.body
    const upitemVenda = new ControllerItemVendas();
    const itemvenda = await upitemVenda.update(

        id,
        qtdvendido,
        valor_vendido


    )

    return response.json(itemvenda)


})
ItemvendaRoutes.put('/codigo/:id', async (request, response) => {

    const { codigo } = request.params

    const { qtdvendido, valor_vendido, } = request.body
    const upitemVenda = new ControllerItemVendas();
    const itemvenda = await upitemVenda.updatePorCodigo(

        codigo,
        qtdvendido,
        valor_vendido


    )

    return response.json(itemvenda)


})

ItemvendaRoutes.delete('/:id', async (request, response) => {

    const { id } = request.params
    const deletarItemVenda = new ControllerItemVendas();
    await deletarItemVenda.delete(id)

    return response.json('Venda Cancelada')


})
ItemvendaRoutes.get('/:id', async (request, response) => {

    const { id } = request.params
    const veritemVenda = new ControllerItemVendas();
    const venda = await veritemVenda.get(id)

    return response.json(venda)


})

ItemvendaRoutes.get('/codigo/:id', async (request, response) => {

    const { codigo_produto } = request.params
    const veritemVenda = new ControllerItemVendas();
    const venda = await veritemVenda.getVercodigo(codigo_produto)

    return response.json(venda)


})



ItemvendaRoutes.get('/', async (request, response) => {


    const veritemVenda = new ControllerItemVendas();
    const vendas = await veritemVenda.getAllStatus()

    return response.json(vendas)


})

ItemvendaRoutes.get('/soma/:id', async (request, response) => {

    const { id } = request.params
    const veritemVenda = new ControllerItemVendas();
    const vendas = await veritemVenda.soma(id)

    return response.json(vendas)


})



export default ItemvendaRoutes;
