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

@Entity('vendedor')
class funcionario {
    @PrimaryGeneratedColumn()
    venddorid: number;

    @Column()
    venddornome: string;

    @Column()
    venddorcpf: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}
export default funcionario;
