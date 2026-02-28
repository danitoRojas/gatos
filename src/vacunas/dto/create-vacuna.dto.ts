import { IsString, Min, MinLength } from "class-validator";

export class CreateVacunaDto {

    @IsString()
    @MinLength(3)
    nombre: string;
}
