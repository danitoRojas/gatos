import { IsArray, IsInt, IsOptional, IsString } from "class-validator";

export class CreateGatoDto {

    @IsString()
    nombre: string;

    @IsString()
    raza: string;

    @IsInt()
    @IsOptional()
    edad: number;

    @IsString()
    color: string;

    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    vacunas?: string[];
}
