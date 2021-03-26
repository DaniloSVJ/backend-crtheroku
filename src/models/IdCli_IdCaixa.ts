import {
    Entity,
    Column,
    PrimaryGeneratedColumn,

    CreateDateColumn,
    OneToMany,
    // ManyToMany,
    // JoinColumn,
} from 'typeorm';

import Produto from './produtos';

/**
 * Um para Um (OneToOne)
 * Um para Muitos (OneToMany)
 * Muitos para Muitos (ManyToMany)
 */

@Entity('idCli_idCaixa')
class GrupoProdutos {
    @PrimaryGeneratedColumn()
    idCliente: number;

    @Column()
    idcaixa: number;



}
export default GrupoProdutos;
