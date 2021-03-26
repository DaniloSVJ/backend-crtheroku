import { getRepository } from 'typeorm'
import { isExportSpecifier } from "typescript"
import AppError from '../../error/AppErro'

import ItemVenda from '../../models/itemVenda'

class FormaPagamentoController {
    public async delete(id: string) {
        const formaPagamento = getRepository(ItemVenda)

        await formaPagamento.createQueryBuilder()
            .delete()
            .where({ itvidvendas: Number(id), itvstatus: "2" })
            .execute()

    }
    public async update(id: string, id_vendas: number, status: number) {
        const repositoryFormaPagamento = getRepository(ItemVenda)

        let formpay = await repositoryFormaPagamento
            .createQueryBuilder().update()
            .set({ itvidvendas: id_vendas, itvstatus: status })
            .where({ itvidvendas: Number(id) })
            .execute()



        return formpay

    }

}

export default FormaPagamentoController
