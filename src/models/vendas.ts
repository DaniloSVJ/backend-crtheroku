import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    OneToOne,
    JoinColumn,
} from 'typeorm';

// import User from './user';

import Clients from './clients'
/**
 * Um para Um (OneToOne)
 * Um para Muitos (OneToMany)
 * Muitos para Muitos (ManyToMany)
 */
@Entity('vendas')
class Vendas {

    @PrimaryGeneratedColumn()
    vendaid: number;

    @Column()
    vendaidcliente: number;

    @Column()
    vendavendedor: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}
export default Vendas;
