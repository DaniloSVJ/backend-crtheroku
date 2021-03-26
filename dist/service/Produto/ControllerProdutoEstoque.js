// import { response } from 'express'
// import { getRepository, getConnection } from 'typeorm'
// import AppError from '../error/AppErro'
// import Produto from '../models/produtos'
// import Estoque from '../models/estoque'
// class AddProduto {
//     public async aumentar(codigo: string) {
//         const estoqueRepository = await getRepository(Estoque)
//         const produtoRepository = await getRepository(Produto)
//         const idproduto = await produtoRepository.findOne({
//             where: { codigo }
//         })
//         const checkEstoque = await estoqueRepository.findOne({
//             where: { id: idproduto?.id }
//         })
//         if (checkEstoque) {
//             checkEstoque.quantidade++
//             let produtoUp = await estoqueRepository.save(checkEstoque)
//             return produtoUp
//         }
//         const produto = await estoqueRepository.create({
//             id: idproduto?.id,
//             quantidade: 1,
//         })
//         await estoqueRepository.save(produto)
//         let produtoadd = await estoqueRepository.save(produto)
//         return produtoadd
//     }
//     public async diminuir(codigo: string) {
//         const estoqueRepository = await getRepository(Estoque)
//         const produtoRepository = await getRepository(Produto)
//         const idproduto = await produtoRepository.findOne({
//             where: { codigo }
//         })
//         const checkEstoque = await estoqueRepository.findOne({
//             where: { id: idproduto?.id }
//         })
//         if (checkEstoque) {
//             checkEstoque.quantidade--
//             let produtoUp = await estoqueRepository.save(checkEstoque)
//             return produtoUp
//         }
//     }
//     public async update(id: string, nome: string) {
//         const repositoryEstoque = getRepository(Estoque)
//         const checkCliente = await repositoryEstoque.findOne({ where: { id } })
//         let estoque
//         // if (checkCliente) {
//         //     estoque = await repositoryEstoque
//         //         .createQueryBuilder().update()
//         //         .set({ nome: nome })
//         //         .where({ id: Number(id) })
//         //         .execute()
//         // }
//         return estoque
//     }
//     public async delete(id: string) {
//         const grupoRepository = getRepository(Estoque)
//         await grupoRepository.createQueryBuilder()
//             .delete()
//             .where({ id: Number(id) })
//             .execute()
//     }
//     public async getAll() {
//         const estoqueRepository = await getRepository(Estoque)
//         const produtos = await estoqueRepository.find()
//         return produtos
//     }
//     public async get(id: string) {
//         const estoqueRepository = await getRepository(Estoque)
//         const produtos = await estoqueRepository.findOne({ where: { id: Number(id) } })
//         return produtos
//     }
// }
// export default AddProduto
"use strict";