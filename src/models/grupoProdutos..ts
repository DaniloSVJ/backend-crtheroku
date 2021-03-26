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

@Entity('grupoproduto')
class SubGrupoProdutos {

    @PrimaryGeneratedColumn()
    grupoproid: number;

    @Column()
    grupopronome: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}
export default SubGrupoProdutos;
