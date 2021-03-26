import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    // OneToMany,
    // ManyToMany,
    // JoinColumn,
  } from 'typeorm';

  //import Produto from './produtos';

  /**
   * Um para Um (OneToOne)
   * Um para Muitos (OneToMany)
   * Muitos para Muitos (ManyToMany)
   */

  @Entity('teste')
  class Teste {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

  }
  export default Teste;
