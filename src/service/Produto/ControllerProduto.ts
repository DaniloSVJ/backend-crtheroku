import { getRepository } from 'typeorm'
import AppError from '../../error/AppErro'
import Produto from '../../models/produtos'

interface Request {

    nome: string,
    codigo: string,
    custo: number,
    valor_venda: number,
    id_grupo: number
    estoqueMin: number,
    estoqueMax: number,
    embalagem: string,
    quantidade: number,
    descricaoR: string,
    descricaoGeral: string

}


class CreateProduto {
    public async execute({ nome, codigo, custo, valor_venda, id_grupo, estoqueMin, estoqueMax, embalagem, quantidade, descricaoR, descricaoGeral }: Request): Promise<Produto> {
        const produdoRepository = getRepository(Produto)
        const checkProdutoExist = await produdoRepository.findOne({
            where: { produnome: nome }
        })

        if (checkProdutoExist) {
            throw new AppError('Name product already used')
        }

        const produto = produdoRepository.create({
            produnome: nome,
            producodigo: codigo,
            producusto: custo,
            produvalorvenda: valor_venda,
            produidgrupo: id_grupo,
            produestoqueMin: estoqueMin,
            produestoqueMax: estoqueMax,
            produembalagem: embalagem,
            produquantidade: quantidade,
            produdescricao: descricaoR,
            produdescricaoGeral: descricaoGeral

        })

        await produdoRepository.save(produto)
        return produto;
    }
    public async update(id: string, nome: string, codigo: string, custo: number, valor_venda: number, id_grupo: number) {
        const repositoryProduto = getRepository(Produto)
        let checkProduto = await repositoryProduto.findOne({ where: { produid: Number(id) } })
        let produto



        if (checkProduto) {

            checkProduto.produnome = nome
            checkProduto.producodigo = codigo
            checkProduto.producusto = custo
            checkProduto.produvalorvenda = valor_venda
            checkProduto.produidgrupo = id_grupo
            repositoryProduto.save(checkProduto)

        }

        produto = checkProduto
        return produto


    }

    public async delete(id: string) {
        const grupoRepository = getRepository(Produto)

        await grupoRepository.createQueryBuilder()
            .delete()
            .where({ produid: Number(id) })
            .execute()

    }

    public async getAll() {

        const estoqueRepository = await getRepository(Produto)

        const produtos = await estoqueRepository.find()
        return produtos
    }
    public async get(codigo: string) {

        const estoqueRepository = await getRepository(Produto)

        let produtos = await estoqueRepository.findOne({ where: { producodigo: codigo } })

        if (produtos) {
            return produtos
        }


    }



}

export default CreateProduto

