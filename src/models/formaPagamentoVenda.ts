import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    OneToOne,
    JoinColumn,
} from 'typeorm';

import Venda from './vendas';

import FormOfPayment from './subgrupoProdutos';
/**
 * Um para Um (OneToOne)
 * Um para Muitos (OneToMany)
 * Muitos para Muitos (ManyToMany)
 */
@Entity('forma_pagamento_venda')
class Forma_pagamento_venda {
    @PrimaryGeneratedColumn()
    fpvid: number;

    @Column()
    fpvidvenda: number;

    @Column('decimal')
    fpvvalor: number;

    @Column()
    fpvidforpag: number;

    @Column('decimal')
    fpvordem: number;

    @Column('boolean')
    fpvstatus: boolean;

    @Column()
    fpvformapagamento: string;

    @OneToOne(() => Venda)
    @JoinColumn({ name: 'fpvidforpag' })
    FormOfPayment: FormOfPayment;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    //  @OneToOne(() => User) // Many appointments to a user
    // @JoinColumn({ name: 'provider_id' }) // The column that will identify the provider
    //provider: User;

    // @Column('timestamp with time zone')
    // date: Date;

    // @CreateDateColumn()
    // created_at: Date;

    // @UpdateDateColumn()
    // updated_at: Date;
}
export default Forma_pagamento_venda;
