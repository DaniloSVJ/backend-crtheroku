import { response, Router } from "express"
import GrupoProduto from '../service/GrupoProduto/GrupoProdutoController'
//import UpdateProdutoImagemService from '../service/UpdateProdutoImagemService'
import multer from 'multer'
import uploadConfig from "../config/upload"
const grupoProdutoRoutes = Router()

grupoProdutoRoutes.post('/', async (request, response) => {

    const { nome } = request.body

    const createGrupoProduto = new GrupoProduto();

    const grupo = await createGrupoProduto.execute(nome)

    return response.json(grupo)

})

grupoProdutoRoutes.put('/:id', async (request, response) => {

    const { id } = request.params
    const { nome } = request.body
    const updateGrupoProduto = new GrupoProduto();
    const grupo = await updateGrupoProduto.update(id, nome)

    return response.json(grupo)


})

grupoProdutoRoutes.delete('/:id', async (request, response) => {

    const { id } = request.params
    const createGrupoProduto = new GrupoProduto();
    const grupo = await createGrupoProduto.delete(id)

    return response.json('Grupo do Produto Deletado')


})
grupoProdutoRoutes.get('/:id', async (request, response) => {

    const { id } = request.params
    const createGrupoProduto = new GrupoProduto();
    const grupo = await createGrupoProduto.get(id)

    return response.json(grupo)


})
grupoProdutoRoutes.get('/', async (request, response) => {


    const createGrupoProduto = new GrupoProduto();
    const grupo = await createGrupoProduto.getAll()

    return response.json(grupo)


})



export default grupoProdutoRoutes;
