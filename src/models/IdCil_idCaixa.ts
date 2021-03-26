import {
    Entity,
    Column,
    PrimaryGeneratedColumn,

} from 'typeorm';

import Produto from './produtos';

/**
 * Um para Um (OneToOne)
 * Um para Muitos (OneToMany)
 * Muitos para Muitos (ManyToMany)
 */

@Entity('idCli_idCaixa')
class IdsCliCaixa {
    @PrimaryGeneratedColumn('rowid')
    idCli: number;

    @Column('decimal')
    idCaixa: number;



}
export default IdsCliCaixa;
