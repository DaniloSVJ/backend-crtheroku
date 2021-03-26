import { getRepository } from 'typeorm'
import { isExportSpecifier } from "typescript"
import AppError from '../../error/AppErro'

import FormaPagamento from '../../models/formaPagamento'

class FormaPagamentoController {
    public async execute(nome: string): Promise<FormaPagamento> {

        const formaPagamento = getRepository(FormaPagamento);

        const checkNameGrup = await formaPagamento.findOne({
            where: { forpagnome: nome }
        })

        if (checkNameGrup) {
            throw new AppError('Name grupo already used')
        }

        let ordem = 0

        const { max } = await formaPagamento.createQueryBuilder()
            .select("Max(forpaordem)", "max")
            .getRawOne()

        for (var i = 1; i <= max; i++) {
            let verordem = await formaPagamento.findOne({
                where: { forpaordem: i }

            })

            if (!verordem) {
                ordem = i
                console.log(i)
            }
        }


        const forma = await formaPagamento.create({
            forpagnome: nome,
            forpaordem: ordem
        })

        await formaPagamento.save(forma)

        return (forma)

    }

    public async update(id: string, nome: string) {
        const repositoryFormaPagamento = getRepository(FormaPagamento)
        const checkCliente = await repositoryFormaPagamento.findOne({ where: { forpagid: Number(id) } })
        let pagamento

        if (checkCliente) {

            pagamento = await repositoryFormaPagamento
                .createQueryBuilder().update()
                .set({ forpagnome: nome })
                .where({ forpagid: Number(id) })
                .execute()

        }

        return pagamento

    }

    public async delete(id: string) {
        const formaPagamento = getRepository(FormaPagamento)

        await formaPagamento.createQueryBuilder()
            .delete()
            .where({ forpagid: Number(id) })
            .execute()

    }

    public async getAll() {

        const formaPagamento = await getRepository(FormaPagamento)

        const pagamento = await formaPagamento.find()

        return pagamento
    }

    public async get(id: string) {

        const formaPagamento = await getRepository(FormaPagamento)
        let nomeTexto
        const pagamento = await formaPagamento.findOne({ where: { forpagid: Number(id) } })
        if (pagamento) {
            nomeTexto = pagamento.forpagnome
        }
        // nomeTexto  = await formaPagamento
        // .createQueryBuilder()
        // .select("nome")
        // .where({ id })
        // .getOne();

        return nomeTexto
    }


}
export default FormaPagamentoController
