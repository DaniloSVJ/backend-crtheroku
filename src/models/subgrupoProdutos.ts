import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
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

@Entity('subgrupoprodutos')
class SubGrupoProdutos {

    @PrimaryGeneratedColumn()
    subgrupoproid: number;

    @Column()
    subgrupopronome: string;

    @Column()
    subgrupoproidgrupopro: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}
export default SubGrupoProdutos;
