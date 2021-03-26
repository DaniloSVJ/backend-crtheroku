import { response, Router } from "express"
import FormaPagamentoVenda from '../service/FormaPagamento/ControllerFormaPagamentoPorVenda'

const formPagamentoVendaRoutes = Router()


// formPagamentoVendaRoutes.post('/', async (request,response)=>{

//     const{id_venda, valor, id_forma_pagmet,ordem,formapagamento,status} = request.body
//     const createFormaPagamentoV = new FormaPagamentoVenda();
//     const formVenda = await createFormaPagamentoV.execute(id_venda, valor, id_forma_pagmet,ordem,formapagamento,status)

//     return response.json(formVenda)


// })

formPagamentoVendaRoutes.put('/:id', async (request, response) => {

    const { id } = request.params
    const { id_venda, status } = request.body
    const formapagamento = new FormaPagamentoVenda();
    const formpayup = await formapagamento.update(id, id_venda, status)

    return response.json(formpayup)


})

formPagamentoVendaRoutes.delete('/:id', async (request, response) => {

    const { id } = request.params
    const formapagamento = new FormaPagamentoVenda();
    let messagem = ''
    const qtdAfedado = await formapagamento.delete(id)
    if (qtdAfedado === 0) {
        messagem = 'Nenhum registro foi deletado'
    } else {
        if (qtdAfedado === 1) {
            messagem = `Foi deletado ${qtdAfedado} registro`
        }
        else {
            messagem = `Foram deletados ${qtdAfedado} registros`
        }
    }
    return response.send(messagem)


})

// formPagamentoVendaRoutes.get('/:id',async (request,response)=>{

//     const{id} = request.params
//     const formapagamento = new FormaPagamentoVenda();
//     const formVenda = await formapagamento.get(id)

//     return response.json(formVenda)


// })

// formPagamentoVendaRoutes.get('/',async (request,response)=>{


//     const formPagamentoVenda = new FormaPagamentoVenda();
//     const formVenda = await formPagamentoVenda.getAll()

//     return response.json(formVenda)


// })






export default formPagamentoVendaRoutes;
