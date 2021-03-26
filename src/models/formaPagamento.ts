import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    OneToMany,
    ManyToMany,
    JoinColumn,
} from 'typeorm';


/**
 * Um para Um (OneToOne)
 * Um para Muitos (OneToMany)
 * Muitos para Muitos (ManyToMany)
 */

@Entity('formapagamento')
class FormaPagamento {
    @PrimaryGeneratedColumn()
    forpagid: number;

    @Column()
    forpagnome: string;

    @Column()
    forpaordem: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}
export default FormaPagamento;
