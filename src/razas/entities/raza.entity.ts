import { Gato } from "src/gatos/entities/gato.entity";
import { Vacuna } from "src/vacunas/entities/vacuna.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Raza {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @OneToMany(() => Gato, (gato) => gato.raza)
    gatos: Gato[];



}
