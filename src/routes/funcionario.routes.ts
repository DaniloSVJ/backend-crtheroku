import { response, Router } from "express"
import FuncionarioController from '../service/Vendedor/ControllerFuncionario'

const funcionarioRoutes = Router()


funcionarioRoutes.post('/', async (request, response) => {

    const { cpf, nome } = request.body

    const createFuncionario = new FuncionarioController();

    const funcionario = await createFuncionario.execute(cpf, nome)

    //delete user.email

    return response.json(funcionario)


})

funcionarioRoutes.put('/:id', async (request, response) => {

    const { id } = request.params
    const { nome, cpf } = request.body
    const formapagamento = new FuncionarioController();
    const funcionario = await formapagamento.update(id, nome, cpf)

    return response.json(funcionario)


})

funcionarioRoutes.delete('/:id', async (request, response) => {

    const { id } = request.params
    const funcionario = new FuncionarioController();
    await funcionario.delete(id)

    return response.send('Funcionario Deletado')


})
funcionarioRoutes.get('/:id', async (request, response) => {

    const { id } = request.params
    const funcionarioController = new FuncionarioController();
    const funcionario = await funcionarioController.get(id)

    return response.json(funcionario)


})

funcionarioRoutes.get('/', async (request, response) => {


    const funcionarioController = new FuncionarioController();
    const funcionarios = await funcionarioController.getAll()

    return response.json(funcionarios)


})






export default funcionarioRoutes;
