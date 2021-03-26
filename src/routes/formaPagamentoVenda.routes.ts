import { response, Router } from "express"
import FormaPagamentoVenda from '../service/FormaPagamento/ControllerFormaPagamentoVenda'

const formPagamentoVendaRoutes = Router()


formPagamentoVendaRoutes.post('/', async (request, response) => {

    const { id_venda, valor, id_forma_pagmet, ordem, formapagamento, status } = request.body
    const createFormaPagamentoV = new FormaPagamentoVenda();
    const formVenda = await createFormaPagamentoV.execute(id_venda, valor, id_forma_pagmet, ordem, formapagamento, status)

    return response.json(formVenda)


})

formPagamentoVendaRoutes.put('/:id', async (request, response) => {

    const { id } = request.params
    const { valor } = request.body
    const formapagamento = new FormaPagamentoVenda();
    const formpayup = await formapagamento.update(id, valor)

    return response.json(formpayup)


})

formPagamentoVendaRoutes.delete('/:id', async (request, response) => {

    const { id } = request.params
    const formapagamento = new FormaPagamentoVenda();
    await formapagamento.delete(id)

    return response.send('Forma de pagamento Deletada')


})
formPagamentoVendaRoutes.get('/:id', async (request, response) => {

    const { id } = request.params
    const formapagamento = new FormaPagamentoVenda();
    const formVenda = await formapagamento.get(id)

    return response.json(formVenda)


})


formPagamentoVendaRoutes.get('/', async (request, response) => {


    const formPagamentoVenda = new FormaPagamentoVenda();
    const formVenda = await formPagamentoVenda.getAllStatus()

    return response.json(formVenda)


})

formPagamentoVendaRoutes.get('/soma/:id', async (request, response) => {

    const { id } = request.params
    const forma = new FormaPagamentoVenda();
    const total = await forma.soma(id)

    return response.json(total)


})







export default formPagamentoVendaRoutes;
