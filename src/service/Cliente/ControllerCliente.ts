import { getRepository } from 'typeorm'
import AppError from '../../error/AppErro'
import Cliente from '../../models/clients'

interface Request {

    nome: string,
    CPF: string,
    RG: string,
    telefone: string,
    endereco: string,
    numero: string,
    cep: string,
    bairro: string,
    cidade: string,
    uf: string,
    isAtivado: boolean,

}
class Clientes {

    public async execute({ nome, CPF, RG, telefone, endereco, numero, cep, bairro, cidade, uf, isAtivado }: Request): Promise<Cliente> {
        const repositoryCliente = getRepository(Cliente)

        const checkCliente = await repositoryCliente.findOne({
            where: { cliCPF: CPF }
        })

        if (checkCliente) {
            throw new AppError('CPF já cadastrado')
        }

        const cliente = repositoryCliente.create({
            clinome: nome,
            cliCPF: CPF,
            cliRG: RG,
            clitelefone: telefone,
            cliendereco: endereco,
            clienumero: numero,
            clicep: cep,
            clibairro: bairro,
            clicidade: cidade,
            cliuf: uf,
            isAtivado
        })

        await repositoryCliente.save(cliente)

        return cliente
    }

    public async update(
        id: string,
        nome: string,
        CPF: string,
        RG: string,
        telefone: string,
        cep: string,
        bairro: string,
        cidade: string,
        uf: string,
        isAtivado: boolean
    ) {
        const repositoryCliente = getRepository(Cliente)
        const checkCliente = await repositoryCliente.findOne({ where: { cliid: Number(id) } })

        if (checkCliente) {
            checkCliente.cliCPF = CPF,
                checkCliente.clinome = nome,
                checkCliente.cliRG = RG,
                checkCliente.clitelefone = telefone,
                checkCliente.clicep = cep,
                checkCliente.clibairro = bairro,
                checkCliente.clicidade = cidade,
                checkCliente.cliuf = uf
            checkCliente.isAtivado = isAtivado

            repositoryCliente.save(checkCliente)
        }
        const cliente = checkCliente

        return cliente

    }
    public async delete(id: string) {
        const grupoRepository = getRepository(Cliente)

        await grupoRepository.createQueryBuilder()
            .delete()
            .where({ cliid: id })
            .execute()

    }
    public async getAll() {

        const clienteRepository = await getRepository(Cliente)

        const clientes = await clienteRepository.find()
        return clientes
    }
    public async get(id: string) {

        const clienteRepository = await getRepository(Cliente)

        const produtos = await clienteRepository.findOne({ where: { cliid: Number(id) } })
        return produtos
    }

}

export default Clientes
