import { response, Router } from "express"
import ControllerVendas from '../service/Venda/ControllerVendaUltima'

const vendaRoutes = Router()


vendaRoutes.get('/', async (request, response) => {


    const verVenda = new ControllerVendas();
    const vendas = await verVenda.ultimaVenda()

    return response.json(vendas)


})



export default vendaRoutes;
