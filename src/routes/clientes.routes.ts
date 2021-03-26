import { response, Router } from "express"
import ClienteController from '../service/Cliente/ControllerCliente'
//import UpdateProdutoImagemService from '../service/UpdateProdutoImagemService'
import multer from 'multer'
import uploadConfig from "../config/upload"
const clienteRoutes = Router()

clienteRoutes.post('/', async (request, response) => {



    const { nome, CPF, RG, telefone, endereco, numero, cep, bairro, cidade, uf, isAtivado } = request.body

    const clienteController = new ClienteController();

    const cliente = await clienteController.execute(
        {
            nome,
            CPF,
            RG,
            telefone,
            endereco,
            numero,
            cep,
            bairro,
            cidade,
            uf,
            isAtivado
        })

    return response.json(cliente)


})



clienteRoutes.put('/:id', async (request, response) => {

    const { id } = request.params
    const { nome, CPF, RG, telefone, cep, bairro, cidade, uf, isAtivado } = request.body
    const updateCliente = new ClienteController();
    const cliente = await updateCliente.update(id, nome, CPF, RG, telefone, cep, bairro, cidade, uf, isAtivado)

    return response.json(cliente)


})
clienteRoutes.delete('/:id', async (request, response) => {

    const { id } = request.params
    const updateGrupoProduto = new ClienteController();
    updateGrupoProduto.delete(id)

    return response.json('Cliente deletado')


})
clienteRoutes.get('/:id', async (request, response) => {

    const { id } = request.params
    const clienteController = new ClienteController();
    const cliente = await clienteController.get(id)

    return response.json(cliente)


})
clienteRoutes.get('/', async (request, response) => {


    const clienteController = new ClienteController();
    const clientes = await clienteController.getAll()

    return response.json(clientes)


})

export default clienteRoutes

