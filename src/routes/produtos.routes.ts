import { response, Router } from "express"
import ControllerProduto from '../service/Produto/ControllerProduto'
//import AddProdutoEstoque from '../service/Produto/ControllerProdutoEstoque'
import multer from 'multer'
import uploadConfig from "../config/upload"

const produtoRoutes = Router()
const produtoRoutesEestoqueAdd = Router()
const produtoRoutesEestoqueRemove = Router()
const upload = multer(uploadConfig)


produtoRoutes.get('/', async (request, response) => {
    const getProdutos = new ControllerProduto();

    const produto = await getProdutos.getAll()


    //const  = produto
    //delete user.email

    return response.json(produto)
})

produtoRoutes.get('/:id', async (request, response) => {
    const { id } = request.params
    const { nome, codigo } = request.body
    const getProdutos = new ControllerProduto();

    const produto = await getProdutos.get(id)

    return response.json(produto)
})
produtoRoutes.put('/:id', async (request, response) => {
    const { id } = request.params
    const { nome, codigo, custo, valor_venda, id_grupo } = request.body
    const updateProdutos = new ControllerProduto();

    const produto = await updateProdutos.update(id, nome, codigo, custo, valor_venda, id_grupo)
    //const  = produto
    //delete user.email

    return response.json(produto)
})

produtoRoutes.delete('/:id', async (request, response) => {

    const { id } = request.params

    const deleteProdutos = new ControllerProduto();

    await deleteProdutos.delete(id)

    return response.json('Produto deletado')

})

produtoRoutes.post('/', async (request, response) => {

    const { nome, codigo, custo, valor_venda, id_grupo, estoqueMin, estoqueMax, embalagem, quantidade, descricaoR, descricaoGeral } = request.body

    const createProduto = new ControllerProduto();

    const produto = await createProduto.execute({

        nome,
        codigo,
        custo,
        valor_venda,
        id_grupo,
        estoqueMin,
        estoqueMax,
        embalagem,
        quantidade,
        descricaoR,
        descricaoGeral

    })

    //delete user.email

    //const addProdtudoEstoque = new AddProdutoEstoque();

    //const addEstoque = await addProdtudoEstoque.aumentar(produto.id)

    return response.json({ produto })//,addEstoque})


})
// produtoRoutesEestoqueAdd.put('/', async (request, response) => {

//     const { id } = request.body

//     const addProdtudoEstoque = new AddProdutoEstoque();

//     const produto = await addProdtudoEstoque.aumentar(id)

//     //delete user.email

//     return response.json(produto)
// })

// produtoRoutesEestoqueRemove.put('/', async (request, response) => {

//     const { id } = request.body

//     const addProdtudoEstoque = new AddProdutoEstoque();

//     const produto = await addProdtudoEstoque.diminuir(id)

//     //delete user.email

//     return response.json(produto)
// })

export default ({ produtoRoutes, produtoRoutesEestoqueAdd, produtoRoutesEestoqueRemove });
