import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    //ManyToOne,
    JoinColumn,
    OneToOne,
} from 'typeorm';

import Venda from './vendas';


/**
 * Um para Um (OneToOne)
 * Um para Muitos (OneToMany)
 * Muitos para Muitos (ManyToMany)
 */
@Entity('itemsvendas')
class ItemVenda {
    @PrimaryGeneratedColumn()
    itvid: number;

    @Column('decimal')
    itvqtdvendido: number;

    @Column('decimal')
    itvvalorvendido: number;

    @Column('decimal')
    itvstatus: number;

    @Column('decimal')
    itvidvendas: number;

    @Column()
    itvnomeproduto: string;

    @Column()
    itvcodigoproduto: string;

    @Column('decimal')
    itvordem: number;

    @Column('boolean')
    isAtivado: boolean;

    @Column()
    itvidprodutos: number;

    @CreateDateColumn()
    created_at: Date;




}
export default ItemVenda;
