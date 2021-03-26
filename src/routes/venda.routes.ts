import { response, Router } from "express"
import ControllerVendas from '../service/Venda/ControllerVendas'

const vendaRoutes = Router()

vendaRoutes.post('/', async (request, response) => {

    const { id_cliente, vendedor, } = request.body

    const createVenda = new ControllerVendas();

    const venda = await createVenda.execute(id_cliente, vendedor)

    return response.json(venda)

})

vendaRoutes.delete('/:id', async (request, response) => {

    const { id } = request.params
    const deletarVenda = new ControllerVendas();
    await deletarVenda.delete(id)

    return response.json('Venda Cancelada')


})

vendaRoutes.put('/:id', async (request, response) => {

    const { id } = request.params
    const { id_cliente, vendedor } = request.body
    const deletarVenda = new ControllerVendas();
    await deletarVenda.update(id, id_cliente, vendedor)

    return response.json('Venda Atualizada')


})
vendaRoutes.get('/:id', async (request, response) => {

    const { id } = request.params
    const verVenda = new ControllerVendas();
    const venda = await verVenda.get(id)

    return response.json(venda)


})
vendaRoutes.get('/', async (request, response) => {


    const verVenda = new ControllerVendas();
    const vendas = await verVenda.getAll()

    return response.json(vendas)


})




export default vendaRoutes;
