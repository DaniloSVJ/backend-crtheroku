import { response, Router } from "express"
import FormaPagamento from '../service/FormaPagamento/ControllerFormaPagamento'

const formaPagamentoRoutes = Router()


formaPagamentoRoutes.post('/', async (request, response) => {

    const { nome } = request.body

    const createFormaPagamento = new FormaPagamento();

    const formapagamento = await createFormaPagamento.execute(nome)

    //delete user.email

    return response.json(formapagamento)


})

formaPagamentoRoutes.put('/:id', async (request, response) => {

    const { id } = request.params
    const { nome } = request.body
    const formapagamento = new FormaPagamento();
    const formpayup = await formapagamento.update(id, nome)

    return response.json(formpayup)


})

formaPagamentoRoutes.delete('/:id', async (request, response) => {

    const { id } = request.params
    const formapagamento = new FormaPagamento();
    await formapagamento.delete(id)

    return response.send('Forma de pagamento Deletada')


})
formaPagamentoRoutes.get('/:id', async (request, response) => {

    const { id } = request.params
    const formaPagamento = new FormaPagamento();
    const formapagamento = await formaPagamento.get(id)

    return response.json(formapagamento)


})
formaPagamentoRoutes.get('/', async (request, response) => {


    const formaPagamento = new FormaPagamento();
    const formapagamento = await formaPagamento.getAll()

    return response.json(formapagamento)


})




export default formaPagamentoRoutes;
