import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,

    JoinColumn,
} from 'typeorm';

// import User from './user';
/**
 * Um para Um (OneToOne)
 * Um para Muitos (OneToMany)
 * Muitos para Muitos (ManyToMany)
 */
@Entity('clientes')
class Clientes {
    @PrimaryGeneratedColumn()
    cliid: number;

    @Column()
    clinome: string;

    @Column()
    cliendereco: string;

    @Column()
    clienumero: string;

    @Column()
    clibairro: string;

    @Column()
    clicep: string;


    @Column()
    clicidade: string;

    @Column()
    cliuf: string;

    @Column()
    clitelefone: string;

    @Column()
    cliCPF: string;

    @Column()
    cliRG: string;

    @Column('boolean')
    isAtivado: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
export default Clientes;
