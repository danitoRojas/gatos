import { Gato } from "src/gatos/entities/gato.entity";
import { Vacuna } from "src/vacunas/entities/vacuna.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class VacunasGato {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Gato, (gato) => gato.vacunas)
    gato: Gato;

    @ManyToOne(() => Vacuna, (vacuna) => vacuna.gatos)
    vacuna: Vacuna;


}
