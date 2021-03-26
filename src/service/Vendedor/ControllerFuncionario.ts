import { getRepository } from 'typeorm'
import { isExportSpecifier } from "typescript"
import AppError from '../../error/AppErro'

import Vendedor from '../../models/funcionario'

class VendedorController {
    public async execute(nome: string, cpf: string): Promise<Vendedor> {
        const vendedorRepository = getRepository(Vendedor);

        const checkCPF = await vendedorRepository.findOne({
            where: { venddorcpf: cpf }
        })

        if (checkCPF) {
            throw new AppError('CPF Funcionario already used')
        }

        const vendedor = await vendedorRepository.create({
            venddorcpf: cpf,
            venddornome: nome
        })

        await vendedorRepository.save(vendedor)

        return vendedor


    }
    public async update(id: string, nome: string, cpf: string) {
        const repositorVendedor = getRepository(Vendedor)
        const checkCPF = await repositorVendedor.findOne({ where: { venddorid: id } })
        let vendedor

        if (checkCPF) {

            vendedor = await repositorVendedor
                .createQueryBuilder().update()
                .set({ venddornome: nome, venddorcpf: cpf })
                .where({ venddorid: Number(id) })
                .execute()

        }

        return vendedor

    }

    public async delete(id: string) {
        const repositorVendedor = getRepository(Vendedor)

        await repositorVendedor.createQueryBuilder()
            .delete()
            .where({ venddorid: Number(id) })
            .execute()

    }
    public async getAll() {

        const repositorVendedor = await getRepository(Vendedor)

        const vendedor = await repositorVendedor.find()
        return vendedor
    }
    public async get(id: string) {

        const repositorVendedor = await getRepository(Vendedor)

        const funcionario = await repositorVendedor.findOne({ where: { venddorid: Number(id) } })
        return funcionario
    }

}
export default VendedorController
