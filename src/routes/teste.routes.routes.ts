import { response, Router } from "express"
import Teste from '../service/Outros/Controllerteste'
//import UpdateProdutoImagemService from '../service/UpdateProdutoImagemService'
import multer from 'multer'
import uploadConfig from "../config/upload"
const teste = Router()

teste.post('/', async (request, response) => {

    const { nome } = request.body

    const createGrupoProduto = new Teste();

    const grupo = await createGrupoProduto.execute(nome)

    return response.json(grupo)

})




export default teste;
