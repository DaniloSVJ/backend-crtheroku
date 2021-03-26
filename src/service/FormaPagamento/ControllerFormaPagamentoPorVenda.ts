import { AdvancedConsoleLogger, getRepository } from 'typeorm'
import { isExportSpecifier } from "typescript"
import AppError from '../../error/AppErro'

import FormaPagamentoVenda from '../../models/formaPagamentoVenda'

class FormaPagamentoController {
    public async delete(id: string) {
        const formaPagamento = getRepository(FormaPagamentoVenda)

        const qtd = await formaPagamento.createQueryBuilder()
            .delete()
            .where({ fpvidvenda: Number(id), fpvstatus: false })
            .execute()
        console.log(qtd.affected)
        return qtd.affected

    }
    public async update(id: string, id_venda: number, status: boolean) {
        const repositoryFormaPagamento = getRepository(FormaPagamentoVenda)

        let formpay = await repositoryFormaPagamento
            .createQueryBuilder().update()
            .set({ fpvidvenda: id_venda, fpvstatus: status })
            .where({ fpvstatus: false })
            .execute()



        return formpay

    }

}

export default FormaPagamentoController
