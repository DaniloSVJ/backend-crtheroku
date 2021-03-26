import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    OneToOne,
    JoinColumn,
} from 'typeorm';

import Grupo from './subgrupoProdutos';
import Estoque from './estoque'

/**
 * Um para Um (OneToOne)
 * Um para Muitos (OneToMany)
 * Muitos para Muitos (ManyToMany)
 */
@Entity('produtos')
class Produtos {
    @PrimaryGeneratedColumn()
    produid: number;

    @Column()
    producodigo: string;

    @Column()
    produnome: string;

    @Column()
    produimagem: string;

    @Column('decimal')
    producusto: number;

    @Column('decimal')
    produestoqueMin: number;

    @Column('decimal')
    produestoqueMax: number;

    @Column('')
    produembalagem: string;

    @Column('decimal')
    produquantidade: number;

    @Column('')
    produdescricao: string;

    @Column('')
    produdescricaoGeral: string;


    @Column('decimal')
    produvalorvenda: number;

    @Column()
    produidgrupo: number;

    @OneToOne(() => Grupo) // Many Produtoss to a user
    @JoinColumn({ name: 'produidgrupo' })
    grupo: Grupo

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
export default Produtos;
