import { getRepository } from 'typeorm'
import { isExportSpecifier } from "typescript"
import AppError from '../../error/AppErro'

import FormaPagamentoVenda from '../../models/formaPagamentoVenda'

class FormaPagamentoControllerVenda {

    public async execute(id_venda: number, valor: number, id_forma_pagmet: number, ordem: number, formapagamento: string, status: boolean): Promise<FormaPagamentoVenda> {
        const formaPagamento = getRepository(FormaPagamentoVenda);

        const formPayVenda = await formaPagamento.create({
            fpvidvenda: id_venda,
            fpvvalor: valor,
            fpvidforpag: id_forma_pagmet,
            fpvordem: ordem,
            fpvformapagamento: formapagamento,
            fpvstatus: status

        })

        await formaPagamento.save(formPayVenda)

        return (formPayVenda)


    }
    public async update(id: string, valor: number) {
        const repositoryFormaPagamento = getRepository(FormaPagamentoVenda)
        const checkFormPay = await repositoryFormaPagamento.findOne({ where: { fpvid: id } })
        let formpay

        if (checkFormPay) {

            formpay = await repositoryFormaPagamento
                .createQueryBuilder().update()
                .set({ fpvvalor: valor })
                .where({ fpvidvenda: Number(id) })
                .execute()

        }

        return formpay

    }
    public async delete(id: string) {
        const formaPagamento = getRepository(FormaPagamentoVenda)

        await formaPagamento.createQueryBuilder()
            .delete()
            .where({ fpvidvenda: Number(id), fpvstatus: false })
            .execute()

    }
    public async getAll() {

        const formaPagamento = await getRepository(FormaPagamentoVenda)

        const pagamento = await formaPagamento.find()
        return pagamento
    }

    public async getAllStatus() {

        const formaPagamento = await getRepository(FormaPagamentoVenda)

        const pagamento = await formaPagamento
            .createQueryBuilder()
            .where({ fpvstatus: false })
            .getMany();

        return pagamento
    }
    public async get(id: string) {

        const formaPagamento = await getRepository(FormaPagamentoVenda)

        const pagamento = await formaPagamento.findOne({ where: { fpvid: Number(id) } })
        return pagamento
    }

    public async soma(id: string) {
        const somaPorVenda = getRepository(FormaPagamentoVenda)

        const { sum } = await somaPorVenda.createQueryBuilder()
            .select("SUM(fpvvalor)", "sum")
            .where({ fpvstatus: false, fpvidvenda: Number(id) })
            .getRawOne();

        const total = Number(sum)
        return total
    }

}
export default FormaPagamentoControllerVenda
