import { response, Router } from "express"
import IDs_CLI_CAIXA from '../service/Outros/ControllerIdClie_IdVenda'


const IdsRoutes = Router()

IdsRoutes.post('/', async (request, response) => {

    const { idCliente, idcaixa } = request.body
    const createIdClieAndVenda = new IDs_CLI_CAIXA();
    const Ids = await createIdClieAndVenda.execute(idCliente, idcaixa)
    return response.json(Ids)

})

IdsRoutes.put('/:id', async (request, response) => {

    const { id } = request.params
    const { idcaixa } = request.body
    const updateIDs_CLI_CAIXA = new IDs_CLI_CAIXA();
    const Ids = await updateIDs_CLI_CAIXA.update(id, idcaixa)
    return response.json(Ids)

})

IdsRoutes.delete('/:id', async (request, response) => {

    const { id } = request.params
    const createIDs_CLI_CAIXA = new IDs_CLI_CAIXA();
    const Ids = await createIDs_CLI_CAIXA.delete(id)
    return response.send('Ids da tabela Deletado')

})
IdsRoutes.get('/:id', async (request, response) => {

    const { id } = request.params
    const createIDs_CLI_CAIXA = new IDs_CLI_CAIXA();
    const Ids = await createIDs_CLI_CAIXA.get(id)
    return response.json(Ids)

})
IdsRoutes.get('/', async (request, response) => {

    const createIDs_CLI_CAIXA = new IDs_CLI_CAIXA();
    const Ids = await createIDs_CLI_CAIXA.getAll()
    return response.json(Ids)

})

export default IdsRoutes;
