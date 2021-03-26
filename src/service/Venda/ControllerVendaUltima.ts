import { getRepository } from 'typeorm'
import { isExportSpecifier } from "typescript"
import AppError from '../../error/AppErro'

import Vendas from '../../models/vendas'

class FormaPagamentoController {
    public async ultimaVenda() {
        const somaPorVenda = getRepository(Vendas)

        const { max } = await somaPorVenda.createQueryBuilder()
            .select("MAX(vendaidid)", "max")
            .getRawOne()

        return max
    }

}

export default FormaPagamentoController
