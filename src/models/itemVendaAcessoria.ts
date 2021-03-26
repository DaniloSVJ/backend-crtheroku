import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    JoinColumn,
    OneToOne,
} from 'typeorm';

import Venda from './vendas';


/**
 * Um para Um (OneToOne)
 * Um para Muitos (OneToMany)
 * Muitos para Muitos (ManyToMany)
 */
@Entity('items_vendas_acessoria')
class ItemVenda {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('decimal')
    qtdvendido: number;

    @Column('decimal')
    valor_vendido: number;

    @Column()
    id_vendas: number;

    @Column()
    nome_produto: string;

    @Column()
    codigo_produto: string;

    @Column('decimal')
    ordem: number;

    @Column()
    id_produtos: number;

    @OneToOne(() => Venda)
    @JoinColumn({ name: 'id_vendas' })
    venda: Venda;


    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}
export default ItemVenda;
